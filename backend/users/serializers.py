from rest_framework import serializers
from . import models

class cUserSerializer(serializers.ModelSerializer):
    questions = serializers.SerializerMethodField()
    joined_at = serializers.DateTimeField(format="%b %d, %Y")

    def get_questions(self, obj):
        from questions.models import Question
        from questions.serializers import QuestionBaseSerializer

        questions = Question.objects.filter(user_id=obj.id)
        return QuestionBaseSerializer(questions, many=True).data

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)

        if password is not None:
            instance.set_password(password)
        instance.save()
        
        return instance
    
    class Meta:
        model = models.cUser
        fields = ['id', 'profile', 'username', 'reputation', 'questions',
        'is_staff', 'is_superuser', 'joined_at']
        

class cUserSerializerPreview(serializers.ModelSerializer):
    class Meta:
        model = models.cUser
        fields = ['id', 'profile', 'username', 'reputation']