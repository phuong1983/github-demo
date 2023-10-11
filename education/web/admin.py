from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Vocabulary)
admin.site.register(Question)
admin.site.register(Unknow)
admin.site.register(Group)
# admin.site.register(UserProfile)