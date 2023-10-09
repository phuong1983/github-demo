from django.urls import path, include
from . import views
urlpatterns = [
    path('', views.home,name='home'),
    path('home/', views.home),
    path('rearrange/', views.rearrange,name='rearrange'),
    path('orderword/', views.orderword,name='orderword'),
    path('drag/', views.drag,name='drag'),
    path('reorder/', views.reorder,name='reorder'),
    path('register/',views.register,name='register'),
    path('login/',views.loginPage,name='loginPage'),
    path('logout/',views.logoutPage,name='logoutPage'),
]
