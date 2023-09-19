from django.urls import path, include
from . import views
urlpatterns = [
    path('', views.home),
    path('drag/', views.drag,name='drag'),
]
