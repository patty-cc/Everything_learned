var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index , 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var squared = arr.map(function(number) {
			return number * number;
		});
		return squared;
	},

	sum: function (arr) {
		var total = arr.reduce(function(sum, value) {
			return sum + value;
		}, 0);
		return total;
	},

	findDuplicates: function (arr) {
		var newArr = [];
		arr.forEach(function( element, index) {
			if (arr.indexOf(element, index +1) > -1) {
				if (newArr.indexOf(element) === -1 ) {
					newArr.push(element);
				}
			}
		})
		return newArr;
	},

	removeAndClone: function (arr, valueToRemove) {
		var keepNumbers = [];
		arr.forEach( function(value) {
			if (value !== valueToRemove){
				keepNumbers.push(value);
			}
		})
		return keepNumbers;
	},

	findIndexesOf: function (arr, itemToFind) {
		var indexNumbers = [];
		for( i = 0; i < arr.length; i++ ){
			if(arr[i] == itemToFind) {
				indexNumbers.push(i);
			}
		}
		return indexNumbers;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var numbersToSquare = [];

		arr.filter(function(number) {
			if( number % 2 === 0 ) {
				numbersToSquare.push(number);
			}
		});
		var squared = numbersToSquare.map(function(number) {
			return number * number;
		});
		var sum = squared.reduce(function(runningTotal, currentElement) {
			return runningTotal + currentElement
		}, 0)
		return sum;
	}

}

module.exports = arrayTasks
