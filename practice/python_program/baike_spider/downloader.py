from __future__ import print_function

import csv
import functools
import os
import pickle
from multiprocessing import Queue
import random
import socket
import threading
import time
import atexit
from datetime import datetime
from urllib import parse

import pymysql
import requests
from lxml import etree

from data_store import Data_Store

DEFAULT_TIMEOUT = 10
DEFAULT_DELAY = 5
THREAD_COUNT = 3

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


RANDOM_TIME = [2.99, 3.99, 4.99, 5.99, 6.99]
RANDOM_TIME_SLEEP = [1.66, 2.66, 3.66, 4.66]


def access_control(method):
    @functools.wraps(method)
    def wrapper(self, *args, **kw):
        now = datetime.now()
        url = kw.get('url', 'baseurl')
        try:
            domain = parse.urlparse(url).netloc
        except Exception as e:
            print('error url format', e.args)
            return ''
        last = self.last_access.get(domain)
        if last is not None:
            if (now - last).seconds < DEFAULT_DELAY:
                time.sleep(random.random() * random.choice(RANDOM_TIME))
        self.last_access[domain] = now 
        return method(self, *args, **kw)

    return wrapper


class Downloader(object):
    def __init__(self,
                 max_pages=10,
                 store_q=None,
                 start_url=''):
        self.last_access = dict()
        self.store_q = store_q
        self.start_url = start_url
        self.accessed = set()
        self.wait = set()
        self.url_q = Queue()
        self.url_q.put(self.start_url)
        self.max = max_pages
        self.lock = threading.Lock()
        self.load_cache('crawled', 'waitting')

    def load_cache(self, crawled, waitting):
        if os.path.exists(crawled):
            with open(crawled, 'rb') as f:
                self.accessed = pickle.load(f)
        if os.path.exists(waitting):
            with open(waitting, 'rb') as f:
                for url in pickle.load(f):
                    self.url_q.put(url)

    def save_cache(self, filename, obj):
        # print(wait)
        with open(filename, 'wb') as f:
            pickle.dump(obj, f)

    @access_control
    def get_page(self, url=''):
        """下载指定url的网页源码
        """
        socket.setdefaulttimeout = DEFAULT_TIMEOUT
        request = requests.session()
        request.headers.update(random.choice(UA))  # 随机更新UA
        try:
            response = request.get(url)
            if response.status_code == 200:
                response.encoding = 'utf-8'
                html = response.text
        except requests.exceptions.Timeout as e:
            print('download timeout: ', url)
            html = ''
        except Exception as e:
            print('get_page error', e.args, url)
            html = ''
        self.lock.acquire()
        self.accessed.add(url)
        self.lock.release()
        return html

    def parse_html(self, html=''):
        if html is '':
            return
        nodes = etree.HTML(html)
        data = dict(title='null', summary='null', links=[])
        try:
            data['title'] = nodes.xpath(
                '//dd[@class="lemmaWgt-lemmaTitle-title"]/h1/text()')[0] \
                or 'null'
            summary_tmp = nodes.xpath('//div[@class="lemma-summary"]')[0]
            data['summary'] = summary_tmp.xpath('string(.)') or 'null'
            # 获取summary中的百科链接
            links = summary_tmp.xpath(
                './div[@class="para"]/a[@target="_blank"]/@href') or []
            data['links'].extend(
                [parse.urljoin(self.start_url, link) for link in links])
        except Exception as e:
            print('parse html error:', e.args)
        self.lock.acquire()
        if len(self.accessed) >= self.max:
            while not self.url_q.empty():
                self.wait.add(self.url_q.get())
            for i in range(0, THREAD_COUNT):
                self.url_q.put('end')
        self.lock.release()
        return data

    def get_url(self):
        self.lock.acquire()
        url = self.url_q.get()
        self.lock.release()
        return url

    def main(self, delay=DEFAULT_DELAY):
        if self.start_url is '':
            return
        while True:
            if not self.url_q.empty():
                url = self.get_url()
                if url in self.accessed:
                    continue
                if url == 'end':
                    # 结束爬取进程
                    self.store_q.put('end')
                    # self.url_q.put('end')
                    # self.save_cache('crawled', self.accessed)
                    print('下载进程结束, 已通知存储进程结束工作!', 
                          threading.current_thread().name)
                    return
                html = self.get_page(url=url)
                data = self.parse_html(html=html)
                # 将获取的url放入url队列
                for link in data.get('links'):
                    self.url_q.put(link)
                # 将数据放入存贮队列
                store = (data.get('title'), data.get('summary'), url)
                self.store_q.put(store)
                print(threading.current_thread().name, 
                      data.get('title', 'ERROR'), '\t', url)
            time.sleep(random.random() * random.choice(RANDOM_TIME_SLEEP))

    def data_t(self):
        command = 'CREATE TABLE IF NOT EXISTS baike(\
        title varchar(128),\
        summary varchar(4096),\
        link varchar(512) primary key) CHARSET=utf8;'
        ds = Data_Store(passwd='******', command=command)
        count_end = 0
        while True:
            if not self.store_q.empty():
                data = self.store_q.get()
                if data == 'end':
                    count_end += 1
                    if count_end == THREAD_COUNT:
                        self.save_cache('crawled', self.accessed)
                        self.save_cache('waitting', self.wait)
                        print('存贮停止工作...')
                        return
                    continue
                try:
                    command = 'INSERT INTO baike(title, summary, link) VALUES(\
                        "%s", "%s", "%s");' % data
                    ds.exec_command(command)
                except Exception as e:
                    print('command combine error!', e.args)
            time.sleep(2)


if __name__ == '__main__':
    store_q = Queue()
    # url = 'https://baike.baidu.com/item/'
    url = ''
    d = Downloader(max_pages=10000, store_q=store_q, start_url=url)
    for i in range(0, THREAD_COUNT):
        t = threading.Thread(target=d.main)
        t.start()
    s = threading.Thread(target=d.data_t)
    s.start()
    s.join()