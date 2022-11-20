import json
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
        paginate_by = 10
        number.save()

        numbers = Score.objects.all().values()

    scores = Score.objects.all()

    context = {
        'scores': scores,
    }

    return render(request, 'game/score.html', context)


def rules(request):
    """ A view to see the game rules """

    return render(request, 'game/rules.html')
