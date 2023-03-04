from django.urls import path
from . import views

urlpatterns = [
    path('', views.landing_main, name='landing_main')
]