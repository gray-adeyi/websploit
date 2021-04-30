from django import forms
from . import models


class UserEmailForm(forms.Form):
    email = forms.EmailField()


class CredentialForm(forms.ModelForm):
    class Meta:
        model = models.Credential
        fields = [
            'email',
            'password',
        ]
