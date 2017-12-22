var requestHelper = require('./helpers/request_helper.js')
var makeFormWork = require('./views/form_view.js')

window.addEventListener('DOMContentLoaded', function() {

  makeFormWork();

  requestHelper.getRequest('http://localhost:3000/api/films', function(films) {
    console.log(films)

    var mainDiv = document.getElementById('main');

    var list = document.createElement('ul');


    films.forEach( function(film) {
      var listItem = document.createElement('li');
      var anotherListItem = document.createElement('li')
      listItem.innerText = 'Title: ' +  film.title;
      anotherListItem.innerText = 'Genre: ' + film.genre;
      list.appendChild(listItem)
      list.appendChild(anotherListItem)
    })


E

    mainDiv.appendChild(list);
  })
})
