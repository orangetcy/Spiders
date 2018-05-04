from __future__ import print_function

import re
import json
import datetime
import socket
import random
import warnings

import requests

# User-Agent
UA = [{
    'User-Agent':
    'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) \
    Gecko/20091201 Firefox/3.5.6'
}, {
    'User-Agent':
    'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/535.11 (KHTML, like Gecko) \
    Chrome/17.0.963.12 Safari/535.11'
}, {
    'User-Agent':
    'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)'
}, {
    'User-Agent':
    'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:34.0) Gecko/20100101 \
    Firefox/34.0'
}, {
    'User-Agent':
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) \
    Ubuntu Chromium/44.0.2403.89 Chrome/44.0.2403.89 Safari/537.36'
}, {
    'User-Agent':
    'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) \
    AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50'
}, {
    'User-Agent':
    'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-us) AppleWebKit/534.50 \
    (KHTML, like Gecko) Version/5.1 Safari/534.50'
}, {
    'User-Agent':
    'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0'
}, {
    'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0.1) Gecko/20100101 \
    Firefox/4.0.1'
}, {
    'User-Agent':
    'Mozilla/5.0 (Windows NT 6.1; rv:2.0.1) Gecko/20100101 Firefox/4.0.1'
}, {
    'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_0) AppleWebKit/535.11 \
    (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11'
}, {
    'User-Agent':
    'Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.8.131 \
    Version/11.11'
}, {
    'User-Agent':
    'Opera/9.80 (Windows NT 6.1; U; en) Presto/2.8.131 Version/11.11'
}]

DELAY_ACCESS = 60 * 5
RESPOSNE_TIME = 5.0


class IP_Pool(object):
    """实现获取免费代理
    更新:免费代理都比较坑,速度太慢或者不可用,弃用...
    """

    def __init__(self,
                 http_verify_url=None,
                 https_verify_url=None,
                 proxy_type=None):
        warnings.warn('免费代理都比较坑,速度太慢或者不可用')
        self.url = 'https://raw.githubusercontent.com/' + \
            'fate0/proxylist/master/proxy.list'
        # 存放IP
        self.ips = dict(
            http=list(),
            https=list(),
        )
        # 存放不可用IP
        self.useless_ips = dict(
            http=list(),
            https=list(),
        )
        self.verify_url = dict(
            http=http_verify_url or 'http://www.qkankan.com/',
            https=https_verify_url or 'https://www.baidu.com',
        )
        self.last_access = datetime.datetime.now()
        self.proxy_type = proxy_type or 'https'
        # 初始化ip池
        self.parse_ip(self.download_page())

    def get_ip(self, proxy_type):
        now = datetime.datetime.now()
        gap = (now - self.last_access).seconds
        len_ips = len(self.ips.get(proxy_type))
        if gap < DELAY_ACCESS or len_ips != 0:
            return random.choice(self.ips.get(proxy_type))
        self.parse_ip(self.download_page())
        self.last_access = now
        return random.choice(self.ips.get(proxy_type))

    def download_page(self):
        # 设置timeout
        socket.setdefaulttimeout = 10
        # 新建session
        session = requests.session()
        session.headers.update(random.choice(UA))
        # 开始下载
        try:
            response = session.get(self.url)
            if response.status_code == 200:
                response.encoding = 'utf-8'
                html = response.text
        except requests.exceptions.Timeout as e:
            print('获取代理IP失败!', e.args)
            html = ''
        return html

    def parse_ip(self, html):
        # 将CN的代理转化为json格式存放在列表中
        ip_list = [
            json.loads(info) for info in html.split('\n') if 'CN' in info
            and self.proxy_type in info and 'high_anonymous' in info
        ]
        for ip in ip_list:
            # 代理类型
            proxy_type = ip.get('type')
            # 主机地址
            host = ip.get('host')
            # 端口号
            port = str(ip.get('port'))
            # 来源
            source = ip.get('from')
            # 响应时间
            res_time = ip.get('response_time')
            # 代理地址
            proxy = host + ':' + port
            if res_time <= RESPOSNE_TIME:
                if self.verify_ip(proxy, proxy_type):
                    self.ips[proxy_type].append(proxy)
                    self.save_ips(proxy_type, proxy)
                    continue
            print(source, res_time, 'time long', proxy)
            self.set_useless_ip(proxy, proxy_type)

    def verify_ip(self, proxy, proxy_type):
        socket.setdefaulttimeout = 5
        requests.adapters.DEFAULT_RETRIES = 5
        session = requests.session()
        session.headers.update(random.choice(UA))
        session.proxies.update({proxy_type: proxy})
        try:
            res = session.get(self.verify_url.get(proxy_type), timeout=5)
            if res.elapsed.total_seconds() <= RESPOSNE_TIME:
                return True
        except requests.exceptions.Timeout as e:
            print(proxy_type, proxy, 'verify ip fail', e.args)
        except Exception as e:
            print(proxy_type, proxy, 'verify ip fail', e.args)
        return False

    def set_useless_ip(self, proxy, proxy_type):
        """设置不可用的IP
        """
        if proxy in self.ips.get(proxy_type):
            self.ips[proxy_type].remove(proxy)
        self.useless_ips[proxy_type].append(proxy)

    def save_ips(self, proxy_type, proxy):
        with open(proxy_type, 'a') as f:
            f.write(proxy_type + ':' + proxy + '\n')


if __name__ == "__main__":
    ippool = IP_Pool('https')
    https_ip = ippool.get_ip('https')
    print(https_ip)
    print(ippool.ips, ippool.useless_ips, ippool.last_access)
    ippool.set_useless_ip(https_ip, 'https')
    now_ip = ippool.get_ip('https')
    print(ippool.ips, ippool.useless_ips, ippool.last_access)