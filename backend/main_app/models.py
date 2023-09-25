from django.db import models

# Create your models here.

class Card(models.Model):
    name = models.CharField(max_length=100)
    cmc = models.IntegerField()
    colorIdentity = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    cardId = models.CharField(max_length=250)


class Deck(models.Model):
    name = models.CharField(max_length=50)
    cards = models.ManyToManyField(Card)
    
