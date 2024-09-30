
# object/models.py

from django.db import models
from .managers import CustomUserManager
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
# Create your models here.

# add this
class Student(models.Model):
  name = models.CharField(default='', max_length=120)
  family = models.CharField(default='', max_length=120)
  father = models.CharField(default='', max_length=120)
  image = models.CharField(default='', max_length=320)
  age = models.CharField(default='', max_length=120)
  adult = models.CharField(default='', max_length=6)
  exp = models.CharField(default='', max_length=120)
  speciality = models.CharField(default='', max_length=120)
  sno = models.CharField(default='', max_length=120)
  git = models.CharField(default='', max_length=320)
  sex = models.CharField(default='', max_length=50)

  def __str__(self):
    return self.name
class Business(models.Model):
  name = models.CharField(default='', max_length=320)
  description = models.CharField(default='', max_length=520)
  directions = models.CharField(default='', max_length=120)
  experience = models.CharField(default='', max_length=50)
  link = models.CharField(default='', max_length=320)
  task = models.CharField(default='', max_length=1020)
  img = models.CharField(default='', max_length=320)

  def __str__(self):
    return self.name
class SNO(models.Model):
  name = models.CharField(default='', max_length=320)
  faculty = models.CharField(default='', max_length=50)
  leader = models.CharField(default='', max_length=50)
  description = models.CharField(default='', max_length=520)
  link = models.CharField(default='', max_length=320)
  img = models.CharField(default='', max_length=320)

  def __str__(self):
    return self.name

class News(models.Model):
  header = models.CharField(default='', max_length=320)
  text = models.CharField(default='', max_length=2520)
  date = models.CharField(default='', max_length=320)

  def __str__(self):
    return self.header

class Main(models.Model):
  description = models.CharField(default='', max_length=2520)
  img = models.CharField(default='', max_length=320)
  phone = models.CharField(default='', max_length=20)
  email = models.CharField(default='', max_length=320)
  address = models.CharField(default='', max_length=320)
  link_1 = models.CharField(default='', max_length=320)
  link_2 = models.CharField(default='', max_length=320)
  link_3 = models.CharField(default='', max_length=320)

  def __str__(self):
    return self.description

class PersonalData(AbstractBaseUser, PermissionsMixin):
    Username = models.CharField(default='', max_length=30, unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    password = models.CharField(max_length=100, default='')
    state = models.CharField(default='', max_length=20)
    USERNAME_FIELD = 'Username'
    REQUIRED_FIELDS = []
    objects = CustomUserManager()

    def __str__(self):
        return self.Username
