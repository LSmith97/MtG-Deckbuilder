///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const mongoose = require("mongoose");
const Schema = mongoose.Schema

///////////////////////////////
// MODELS
////////////////////////////////

const DeckSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cardList: [{
    id: {
      type: Schema.Types.ObjectId,
      ref: 'Card',
    },
    image: String,
    number: Number,
  }]
},{timestamps: true});

module.exports = mongoose.model("Deck", DeckSchema);