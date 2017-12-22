var app = function(){

  var counter = 1;
  var handleButtonClick = function() {
    var pTag = document.querySelector('#button-result');
    pTag.innerText = "Whoa, dude, I totally got clicked " + counter + " times";
    counter++;
  }

  var handleKeyPress = function() {
    var pTag = document.querySelector('#text-result');
    pTag.innerText = this.value;
  }

  var handleSelectChange = function() {
    var pTag = document.querySelector('#select-result');
    pTag.innerText = this.value;
  }

  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);

  var input = document.querySelector('input');
  input.addEventListener('keyup', handleKeyPress);

  var select = document.querySelector('select');
  select.addEventListener('change', handleSelectChange);
}

window.addEventListener('load', app);
