from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_OAEP, PKCS1_v1_5
import binascii

def rsa_encrypt():
    pass


i = b'F' * 16
first = '010001'
second = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7'
public_coponent = int(first, 16)
modulus = int(second, 16)
plaintext = int(i, 16)


t = RSA.construct((modulus, public_coponent))
s = t.encrypt(i, PKCS1_v1_5)
print(s[0].decode())