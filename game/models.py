from django.db import models
from django.contrib.auth.models import User


class Score(models.Model):
    """ A model to keep user scores"""

    name = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='user_score')
    score = models.IntegerField()
    created_on = models.DateTimeField(auto_now=True)

    class Meta:
        """ order by score """
        ordering = ['-score']

    def __str__(self):
        return f"{self.name}"
