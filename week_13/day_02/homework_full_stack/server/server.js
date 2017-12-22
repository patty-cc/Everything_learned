var express = require('express');
var app = express();

var musicRouter = require('./controllers/songs_controller.js');

app.use('/api/songs', musicRouter);

app.listen( 3000, function() {

});
