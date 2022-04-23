from users.views import decode_user_id
from responses import OK
from . import models
from . import serializers
from rest_framework.views import APIView, Response
from rest_framework.permissions import IsAuthenticated

# ================
# Question Views
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
        user_id = decode_user_id(req.headers)
        question = models.Question.objects.get(id=question_id)

        question.views += 1
        question.save()

        question_serializer = serializers.QuestionSerializer(question).data
        if user_id:
            question_serializer['rate_type'] = models.Question.get_rate_type(question, user_id)
            for x in question_serializer['answers']:
                x['rate_type'] = models.Answer.get_rate_type(x, user_id)
            
        
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

class RateObject(APIView):
    def post(self, req, object_id):
        obj = None
        user_id = decode_user_id(req.headers)

        if req.data['model'] == 'question':
            obj = models.Question.objects.get(id=object_id)
        elif req.data['model'] == 'answer':
            obj = models.Answer.objects.get(id=object_id)
        
        obj.votes = req.data['votes']
        obj.save()

        rated_object, created = models.RatedObject.objects.get_or_create(
            object_id=object_id,
            user_id=user_id
        )

        rated_object.rate_type = req.data['rateType']
        rated_object.save() 

        return Response(data='Rated object', status=OK)

class AcceptAnswerView(APIView):
    def post(self, req, question_id):
        answer_id = req.data['answer_id']

        question = models.Answer.objects.get(id=question_id)
        answer = models.Answer.objects.get(id=answer_id)

        question.answered = True
        answer.is_answer = True

        question.save()
        answer.save()

        return Response(data='Accepted answer', status=OK)

# ================
# Answer Views
class PostAnswerView(APIView):
    def post(self, req, question_id):
        user_id = decode_user_id(req.headers)

        answer = models.Answer.objects.create(body=req.data['answer'], user_id=user_id,
            question_id=question_id)

        return Response(data='Created answer.', status=OK)

# ================
# Tag Views
class TopTagsView(APIView):
    def get(self, req):
        tags = models.Tag.objects.order_by('-views')

        if len(tags) > 10:
            tags = tags[:10]
        
        serializer = serializers.TagSerializer(tags, many=True).data

        return Response(data=serializer, status=OK)