from django.urls import path
from .views import  *
urlpatterns=[
    path('',HomePageView,name='home'),
    path('work/',WorkView,name='work'),]