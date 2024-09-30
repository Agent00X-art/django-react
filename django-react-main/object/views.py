
# object/views.py
from django.http import HttpResponse

from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer, MainPageSerializer, SNOSerialazer
from .serializers import BusinessSerialazer, NewsSerializer, PersonalDataSerializer
from .models import Student, PersonalData
from .models import Business
from .models import SNO
from .models import Main, News
from django.db.models import Q
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.hashers import make_password

class TodoView(viewsets.ModelViewSet):
  serializer_class = TodoSerializer
  queryset = Student.objects.all()

class BusinessView(viewsets.ModelViewSet):
  serializer_class = BusinessSerialazer
  queryset = Business.objects.all()

class SNOView(viewsets.ModelViewSet):
  serializer_class = SNOSerialazer
  queryset = SNO.objects.all()

class MainPageView(viewsets.ModelViewSet):
  serializer_class = MainPageSerializer
  queryset = Main.objects.all()

class NewsView(viewsets.ModelViewSet):
  serializer_class = NewsSerializer
  queryset = News.objects.all()

class SortAllNews(APIView):
    def patch(self, request):
         try:
             products = News.objects.all()
             return Response(products.values())
         except:
            return Response('Технические работы')

class SortAll(APIView):
    def patch(self, request):
         try:
             products = Student.objects.all()
             query = Q()
             products = products.filter(query)
             lookup = request.data['sort_by'].split()
             if ';' in request.data['key']:
                 counter = 0
                 for c in request.data['key'].split(';'):
                     if ',' in c:
                         query = Q()
                         for h in c.split(','):
                             query |= Q(**{lookup[counter]: h})
                         products = products.filter(query)
                     else:
                         products = products.filter(**{lookup[counter]: c})
                     counter += 1
             else:
                 if ',' in request.data['key']:
                     query = Q()
                     for h in request.data['key'].split(','):
                         query |= Q(**{lookup[0]: h})
                     products = products.filter(query)
                 else:
                     products = products.filter(**{lookup[0]: request.data['key']})
             return Response(products.values())
         except:
                return Response('Технические работы')

class SortAllB(APIView):
    def patch(self, request):
         try:
             products = Business.objects.all()
             query = Q()
             products = products.filter(query)
             lookup = request.data['sort_by'].split()
             if ';' in request.data['key']:
                 counter = 0
                 for c in request.data['key'].split(';'):
                     if ',' in c:
                         query = Q()
                         for h in c.split(','):
                             query |= Q(**{lookup[counter]: h})
                         products = products.filter(query)
                     else:
                         products = products.filter(**{lookup[counter]: c})
                     counter += 1
             else:
                 if ',' in request.data['key']:
                     query = Q()
                     for h in request.data['key'].split(','):
                         query |= Q(**{lookup[0]: h})
                     products = products.filter(query)
                 else:
                     products = products.filter(**{lookup[0]: request.data['key']})
             return Response(products.values())
         except:
                return Response('Технические работы')

class SortAllSNO(APIView):
    def patch(self, request):
         try:
             products = SNO.objects.all()
             query = Q()
             products = products.filter(query)
             lookup = request.data['sort_by'].split()
             if ';' in request.data['key']:
                 counter = 0
                 for c in request.data['key'].split(';'):
                     if ',' in c:
                         query = Q()
                         for h in c.split(','):
                             query |= Q(**{lookup[counter]: h})
                         products = products.filter(query)
                     else:
                         products = products.filter(**{lookup[counter]: c})
                     counter += 1
             else:
                 if ',' in request.data['key']:
                     query = Q()
                     for h in request.data['key'].split(','):
                         query |= Q(**{lookup[0]: h})
                     products = products.filter(query)
                 else:
                     products = products.filter(**{lookup[0]: request.data['key']})
             return Response(products.values())
         except:
                return Response('Технические работы')
class LoginView(APIView): # запросы для персональных данных
    def post(self, request):
        try:
            m = PersonalData.objects.get(Username=request.data['Username'])
            if m.check_password(request.data['password']):
                response = HttpResponse('Вы авторизованы!')
                request.session['username'] = m.Username
                response.set_cookie(key='session', value=str(m.Username), httponly=False, samesite='None', secure=True, max_age=108000)
                return response
                #return Response('Вы авторизованы.')
            else:
                return Response("Ваши логин и пароль не соответствуют.")
        except:
            return Response("Ваши логин и пароль не соответствуют.")

class LogoutView(APIView):
    def post(self, request):
        response = Response({"status":'Вы вышли.'})
        try:
            response.delete_cookie(PersonalData.objects.get(Phone=request.data['Phone']).values()['Phone'])
        except:
            pass
        response.set_cookie(key='session', value='None', max_age=1, httponly=False, samesite='None', secure=True, expires='Thu, 01-Jan-1970 00:00:00 GMT')
        response.set_cookie(key='sessionid', value='None', max_age=1, httponly=False, samesite='None', secure=True, expires='Thu, 01-Jan-1970 00:00:00 GMT')
        request.session['username'] = 'anon'
        return Response("Вы вышли.")

class PersonalDataView(APIView):
    def post(self, request):
        personal = request.data
        serializerPerson = PersonalDataSerializer(data=personal)
        if serializerPerson.is_valid(raise_exception=True):
            password = serializerPerson.validated_data.get('password')
            serializerPerson.validated_data['password'] = make_password(password)
            new_user = serializerPerson.save()
            return Response({"success": "Personals '{}' created successfully".format(new_user.Username)})
