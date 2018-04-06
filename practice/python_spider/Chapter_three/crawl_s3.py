import re
import time
import datetime
import queue
import random
import urllib
import urllib.robotparser

import requests
from bs4 import BeautifulSoup

import downloader


def crawl_links(seed_url, link_regex=None, delay=5, max_depth=-1, max_urls=-1, num_retries=1, cache=None):
    """
    """
    crawl_queue = [seed_url]
    
    seen = {seed_url:0}

    num_urls = 0
    rp = get_robot(seed_url)
    DL = downloader.downloader(delay=delay, num_retries=num_retries, cache=cache)

    while crawl_queue:
        url = crawl_queue.pop()
        depth = seen.get(url, -2)
        user_agent = downloader.USER_AGENT[random.randrange(0, len(downloader.USER_AGENT))]
        if rp.can_fetch(user_agent.get('User-Agent'), url):
            html = DL(url)
            links = []

            if depth != max_depth:
                if link_regex:
                    links.extend(link for link in get_links(html) if re.search(link_regex, link))

                for link in links:
                    link = normalize(seed_url, link)
                    
                    if link not in seen:
                        seen[link] = depth + 1

                        if same_domain(seed_url, link):
                            crawl_queue.append(link)

            num_urls += 1
            if num_urls == max_urls:
                break
        else:
            downloader.show_msg('Blocked by robots.txt: ', url)
             
    pass


def get_robot(seed_url):
    """返回robots.txt的解析对象
    """
    # robot_parse = urllib.robotparser.RobotFileParser()
    robot_parse = urllib.robotparser.RobotFileParser()
    robot_parse.set_url(urllib.parse.urljoin(seed_url, '/robots.txt'))
    robot_parse.read()
    return robot_parse


def normalize(seed_url, link):
    """去除链接干扰项
    """
    parse_result = urllib.parse.urlparse(link)
    return urllib.parse.urljoin(seed_url, parse_result.path)


def same_domain(url1, url2):
    """如果两个网址属于同一网站，返回True
    """
    return urllib.parse.urlparse(url1).netloc == urllib.parse.urlparse(url2).netloc


def get_links(html):
    """通过正则匹配获取链接
    """
    webpage_regex = re.compile(r'<a href="(.*?)">.*?</a>', re.S)
    return webpage_regex.findall(html)


if __name__ == "__main__":
    crawl_links('http://example.webscraping.com', '/(index|view)', delay=0, num_retries=1, max_depth=1)