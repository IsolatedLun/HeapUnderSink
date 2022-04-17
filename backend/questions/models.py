from django.db import models
from users.models import cUser

class Question(models.Model):
    user = models.ForeignKey(cUser, on_delete=models.CASCADE)

    title = models.CharField(max_length=128);
    body = models.TextField()

    votes = models.BigIntegerField(default=0)
    views = models.PositiveBigIntegerField(default=0)
    answers = models.PositiveBigIntegerField(default=0)
    answered = models.BooleanField(default=False);

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

class Tag(models.Model):
    name = models.CharField(max_length=32, unique=True)
    description = models.CharField(max_length=256, default='')

    views = models.BigIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)

class QuestionTag(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)