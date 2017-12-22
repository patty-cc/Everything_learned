var myPerson = {
  name: 'Guybrush',
  age: 32,
  weapon: 'cutlass',
  talk: function(){
    console.log('shiver me timbers Im alive, my name is ' + this.name);
  }
};


myPerson.talk();

var anotherObject = Object.create(null);

var yetAnotherObject =  new Object();

var keyToAccess = 'age';

console.log ( myPerson[keyToAccess] );

var myBear = {
  name: 'Yogi',
  age: 5,
  belly: [],
  eat: function(fish) {
    this.belly.push(fish);
  }
};

bear.eat("A fish!");
console.log(bear.belly);
