from django.urls import path
from . import views


urlpatterns = [
    path('scores/', views.ScoreView.as_view(), name='scores')
    ]
