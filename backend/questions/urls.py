from django.urls import path
from . import views

urlpatterns = [
    path('', views.QuestionsView.as_view(), name='get-questions'),
    path('<int:question_id>', views.QuestionView.as_view(), name='get-question'),
]