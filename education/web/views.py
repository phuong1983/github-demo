from django.shortcuts import render
from .models import *
import re

# Create your views here.
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
