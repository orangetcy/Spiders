import os
import re
import time

from multiprocessing import Process
from multiprocessing.managers import BaseManager
from threading import Thread

from urlmanager import UrlManager
from datamanager import DataOutput


class ControlManager(BaseManager):

    def start_manager(self, url_q, result_q):
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
        # 返回manger对象
        return manager

    def url_manage_proc(self, url_q, conn_q, root_url, page_num):
        url_manager = UrlManager()
        url_manager.add_new_url(root_url)
        print('url_mannager is working...')
        while True:
            while url_manager.has_new_url():
                # 从URL管理器获取新的URL
                new_url = url_manager.get_new_url()
                # 将新的URL发到工作节点
                url_q.put(new_url)
                # 加上判断， 爬满2000个链接终止爬虫并保存进度
                if (url_manager.old_urls_size() > page_num):
                    # 通知爬虫节点结束工作
                    url_q.put('end')
                    print('控制节点发起结束通知！')
                    # 关闭节点同事存储状态
                    url_manager.save_process('new_urls.txt', url_manager.new_urls)
                    url_manager.save_process('old_urls.txt', url_manager.old_urls)
                    return
                # 从result_solve_proc获取的URL添加到URL管理器
                print('url control working..., solve result')
            try:
                if not conn_q.empty():
                    urls = conn_q.get()
                    url_manager.add_new_urls(urls)
            except Exception as e:
                time.sleep(1)    # 延时休息
            print('has crawl page num : ', url_manager.old_urls_size())
            time.sleep(5)

    def result_solve_proc(self, result_q, conn_q, store_q):
        while True:
            try:
                if not result_q.empty():
                    content = result_q.get(True)
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
                print(e)
                time.sleep(1)    #延时休息

    def store_proc(self, store_q):
        output = DataOutput()
        while True:
            if not store_q.empty():
                data = store_q.get()
                if data == 'end':
                    print('存储进程接受通知然后结束')
                    output.output_end(output.file_path)
                    return
                output.store_data(data)
            else:
                time.sleep(1)