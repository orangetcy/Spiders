#coding=utf8

import re
import os
import SpiderMusic as sm
import json

def getSongList(artistId):
    sp = sm.spider('http://music.163.com/')
    artistUrl = sp.masterURL + 'artist?id=' + artistId
    pageContent = sp.getPage(artistUrl)
    splitStr1 = '<div id="song-list-pre-cache".*?<ul class="f-hide">(.*?)</ul>'
    pattern1 = re.compile(splitStr1, re.S)
    conten1 = re.findall(pattern1, pageContent)
    splitStr2 = '<li>.*?<a href="(.*?)">(.*?)</a></li>'
    content2 = re.findall(re.compile(splitStr2, re.S), conten1[0])
    return content2

def getSongLyric(songId):
    lyric_url = 'https://music.163.com/api/song/lyric?id='
    req_url = lyric_url + songId + '&lv=1&kv=1&tv=-1'
    print req_url
    content = sm.spider().getPage(req_url)
    lyric = json.loads(content).get('lrc').get('lyric')
    #print lyric
    return lyric

if __name__ == "__main__":
    # getSongLyric('418603077')
    # get Jay TOP 50 song list and write to ./source/songlist/[artistId]-Top50
    artistId = '3691'
    songList = getSongList(artistId)
    # print type(songList), songList
    w_songlist_path = './source/songlist/'
    if not os.path.exists(w_songlist_path):
        os.makedirs(w_songlist_path)
    w_lyric_path = './source/lyric/' + artistId + '/'
    if not os.path.exists(w_lyric_path):
        os.makedirs(w_lyric_path)
    with open(w_songlist_path + artistId + '-Top50'
, 'w') as wsp:
        for row in songList:
            wsp.write(row[0] + ':' + row[1] + '\n')
            song_id = row[0].split('=')[1]
            print row[1]
            song_name = row[1].decode('utf-8')
            with open(w_lyric_path + song_name, 'w') as wlp:
                wlp.write(getSongLyric(song_id).encode('utf-8'))
