from rest_framework import serializers
from . import models

class cUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.cUser
        fields = ['id', 'profile', 'username', 'reputation', 'joined_at']

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)

        if password is not None:
            instance.set_password(password)
        instance.save()
        
        return instance

class cUserSerializerPreview(serializers.ModelSerializer):

    class Meta:
        model = models.cUser
        fields = ['id', 'profile', 'username', 'reputation']