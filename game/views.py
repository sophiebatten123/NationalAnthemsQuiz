from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.


class GameView(TemplateView):
    """
    View to render game page
    """
    template_name = 'game/game.html'
