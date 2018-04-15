import os
import re
import time

from multiprocessing import Process
from multiprocessing.managers import BaseManager
from threading import Thread

from urlmanager import UrlManager
from datamanager import DataOutput


class ControlManager(BaseManager):

    '''
    def start_manager(self, url_q, result_q, conn_q, store_q):
        """创建一个分布式管理器
        :param url_q: URL队列
        :param result_q: result队列
        :return:
        """
        # 绑定端口 8001， 设置验证口令 baike.相当于初始化对象
        manager = BaseManager(address=('127.0.0.1', 16666), authkey=b'baike')
        # 把创建的两个队列注册在网络上，利用register方法，callable参数关联Queue对象
        # 将url_q 和 result_q暴露在网络上
        manager.register('get_task_queue', callable=lambda:url_q)
        manager.register('get_result_queue', callable=lambda:result_q)
        manager.register('get_conn_queue', callable=lambda:conn_q)
        manager.register('get_store_queue', callable=lambda:store_q)
        print(url_q, result_q, conn_q, store_q)
        # 返回manger对象
        return manager
        '''

    def url_manage_proc(self, url_q, conn_q, root_url):
        url_manager = UrlManager()
        url_manager.add_new_url(root_url)
        print('url_mannager is working...')
        while True:
            while url_manager.has_new_url():
                # 从URL管理器获取新的URL
                new_url = url_manager.get_new_url()
                print('new_url:', new_url)
                # 将新的URL发到工作节点
                url_q.put(new_url)
                print('old url = {}  url_q = {}'.format(url_manager.old_urls_size(), url_q.qsize()))
                # 加上判断， 爬满2000个链接终止爬虫并保存进度
                if (url_manager.old_urls_size() > 1):
                    # 通知爬虫节点结束工作
                    url_q.put('end')
                    print('控制节点发起结束通知！')
                    # 关闭节点同事存储状态
                    url_manager.save_process('new_urls.txt', url_manager.new_urls)
                    url_manager.save_process('old_urls.txt', url_manager.old_urls)
                    return
                # 从result_solve_proc获取的URL添加到URL管理器
                print('control working...')
            try:
                print('check conn_q size:', conn_q.qsize())
                if not conn_q.empty():
                    urls = conn_q.get()
                    url_manager.add_new_urls(urls)
            except Exception as e:
                time.sleep(1)    # 延时休息
            print('sleep..., url_q size:', url_q.qsize(), url_q)
            time.sleep(5)

    def result_solve_proc(self, result_q, conn_q, store_q):
        while True:
            try:
                if not result_q.empty():
                    content = result_q.get(True)
                    print('result_content: ', content)
                    if content.get('new_urls') == 'end':
                        # 结果分析进程接受停止指令
                        print('结果分析进程接受停止指令！')
                        store_q.put('end')
                        return
                    conn_q.put(content.get('new_urls'))    # url为set类型
                    store_q.put(content.get('data'))    # 解析出来的data为 dict 类型

                else:
                    time.sleep(1)    # 延时休息
            except Exception as e:
                print('error')
                time.sleep(1)    #延时休息

    def store_proc(self, store_q):
        output = DataOutput()
        while True:
            print('store size:', store_q.qsize())
            if not store_q.empty():
                data = store_q.get()
                if data == 'end':
                    print('存储进程接受通知然后结束')
                    output.output_end(output.file_path)
                    return
                output.store_data(data)
            else:
                time.sleep(1)


if __name__ == "__main__":
    host = ('127.0.0.1', 16666)
    mgr = BaseManager(address=host, authkey=b'baike')
    mgr.register('get_task_queue')
    mgr.register('get_result_queue')
    mgr.register('get_conn_queue')
    mgr.register('get_store_queue')
    mgr.connect()

    url_q = mgr.get_task_queue()
    result_q = mgr.get_result_queue()
    conn_q = mgr.get_conn_queue()
    store_q = mgr.get_store_queue()


    control_node = ControlManager()
    # 创建URL管理，数据提取和数据存储进程
    root_url = 'https://baike.baidu.com/view/284853.html'
    url_proc = Process(target=control_node.url_manage_proc, args=(url_q, conn_q, root_url))
    #result_proc = Process(target=control_node.result_solve_proc, args=(result_q, conn_q, store_q))
    result_thr = Thread(target=control_node.result_solve_proc, args=(result_q, conn_q, store_q))
    store_proc = Process(target=control_node.store_proc, args=(store_q,))
    #store_thr = Thread(target=control_node.store_proc, args=(store_q,))

    # start process
    url_proc.start()
    #result_proc.start()
    store_proc.start()
    result_thr.start()
    #store_thr.start()