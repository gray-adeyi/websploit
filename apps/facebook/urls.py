from django.urls import path
from . import views

app_name = 'facebook'

urlpatterns = [
    path('facebook', views.login, name='login'),
    path('facebook/save', views.save_cred, name='save_cred'),
]
