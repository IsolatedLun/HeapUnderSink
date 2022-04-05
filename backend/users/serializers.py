from rest_framework import serializers
from . import models

class cUserSerializer(serializers.ModelSerializer):
    channel_id = serializers.ReadOnlyField(source='get_channel_id')

    class Meta:
        model = models.cUser
        fields = '__all__'

class cUserSerializerPreview(serializers.ModelSerializer):

    class Meta:
        model = models.cUser
        fields = ['id', 'profile', 'username', 'reputation']