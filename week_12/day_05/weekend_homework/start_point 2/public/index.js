var initialize = function(){

  // create a select dropdown menu
  var createSelectionDropDown = function() {
    var selectTag = document.createElement('select');
    return selectTag;
  }

  var createOptionsTag = function(character) {
    var optionTag = document.createElement('option');
    return optionTag;
  }

  // retrieve the body tag from the document
  var selectBodyTagSelector = function() {
    var bodyTag = document.querySelector('body');
    return bodyTag
  }

  //create the ul tag where to which list items will be appended
  var createUlTag = function() {
    var ulTag = document.createElement('ul');
    ulTag.id = "characters"
    return ulTag;
  }

  // create the li for the character name
  var createLiTag = function(character) {
    var liTag = document.createElement('li');
    liTag.innerText = character.name;
    return liTag;
  }

  //creates the li tag which will append the image item to it
  var createLiImgTag = function(imageTag) {
    var liTag = document.createElement('li');
    var img = createImage(imageTag);
    liTag.appendChild(img);
    return liTag;
  }

  // create the image tag and suply src as character.img
  var createImage = function(character) {
    var imgTag = document.createElement('img');
    imgTag.src = character.image;
    imgTag.height = '200';
    imgTag.width = '150';
    return imgTag
  }

  var displayCharacterInfo = function(event) {
    var divTag = document.createElement('div');
    var nameHeading = document.createElement('h1')
    var imgTag = document.createElement('img')

    var select = event.target;

    console.log(event.target)
    nameHeading.innerText = select.value;

    divTag.appendChild(nameHeading);

    var bodyTag = selectBodyTagSelector()
    bodyTag.appendChild(divTag);
  }

  // creates the ul tag and appends li tags to it
  var renderCharacters = function(characters) {
      var bodyTag = selectBodyTagSelector();
      var ulTag = createUlTag();
      var selectTag = createSelectionDropDown();
      bodyTag.appendChild(selectTag);
      bodyTag.appendChild(ulTag);

      characters.forEach( function(character, index ) {
        character.index = index;
        var option = createOptionsTag(character)
        option.value = character.name;
        option.text = character.name;
        selectTag.appendChild(option);
      })
      selectTag.addEventListener('change', displayCharacterInfo );


      //////////////
      // somewhere in browser-land, the selectTag triggers an event...
      // var superCoolChangeEvent = new Event(blah blah blah)
      // callbackFromIain(superCoolChangeEvent)
      //////////////



      characters.forEach( function(character) {
        var liTag = createLiTag(character);
        var liImgTag = createLiImgTag(character);
        ulTag.appendChild(liTag);
        ulTag.appendChild(liImgTag);
      })
  }

  var url = "http://hp-api.herokuapp.com/api/characters";
  var request = new XMLHttpRequest();
  request.open( "GET", url);
  request.addEventListener("load", function() {
    if(this.status === 200) {
      var characters = JSON.parse(this.responseText);
      renderCharacters(characters);
    }
  })
  request.send();
}

window.addEventListener("load", initialize);
