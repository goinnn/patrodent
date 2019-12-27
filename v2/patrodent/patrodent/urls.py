from django.urls import path, re_path

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
        return '%(page_slug)s.html' % self.kwargs



urlpatterns = [
    # Examples:
    re_path(r'^(?P<page_slug>[\w-]+).html$', TemplateView.as_view(), name='template_view'),
]
