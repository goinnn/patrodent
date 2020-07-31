# -*- encoding: utf-8 -*-
from django import template
from bs4 import BeautifulSoup

register = template.Library()


@register.simple_tag(takes_context=True)
def get_entry_image(context, entry):
    imgurl = None
    leadsoup = BeautifulSoup(entry.lead)
    contentsoup = BeautifulSoup(entry.content)
    img = leadsoup.img or contentsoup.img
    if img:
        imgsrc = img["src"]
        if imgsrc.endswith("jpg") or imgsrc.endswith("png"):
            request = context['request']
            if request.is_secure():
                imgurl = 'https://%s%s' %(request.get_host(), imgsrc)
            else:
                imgurl = 'http://%s%s' % (request.get_host(), imgsrc)
    return imgurl
