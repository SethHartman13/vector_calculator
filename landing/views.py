from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def landing_main(request):
    return render(request, 'landing/main.html')