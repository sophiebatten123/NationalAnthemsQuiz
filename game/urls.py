from django.urls import path
from game.views import GameView


urlpatterns = [
    path('', GameView.as_view(), name='index')
    ]
