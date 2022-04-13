from backend.responses import ERR
from responses import OK
from . import models
from . import serializers
from rest_framework.views import APIView, Response

class RegisterView(APIView):
    def post(self, req):
        serializer = serializers.cUserSerializer(data=req.data)

        if serializer.is_valid():
            return Response(data='Created user', status=OK)
        return Response(data='Something went wrong', status=ERR)