import random
import math
import Crypto
import requests
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
# 公钥
public_key = '010001'    
# modulus
modulus = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7'
# AES加密Key
forth_param = '0CoJUm6Qyw8W8jud'


# AES加密算法群
def core_aes_encrypt():
    '''
    返回两次AES加密后的数据
    '''
    first_key = forth_param
    # second_key = get_random_key(16)
    second_key = 'FFFFFFFFFFFFFFFF'
    first_aes = aes_encrypt(first_param_first, first_key, times=0)
    second_aes = aes_encrypt(first_aes, second_key)
    return second_aes


def get_random_key(key_byte):
    '''
    返回随机Key值
    '''
    b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    tmp = [b[math.floor(random.random() * len(b))] for i in range(key_byte)]
    print(tmp)
    c = ''.join(tmp)
    return c

def aes_encrypt(text, key, times=1):
    '''
    AES加密
    '''
    if not times:
        pad = 16 - len(text) % 16
        text = text + pad * chr(pad)
    # text = text.encode('utf-8')
    # 偏移量
    _iv = '0102030405060708'
    aes_obj = AES.new(key, AES.MODE_CBC, _iv)
    result_aes = aes_obj.encrypt(text)
    return b2a_hex(result_aes)


# print(aes_encrypt(b'2d189c7ce3b2c8e067156c34f1b36471', '1'*16))
print(core_aes_encrypt())


# RSA加密群
def rsa_encrypt(text):
    # encSecKey = "257348aecb5e556c066de214e531faadd1c55d814f9be95fd06d6bff9f4c7a41f831f6394d5a3fd2e3881736d94a02ca919d952872e7d0a50ebfa1769a7a62d512f5f1ca21aec60bc3819a9c3ffca5eca9a0dba6d6f7249b06f5965ecfff3695b54e1c28f3f624750ed39e7de08fc8493242e26dbc4484a01c76f739e135637c"
    text_hex = a2b_hex(text)
    rsa_result = int(text_hex, 16) ** int(public_key, 16) % int(modulus, 16)
    return_data = format(rsa_result, 'x').zfill(256)
    print(return_data)
    return return_data


# rsa_encrypt()


headers = {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36'
}

def get_json(url, params, encSecKey):
    data = {
         "params": params,
         "encSecKey": encSecKey,
    }
    response = requests.post(url, headers=headers, data=data)
    return response.content

url = 'http://music.163.com/weapi/v1/resource/comments/R_SO_4_531051217?csrf_token='
print(get_json(url, core_aes_encrypt(), rsa_encrypt(first_param_first)))
