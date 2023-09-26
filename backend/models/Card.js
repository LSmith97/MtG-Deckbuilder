///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const mongoose = require("mongoose");
const Schema = mongoose.Schema

///////////////////////////////
// MODELS
////////////////////////////////

const CardSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  cmc: {
    type: Number,
    required: true
  },
  colorIdentity: [String],
  type: {
    type: String,
  },
  id: {
    type: String,
    required: true
  }

},{timestamps: true});

module.exports = mongoose.model("Card", CardSchema);