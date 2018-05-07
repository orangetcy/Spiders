import sys
import threading
import functools
from contextlib import contextmanager

import pymongo
import pymysql


@contextmanager
def mongo_db(db='', host='loacalhost', port=27017):
    with threading.RLock():
        db = pymongo.MongoClient(host=host, port=port)[db]
        yield db
    try:
        db.client.close()
    except Exception as e:
        # print(sys._getframe().f_code.co_name, e.args)
        pass


def trans_con(method):
    @functools.wraps(method)
    def wrapper(self, *args, **kw):
        self.lock.acquire()
        con = self.get_con()
        kw['conn'] = con
        res = method(self, *args, **kw)
        self.close_con(con)
        self.lock.release()
        return res

    return wrapper


class Data_Store(object):
    """"""

    def __init__(self,
                 host='127.0.0.1',
                 port=3306,
                 username='orange',
                 passwd='',
                 dbname='spider',
                 command=None):
        self.host = host
        self.port = port
        self.username = username
        self.passwd = passwd
        self.dbname = dbname
        self.lock = threading.RLock()

        if command is not None:
            self.exec_command(command)

    def get_con(self):
        con = pymysql.connect(
            host=self.host,
            port=self.port,
            user=self.username,
            password=self.passwd,
            charset='utf8',
            database=self.dbname)
        return con

    def close_con(self, con):
        try:
            con.close()
        except Exception as e:
            pass

    @trans_con
    def exec_command(self, command=None, conn=None):
        cur = conn.cursor()
        try:
            cur.execute(command)
            conn.commit()
        except Exception as e:
            # print("exec command error: ", e.args)
            # print(command)
            return False
        return True

    @trans_con
    def fetch_data(self, command=None, conn=None):
        cur = conn.cursor()
        list_date = []
        try:
            cur.execute(command)
            list_date = cur.fetchall()
        except Exception as e:
            pass
        return list_date


if __name__ == "__main__":
    pass
    '''
    with mongo_db('test') as e:
        print(1234)'''
