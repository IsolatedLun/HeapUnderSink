from responses import OK, ERR
from . import models
from . import serializers
from rest_framework.views import APIView, Response
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

class RegisterView(APIView):
    def post(self, req):
        serializer = serializers.cUserSerializer(data=req.data)

        if serializer.is_valid():
            return Response(data='Created user', status=OK)
        return Response(data='Something went wrong', status=ERR)

class JWTLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, req):
        try:
            user = models.cUser.objects.get(email_address=req.data['email_address'])
            
            if not check_password(req.data['password'], user.password):
                raise Exception()

            refresh = RefreshToken.for_user(user)
            
            return Response({
                'tokens': {
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                },
                'user': serializers.cUserSerializer(user).data
            }, OK)
        except Exception as e:
            print(e)
            return Response({ 'detail': 'Invalid email or password.' }, ERR)