from rest_framework import serializers
from users.models import cUser

from users.serializers import cUserSerializer
from . import models

# ===========================
# Question Serializers
class QuestionSerializer(serializers.ModelSerializer):
    tags = serializers.SerializerMethodField()
    user = serializers.SerializerMethodField()
    modified_at = serializers.DateTimeField(format="%b %d, %Y")
    created_at = serializers.DateTimeField(format="%b %d, %Y")

    def get_user(self, obj):
        return cUserSerializer(cUser.objects.get(id=obj.user.id)).data
    def get_tags(self, obj):
        return QuestionTagSerializer(models.QuestionTag.objects.filter(question_id=obj.id), many=True).data

    class Meta:
        model = models.Question
        fields = '__all__'

class QuestionPreviewSerializer(serializers.ModelSerializer):
    tags = serializers.SerializerMethodField()
    user = serializers.SerializerMethodField()

    def get_user(self, obj):
        return cUserSerializer(cUser.objects.get(id=obj.user.id)).data

    def get_tags(self, obj):
        return QuestionTagSerializer(models.QuestionTag.objects.filter(question_id=obj.id), many=True).data

    class Meta:
        model = models.Question
        fields = ['id', 'user', 'votes', 'views', 'answers', 'answered', 'title', 'tags']

# ===========================
# Tag Serializers
class QuestionTagSerializer(serializers.ModelSerializer):
    name = serializers.ReadOnlyField(source='tag.name')
    views = serializers.ReadOnlyField(source='tag.views')

    class Meta: 
        model = models.QuestionTag
        fields = ['name', 'views']

class TagSerializer(serializers.ModelSerializer):

    class Meta: 
        model = models.Tag
        fields = '__all__'