from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect

def calc_2_main(request):
    return render(request, 'vector_calc_2/main.html')




# Create your views here.

# def calc_2_main(request):
#     return render(request, 'vector_calc_2/main.html')



