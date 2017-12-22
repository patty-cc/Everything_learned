
var htmlSetup = function () {
  var sceneDiv = document.createElement('div')
  sceneDiv.className = "scene"
  document.body.appendChild(sceneDiv)

  var bookArticle = document.createElement('article')
  bookArticle.className = "book"
  sceneDiv.appendChild(bookArticle)

  var pageSection = document.createElement('section')
  pageSection.className = "page active"
  bookArticle.appendChild(pageSection)

    var frontDiv = document.createElement('div')
    frontDiv.className = "front"

    pageSection.appendChild(frontDiv)


      var h1 = document.createElement('h1')
      frontDiv.appendChild(h1)
      h1.innerText = "Hello Front"

      var p = document.createElement('p')
      frontDiv.appendChild(p)

var animals = ["Animal 1", "Animal 2", "Animal 3"]
for (animal of animals) {



    var backDiv = document.createElement('div')
    backDiv.className = "back"
    pageSection.appendChild(backDiv)

      var animalImg = document.createElement('img')
      animalImg.id = "animal-img"
      backDiv.appendChild(animalImg)

      var animalImgText = document.createElement('p')
      animalImgText.id = "animal-name"
      backDiv.appendChild(animalImgText)

  var pageSection = document.createElement('section')
  pageSection.className = "page"
  bookArticle.appendChild(pageSection)

    var frontDiv = document.createElement('div')
    frontDiv.className = "front"
    pageSection.appendChild(frontDiv)


      var animalType = document.createElement('div')
      animalType.id = "animal-type"
      frontDiv.appendChild(animalType)
        var infoHeading = document.createElement('p')
        infoHeading.id = 'infoHeading'
        infoHeading.innerText = "Type of Animal"
        animalType.appendChild(infoHeading)
        var animalTypeText = document.createElement('p')
        animalTypeText.id = "animal-type-text"
        animalTypeText.innerText = animal
        animalType.appendChild(animalTypeText)

      var animalGroup = document.createElement('div')
      animalGroup.id = "animal-group"
      frontDiv.appendChild(animalGroup)
        var infoHeading = document.createElement('p')
        infoHeading.id = 'infoHeading'
        infoHeading.innerText = "Group Name"
        animalGroup.appendChild(infoHeading)
        var animalGroupText = document.createElement('p')
        animalGroupText.id = "animal-group-text"
        animalGroupText.innerText = animal
        animalGroup.appendChild(animalGroupText)

      var animalFunFact = document.createElement('div')
      animalFunFact.id = "animal-fun-fact"
      frontDiv.appendChild(animalFunFact)
        var infoHeading = document.createElement('p')
        infoHeading.id = 'infoHeading'
        infoHeading.innerText = "Fun Fact"
        animalFunFact.appendChild(infoHeading)
        var animalFunFactText = document.createElement('p')
        animalFunFactText.id = "animal-fun-fact-text"
        animalFunFactText.innerText = animal
        animalFunFact.appendChild(animalFunFactText)


}

    var backDiv = document.createElement('div')
    backDiv.className = "back"
    pageSection.appendChild(backDiv)

      var h1 = document.createElement('h1')
      backDiv.appendChild(h1)
      h1.innerText = "Hello back"

      var p = document.createElement('p')
      backDiv.appendChild(p)


}






htmlSetup()

var page = 0;
var forwards = true;

var updatePages = function() {
  var pages = document.querySelectorAll(".page");
  pages.forEach(function(element, index) {
    if (page === index) {
      element.className = "page active";
    } else if (index < page) {
      element.className = "page flipped";
    } else {
      element.className = "page";
    }
  });
};

// document.querySelector('fwd-button').addEventListener('click', function(event) {
//   page++
//   updatePages();
// })



document.querySelector(".book").addEventListener("click", function(event) {
  if (event.target.className.includes("front")) {
    page++;
    updatePages();
  } else {
    page--;
    updatePages();
  }
});
