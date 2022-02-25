import feedparser
import time
import os
import re
import pytz
from datetime import datetime

def get_link_info(feed_url, num):

    result = ""
    feed = feedparser.parse(feed_url)
    feed_entries = feed["entries"]
    feed_entries_length = len(feed_entries)
    all_number = 0;

    if(num > feed_entries_length):
        all_number = feed_entries_length
    else:
        all_number = num
    
    for entrie in feed_entries[0: all_number]:
        title = entrie["title"]
        link = entrie["link"]
        result = result + "\n" + "[" + title + "](" + link + ")" + "\n"
    
    return result

def main():
    blog =  get_link_info("https://www.yidajiabei.xyz/index.xml", 10)
    insert_info = blog

    # 替换 ---start--- 到 ---end--- 之间的内容
    # pytz.timezone('Asia/Shanghai')).strftime('%Y 年%m 月%d 日%H 时 M 分')
    fmt = '%Y-%m-%d %H:%M:%S %Z%z'
    insert_info = "---start---\n\n*Recently updated articles (" + "Last updated:"+  datetime.fromtimestamp(int(time.time()),pytz.timezone('Asia/Shanghai')).strftime('%Y-%m-%d %H:%M:%S') + " | Automatic update via Github Actions)*" +"\n" + insert_info + "\n---end---"
    # 获取 README.md 内容
    with open (os.path.join(os.getcwd(), "README.md"), 'r', encoding='utf-8') as f:
        readme_md_content = f.read()

    print(insert_info)

    new_readme_md_content = re.sub(r'---start---(.|\n)*---end---', insert_info, readme_md_content)

    with open (os.path.join(os.getcwd(), "README.md"), 'w', encoding='utf-8') as f:
        f.write(new_readme_md_content)

main()