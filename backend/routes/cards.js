///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()
const cardCtrl = require('../controllers/cards')

///////////////////////////////
// ROUTES
////////////////////////////////

//Create
router.post("/", cardCtrl.create);

module.exports = router