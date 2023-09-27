///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require("express");
const { Deck, Card } = require("../models");

///////////////////////////////
// CONTROLLERS
////////////////////////////////

module.exports = {
  index,
  show,
  create,
  destroy,
  update,
};

async function index(req, res, next) {
  try {
    res.json(await Deck.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
}

async function show(req, res) {
  try {
    foundDeck = await Deck.findById(req.params.id)
    res.json(foundDeck);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function create(req, res) {
  try {
    const deckData = { ...req.body };
    res.json(await Deck.create(deckData));
  } catch (error) {
    res.status(400).json(error);
  }
}

async function destroy(req, res) {
  try {
    res.json(await Deck.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
}

async function update(req, res) {
  try {
    res.json(
      await Deck.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
}