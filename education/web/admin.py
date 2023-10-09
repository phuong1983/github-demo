from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Vocabulary)
admin.site.register(Group)
admin.site.register(Question)
admin.site.register(Quest)
admin.site.register(UserProfile)