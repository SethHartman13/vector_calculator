from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('landing.urls')),
    path('3dcalc/', include('vector_calc_3.urls')),
    path('2dcalc/', include('vector_calc_2.urls'))
]
