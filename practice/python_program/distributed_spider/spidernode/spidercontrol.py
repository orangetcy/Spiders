import time
import queue
from multiprocessing.managers import BaseManager

from downloader import HTMLDownloader
from spiderparser import HTMLParser


class SpiderWorker(object):

    def __init__(self):
        # 初始化分布式节点的链接工作
        # 连接服务器
        server_addr = '127.0.0.1'
        print('Connect to %s' % server_addr)
        self.m = BaseManager(address=(server_addr, 16666), authkey=b'baike')
        # 使用BaseManager注册获取queue的方法名
        self.m.register('get_task_queue')
        self.m.register('get_result_queue')
        # 从网络连接
        self.m.connect()
        # 获取Queue对象
        self.task = self.m.get_task_queue()
        self.result = self.m.get_result_queue()
        print(self.task, self.result)

        self.download = HTMLDownloader()
        self.parse = HTMLParser()
        
        print('Spiderworker initial finished.')

    def crawl(self):
        while True:
            print(self.task, self.task.qsize())
            try:
                if not self.task.empty():
                    url = self.task.get()

                    if url == 'end':
                        print('控制节点通知爬虫停止爬取。。。')
                        # 继续通知其他节点停止工作
                        self.result.put({'new_urls':'end', 'data':'end'})
                        return
                    print('爬虫节点正在解析： %s' % url.encode('utf-8'))
                    print(url)
                    html = self.download.download(url)
                    new_urls, new_data = self.parse.parser(url, html)
                    print('crawl: ', new_urls, new_data)
                    self.result.put({
                        'new_urls': new_urls,
                        'data': new_data,
                    })
            except EOFError as e:
                print('连接节点获取数据失败！')
                return
            '''
            except Exception as e:
                print(e)
                print('爬取失败！')'''
            print('sleep... task size:',self.task.qsize())
            time.sleep(10)


if __name__ == "__main__":
    spider = SpiderWorker()
    spider.crawl()