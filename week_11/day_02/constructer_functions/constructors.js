var myObject = {};

var anotherObject = new Object();

var person1 = {
  name: "Zsolt",
  height: "magnificently tall"
};

var person2 = {
  name: "Craig",
  height: "just kinda tall"
};

var Person = function( name, height ) {
  this.name = name;
  this.height = height;
  this.talk = function() {
    console.log("Hi, I'm " + this.name);
  }
};

var person3 = new Person("Iain", 186);
var person4 = new Person("Tommy", 150);

console.log(person3);
person3.talk();

// var brokenPerson = new Person( "Dave");
//
// console.log(brokenPerson);
