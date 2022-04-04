from numpy import source
from rest_framework import serializers
from . import models

class QuestionSerializer(serializers.ModelSerializer):
    tags = serializers.ReadOnlyField(source='get_tags')

    class Meta:
        model = models.Question
        fields = '__all__'

class QuestionPreviewSerializer(serializers.ModelSerializer):
    tags = serializers.ReadOnlyField(source='get_tags')

    class Meta:
        model = models.Question
        fields = ['id', 'user', 'votes', 'views', 'answers', 'answered', 'title', 'tags']