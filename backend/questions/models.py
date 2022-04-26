from django.db import models
from users.models import cUser

# ================
# Question Models
class Question(models.Model):
    user = models.ForeignKey(cUser, on_delete=models.CASCADE)

    title = models.CharField(max_length=128);
    body = models.TextField()

    votes = models.BigIntegerField(default=0)
    views = models.PositiveBigIntegerField(default=0)
    reports = models.BigIntegerField(default=0)

    answers = models.PositiveBigIntegerField(default=0)
    answered = models.BooleanField(default=False);

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def get_rate_type(self, user_id):
        rated_object = RatedObject.objects.filter(user_id=user_id, object_id=self.id)
        if rated_object.exists():
            return rated_object[0].rate_type
        return 'none'

# ================
# Answer Models
class Answer(models.Model):
    user = models.ForeignKey(cUser, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)

    body = models.TextField()

    votes = models.BigIntegerField(default=0)
    is_answer = models.BooleanField(default=False);

    created_at = models.DateTimeField(auto_now_add=True)

    def get_rate_type(self, user_id):
        rated_object = RatedObject.objects.filter(user_id=user_id, object_id=self['id'])
        if rated_object.exists():
            return rated_object[0].rate_type
        return 'none'

# ================
# Rated Models
RATE_CHOICES = (
    ('upvote', 'upvote'),
    ('downvote', 'downvote'),
    ('neutral', 'neutral')
)

class RatedObject(models.Model):
    user = models.ForeignKey(cUser, on_delete=models.CASCADE)
    object_id = models.PositiveBigIntegerField(null=False)
    rate_type = models.CharField(max_length=16, choices=RATE_CHOICES, default='neutral')

# ================
# Tag Models
class Tag(models.Model):
    name = models.CharField(max_length=32, unique=True)
    description = models.CharField(max_length=256, default='')

    views = models.BigIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)

class QuestionTag(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)