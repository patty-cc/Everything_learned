var init = function () {
  var url = "https://restcountries.eu/rest/v2/all"
  makeRequest(url);
  var jsonString = localStorage.getItem('country');
  var savedCountry = JSON.parse(jsonString);
  if (!savedCountry) return;
  this.layOutCountry(savedCountry);
}

var makeRequest = function(url) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener( "load", function() {
    var countries = JSON.parse(this.responseText);
    addCountriesToDropDown( countries );
  });
  request.send();
}

var addCountriesToDropDown = function(countries) {
  var select = document.querySelector('#country-drop-down');
  countries.forEach(function(country, index) {
    var option = document.createElement("option");
    option.innerText = country.name;
    option.value = index;
    select.appendChild(option);
  })
  select.addEventListener('change', function() {
    layOutCountry(countries[this.value])
    var jsonString = JSON.stringify(countries[this.value]);
    localStorage.setItem('country', jsonString);
  });
}

var layOutCountry = function(country) {
  var mapDiv = document.querySelector('#main-map')
  mapDiv.innerHTML = "";
  var div = document.querySelector('#individual-country');
  div.innerHTML = "";
  var nameHeading = document.createElement("h2");
  nameHeading.innerText = country.name;
  var populationP = document.createElement("p");
  populationP.innerText = "The population of " + country.name + " is " + country.population
  var capitalCityP = document.createElement("p");
  capitalCityP.innerText = "The capital of " + country.name + " is " + country.capital
  div.appendChild(nameHeading);
  div.appendChild(populationP);
  div.appendChild(capitalCityP);
  var center = {lat: country.latlng[0], lng: country.latlng[1]}
  if (country.area > 1000000) {
    zoom = 1
  }
  if (750000 < country.area < 1000000) {
    zoom = 3
  }
  if (80000 < country.area < 750000) {
    zoom = 5
  }
  if (12000 < country.area < 80000) {
    zoom = 7
  }
  if (country.area <= 8000) {
    zoom = 10
  }
 
}


window.addEventListener('load', init);
