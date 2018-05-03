import re
import csv
import time
import random
import socket
import requests
import functools
import warnings

from datetime import datetime
from urllib import parse
from lxml import etree


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

DELAY_ACCESS_XICI = 60 * 10  # 设置抓取IP间隔
CONNECT_TIME = 5.0  # 代理的连接时间
CONNECT_DELAY = 3  # 设置每两次访问间隔时间


def access_domain(method):
    @functools.wraps(method)
    def wrapper(self, *args, **kw):
        connect_type = kw.get('connect_type')
        if connect_type:
            domain = self.verify_ip_url.get(connect_type)
        else:
            domain = 'http://www.xicidaili.com/'
        last = self.last_access.get(domain, datetime.now())
        now = datetime.now()
        gap = (now - last).seconds
        if gap < CONNECT_DELAY:
            self.last_access[domain] = now
            time.sleep(random.random() * 4.99)
        return method(self, *args, **kw)

    return wrapper


class Xici_IP(object):
    """爬取西刺代理IP
    更新:西刺代理可用率太低,弃用...
    """

    def __init__(self):
        socket.setdefaulttimeout = 5
        requests.adapters.DEFAULT_RETRIES = 5
        self.xici_base_url = 'http://www.xicidaili.com/nn/'
        # 验证IP的url, 分为http和https
        self.verify_ip_url = dict(
            http='http://zzxt.jsve.edu.cn/',
            https='https://www.baidu.com/',
        )
        # 存放可用IP
        self.ip = dict(
            http=list(),
            https=list(),
        )
        # 存放不可用IP
        self.useless_ip = set()
        # 记录最近一次访问域的时间
        self.last_access = dict()
        warnings.warn('更新:西刺代理可用率太低,建议弃用...')
        # 初始化IP池
        self.parse_ip(self.download_page())

    def get_ip(self, connect_type):
        ip_list = self.ip.get(connect_type)
        length = len(ip_list)
        if length == 0:
            self.parse_ip(self.download_page())
        return random.choice(ip_list)

    def set_bad_ip(self, ip, connect_type):
        try:
            self.useless_ip.add(ip)
            self.ip[connect_type].remove(ip)
        except Exception as e:
            # print('set bad ip error: ', e.args)
            pass

    @access_domain
    def download_page(self, page=1):
        socket.setdefaulttimeout = 5
        request = requests.session()
        # 更新headers
        request.headers.update(random.choice(UA))
        # 拼接url
        request_url = parse.urljoin(self.xici_base_url, str(page))
        try:
            response = request.get(request_url)
        except requests.exceptions.Timeout as e:
            print('download_page: ', e.args)
            return ''
        except Exception as e:
            print('download page: ', e.args)
            return ''
        if response.status_code != 200:
            return ''
        else:
            response.encoding = 'utf-8'
            return response.text

    def parse_ip(self, html):
        if not html:
            print('html is:', html, type(html))
            return
        tree_node = etree.HTML(html)
        selectors = tree_node.xpath('//tr[td="高匿" and \
            (td="HTTP" or td="HTTPS")]')
        for selector in selectors:
            ip = selector.xpath('./td[2]/text()')[0]
            port = selector.xpath('./td[3]/text()')[0]
            ip_port = ip + ':' + port
            connect_type = selector.xpath('./td[6]/text()')[0].lower()
            # 计算代理的时间
            connect_speed = self.convert_time(selector.xpath(
                './td[7]/div/@title')[0])
            connect_time = self.convert_time(selector.xpath(
                './td[8]/div/@title')[0])
            total = connect_speed + connect_time
            if total > CONNECT_TIME:
                self.set_bad_ip(ip_port, connect_type)
                continue
            if self.verify_ip(ip_port, connect_type=connect_type):
                self.ip[connect_type].append(ip_port)
            else:
                self.set_bad_ip(ip_port, connect_type)
            for item in self.ip:
                ip_list = self.ip.get(item)
                if len(ip_list) >= 1:
                    self.save_ip(item, ip_list)

    @access_domain
    def verify_ip(self, ip, connect_type='https'):
        socket.setdefaulttimeout = 5
        requests.adapters.DEFAULT_RETRIES = 10
        request = requests.session()
        request.headers.update(random.choice(UA))
        # 设置代理
        request.proxies.update({connect_type: ip})
        verify_url = self.verify_ip_url.get(connect_type)
        try:
            response = request.get(verify_url)
        except Exception as e:
            print('verify_ip fail!', request.proxies)
            return False
        if response.elapsed.total_seconds() <= CONNECT_TIME and response.status_code == 200:
            return True
        return False

    def convert_time(self, time_str):
        """解析西刺上IP的连接时间
        :param time_str: xici time example '0.183秒'
        :return -> float:
        """
        pattern = '\d{0,3}\.\d{0,4}'
        pf = re.compile(pattern, flags=re.S)
        result = pf.findall(time_str)[0]
        return float(result)

    def save_ip(self, ctype, ip_list):
        print(ctype, ip_list)
        with open(ctype, 'a') as fp:
            csv_w = csv.writer(fp)
            csv_w.writerows(ip_list)


if __name__ == "__main__":
    xici = Xici_IP()
    for i in range(0, 2):
        http_ip = xici.get_ip('http')
        https_ip = xici.get_ip('https')
        print(http_ip, https_ip)
        print(xici.ip, xici.last_access, xici.useless_ip)
        xici.set_bad_ip(http_ip, 'http')
        xici.set_bad_ip(https_ip, 'https')
        print(xici.ip, xici.last_access, xici.useless_ip)
        time.sleep(10)
