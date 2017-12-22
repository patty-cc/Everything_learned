var initialize = function(){

  var createLiTags = function(character) {
    var liTag = document.createElement('li');
    liTag.innerText = character.name;
    return liTag;
  }

  var renderCharacters = function(characters){
    var ulTag = document.querySelector('ul#characters');
    characters.forEach( function(character) {
      var liTag = createLiTags(character)
      ulTag.appendChild(liTag);
    })
  }

  var url = "http://hp-api.herokuapp.com/api/characters";
  var request = new XMLHttpRequest();
  request.open( "GET", url );
  request.addEventListener("load", function() {
    if(this.status === 200) {
      var characters = JSON.parse(this.responseText);
      renderCharacters(characters);
    }
  })
  request.send();
}

window.addEventListener("load", initialize);
