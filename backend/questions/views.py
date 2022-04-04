from responses import OK
from . import models
from . import serializers
from rest_framework.views import APIView, Response

class QuestionsView(APIView):
    def get(self, req):
        questions = serializers.QuestionPreviewSerializer(models.Question.objects.all(), many=True).data
        return Response(data=questions, status=OK)
