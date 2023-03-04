from django.urls import path
from . import views

urlpatterns = [
    path('', views.calc_2_main, name='vector_calc_2_main')
]