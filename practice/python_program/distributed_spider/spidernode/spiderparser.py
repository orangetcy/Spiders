import re
import urllib
from bs4 import BeautifulSoup


class HTMLParser(object):

    def parser(self, page_url, html):
        if page_url is None or html is None:
            return
        
        soup = BeautifulSoup(html, 'lxml' )
        new_urls, new_data = self._get_new_info(page_url, soup)
        return new_urls, new_data

    def _get_new_info(self, page_url, soup):
        new_urls = set()
        new_data = dict()

        # 抽取符合标记的链接
        links = soup.find_all('a', href=re.compile(r'/item/'))
        for link in links:
            new_url = link['href']
            # print('new_url:', new_url)
            new_full_url = urllib.parse.urljoin(page_url, new_url)
            new_urls.add(new_full_url)

        # 抽取数据
        new_data['url'] = page_url
        title = soup.find('dd', class_="lemmaWgt-lemmaTitle-title").find('h1')
        new_data['title'] = title.get_text()
        summary = soup.find('div', class_="lemma-summary")
        new_data['summary'] = summary.get_text()

        print('new_urls:', new_urls)
        print('new_data', new_data)
        return new_urls, new_data