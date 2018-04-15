""""""
from __future__ import print_function

import hashlib
import urllib
import pickle


class UrlManager(object):

    def __init__(self):
        self.new_urls = set()    # 未爬取的URL集合
        self.old_urls = set()    # 已爬取的URL集合
        self.new_urls_store_path = 'new_urls.txt'
        self.old_urls_store_path = 'old_urls.txt'
        self.load_process()

    def has_new_url(self):
        """判断是否还有未爬取的URL
        :return:
        """
        return self.new_urls_size() != 0

    def get_new_url(self):
        """获取一个未爬取的URL
        :return:
        """
        new_url = self.new_urls.pop()
        m = hashlib.md5()
        m.update(new_url.encode('utf-8'))
        self.old_urls.add(m.hexdigest())
        return new_url

    def add_new_url(self, url):
        """将新的url放入未爬取URL集合中
        :param url: 单个url
        :return:
        """
        if url is None:
            return
        m = hashlib.md5()
        m.update(url.encode('utf-8'))
        url_md5 = m.hexdigest()
        if url not in self.new_urls and url_md5 not in self.old_urls:
            self.new_urls.add(url)

    def add_new_urls(self, urls):
        """将新的URL添加到未爬取的URL集合
        :param urls: url集合
        :return:
        """
        if urls is None or len(urls) == 0:
            return
        for url in urls:
            self.add_new_url(url)

    def new_urls_size(self):
        """获取未爬取url集合大小
        :return:
        """
        return len(self.new_urls)

    def old_urls_size(self):
        """获取已爬取URL集合大小
        :return:
        """
        return len(self.old_urls)

    def save_process(self, path, data):
        """保存进度
        :params path: 文件路径
        :params data: 写入数据
        :return:
        """
        with open(path, 'wb') as fp:
            pickle.dump(data, fp)

    def load_process(self):
        """从本地文件加载进度
        :return: 返回set集合
        """
        print('[+] 从文件加载未爬取进度： %s' % self.new_urls_store_path)
        try:
            with open(self.new_urls_store_path, 'rb') as nfp:
                new_urls = pickle.load(nfp)
                self.add_new_urls(new_urls)
        except Exception as e:
            print('[+] 无进度文件， 请创建： %s' % self.new_urls_store_path)

        print('[+] 从文件加载已爬取进度： %s' % self.old_urls_store_path)
        try:
            with open(self.old_urls_store_path, 'rb') as ofp:
                old_urls = pickle.load(ofp)
                for url_md5 in old_urls:
                    self.old_urls.add(url_md5)
        except Exception as e:
            print('[+] 无进度文件， 请创建： %s' % self.old_urls_store_path)

        
        