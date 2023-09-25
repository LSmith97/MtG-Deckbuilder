from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DeckSerializer, CardSerializer
from .models import Deck, Card

# Create your views here.

class DeckView(viewsets.ModelViewSet):
    serializer_class = DeckSerializer
    queryset = Deck.objects.all()

class CardView(viewsets.ModelViewSet):
    serializer_class = CardSerializer
    queryset = Card.objects.all()