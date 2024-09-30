
# object/admin.py

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import Student, SNO # add this
from .models import Business
from .models import Main, News, PersonalData


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = PersonalData
    list_display = ('Username', 'is_staff', 'is_active',)
    list_filter = ('Username', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('state', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('state', 'password1', 'password2', 'is_staff', 'is_active')}
        ),
    )
    search_fields = ('Username',)
    ordering = ('Username',)
admin.site.register(PersonalData, CustomUserAdmin)

class StudentAdmin(admin.ModelAdmin):  # add this
  list_display = ('name', 'family', 'father', 'image', 'age', 'exp', 'speciality', 'sno', 'git') # add this
class BusinessAdmin(admin.ModelAdmin):
  list_display = ("name", "description", "directions", "experience", "link", "task", "img")
class SNOAdmin(admin.ModelAdmin):
  list_display = ("name", "faculty", "leader", "description", "link", "img")
class MainPageAdmin(admin.ModelAdmin):
  list_display = ("description", "img", "phone", "email", "address", "link_1", "link_2", "link_3")
class NewsAdmin(admin.ModelAdmin):
  list_display = ("header", "text", "date")
# Register your models here.
admin.site.register(Business, BusinessAdmin) # add this
admin.site.register(SNO, SNOAdmin) # add this
admin.site.register(Student, StudentAdmin) # add this
admin.site.register(Main, MainPageAdmin) # add this
admin.site.register(News, NewsAdmin) # add this
