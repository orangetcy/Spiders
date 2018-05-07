import datetime
import sys
import threading
import time
from pprint import pprint
from queue import Queue

import pymongo

from db_operation import Data_Store, mongo_db
from movie_download import (DEFAULT_DELAY, DEFAULT_ERRORS, RANDOM_DELAY,
                            Downloader)


class Manager(object):

    def __init__(self, thread_count=1, max_num=20):
        self.url_q = Queue()

        self.sql_q = Queue()
        self.mongo_q = Queue()

        self.error_url = set()

        self.thread_count = thread_count
        self.downloader = Downloader(self.sql_q, max_num=max_num)

    def manager_crawl(self):
        # 开始爬取总览信息
        summary = threading.Thread(target=self.downloader.get_movies)
        summary.start()

        # 开始详细页面爬取
        for i in range(0, self.thread_count):
            detail = threading.Thread(target=self.crawl_detail)
            detail.start()

        # mysql存储
        mysql = threading.Thread(target=self.parse_save_sql)
        mysql.start()

        # mongo存贮
        mongo = threading.Thread(target=self.save_mongo)
        mongo.start()

        mysql.join()
        mongo.join()

    def parse_save_sql(self):
        """解析信息并获取url到队列
        """
        ds = Data_Store(passwd='qwer1234')
        while True:
            if not self.sql_q.empty():
                data = self.sql_q.get()
                if data == 'end':
                    for i in range(0, self.thread_count):
                        self.url_q.put('end')
                    print(
                        '解析存储收到结束通知,停止工作, 并通知其它模块', 
                    )
                    return
                self.url_q.put(data.get('link'))
                # print(data)
                command = 'INSERT INTO douban_movie(title, score, link\
                    ) VALUES("{name}","{score}", "{link}")'.format(**data)
                ds.exec_command(command)
            else:
                time.sleep(DEFAULT_DELAY)

    def crawl_detail(self):
        ERROR_COUNT = 0
        while True:
            if not self.url_q.empty():
                url = self.url_q.get()
                if url == 'end' or ERROR_COUNT >= DEFAULT_ERRORS:
                    self.mongo_q.put('end')
                    print(
                        threading.current_thread(), 
                        ' 抓取详细页面已停止, 通知其它模块')
                    return
                try:
                    movie, reviews = self.downloader.get_movie_detail(url=url)
                except Exception as e:
                    ERROR_COUNT += 1
                    self.error_url.add(url)
                    print(sys._getframe().f_code.co_name, e.args)
                    time.sleep(DEFAULT_DELAY)
                    continue
                if movie is not None and reviews is not None:
                    self.mongo_q.put({
                        '_id': url,
                        'movie': movie,
                        'reviews': reviews,
                    })
                print(
                    threading.current_thread().name, '\t'
                    'has crwaled : ', url
                )
            time.sleep(DEFAULT_DELAY)

    def save_mongo(self):
        end_count = 0
        while True:
            if end_count >= self.thread_count:
                print('mongo结束工作', end_count)
                return
            d = pymongo.MongoClient()['douban']
            if self.mongo_q.empty():
                time.sleep(DEFAULT_DELAY)
            else:
                doc = self.mongo_q.get()
                if doc == 'end':
                    end_count += 1
                    print('mongo接受停止指令', end_count)
                    continue
                try:
                    d.movie.insert_one(doc)
                except Exception as e:
                    pass
            d.client.close()


if __name__ == '__main__':
    s = time.time()
    m = Manager(thread_count=3, max_num=500)
    m.manager_crawl()
    e = time.time()
    print(e - s)
