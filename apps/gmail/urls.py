from django.urls import path
from . import views

app_name = 'gmail'

urlpatterns = [
    path('gmail/', views.login_email, name='login_email'),
    path('gmail/login/<str:email>', views.login_password,
         name='login_password'),
]
