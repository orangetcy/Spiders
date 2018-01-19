from __future__ import print_function

import re
import csv
import json
import random
import urllib3
import sqlite3
import threading

from bs4 import BeautifulSoup


# Some User Agents
hds=[{'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6'},\
    {'User-Agent':'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.12 Safari/535.11'},\
    {'User-Agent':'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)'},\
    {'User-Agent':'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:34.0) Gecko/20100101 Firefox/34.0'},\
    {'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/44.0.2403.89 Chrome/44.0.2403.89 Safari/537.36'},\
    {'User-Agent':'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50'},\
    {'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50'},\
    {'User-Agent':'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0'},\
    {'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0.1) Gecko/20100101 Firefox/4.0.1'},\
    {'User-Agent':'Mozilla/5.0 (Windows NT 6.1; rv:2.0.1) Gecko/20100101 Firefox/4.0.1'},\
    {'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_0) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11'},\
    {'User-Agent':'Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.8.131 Version/11.11'},\
    {'User-Agent':'Opera/9.80 (Windows NT 6.1; U; en) Presto/2.8.131 Version/11.11'}]


# 重庆主城区的区域列表
regions = ['yubei', 'banan', 'jiulongpo', 'nanan', 'jiangbei',
           'shapingba', 'beibei', 'dadukou', 'liangjiangxinqu', 'yuzhong']

root_url = 'https://cq.fang.anjuke.com/loupan/'
url_list = [root_url + item for item in regions]
url_done_list = []


def getinfofromsoup(soup, tag_name, class_name, tag_contents=False, pattern=False, join_key=False, index=False):
    '''
    从bs中获取相应信息
    '''
    try:
        if tag_contents:
            result = soup.find(tag_name, class_=class_name).get(tag_contents)
            return result
        if pattern:
            result_tmp = soup.find(tag_name, class_=class_name).renderContents().decode('utf-8')
            result = re.findall(pattern, result_tmp)
            if join_key:
                result = ''.join(result)
            if index:
                result = result[index-1]
                pass
            return result
        result = soup.find(tag_name, class_=class_name).renderContents().decode('utf-8')
        return result
    except Exception as e:
        print(tag_name, class_name, e)
    return None


def getpagelist(soup):
    '''
    获取待爬链接
    '''
    content = getinfofromsoup(soup, 'div', 'pagination')
    pattern_link = '<a href="(.+)">'
    try:
        page_list = re.findall(pattern_link, content)
    except Exception as e:
        print(e)
        page_list = []
    return page_list


def writejson(json_dict, filename):
    '''
    将爬取的结果写入到文件
    '''
    with open(filename, 'a+',encoding='utf-8') as rj:
        json_obj = json.dumps(json_dict, ensure_ascii=False)
        rj.write(json_obj)
        rj.write('\n')

def write_csv(dict_info, filename):
    '''
    将所有数据写入到csv文档中
    '''
    list_info = ['lp_link', 'lp_name', 'lp_addr', 'lp_salestatus', 'lp_wuyetp',
                 'lp_tag', 'lp_price', 'lp_phone', 'lp_dp', 'lp_huxing', 'lp_area']
    with open(filename, 'a+', encoding='utf_8_sig', newline='') as csv_info:
        csv_w = csv.writer(csv_info)
        info = [str(dict_info.get(item)) for item in list_info]
        print(info)
        csv_w.writerow(info)



def loupan_summary_spider(db_lp, url_page='https://cq.fang.anjuke.com/loupan/yubei', isfirstpage=False):
    '''
    爬取页面中楼盘信息汇总
    '''
    try:
        http = urllib3.PoolManager()
        req = http.request('GET', url_page, headers=hds[random.randint(0, len(hds)-1)])
        page_info = req.data.decode('utf-8')
        soup = BeautifulSoup(page_info, 'lxml')
    except Exception as e:
        print(e)
        exit(-1)

    loupan_list = soup.findAll('div', {'class': 'item-mod', 'rel': 'nofollow'})

    for lp in loupan_list:
        info_dict = {}
        # 1.楼盘链接
        info_dict.update({'lp_link': getinfofromsoup(lp, 'a', 'lp-name', tag_contents='href')})
        # 2.楼盘名
        info_dict.update({'lp_name': getinfofromsoup(lp, 'span', 'items-name')})
        # 3.楼盘地址
        pattern_addr = '[^\xa0\[\]]'
        info_dict.update({'lp_addr': getinfofromsoup(lp, 'span', 'list-map', pattern=pattern_addr, join_key=True)})
        # 4.楼盘是否在售
        sale_satus = ['status-icon onsale', 'status-icon forsale', 'soldout']
        info_dict['lp_salestatus'] = None
        for item in sale_satus:
            result = getinfofromsoup(lp, 'i', sale_satus)
            if result:
                info_dict.update({'lp_salestatus': result})
                break
        # 5.楼盘性质
        info_dict.update({'lp_wuyetp': getinfofromsoup(lp, 'i', 'status-icon wuyetp')})
        # 6.楼盘标签
        try:
            lp_tag_str = None
            lp_tag = lp.find_all('span', class_='tag')
            lp_tag_str = ','.join([tag.renderContents().decode('utf-8') for tag in lp_tag])
        except Exception as e:
            print(e)
        info_dict.update({'lp_tag': lp_tag_str})
        # 7.楼盘售价
        pattern_price = '[^<>span]'
        info_dict.update({'lp_price': getinfofromsoup(lp, 'p', 'price', pattern=pattern_price, join_key=True)})
        # 8.楼盘电话
        pattern_tel = '.+(?=<i.*>)'
        info_dict.update({'lp_phone': getinfofromsoup(lp, 'p', 'tel', pattern=pattern_tel, index=1)})
        # 9.楼盘点评数
        pattern_dp = '[0-9]+'
        info_dict.update({'lp_dp': getinfofromsoup(lp, 'span', 'list-dp', pattern=pattern_dp, index=1)})
        # 10.户型 和 建筑面积
        pattern_hx = '<span>(.{2})(?=</span>)'
        pattern_jm = '[\w\.-]+(?=㎡</span>)'
        info_dict.update({'lp_huxing': getinfofromsoup(lp, 'a', 'huxing', pattern=pattern_hx)})
        info_dict.update({'lp_area': getinfofromsoup(lp, 'a', 'huxing', pattern=pattern_jm, index=1)})

        # print(info_dict)
        writejson(info_dict, 'result.json')
        write_csv(info_dict, 'result.csv')
    
    # isfirstpage如果为True则抓取其它几个页面的链接放入到url_list中
    if isfirstpage:
        global url_list
        page_list = getpagelist(soup)
        if not page_list:
            return
        for url_w in page_list:
            write_url(url_w, 'more.txt')
        url_list = url_list + [url for url in page_list if url not in url_list]


def write_url(url_info, filename):
    '''
    将链接写入文件
    '''
    with open(filename, 'a+', encoding='utf-8') as urls:
        urls.write(url_info)
        urls.write('\n')

def do_summary_spider():
    global url_list
    url_list_t = url_list[:]
    threading_count = []
    for i in url_list_t:
        write_url(i, 'done.txt')
        loupan_summary_spider('', url_page=i, isfirstpage=True)
    for j in url_list:
        write_url(j, 'done.txt')
        t = threading.Thread(target=loupan_summary_spider, args=('', j))
        threading_count.append(t)
    for th in threading_count:
        th.start()
    for th in threading_count:
        th.join()


# loupan_summary_spider('')
do_summary_spider()