from django.shortcuts import render,redirect
from django.http import HttpResponse, JsonResponse
from .models import *
import re
import json
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages


# Create your views here.
def unknow(request):
    context={}
    return render(request,'unknow.html',context)
def slide(request):    
    vocas = Vocabulary.objects.all()
    first_voca = None
    date_joined = request.user.date_joined
    if vocas.exists():
        first_voca = vocas[0]
    context = {'vocas':vocas,'first_voca':first_voca,'date_joined':date_joined}
    return render(request,'slide.html',context)
def fillBlankAns(request):
    vocas = Vocabulary.objects.all()
    context = {'vocas':vocas}
    return render(request,'fillBlankAns.html',context)
def matchWords(request):
    vocas = Vocabulary.objects.all()
    context = {'vocas':vocas}
    return render(request,'matchWords.html',context)
def arrangeSentence(request):
    vocas = Vocabulary.objects.all()
    dateJoined = request.user.date_joined
    context = {'vocas':vocas,'dateJoined':dateJoined}
    return render(request,'arrangeSentence.html',context)
