from .settings import *

DEBUG = True

ALLOWED_HOSTS = ['localhost', '85.137.200.30', 'jorge.theysay.me', '127.0.0.1', '192.168.0.20']
STATIC_ROOT = '/home/jcorrea/proyectos/patrodent/static'

INTERNAL_IPS = ALLOWED_HOSTS

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'