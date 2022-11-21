import json
from django.core.paginator import Paginator
from django.shortcuts import render
from django.views.generic import TemplateView, ListView
from .models import Score
from .forms import ScoreForm
from django.http import JsonResponse

# Create your views here.


def game_view(request):
    """
    View to render game page
    """
    scores = Score.objects.all()

    context = {
        'scores': scores,
    }

    return render(request, 'game/index.html', context)


def add_score(request):
    '''
    Add score to the highscore board
    '''

    if request.method == 'POST':

        number = Score()

        request_body = json.loads(request.body)
        score = request_body['score']
        number.score = score
        number.name = request.user
        number.save()
        numbers = Score.objects.all().values()
    
    scores = Score.objects.all()
    paginator = Paginator(scores, 7) # Show 7 scores per page.
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    context = {
        'scores': scores,
        'page_obj': page_obj,
    }

    return render(request, 'game/score.html', context)


def rules(request):
    """ A view to see the game rules """

    return render(request, 'game/rules.html')
