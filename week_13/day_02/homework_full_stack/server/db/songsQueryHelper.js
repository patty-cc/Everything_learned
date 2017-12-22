var MongoClient = require('mongodb').MongoClient;

var songsQueryHelper = {
  url: 'mongodb://localhost:27017/music_data',
  all: function(onQueryFinished) {
    MongoClient.connect( this.url, function (err , db) {
      var songsCollection = db.collection('songs');
      songsCollection.find().toArray( function( err, docs) {
        onQueryFinished(docs);
      })
    })
  }
}

module.exports = songsQueryHelper;
