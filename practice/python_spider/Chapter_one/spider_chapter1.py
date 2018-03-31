import datetime
import queue
import random
import re
import time
import urllib
import urllib.robotparser

import requests
from bs4 import BeautifulSoup

USER_AGENT = [{'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6'},\
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


DELAY_SEC = 5
SUCCESS_CODE = 200


def download_page(url, num_retries=2, headers=None, data=None):
    """下载网页内容，如果状态码不匹配，返回空字符串。否则返回utf-8编码的字符串
    """
    print(time.ctime(), ' : ', 'Downloading...:', url)
    # headers = header.update(USER_AGENT[random.randrange(0, len(USER_AGENT))])
    headers = headers or {}
    try:
        response = requests.get(url, headers=headers, data=data)
        code = response.status_code
        page_content = str(response.content, encoding='utf-8')
    except requests.RequestException as e:
        print(time.ctime(), ' : Download error ', e.args)
        page_content = ''
        if num_retries > 0:
            time.sleep(DELAY_SEC)
            return download_page(url, num_retries-1, data=data)

    if code != SUCCESS_CODE:
        print(time.ctime(), ' : The status code is:', code, '\nPlease check!')
        page_content = ''
    if page_content:
        print(time.ctime(), ' : Response string is not None')
        # print(page_content)
    return page_content


def link_crawler(seed_url, link_regex=None, delay=DELAY_SEC, max_depth=-1, max_urls=-1, **kw):
    """通过匹配链接关键字从种子链接开始爬取网页
    """
    # 待爬取队列
    crawl_queue = queue.deque([seed_url])
    # 口路url是否已被爬取，以及所在深度
    seen = {seed_url: 0}
    # 记录爬取的总页面数
    num_urls = 0
    # 记录被禁止访问的页面
    blocked_url = []
    # 记录抓取数据
    crawled_data = []

    robot_parse = get_robot(seed_url)
    throttles = throttle(delay)
    headers = kw.get('headers', {})

    while crawl_queue:
        url = crawl_queue.pop()
        # 检查url是否通过网站robots.txt的限制
        user_agent = USER_AGENT[random.randrange(0, len(USER_AGENT))]
        if robot_parse.can_fetch(user_agent, url):
            throttles.wait(url)
            headers.update(user_agent)
            html = download_page(url, headers=headers)
            links = []

            depth = seen.get(url, -1)
            if depth != max_depth:
                # 深度不匹配， 还可以继续抓取页面
                if link_regex:
                    # 搜寻匹配的网址
                    links.extend(link for link in get_links(html) if re.search(link_regex, link))

                for link in links:
                    link = normalize(seed_url, link)
                    # 检查是否已经爬取过该地址
                    if link not in seen:
                        seen[link] = depth + 1
                        # 检查网页是否在本网站之内
                        if same_domain(seed_url, link):
                            # 是就加入爬取队列之中
                            crawl_queue.append(link)
            
            # 检查是否已经达到最大下载数量
            num_urls = num_urls + 1
            if num_urls == max_urls:
                break

        else:
            blocked_url.append(url)
            print('Blocked by robots.txt: ', url)


class throttle(object):
    """通过time.sleep()控制对相同网站下载网页的间隔
    """
    def __init__(self, delay):
        # 两次下载的间隔时间
        self.delay = delay
        # 记录上次访问网站时的时间戳
        self.domains_time_stamp = {}
        # 记录睡眠睡眠次数
        self.times = 0

    def wait(self, url):
        domain = urllib.parse.urlparse(url).netloc
        last_accessed_time = self.domains_time_stamp.get(domain)
        now_time = datetime.datetime.now()
        if self.delay > 0 and last_accessed_time is not None:
            sleep_secs = self.delay - (now_time - last_accessed_time).seconds
            if sleep_secs > 0:
                time.sleep(sleep_secs)
                self.times = self.times + 1
                print(time.ctime(), ': Sleeped : ', sleep_secs, self.times)
        self.domains_time_stamp[domain] = now_time


def get_robot(seed_url):
    """返回robots.txt的解析对象
    """
    # robot_parse = urllib.robotparser.RobotFileParser()
    robot_parse = urllib.robotparser.RobotFileParser()
    robot_parse.set_url(urllib.parse.urljoin(seed_url, '/robots.txt'))
    robot_parse.read()
    return robot_parse


def normalize(seed_url, link):
    """去除链接干扰项
    """
    parse_result = urllib.parse.urlparse(link)
    return urllib.parse.urljoin(seed_url, parse_result.path)


def same_domain(url1, url2):
    """如果两个网址属于同一网站，返回True
    """
    return urllib.parse.urlparse(url1).netloc == urllib.parse.urlparse(url2).netloc


def get_links(html):
    """通过正则匹配获取链接
    """
    webpage_regex = re.compile(r'<a href="(.*?)">.*?</a>', re.S)
    return webpage_regex.findall(html)


if __name__ == '__main__':
    # link_crawler('http://example.webscraping.com', '/(index|view)', delay=0, num_retries=1, user_agent='BadCrawler')
    link_crawler('http://example.webscraping.com', '/(index|view)', delay=5, num_retries=1, max_depth=1, user_agent='GoodCrawler')