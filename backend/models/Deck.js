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
      ref: 'Card',
      required: true
    },
    image: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    }
  }]
},{timestamps: true});

module.exports = mongoose.model("Deck", DeckSchema);