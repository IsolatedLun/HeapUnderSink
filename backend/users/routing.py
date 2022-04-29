from django.urls import path
from .consumers import WSNotificationView

ws_urlpatterns = [
    path('ws/notifications/', WSNotificationView.as_asgi())
]