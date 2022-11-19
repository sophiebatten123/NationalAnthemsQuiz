from scores.models import Score
from django import forms


class ScoreForm(forms.ModelForm):
    """ A form for the scoreborad """
    class Meta:
        model = Score
        fields = ('name', 'score',)
