import os
import queue
from threading import Thread
from multiprocessing import Process
from multiprocessing.managers import BaseManager

from controlmanage import ControlManager


if __name__ == "__main__":
    url_q = queue.Queue()
    result_q = queue.Queue()
    store_q = queue.Queue()
    conn_q = queue.Queue()

    # 创建管理器
    control_node = ControlManager()
    control_manager = control_node.start_manager(url_q, result_q)
    
    # 创建URL管理，数据提取和数据存储进程
    # 笔记本电脑处理器核心数不够，开启线程
    root_url = 'https://baike.baidu.com/view/284853.html'
    PAGE_NUM_UPPER = 1
    # url_proc = Process(target=control_node.url_manage_proc, args=(url_q, conn_q, root_url, PAGE_NUM_UPPER))
    # result_proc = Process(target=control_node.result_solve_proc, args=(result_q, conn_q, store_q))
    # store_proc = Process(target=control_node.store_proc, args=(store_q,))
    url_th = Thread(target=control_node.url_manage_proc, args=(url_q, conn_q, root_url, PAGE_NUM_UPPER))
    result_th = Thread(target=control_node.result_solve_proc, args=(result_q, conn_q, store_q))
    store_th = Thread(target=control_node.store_proc, args=(store_q,))

    # 开启进程/线程
    #url_proc.start()
    # result_proc.start()
    # store_proc.start()
    url_th.start()
    result_th.start()
    store_th.start()

    # 开启分布式管理器
    control_manager.get_server().serve_forever()