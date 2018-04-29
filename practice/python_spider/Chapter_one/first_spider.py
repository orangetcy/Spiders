import re
import csv
import lxml
import requests
from bs4 import BeautifulSoup


def download(url, user_agent='wswp', num_retries=2):
    print('Start download page...')
    header = {'User-Agent': user_agent}
    try:
        response = requests.get(url, headers=header)
    except requests.RequestException as e:
        print('Download error:', e.args)
        response = None
        if num_retries:
            return download(url, num_retries-1)
    print('response is: ', response)
    return response


# print(download('http://example.webscraping.com/view/United-Kingdom239').content)
print(download('http://blog.csdn.net/s/sitemap/sitemap_detail_613.xml').content)


def crawl_sitemap(url):
    # download the sitemap file
    site_map = str(download(url).content, encoding='utf-8')
    # extract the sitemap link
    soup = BeautifulSoup(site_map, 'lxml')
    links = soup.find_all('loc')
    # print(links)
    link_items = [i.text for i in links]
    return link_items
    

# print(crawl_sitemap('http://blog.csdn.net/s/sitemap/pcsitemapindex.xml'))