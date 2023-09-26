///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const mongoose = require("mongoose");
const Schema = mongoose.Schema

///////////////////////////////
// MODELS
////////////////////////////////

const DeckSchema = new Schema({
  name: String,
  cardList: [{
    type: Schema.Types.ObjectId,
    ref: 'Card'
  }]
},{timestamps: true});

module.exports = mongoose.model("Deck", DeckSchema);