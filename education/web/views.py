from django.shortcuts import render
from .models import *

# Create your views here.
def home(request):
    vocas = Vocabulary.objects.all()
    first_voca = None

    if vocas.exists():
        first_voca = vocas[0]
    context = {'vocas':vocas,'first_voca':first_voca}

    return render(request,'home.html',context)
def drag(request):
    return render(request,'drag.html')