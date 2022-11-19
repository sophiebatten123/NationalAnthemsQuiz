from django.shortcuts import render
from django.views.generic import ListView
from .models import Score


class ScoreView(ListView):
    model = Score
    queryset = Score.objects.order_by('score')
    template_name = 'scores/scores.html'


    
