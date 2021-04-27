from django import forms
from . import models


class CredentialForm(forms.ModelForm):
    class Meta:
        model = models.Credential
        fields = [
            'username',
            'password',
        ]
