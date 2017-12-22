var express = require("express");
var app = express();
app.use( express.static( "public") )


app.get('/', function(req, res) {
  res.json({ data: "Hello World!",})
});

app.get('/home', function(req, res) {
  res.sendFile( __dirname + '/index.html')
});

app.listen(3000, function() {
  console.log("app running on port 3000")
})