from django.conf.urls import patterns, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

from django.views.generic.base import TemplateView as DjangoTemplateView


class TemplateView(DjangoTemplateView):

    def get_context_data(self, **kwargs):
        context = super(TemplateView, self).get_context_data(**kwargs)
        context['full_path'] = self.request.get_full_path()
        return context

    def get_template_names(self, *args, **kwargs):
        return '%(page_slug)s.html' % (self.kwargs)


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'patrodent.views.home', name='home'),
    url(r'^(?P<page_slug>[\w-]+).html$', TemplateView.as_view(), name='template_view')
    # url(r'^patrodent/', include('patrodent.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
