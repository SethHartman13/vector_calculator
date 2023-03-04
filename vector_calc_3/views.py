from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def calc_3_main(request):
    return render(request, 'vector_calc_3/main.html')
