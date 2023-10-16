from django.urls import path, include
from . import views
urlpatterns = [
    path('', views.unknow,name='unknow'),
    path('slide', views.slide,name='slide'),
]