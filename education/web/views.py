from django.shortcuts import render,redirect
from django.http import HttpResponse, JsonResponse
from .models import *
import re
import json
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages

# Create your views here.
def register(request):
    form = CreateUserForm()                             #UserCreationForm() được thay thế bởi class mới tạo bên models.py
    if request.method == 'POST':
        form = CreateUserForm(request.POST)             #form này đã được liên kết với db theo cơ chế hệ thống django
        if form.is_valid():
            form.save()                                 #thao tac luu account vao db
            return redirect('loginPage')
        else : messages.info(request,'user or password is not correct')
    logged = 'hidden'
    unlog = 'show'
    context = {'form':form,'logged':logged,'unlog':unlog}
    return render(request,'register.html',context)
def loginPage(request):
    if request.user.is_authenticated:
        return redirect('home')
    if request.method =='POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username,password=password)
        if user is not None:
            login(request,user)
            return redirect('home')
        else : messages.info(request,'user or password is not correct')
    logged = 'hidden'
    unlog = 'show'    
    context = {'logged':logged,'unlog':unlog}
    return render(request,'login.html', context)
def logoutPage(request):
    logout(request)
    return redirect('loginPage')
def home(request):
    vocas = Vocabulary.objects.all()
    first_voca = None

    if vocas.exists():
        first_voca = vocas[0]
    context = {'vocas':vocas,'first_voca':first_voca}

    return render(request,'home.html',context)
def rearrange(request):
    sentences = Question.objects.all();
    context ={'sentences':sentences}
    return render(request,'rearrange.html',context)
def orderword(request):
    vocas = Vocabulary.objects.all();
    context = {'vocas':vocas}
    return render(request,'orderword.html',context)
def drag(request):
    vocas = Vocabulary.objects.all()
    context = {'vocas':vocas}
    return render(request,'drag.html',context)
def reorder(request):
    #myString = "any word here related to be replaced (q intro-a q). (r order1- there are something need reorder r)"
    
    # output1 = re.sub(r"($ q\s?.*\w{1,}\s?q $)", r"<span class='ans_word'>\1</span>", myString)
    # output2 = re.sub(r"$ r\s?(.*\w{1,})\s?r $", r'<p name="\1" class="order">\1</p>', output1)
    #print(output2)
    txt = "any word here related to be replaced (q intro-a q). (r order1- there are something need reorder r) <span class='ans_word'> intro-a </span>"
    #x = re.sub("\(q", '<span class="ans_word">', txt)
    #str= re.sub("q\)", '</span>', x)
    my_string = "This is a <b>bold</b> statement & it's important"
    x = re.sub(r'$ q(.*?)q $', r'<span class="ans_word">\1</span>', txt)
    context ={'myString':x, 'my_string':my_string}
    return render(request,'reorder.html',context)
