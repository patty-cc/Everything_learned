var numbers = [ 1, 2, 3, 4, 5];

// for ( var number of numbers) {
//   console.log('the number is ' + number);
// }

// numbers.forEach(function(number) {
//   console.log('this number is ' + number )
// })

var printNumber = function ( number ) {
  console.log('this number is ' + number)
}

// printNumber(10);
// numbers.forEach(printNumber);


var ourForEach = function (array, callback) {
  for (var item of array) {
    callback(item);
  }
}

ourForEach(numbers, printNumber)
