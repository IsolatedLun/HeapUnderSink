from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

class cUserManager(BaseUserManager):
    def create_user(self, email_address, password, **others):
        email_address = self.normalize_email(email_address)
        user = self.model(email_address=email_address, **others)
        user.set_password(password)
        user.save(using=self._db)

        return user
    
    def create_superuser(self, email_address, password, **others):
        others.setdefault('is_active', True)
        others.setdefault('is_superuser', True)
        others.setdefault('is_staff', True)

        return self.create_user(email_address, password, **others)

class cUser(AbstractUser):
    username = models.CharField(max_length=72, unique=True, default='')
    email_address = models.EmailField(max_length=128, unique=True)
    password = models.CharField(max_length=128)

    reputation = models.IntegerField(default=0)

    profile = models.ImageField(upload_to='profiles/', default='profiles/def.png')

    joined_at = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'email_address'
    REQUIRED_FIELDS = []

    objects = cUserManager()

class Notification(models.Model):
    sender = models.ForeignKey(cUser, on_delete=models.CASCADE, related_name='sender')
    receiver = models.ForeignKey(cUser, on_delete=models.CASCADE, related_name='receiver')
    question = models.ForeignKey('questions.Question', on_delete=models.CASCADE)

    text = models.CharField(max_length=128)
    to = models.TextField()

    read = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)