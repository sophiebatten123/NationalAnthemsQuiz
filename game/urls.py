from django.urls import path
from . import views


urlpatterns = [
    path('', views.game_view, name='game_view'),
    path('add_score/', views.add_score, name='add_score'),
    ]
