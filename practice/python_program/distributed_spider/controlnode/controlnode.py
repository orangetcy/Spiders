import os
import queue
from multiprocessing import Process
from multiprocessing.managers import BaseManager

from controlmanage import ControlManager


def start_manager(url_q, result_q, conn_q, store_q):
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
    manager.get_server().serve_forever()


if __name__ == "__main__":
    url_q = queue.Queue()
    result_q = queue.Queue()
    store_q = queue.Queue()
    conn_q = queue.Queue()

    # 创建管理器
    #control_node = ControlManager()
    #control_manager = control_node.start_manager(url_q, result_q, conn_q, store_q)
    
    '''
    # 创建URL管理，数据提取和数据存储进程
    root_url = 'https://baike.baidu.com/view/284853.html'
    url_proc = Process(target=control_node.url_manage_proc, args=(url_q, conn_q, root_url))
    result_proc = Process(target=control_node.result_solve_proc, args=(result_q, conn_q, store_q))
    store_proc = Process(target=control_node.store_proc, args=(store_q,))

    # 开启进程
    url_proc.start()
    result_proc.start()
    store_proc.start()
    '''
    # 开启分布式管理器
    # control_manager.get_server().serve_forever()
    start_manager(url_q, result_q, conn_q, store_q)
