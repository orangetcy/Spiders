import random
import requests
import base64
import json
import asyncio
from Crypto.Cipher import AES
from Crypto.PublicKey import RSA


"""
练习使用协程来爬取网易云音乐的评论
需要知识点：
1. 使用AES和RSA来加密参数(RSA还需要再学习！)
2. 使用协程来获取评论内容
"""

# Some User Agents
ugs = [{'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6'},\
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


url_comments = ''


# 加密信息
# AES加密偏移量
_aes_iv = '0102030405060708'
# AES加密第一次加密KEY
_aes_first_key = '0CoJUm6Qyw8W8jud'
# AES加密第二次加密KEY
_aes_second_key = 'F' * 16


def aes_encrypt(text, key, iv):
    '''
    使用key, iv加密text
    '''
    pad = 16 - len(text) % 16
    text = text + pad * chr(pad)
    encryptor = AES.new(key, AES.MODE_CBC, iv)
    encrypt_text = encryptor.encrypt(text)
    encrypt_text = base64.b64encode(encrypt_text)
    # 注意一定要加上string转换，将byte转换为string，
    # 否则在计算text + pad * chr(pad)会出错
    encrypt_text = str(encrypt_text, encoding="utf-8")
    return encrypt_text


def get_aes_param(text):
    '''
    用以返回AES params
    '''
    # 第一次AES加密
    encrypt_text = aes_encrypt(text, _aes_first_key, _aes_iv)
    # 第二次AES加密
    encrypt_text = aes_encrypt(encrypt_text, _aes_second_key, _aes_iv)

    return encrypt_text


def get_encSecKey():
    '''
    返回encSecKey
    默认使用‘FFFFFFFFFFFFFFFF’（16个F）用以RSA加密
    '''
    encSecKey = "257348aecb5e556c066de214e531faadd1c55d814f9be95fd06d6bff9f4c7a41f831f6394d5a3fd2e3881736d94a02ca919d952872e7d0a50ebfa1769a7a62d512f5f1ca21aec60bc3819a9c3ffca5eca9a0dba6d6f7249b06f5965ecfff3695b54e1c28f3f624750ed39e7de08fc8493242e26dbc4484a01c76f739e135637c"
    return encSecKey


def update_comment()


def download_comments(page_count, total_comments=None):
    '''
    用于下载网易云音乐的评论！并返回
    '''

    url_comments = 'http://music.163.com/weapi/v1/resource/comments/R_SO_4_531051217?csrf_token=' 
    # 得到POST的data
    post_page_info = '{rid: "R_SO_4_531051217", offset: "%s", total: "%s", limit: "20", csrf_token: ""}'
    if page_count == 1:
        post_page_info = '{rid: "R_SO_4_531051217", offset: "%s", total: "%s", limit: "20", csrf_token: ""}' % ('0', 'true')
    else:
        post_page_info = '{rid: "R_SO_4_531051217", offset: "%s", total: "%s", limit: "20", csrf_token: ""}' % (str((page_count - 1) * 20), 'false')
    # print(post_page_info)
    aes_params, encSecKey = get_aes_param(post_page_info), get_encSecKey()
    data = {
        'params': aes_params,
        'encSecKey': encSecKey
    }
    # print(data)

    # 生成headers
    headers = {'Cookie': 'appver=1.5.0.75771;',
               'Referer': 'http://music.163.com/'}
    headers.update(ugs[random.randint(0, len(ugs) - 1)])
    # print(headers)

    response = requests.request('POST', url_comments, data=data, headers=headers, timeout=5)
    comments_data = response.content
    comments_json = json.loads(comments)
    total_comments = comments_json.get('total', -1)
    comments = []
    hot_comments = comments_json.get('hotComments', None)
    if hot_comments:
        comments += [comment.update({'hotComments}':'True'}) for comment in hot_comments]
    other_comments = comments_json.get('comments', [])
    comments += [comment.update({'hotComments}':'False'}) for comments in other_comments]
    return comments_json


'''
download_comments(2)


url_t = 'http://music.163.com/weapi/v1/resource/comments/R_SO_4_531051217?csrf_token='
first_page = "{rid: \"R_SO_4_531051217\", offset: \"0\", total: \"true\", limit: \"20\", csrf_token: \"\"}"
second_page = "{rid: \"R_SO_4_531051217\", offset: \"20\", total: \"false\", limit: \"20\", csrf_token: \"\"}"
# print(download_comments(url_t, first_page))
# headers = ugs[random.randint(0, len(ugs) - 1)]
headers = {'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36'}
proxies = {'https':'https://125.62.26.75:3128'}
# req = requests.request('GET', 'http://music.163.com/song?id=531051217', headers=headers, proxies=proxies)
# req = requests.request('GET', 'http://www.baidu.com/', headers=headers)
# 发送的data
aes_params, encSecKey = get_aes_param(second_page), get_encSecKey()
post_data = {'params': aes_params,
        'encSecKey': encSecKey,}
print(post_data)
req = requests.post(url_t, data=post_data, headers=headers, proxies=proxies)
comments = str(req.content, encoding='utf-8')
print(comments)
'''


def deal_json(comments_json):
    


@asyncio.coroutine
def process():
    '''
    运行爬虫程序，开始下载数据 
    '''
    pass


t = download_comments(1)
import pprint
pprint.pprint(t)