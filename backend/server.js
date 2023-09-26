///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
require("dotenv").config();


// start the mongoose db connection
require('./config/db.connection.js');

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env;

// import express
const express = require("express");

// create application object
const app = express();

const cors = require("cors")
const morgan = require("morgan")

//Routers
const deckRouter = require('./routes/decks');
const cardRouter = require('./routes/cards')

///////////////////////////////
// Middleware
////////////////////////////////

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors());
app.use(morgan("dev"));

///////////////////////////////
// Routes
////////////////////////////////

app.use('/decks', deckRouter)
app.use('/cards', cardRouter)

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

