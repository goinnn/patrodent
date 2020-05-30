from django.urls import re_path, include,  path
from django.conf import settings

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
from django.conf.urls.static import static
from django.views.generic.base import TemplateView as DjangoTemplateView


admin.autodiscover()


class TemplateView(DjangoTemplateView):

    def get_context_data(self, **kwargs):
        context = super(TemplateView, self).get_context_data(**kwargs)
        context['full_path'] = self.request.get_full_path()
        context['STATIC_URL'] = settings.STATIC_URL
        return context

    def get_template_names(self, *args, **kwargs):
        if self.kwargs:
            return '%(page_slug)s.html' % self.kwargs
        else:
            return 'index.html'

urlpatterns = [
    re_path(r'^robots\.txt$', DjangoTemplateView.as_view(template_name='robots.txt', content_type='text/plain')),
    re_path(r'^sitemap\.xml$', DjangoTemplateView.as_view(template_name='sitemap.xml', content_type='text/plain')),
    re_path(r'^blog/', include('zinnia.urls')),
    re_path(r'^comments/', include('django_comments.urls')),
    re_path(r'^$', TemplateView.as_view(), name='template_view_index'),
    path('summernote/', include('django_summernote.urls')),
    path('admin/', admin.site.urls),
]

urlpatterns += [
    # Examples:
    re_path(r'^(?P<page_slug>[\w-]+).html$', TemplateView.as_view(), name='template_view'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
