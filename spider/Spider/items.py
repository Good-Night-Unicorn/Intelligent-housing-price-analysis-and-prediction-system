# 数据容器文件

import scrapy

class SpiderItem(scrapy.Item):
    pass

class GuangzhouxfItem(scrapy.Item):
    # 标题
    title = scrapy.Field()
    # 图片
    imgurl = scrapy.Field()
    # 地址
    address = scrapy.Field()
    # 均价(元/平)
    avgprice = scrapy.Field()
    # 建面
    jianmian = scrapy.Field()
    # 类型
    housetype = scrapy.Field()
    # 最新开盘
    opendate = scrapy.Field()
    # 标签
    tagname = scrapy.Field()
    # 总价(万/套)
    totalprice = scrapy.Field()
    # 产权
    properright = scrapy.Field()
    # 详情地址
    detailurl = scrapy.Field()

