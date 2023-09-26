///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()
const deckCtrl = require('../controllers/decks')

///////////////////////////////
// ROUTES
////////////////////////////////

//Index
router.get("/", deckCtrl.index)

//Show
router.get("/:id", deckCtrl.show)

//Create
router.post("/", deckCtrl.create);

//Delete
router.delete("/:id", deckCtrl.destroy);

//Update
router.put("/:id", deckCtrl.update);

module.exports = router