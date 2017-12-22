// function hello() {
//   return "hello everyone";
// }
//
// // console.log("the return value is", hello());

// function mood(name, mood, weather){
//   console.log(name + " you are " + mood + " because it's " + weather);
// }
//
// mood("Iain", "happy", "Summer");

// function add( a, b ){
//   return a + b;
// }
//
// console.log("the result is " + add( 1 , 2));
//
// function sum() {
//   var total = 0;
//   for ( var i = 0; i < arguments.length; i++ ) {
//     total += arguments[i];
//   }
//   return total;
// }
//
// console.log( sum(1,2,3,4,5,6,7));

// var hello = function() {
//   console.log("Hello");
// }
//
// hello();
//
// var mood = function(name, mood, weather) {
//   console.log( name + " you are " + mood + " because it's " + weather)
// }
//
// mood("Iain", "happy", "Summer");

var add = function( a, b){
  return a + b;
}

var wow = function(anything){
  console.log(anything(2,1));
}

wow(add);
