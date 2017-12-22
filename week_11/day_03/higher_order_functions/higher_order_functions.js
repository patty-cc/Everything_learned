// setTimeout(function() {
//   console.log("I waited for 1 second");
// }, 1000);

var logJaguar = function(message) {
  console.log(message);
}

var logNotJaguar = function() {
  console.log("No Jaguar here");
}

var jaguarChecker = function(animal, message, isJaguar, isNotJaguar) {
  if (animal === "Jaguar"){
    isJaguar(message);
  } else {
    isNotJaguar();
  }
}

jaguarChecker("Rabbit", "IT'S A JAGUAR!!", logJaguar, logNotJaguar);
