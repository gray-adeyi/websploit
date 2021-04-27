from django.db import models


# Create your models here.
class Credential(models.Model):
    email_or_number = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email_or_number

    class Meta:
        ordering = ['-created_at']
