var functionCaller = function( myCallback, number) {
  return myCallback(number);
}

var increment = function(number) {
  return number += 1;
}

var square = function(number) {
  return number * number;
}

var doSomeMathsForMe = function( n , callback) {
  return (callback(n));
}

console.log(doSomeMathsForMe( 15, square));
console.log(doSomeMathsForMe(3, increment));
