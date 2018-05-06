from __future__ import print_function

import functools
import random
import re
import time
from datetime import datetime

import pudb
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

DEFAULT_DELAY = 5  # from douban robots
RANDOM_DELAY = [random.random() * i for i in range(3, 6)]


def headless_driver(flag=True):
    def trans_driver(method):
        @functools.wraps(method)
        def wrapper(self, *args, **kw):
            driver = self.get_headless_driver(flag)
            kw['driver'] = driver
            try:
                result = method(self, *args, **kw)
            except Exception as e:
                self.close_driver(driver)
                raise e
            self.close_driver(driver)
            return result

        return wrapper

    return trans_driver


class Downloader(object):
    def __init__(self):
        self.root_url = 'https://movie.douban.com/explore#!type=movie&tag=豆瓣高分'
        pass

    def get_headless_driver(self, headless=True):
        if headless:
            chrome_options = Options()
            chrome_options.add_argument('--headless')
            chrome_options.add_argument('--disable-gpu')
            driver = webdriver.Chrome(chrome_options=chrome_options)
        else:
            driver = webdriver.Chrome()
        return driver

    def close_driver(self, driver):
        try:
            driver.close()
        except Exception as e:
            pass

    @headless_driver(flag=False)
    def get_movies(self, driver=None):
        info = dict(
            name='null',
            score='null',
            link='null',
        )

        driver.get(self.root_url)
        load_more = driver.find_element_by_xpath('//a[@class="more"]')
        count_movies = 0
        count_exception = 0
        while True:
            try:
                load_more.click()
                infos = driver.find_elements_by_xpath(
                    '//div[@class="list"]/a[@class="item"]')
                for item in infos[count_movies:]:
                    info['name'], info['score'] = item.text.split(' ')
                    info['link'] = item.get_attribute('href')
                    print(info)
                count_movies = len(infos)
            except Exception as e:
                count_exception += 1
                print('get movie info error: ', e.args)
            if count_movies >= 40 or count_exception >= 3:
                return
            time.sleep(DEFAULT_DELAY)

    @headless_driver(flag=False)
    def get_movie_detail(self, url=None, driver=None):
        if driver is None or url is None:
            return
        # 数据结构
        # 电影基本信息
        movie = dict(
            # dirctor, writer, actors数据存贮格式
            # (name: link,
            # name1: link1,...
            # )
            douban_link=url,
            title_info='',
            director=dict(),
            writer=dict(),
            actor=dict(),
            type=list(),
            country=list(),
            lang=list(),
            show_time=list(),
            long_time='',
            imdb='',
            intro='',
        )
        # 点评相关信息
        reviews = dict(
            douban_link=url,
            score='',
            # 总评价数[sum, link]
            total=list(),
            status=dict(),
            # hot_short 热评的格式
            # {total:[sum, link],
            # user_link:context,
            #  user1_link1:context,...}
            hot_short=dict(total=list(), ),
            # hot_film_reviews影评格式
            # {tptal:[sum, link],
            # user_link:{
            # link:'',
            # title='',},
            # user1_link1:{
            # link:'',
            # title:'',},...
            # }
            hot_film_reviews=dict(total=list(), ))
        # driver = self.get_headless_driver(False)
        driver.get(url)

        # 解析电影基本信息
        info = driver.find_element_by_id('info')
        info_list = info.text.splitlines()
        # 电影标题
        movie['title_info'] = ' '.join(
            [t.text for t in driver.find_elements_by_xpath('//h1/span')])
        # 导演
        director = driver.find_element_by_xpath('//a[@rel="v:directedBy"]')
        movie['director'].update({
            director.text: director.get_attribute('href')
        })
        # 编剧
        writers = info.find_elements_by_xpath(
            './span[2]/span[@class="attrs"]/a')
        for item in writers:
            movie['writer'].update({item.text: item.get_attribute('href')})
        # 演员
        actors = info.find_elements_by_xpath(
            './span[@class="actor"]/span[@class="attrs"]/span/a')
        for item in actors:
            movie['actor'].update({item.text: item.get_attribute('href')})
        # 类型
        mtypes = info.find_elements_by_xpath('./span[@property="v:genre"]')
        movie['type'].extend([item.text for item in mtypes])

        # 解析国家,语言等信息
        def other_info(info_str):
            result = []
            try:
                result = [
                    item.strip() for item in info_str.split(':')[1].split('/')
                ]
            except Exception as e:
                print('other_info parse error', e.args)
                pass
            return result

        # 国家
        movie['country'].extend(other_info(info_list[4]))
        # 语言
        movie['lang'].extend(other_info(info_list[5]))
        # 上映时间
        movie['show_time'].extend(other_info(info_list[6]))
        # 片长
        movie['long_time'] = info_list[7].split(':')[1].strip()
        # imdb链接
        movie['imdb'] = info.find_element_by_xpath(
            './a[@target="_blank"]').get_attribute('href')
        # 电影简介
        movie['intro'] = driver.find_element_by_xpath(
            '//span[@property="v:summary"]').text

        # 解析点评信息
        # 平均分
        reviews['score'] = driver.find_element_by_xpath(
            '//strong[@property="v:average"]').text
        # 总评价数
        reviews['total'].append(
            driver.find_element_by_xpath('//span[@property="v:votes"]').text)
        reviews['total'].append(
            driver.find_element_by_xpath('//a[@class="rating_people"]')
            .get_attribute('href'))
        # 评价分布
        rates = driver.find_elements_by_xpath(
            '//div[@class="ratings-on-weight"]/div/span[@class="rating_per"]')
        rate_per = [item.text for item in rates]
        rate_int = [i for i in range(5, 0, -1)]
        reviews['status'].update(dict(zip(rate_int, rate_per)))

        # 热门短评
        short = driver.find_element_by_id('comments-section')
        # 短评总数
        short_total = short.find_element_by_xpath('./div[1]/h2/span/a')
        reviews['hot_short']['total'].extend(
            re.findall('\d{1,20}', short_total.text))
        reviews['hot_short']['total'].append(short_total.get_attribute('href'))
        # 短评
        short_list = short.find_elements_by_class_name('comment')
        for item in short_list:
            author = item.find_element_by_xpath('./h3/span[2]/a')
            user = author.text
            link = author.get_attribute('href')
            user_link = user + '_' + link
            context = item.find_element_by_xpath('./p').text
            reviews['hot_short'].update({user_link: context})
        # 热门影评
        film_reviews_total = driver.find_element_by_xpath(
            '//section/header/h2/span/a')
        reviews['hot_film_reviews']['total'].extend(
            re.findall('\d{1,20}', film_reviews_total.text))
        reviews['hot_film_reviews']['total'].append(
            film_reviews_total.get_attribute('href'))
        # 影评
        film_reviews = driver.find_elements_by_xpath(
            '//div[@typeof="v:Review"]/div')
        for item in film_reviews:
            # 影评人信息及主页链接
            author = item.find_element_by_xpath('./header/a[2]')
            user = author.text
            link = author.get_attribute('href')
            user_link = user + '_' + link
            reviews['hot_film_reviews'].update({user_link: dict()})
            # 影评信息
            title_info = item.find_element_by_xpath('./div/h2/a')
            reviews['hot_film_reviews'][user_link].update({
                'title':
                title_info.text,
                'link':
                title_info.get_attribute('href')
            })
        print(movie)
        print(reviews)


if __name__ == '__main__':
    t = Downloader()
    # t.get_movies()
    url = 'https://movie.douban.com/subject/1849031/' \
        +'?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86'
    t.get_movie_detail(url)
