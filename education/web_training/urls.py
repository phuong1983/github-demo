from django.urls import path, include
from . import views
urlpatterns = [
    path('', views.unknow,name='unknow'),
    path('slide/', views.slide,name='slide'),
    path('fillBlankAns/', views.fillBlankAns,name='fillBlankAns'),
    path('matchWords/', views.matchWords,name='matchWords'),
    path('arrangeSentence/', views.arrangeSentence,name='arrangeSentence'),
]