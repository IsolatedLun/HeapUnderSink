from django.urls import path
from . import views

urlpatterns = [
    path('', views.QuestionsView.as_view(), name='get-questions'),
    path('<int:question_id>', views.QuestionView.as_view(), name='get-question'),
    path('ask', views.AskQuestionView.as_view(), name='post-ask-question'),
    path('answer/<int:question_id>', views.PostAnswerView.as_view(), name='post-answer-question'),
    path('rate/<int:object_id>', views.RateObject.as_view(), name='post-rate-object'),
    path('answer/<int:question_id>/accept', views.AcceptAnswerView.as_view(), name='post-accept-answer'),
     path('report/<int:question_id>', views.ReportQuestion.as_view(), name='post-accept-answer'),

    path('tags', views.TagsView.as_view(), name='get-tags'),
    path('tags/top', views.TopTagsView.as_view(), name='get-top-tags')
]