// this function takes the api web address and saves it to the url variable
var app = function(){
  var url = "https://api.punkapi.com/v2/beers";
  makeRequest( url);
}

var makeRequest = function(url){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', function() {
    var beers = JSON.parse(this.responseText);
    addToBeerList( beers );
  });
  request.send();
}

var addToBeerList = function( beers ) {
  var list = document.getElemnetById('#beer-list');
  beers.forEach( function(beer, index){
    var listItem = document.createElement('li');
    listItem.innerText = beer.name;
    listItem.value = index;
    list.appendChild('listItem');
  })
}

window.addEventListener('load', app);
