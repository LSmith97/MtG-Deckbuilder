///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require("express");
const { Deck, Card } = require("../models");

///////////////////////////////
// CONTROLLERS
////////////////////////////////

module.exports = {
  create,
};

async function create(req, res) {
    try {
      const deckData = { ...req.body };
      res.json(await Card.create(deckData));
    } catch (error) {
      res.status(400).json(error);
    }
  }