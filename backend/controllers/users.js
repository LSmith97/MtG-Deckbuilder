///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require("express");
const { Deck, Card, User} = require("../models");

///////////////////////////////
// CONTROLLERS
////////////////////////////////

module.exports = {
  show,
};

async function show(req, res) {
  try {
    const foundUser = await User.findById(req.params.id)
    const allDecks = await Deck.find({owner: req.params.id})
    const responseData = {user: foundUser, decks: allDecks}
    
    res.json(responseData);
  } catch (error) {
    res.status(400).json(error);
  }
}