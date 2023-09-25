from rest_framework import serializers
from .models import Card, Deck

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ('name', 'cmc', 'colorIdentity', 'type', 'cardId')

class DeckSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deck
        fields = ('name', 'cards')