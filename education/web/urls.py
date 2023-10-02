from django.urls import path, include
from . import views
urlpatterns = [
    path('', views.home),
    path('rearrange/', views.rearrange,name='rearrange'),
    path('orderword/', views.orderword,name='orderword'),
    path('drag/', views.drag,name='drag'),
    path('reorder/', views.reorder,name='reorder'),
]
