
# object/serializers.py

from rest_framework import serializers
from .models import Student, PersonalData
from .models import Business
from .models import SNO
from .models import Main, News

class TodoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Student
    fields = ('id', 'name', 'family', 'father', 'image', 'age', 'exp', 'speciality', 'sno', 'git')
class BusinessSerialazer(serializers.ModelSerializer):
  class Meta:
    model = Business
    fields = ("name", "description", "directions", "experience", "link", "task", "img")
class SNOSerialazer(serializers.ModelSerializer):
  class Meta:
    model = SNO
    fields = ("name", "faculty", "leader", "description", "link", "img")
class MainPageSerializer(serializers.ModelSerializer):
  class Meta:
    model = Main
    fields = ("description", "img", "phone", "email", "address", "link_1", "link_2", "link_3")

class NewsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Main
    fields = ("header", "text", "date")

class PersonalDataSerializer(serializers.Serializer):

    Username = serializers.CharField(default='', max_length=30)
    is_staff = serializers.BooleanField(default=False)
    is_active = serializers.BooleanField(default=True)
    password = serializers.CharField(max_length=100, default='')
    state = serializers.CharField(default='', max_length=20)

    def create(self, validated_data):
        return PersonalData.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.Username = validated_data.get('Username', instance.Username)
        instance.is_staff = validated_data.get('is_staff', instance.is_staff)
        instance.is_active = validated_data.get('is_active', instance.is_active)
        instance.password = validated_data.get('password', instance.password)
        instance.state = validated_data.get('state', instance.state)
        instance.save()
        return instance
