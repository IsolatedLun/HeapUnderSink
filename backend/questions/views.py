from responses import OK
from . import models
from . import serializers
from rest_framework.views import APIView, Response

class QuestionsView(APIView):
    def get(self, req):
        questions = serializers.QuestionPreviewSerializer(models.Question.objects.all(), many=True).data
        return Response(data=questions, status=OK)

class QuestionView(APIView):
    def get(self, req, question_id):
        question = models.Question.objects.get(id=question_id)
        question_serializer = serializers.QuestionSerializer(question).data

        

        return Response(data=question_serializer, status=OK)