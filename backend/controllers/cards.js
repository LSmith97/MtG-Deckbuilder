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
      const cardData = { ...req.body };
      // Checks to see if a card already exists in the database.
      // If it does, sends that Card's data
      // Otherwise, Creates a new card and sends that data
      const foundCard = await Card.exists({ id: cardData.id})
      if (foundCard) {
        res.json(await Card.findOne({ id: cardData.id}));
      } else {
        res.json(await Card.create(cardData));
      }
    } catch (error) {
      res.status(400).json(error);
    }
  }
