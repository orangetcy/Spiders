import re
import os
import urllib
import shutil
import zlib
from datetime import datetime, timedelta
try:
    import cPickle as pickle
except ImportError:
    import pickle
from crawl_s3 import crawl_links


class diskcache(object):
    """缓存数据到磁盘的接口
    >>> cache = DiskCache()
    >>> url = 'http://example.webscraping.com'
    >>> result = {'html': '...'}
    >>> cache[url] = result
    >>> cache[url]['html'] == result['html']
    True
    >>> cache = DiskCache(expires=timedelta())
    >>> cache[url] = result
    >>> cache[url]
    Traceback (most recent call last):
     ...
    KeyError: 'http://example.webscraping.com has expired'
    >>> cache.get(url, -1)
    -"""  """1
    >>> cache.clear()
    """


    def __init__(self, cache_dir='cache', expires=timedelta(days=30), compress=True):
        """初始化元素：
        cache_dir: 缓存主目录
        expires: 缓存数据时间和加载缓存时时间差预防数据过期
        compress: 是否压缩缓存数据
        """
        self.cache_dir = cache_dir
        self.expires = expires
        self.compress = compress

    
    def __getitem__(self, url):
        """获取url对应的数据
        """
        print(url)
        path = self.url_to_path(url)
        if os.path.exists(path):
            with open(path, 'rb') as fp:
                data = fp.read()
                if self.compress:
                    data = zlib.decompress(data)
                result, timestamp = pickle.loads(data)
                if self.has_expires(timestamp):
                    raise KeyError(url + 'has expired.')
                return result
        else:
            raise KeyError(url + 'dose not exists.')


    def __setitem__(self, url, result):
        """将此URL对应数据保存磁盘上
        """
        path = self.url_to_path(url)
        folder = os.path.dirname(path)

        if not os.path.exists(folder):
            os.makedirs(folder)

        data = pickle.dumps((result, datetime.utcnow()))
        if self.compress:
            data = zlib.compress(data)
        with open(path, 'wb') as fp:
            fp.write(data)


    def __delitem__(self, url):
        """删除url对应数据以及目录
        """
        path = self.url_to_path(url)
        try:
            os.remove(path)
            os.removedirs(os.path.dirname(path))
        except OSError as e:
            pass


    def url_to_path(self, url):
        """将url转变成合法的文件系统路径
        """
        components = urllib.parse.urlsplit(url)

        path = components.path
        if not path:
            path = 'index.html'
        elif path.endswith('/') or path.endswith('index'):
            path += '/index.html'

        filename = '{}{}{}'.format(components.netloc, path, components.query)
        # 将文件名中非法字符替换
        filename = re.sub('[^/0-9a-zA-Z\.,;_ ]', '_', filename)
        # 将文件名大小限制在255字符
        filename = '/'.join(segment[:255] for segment in filename.split('/'))
        return os.path.join(self.cache_dir, filename)


    def has_expires(self,timestamp):
        """返回时间戳是否过期
        """
        return datetime.utcnow() > timestamp + self.expires


    def get(self, url, return_value=None):
        try:
            return self.__getitem__(url)
        except KeyError as e:
            return return_value


    def clear(self):
        """移除所有的缓存数据
        """
        if os.path.exists(self.cache_dir):
            shutil.rmtree(self.cache_dir)


if __name__ == "__main__":
    crawl_links('http://example.webscraping.com/', '/(index|view)', delay=2,max_depth=1, cache=diskcache())