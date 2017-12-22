var makeNewQuote = function() {

  var quoteArticle = document.createElement('article')
  quoteArticle.classList.add('quote')

  var blockQuote = document.createElement('blockquote')
  blockQuote.textContent = "Should've been a Jaguar"

  var cite = document.createElement('cite')
  cite.textContent = ' Harrison'


  blockQuote.appendChild(cite)

  quoteArticle.appendChild(blockQuote)

  var quotes = document.querySelector('section#quotes')
  quotes.appendChild(quoteArticle)

}


// var recolourArticles = function() {
//   var articles = document.querySelectorAll('article')
//
//   for(var article of articles) {
//     article.classList.add('blue-back')
//   }
// }
//
//
// var hideQuote = function() {
//   var qotd = document.getElementById('quote-of-the-day')
//   qotd.classList.add('hidden');
// }


var app = function() {
  console.log('DOMContentLoaded event - JS runnning')

  var quotes = document.querySelectorAll('article.quote');

  quotes[1].className = 'red-quote'
  quotes[2].className += ' red-quote'
  quotes[3].classList.add('red-quote')

  makeNewQuote()
  recolourArticles()
  hideQuote()



};

window.addEventListener('DOMContentLoaded', app)
