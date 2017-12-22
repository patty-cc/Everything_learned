var Planet = function(name) {
  this.name = name;
}

var saturn = new Planet("Saturn");
var jupiter = new Planet("Jupiter");

console.log(saturn);
console.log(jupiter);



var SolarSystem = function(name) {
  this.name = name;
  this.planets = [];
  this.addPlanet = function(planet) {
    this.planets.push(planet);
  }
}

var milkyway = new SolarSystem('Milkyway')
console.log(milkyway);

milkyway.planets.addPlanet(planet);

console.log(milkyway.planets);
//
// console.log(addPlanet(saturn));
