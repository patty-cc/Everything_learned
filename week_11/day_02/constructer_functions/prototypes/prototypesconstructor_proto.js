// var Fish = function( name, colour) {
//   this.name = name;
//   this.colour = colour;
//   this.swim = function () {
//     console.log("splash");
//   }
// }
//
// var nemo = new Fish('Nemo', 'orange');
//
// nemo.swim();
//
// console.log(nemo);


var Fish = function( name, colour) {
  this.name = name;
  this.colour = colour;
}

Fish.prototype.swim = function () {
  console.log("splash");
}

Fish.prototype.eat = function () {
  console.log("yum");
}

var nemo = new Fish('Nemo', 'orange');

nemo.swim();
nemo.eat();

console.log(nemo);

console.log( 'Fish prototype', Object.getPrototypeOf(nemo) );
