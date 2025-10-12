from django.urls import path
from .views import create_secret_key, get_secret_value

urlpatterns = [
    path('create/', create_secret_key),
    path('reveal/', get_secret_value),
]
