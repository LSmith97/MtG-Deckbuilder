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
    id: {
      type: Schema.Types.ObjectId,
      ref: 'Card'
    },
    number: Number
  }]
},{timestamps: true});

module.exports = mongoose.model("Deck", DeckSchema);