var filmsQueryHelper = require('../db/filmsQueryHelper.js');
var express = require('express');
var filmsRouter = express.Router()

filmsRouter.get('/', function (req, res) {

  filmsQueryHelper.all( function( films ) {

    res.json(films)
  })
})

filmsRouter.post('/', function (req, res) {
  var film = req.body

  filmsQueryHelper.save(film, function(updatedFilms) {
    res.json(updatedFilms)
  });
})

module.exports = filmsRouter;
