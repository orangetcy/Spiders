import time
import codecs


order = ['url', 'title', 'summary']


class DataOutput(object):


    def __init__(self, file_key='baike'):
        self.file_path = './status/' + file_key + '_%s.html' %(time.strftime('%Y_%m_%d_%H%M%S', 
            time.localtime()))
        self.output_head(self.file_path)
        self.datas = []

    def store_data(self, data):
        """先保存数据在缓存中，达到一定数目写入文件
        :params data: 数据
        :return:
        """
        if data is None:
            return
        self.datas.append(data)
        if len(self.datas) >= 10:
            self.output_html(self.file_path)

    def output_head(self, file_path):
        """输出HTML头
        :param file_path: 文件路径
        :return:
        """
        with codecs.open(file_path, 'w', 'utf-8') as fout:
            fout.write('<html>')
            fout.write('<body>')
            fout.write('<table>')
    
    def output_html(self,file_path):
        """将数据写入HTML文件中
        :param file_path: 文件路径
        :return:
        """
        with codecs.open(file_path, 'a', 'utf-8') as fout:
            write_data = self.datas[:]
            for data in write_data:
                fout.write('<tr>')
                fout.write('<td>{}</td><td>{}</td><td>{}</td>'.format(*[data.get(item, 'error') \
                           for item in order]))
                fout.write('</tr>')
                self.datas.remove(data)

    def output_end(self, file_path):
        """输出HTML结束
        :param file_path: 文件路径
        :return:
        """
        self.output_html(file_path)
        with codecs.open(file_path, 'a', 'utf-8') as fout:
            fout.write('</table>')
            fout.write('</body>')
            fout.write('</html>')