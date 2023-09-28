///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/users')

///////////////////////////////
// ROUTES
////////////////////////////////

//Show

router.get("/:id", userCtrl.show)

module.exports = router