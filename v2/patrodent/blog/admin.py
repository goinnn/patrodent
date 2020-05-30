from django.contrib import admin

# Register your models here.
from zinnia.models import Entry
from zinnia.admin.entry import EntryAdmin
from django_summernote.admin import SummernoteModelAdmin


class EntryBlogAdmin(SummernoteModelAdmin, EntryAdmin):
    summernote_fields = ('lead', 'content')


admin.site.unregister(Entry)
admin.site.register(Entry, EntryBlogAdmin)
