var greeting = function(first_name, last_name) {
  console.log("Howdy, I am " + first_name + " " + last_name);
}
greeting("Iain", "Paterson");



var multiply = function( a, b) {
  return a * b ;
}
console.log(multiply(3, 4));



var arrayFunc = function( array ) {
  console.log( array[0]);
}
arrayFunc(["dog", "cat", "fish"]);



var nameList = function( ) {
    for (var argument of arguments ){
      console.log(argument);
    }
}

nameList( 1, "Iain");

var animals = [ "Cow", "Horse", "Penguin", "Monkey"]
var farm = ["Dog"]

var addToFarm = function( animals ){

  for (i = 0; i < animals.length; i++ ){
    farm.push(animals[i]);
  }
  return farm;
}

console.log(addToFarm(animals));
