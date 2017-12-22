var name = "Jarrod";

var talk = function() {
  name = "Alex";
  console.log("My name is " + name);
}



console.log("the global name is ", name);
talk();
