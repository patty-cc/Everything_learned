var songsQueryHelper = require('../db/songsQueryHelper.js');
var express = require('express');
var songsRouter = express.Router();

songsRouter.get('/', function( req, res) {

  songsQueryHelper.all( function( songs ) {
    res.json(songs);
  })
})

module.exports = songsRouter;
