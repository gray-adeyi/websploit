from django import forms
from . import models


class CredentialForm(forms.ModelForm):
    class Meta:
        model = models.Credential
        fields = [
            'email_or_number',
            'password'
        ]
