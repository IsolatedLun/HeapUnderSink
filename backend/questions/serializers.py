from numpy import source
from rest_framework import serializers
from . import models

class QuestionSerializer(serializers.ModelSerializer):
    tags = serializers.ReadOnlyField(source='get_tags')
    user = serializers.ReadOnlyField(source='get_user')
    modified_at = serializers.DateTimeField(format="%b %d, %Y")
    created_at = serializers.DateTimeField(format="%b %d, %Y")

    class Meta:
        model = models.Question
        fields = '__all__'

class QuestionPreviewSerializer(serializers.ModelSerializer):
    tags = serializers.ReadOnlyField(source='get_tags')
    user = serializers.ReadOnlyField(source='get_user_preview')

    class Meta:
        model = models.Question
        fields = ['id', 'user', 'votes', 'views', 'answers', 'answered', 'title', 'tags']