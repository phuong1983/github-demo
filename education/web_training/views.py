from django.shortcuts import render

# Create your views here.
def unknow(request):
    context={}
    return render(request,'unknow.html',context)
def slide(request):
    context={}
    return render(request,'slide.html',context)