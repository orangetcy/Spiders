import scrapy


class BaiKeSpider(scrapy.Spider):
    name = 'Baike'
    allowed_domain = ['baike.baidu.com']
    start_urls = [
        'https://baike.baidu.com/item/%E8%9C%97%E9%B8%A2'
    ]

    def parse(self, response):

        pass