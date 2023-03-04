from django.urls import path
from . import views

urlpatterns = [
    path('', views.calc_3_main, name='vector_calc_3_main')
]