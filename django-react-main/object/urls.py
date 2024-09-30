from django.urls import path
from .views import SortAll
from  .views import SortAllB, SortAllSNO, PersonalDataView, LoginView, LogoutView, SortAllNews
app_name = "object"

# ссылки для персональных данных и объявлений под страницу

urlpatterns = [
    path('sorting', SortAll.as_view()),
    path('sortingbusiness', SortAllB.as_view()),
    path('sortingsno', SortAllSNO.as_view()),
    path('createuser', PersonalDataView.as_view()),
    path('login', LoginView.as_view()),
    path('logout', LogoutView.as_view()),
    path('sortingnews', SortAllNews.as_view()),
]
