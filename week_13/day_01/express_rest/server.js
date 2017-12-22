var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({extended: true}) );

var catsRouter = require('./cats_controller.js')

app.get('/', function(req, res) {
  res.json({ data: 'Welcome' });
});

app.use('/cats', catsRouter)

app.listen( 3000, function() {
  console.log('Server running on port ' + this.address().port);
});
