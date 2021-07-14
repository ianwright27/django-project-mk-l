from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


app_title = "Mkoolima"
app_tagline = ""
title = '{app_title} | {app_tagline}'

def index(request):
    context = {
        'title': title,
        'cdn': "https://localhost/irent/assets/vendor/"
    }
    # return HttpResponse("Hello, world. You're at the polls index.")
    return render(request, 'mainsite/index.html', context)

def login(request):
    context = {
        'title': title,
        'cdn': "https://localhost/irent/assets/vendor/"
    }
    # return HttpResponse("Hello, world. You're at the polls index.")
    return render(request, 'mainsite/login.html', context)

def register(request):
    context = {
        'title': title,
        'cdn': "https://localhost/irent/assets/vendor/"
    }
    # return HttpResponse("Hello, world. You're at the polls index.")
    return render(request, 'mainsite/register.html', context)