import random
import math
import Crypto
from Crypto.Cipher import AES
from Crypto.PublicKey import RSA
from binascii import b2a_hex, a2b_hex


# 第一个元素：
# rid: 以R_SO_4_开头，后面跟上歌曲id
# offset: 计算公式 (页数 - 1) * 20
# total: 第一页为true，之后全为false 
first_param_first = '{rid: "R_SO_4_531051217", offset: "0", total: "true", limit: "20", csrf_token: ""}'
# first_param = '{rid: "R_SO_4_531051217", offset: "20", total: "false", limit: "20", csrf_token: ""}'
# first_param = '{rid: "R_SO_4_%s", offset: "%d", total: "false", limit: "20", csrf_token: ""}' % (song_id, (page - 1) * 20)

# 第二，三，四个元素均为常量
second_parm = '010001'

third_param = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7'

forth_param = '0CoJUm6Qyw8W8jud'


# AES加密算法群
def core_aes_encrypt():
    pass


def get_random_key(key_byte):
    '''
    返回随机Key值
    '''
    b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    tmp = [b[math.floor(random.random() * len(b))] for i in range(key_byte)]
    print(tmp)
    c = ''.join(tmp)
    return c

def aes_encrypt(text, key):
    # print(text.encode('utf-8'))
    # print(text)
    text = text.encode('utf-8')
    _iv = '0102030405060708'
    aes_obj = AES.new(key, AES.MODE_CBC, _iv)
    result_aes = aes_obj.encrypt(text)
    return b2a_hex(result_aes)


# print(aes_encrypt(b'2d189c7ce3b2c8e067156c34f1b36471', '1'*16))


# RSA加密群
def rsa_encrypt():
    pass