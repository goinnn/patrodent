from .settings import *

DEBUG = False

ALLOWED_HOSTS = ['localhost', '85.137.200.30', 'jorge.theysay.me', '127.0.0.1', '192.168.0.20', '81.46.242.249']
ALLOWED_HOSTS = ['*']
STATIC_ROOT = '/home/patrodent/patrodent/v2/patrodent/static'

INTERNAL_IPS = ALLOWED_HOSTS

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
