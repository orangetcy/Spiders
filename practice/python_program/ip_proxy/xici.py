import re
import time
import random
import requests

from datetime import datetime
from urllib import parse
from lxml import etree

UA = [{
    'User-Agent':
    'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6'
}, {
    'User-Agent':
    'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.12 Safari/535.11'
}, {
    'User-Agent':
    'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)'
}, {
    'User-Agent':
    'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:34.0) Gecko/20100101 Firefox/34.0'
}, {
    'User-Agent':
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/44.0.2403.89 Chrome/44.0.2403.89 Safari/537.36'
}, {
    'User-Agent':
    'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50'
}, {
    'User-Agent':
    'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50'
}, {
    'User-Agent':
    'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0'
}, {
    'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0.1) Gecko/20100101 Firefox/4.0.1'
}, {
    'User-Agent':
    'Mozilla/5.0 (Windows NT 6.1; rv:2.0.1) Gecko/20100101 Firefox/4.0.1'
}, {
    'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_0) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11'
}, {
    'User-Agent':
    'Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.8.131 Version/11.11'
}, {
    'User-Agent':
    'Opera/9.80 (Windows NT 6.1; U; en) Presto/2.8.131 Version/11.11'
}]

DELAY = 60 * 10  # 设置抓取IP间隔
CONNECT_TIME = 5.0  # 代理的连接时间


class Xici_IP(object):
    """爬取西刺的高匿IP,每10分钟重新爬取
    如果IP不可用了,可设置为禁用名单
    ip的数据格式为{
        'http':[ip:port,...],
        'https':[ip:port,...],
    }
    >>> xici = Xici_IP()
    >>> ip = xici.get_ip('http')    # or 'https'
    >>> print(ip)
    10.1.2.3:1089
    >>> xici.set_bad_ip(ip, 'http')
    """

    def __init__(self):
        self.xici_baseurl = 'http://www.xicidaili.com/nn/'
        self.verify_url = 'http://www.baidu.com/'
        self.ip = dict(
            http=list(),
            https=list(),
        )
        self.last_crawl = dict(lasttime=datetime.now())
        self.bad_ip = set()
        self.parse_ip(self.download_page())

    def get_ip(self, connect_type):
        """返回一个可用IP,如果没有符合要求的IP,返回None
        """
        now = datetime.now()
        ip_list = self.ip.get(connect_type, [])
        ip_list_len = len(self.ip.get(connect_type))
        delta_time = (now - self.last_crawl.get('lasttime')).seconds
        if delta_time >= DELAY and ip_list_len == 0:
            self.parse_ip(self.download_page())
            self.last_crawl['lasttime'] = now
        else:
            return ip_list[random.randrange(0, ip_list_len)] or None

    def set_bad_ip(self, ip, connect_type):
        """设置不符合要求的IP
        """
        try:
            self.bad_ip.add(ip)
            self.ip[connect_type].remove(ip)
        except Exception as e:
            print(e.args)

    def download_page(self, page=1):
        """从西刺下载高匿IP页面"""
        request_session = requests.session()
        headers_ua = UA[random.randrange(0, len(UA))]
        request_session.headers.update(headers_ua)
        request_url = parse.urljoin(self.xici_baseurl, str(page))
        try:
            context = request_session.get(request_url, timeout=3)
        except requests.exceptions.Timeout as e:
            print(e.args)
            print('requests xici error')
        if context.status_code != 200:
            return
        else:
            context.encoding = 'utf-8'
            return context.text

    def parse_ip(self, html):
        if not html:
            return
        selector = etree.HTML(html)
        selectors = selector.xpath(
            '//tr[td="高匿" and (td="HTTP" or td="HTTPS")]')
        for item in selectors:
            ip = item.xpath('./td[2]/text()')[0]
            port = item.xpath('./td[3]/text()')[0]
            connect_type = item.xpath('./td[6]/text()')[0].lower()
            # 计算西刺提供的代理访问时间
            connect_speed = self.parse_time(item.xpath('./td[7]/div/@title')[0])
            connetc_time = self.parse_time(item.xpath('./td[8]/div/@title')[0])
            total_time = connect_speed + connetc_time  # 连接速度和连接时间总和
            proxy = ip + ':' + port
            if total_time > CONNECT_TIME:
                self.set_bad_ip(proxy, connect_type)
                continue
            if self.verify_ip(proxy, connect_type):
                self.ip[connect_type].append(proxy)
            else:
                self.set_bad_ip(proxy, connect_type)

    def verify_ip(self, ip_port, ip_type):
        """通过ping百度来查看IP是否可用"""
        request = requests.session()
        request.headers.update(UA[random.randrange(0, len(UA))])
        request.proxies.update({ip_type: ip_port})
        try:
            response = request.get(self.verify_url, timeout=3)
        except requests.exceptions.Timeout as e:
            print(e.args)
            return False
        except Exception as e:
            print(e.args)
            return False
        if response.status_code == 200 and response.elapsed.total_seconds(
        ) < 2.0 and ip_port not in self.bad_ip:
            return True
        return False

    def parse_time(self, time_str):
        """解析西刺上IP的连接时间
        :param time_str: xici time example '0.183秒'
        :return: float
        """
        pattern = '\d{0,3}\.\d{0,3}'
        pf = re.compile(pattern, flags=re.S)
        result = pf.findall(time_str)[0]
        return float(result)


if __name__ == "__main__":
    xici = Xici_IP()
    for i in range(0, 2):
        http_ip = xici.get_ip('http')
        https_ip = xici.get_ip('https')
        print(http_ip, https_ip)
        print(xici.ip, xici.last_crawl)
        xici.set_bad_ip(http_ip, 'http')
        xici.set_bad_ip(https_ip, 'https')
        print(xici.bad_ip)
        time.sleep(10)