from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.


class HomeView(TemplateView):
    """
    View to render homepage
    """
    template_name = 'home/index.html'