import time
import random
import requests

from datetime import datetime
from lxml import etree


UA = [{'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6'},\
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


DELAY = 60 * 10    #设置抓取IP间隔


class Xici_IP(object):
    """爬取西刺的高匿IP,每10分钟重新爬取
    如果IP不可用了,可设置为禁用名单
    >>> xici = Xici_IP()
    >>> ip = xici.get_ip()
    >>> print(ip)
    >>> xici.set_bad_ip(ip)
    """
    def __init__(self):
        self.xici_url = 'http://www.xicidaili.com/'
        self.verify_url = 'http://www.baidu.com/'
        self.ip = list()
        self.bad_ip = set()
        self.last_crawl = dict(
            lasttime=datetime.now()
        )
        self.parse_ip()

    def get_ip(self):
        """返回一个可用IP,如果没有符合要求的IP,返回None
        """
        now = datetime.now()
        ip_list_len = len(self.ip)
        delta_time = (now - self.last_crawl.get('lasttime')).seconds
        print(delta_time)
        if delta_time >= DELAY and ip_list_len == 0:
            self.parse_ip()
            self.last_crawl['lasttime'] = now
        if ip_list_len != 0:
            return self.ip[random.randrange(0, ip_list_len)]
        else:
            return

    def set_bad_ip(self, ip):
        """设置不符合要求的IP
        """
        try:
            self.ip.remove(ip)
            self.bad_ip.add(ip)
        except Exception as e:
            print(e.args)

    def parse_ip(self):
        """从西刺下载页面并解析出高匿IP"""
        request_session = requests.session()
        headers_ua = UA[random.randrange(0, len(UA))]
        request_session.headers.update(headers_ua)
        try:
            context = request_session.get(self.xici_url, timeout=5)
        except requests.exceptions.Timeout as e:
            print(e.args)
            print('requests xici error')
        if context.status_code != 200:
            return
        else:
            context.encoding='utf-8'
            
            selector = etree.HTML(context.text)
            ips = selector.xpath('//tr[td="高匿" and (td="HTTP" or td="HTTPS")]/td[2]/text()')
            ports = selector.xpath('//tr[td="高匿" and (td="HTTP" or td="HTTPS")]/td[3]/text()')
            self.verify_ips(map(lambda x,y: x + ':' + y, ips, ports))


    def verify_ips(self, ip_ports):
        """通过ping百度来查看IP是否可用"""
        for ip in ip_ports:
            try:
                res = requests.get(self.verify_url, timeout=5)
            except requests.exceptions.Timeout as e:
                print(e.args)
            except Exception as e:
                print(e.args)
            if res.status_code == 200 and res.elapsed.total_seconds() < 2.0 and ip not in self.bad_ip:
                self.ip.append(ip)
        

if __name__ == "__main__":
    xici = Xici_IP()
    for i in range(0, 3):
        use_ip = xici.get_ip()
        print(use_ip)
        print(xici.ip, xici.last_crawl)
        xici.set_bad_ip(use_ip)
        time.sleep(10)