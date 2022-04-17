from ctypes.wintypes import tagSIZE
from users.views import decode_user_id
from responses import OK
from . import models
from . import serializers
from rest_framework.views import APIView, Response
from rest_framework.permissions import IsAuthenticated

class QuestionsView(APIView):
    def get(self, req):
        questions = serializers.QuestionPreviewSerializer(
            models.Question.objects.all().order_by('-created_at'), many=True).data
        return Response(data=questions, status=OK)

class TagsView(APIView):
    def get(self, req):
        tags = serializers.TagSerializer(
            models.Tag.objects.all().order_by('-views'), many=True).data
        return Response(data=tags, status=OK)

class QuestionView(APIView):
    def get(self, req, question_id):
        question = models.Question.objects.get(id=question_id)
        question.views += 1
        question.save()

        question_serializer = serializers.QuestionSerializer(question).data
        
        return Response(data=question_serializer, status=OK)

class AskQuestionView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, req):
        title = req.data['title']
        body = req.data['body']
        tags = req.data['tags']

        id = decode_user_id(req.headers)
        new_question = models.Question.objects.create(title=title, body=body, user_id=id)

        for name in tags:
            tag, created = models.Tag.objects.get_or_create(name=name)
            models.QuestionTag.objects.create(question_id=new_question.id, tag_id=tag.id)

            if not created:
                tag.views += 1
            tag.save()

        return Response(data=serializers.QuestionSerializer(new_question).data, status=OK)

class TopTagsView(APIView):
    def get(self, req):
        tags = models.Tag.objects.order_by('-views')

        if len(tags) > 10:
            tags = tags[:10]
        
        serializer = serializers.TagSerializer(tags, many=True).data

        return Response(data=serializer, status=OK)