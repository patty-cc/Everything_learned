var setupConversation = function() {

  var messageArray = [];

  return function(message) {
    messageArray.push(message);

    messageArray.forEach( function(msg) {
      console.log(msg);
    })
  }
}

var addMessage = setupConversation();

addMessage("I've got something very important to tell you that must never be forgotten");
addMessage("Oh yeah?");
addMessage("Oh, no. Wait... It's fine.");

// var setupAddFunction = function(modifier) {
//   var counter = 0;
//
//   return function() {
//     counter += modifier;
//     console.log(counter);
//   }
// }
//
// var add = setupAddFunction(5);
// add();
// add();
// add();
