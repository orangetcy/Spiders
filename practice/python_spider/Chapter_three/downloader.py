# coding=utf-8

import re
import time
import queue
import random
import datetime
import socket

import requests

from urllib import parse, robotparser


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


DEFAULT_DELAY = 5
DEFAULT_TIMEOUT = 30
NUM_RETRIES = 2


class downloader(object):
    """将download包装成类，方便设置属性
    """
    def __init__(self, delay=DEFAULT_DELAY, num_retries=NUM_RETRIES, timeout=DEFAULT_TIMEOUT, cache={}, headers={}):
        socket.setdefaulttimeout(DEFAULT_TIMEOUT)
        self.throttles = throttle(delay)
        self.num_retries = num_retries
        self.cache = cache
        self.headers = headers
        

    def __call__(self, url, user_agent=USER_AGENT[0]):
        result = {}
        if self.cache:
            result = self.cache.get(url, {})
            if self.num_retries > 0 and 500 <= result.get('code', -1) < 600:
                # server return error, ignore cahce and re-download
                result = {}
        if not result:
            # result 没有从cache中加载成功， 仍需要下载
            self.throttles.wait(url)
            self.headers.update(user_agent) 
            result = self.download(url, num_retries=self.num_retries, headers=self.headers)
            self.cache[url] = result

        return result.get('html', '')

    def download(self, url, num_retries, headers={}):
        """
        """
        show_msg('Dowloading...', url)
        response = requests.get(url, headers=headers)
        code = response.status_code
        html = str(response.content, encoding='utf-8')
        result = {'html':html, 'code':code}
        if code == 200:
            return result
        elif 500 <= code < 600 and num_retries >0:
            return self.download(url, num_retries-1)
        else:
            result.update({'html':''}) 
        return result
            


class throttle(object):
    """
    """
    def __init__(self, delay=DEFAULT_DELAY):
        self.delay = delay
        self.domains = {}
        pass

    def wait(self, url):
        """检查url是否是同一网站内，如果是则应用延迟
        """
        domain = parse.urlparse(url).netloc
        last_accessed = self.domains.get(domain)
        now = datetime.datetime.now()
        if self.delay > 0 and last_accessed is not None:
            sleep_secs = (now - last_accessed).seconds
            if sleep_secs > 0:
                time.sleep(sleep_secs)
                show_msg('Sleep... ', sleep_secs, ' s')
        self.domains.update({domain:now})

def show_msg(msg, *args):
    print(time.ctime(), ': ', msg, *args)


if __name__ == "__main__":
    pass