var MongoClient = require('mongodb').MongoClient;

var filmsQueryHelper = {
  url: 'mongodb://localhost:27017/film_reviews_site',
  all: function (onQueryFinished) {

    MongoClient.connect( this.url, function ( err, db ) {

      var filmsCollection = db.collection('films');

       filmsCollection.find().toArray( function ( err, docs ) {

        onQueryFinished(docs);
      });
    })

  },
  save: function( filmData, onQueryFinished) {

    MongoClient.connect(this.url, function(err, db) {

      var filmsCollection = db.collection('films');

      filmsCollection.insert(filmData)

      filmsCollection.find().toArray( function ( err, docs ) {
        onQueryFinished(docs);
      })
    })
  }
}

module.exports = filmsQueryHelper;
