#coding=utf8

import urllib
import urllib2

class spider:

    def __init__(self, url=None):
        # 初始化spider[,传入主域名]
        self.masterURL = url
        self.usrAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36'
        self.headers = {'User-Agent': self.usrAgent}

    def getPage(self, URL=None):
        '''
        传入url, 返回页面内容
        '''
        req = urllib2.Request(URL, headers=self.headers)
        response = urllib2.urlopen(req)
        return response.read()


