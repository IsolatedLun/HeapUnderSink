import json
from time import sleep
from channels.generic.websocket import WebsocketConsumer
from .models import Notification
from .serializers import NotificationSerializer

class WSNotificationView(WebsocketConsumer):
    def connect(self):
        self.accept();
    
    def receive(self, text_data=None, bytes_data=None):
        data = json.loads(text_data)

        notifications = Notification.objects.filter(receiver=data['user_id']).order_by('-created_at')

        if data['read'] == True:
            for x in notifications:
                x.read = True
                x.save()

        serializer = NotificationSerializer(notifications, many=True).data

        self.send(json.dumps(serializer))