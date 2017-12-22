var CAT_ARRAY = [

  { name: "Boba", fave: "Sock fluff", img:"http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  { name: "Barnaby", fave: "Tuna", img:"https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},
  { name: "Max", fave: "Whiskas Temtations", img:"http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
  { name: "Tom", fave: "Jerry", img: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg" }
]

var createCatList = function() {
  var catElement = document.createElement('ul');
  catElement.classList.add('cat');
  return catElement;
}

var createCatName = function(name) {
  var catName = document.createElement('li');
  catName.textContent = "Name: " + name;
  return catName;
}

var createCatFood = function(fave) {
  var catFood = document.createElement('li');
  catFood.textContent = "Favourite food: " + fave;
  return catFood;
}

var createCatImgArea = function() {
  var catImgArea = document.createElement('li');
  return catImgArea;
}

var createCatImg = function(img) {
  var catImg = document.createElement('img');
  catImg.src = img;
  catImg.width = '500';
  catImg.height = '300';
  return catImg;
}

var appendElements = function(cats, catName, catFood, catImgArea, catImg, catElement) {
  catElement.appendChild(catName);
  catElement.appendChild(catFood);
  catElement.appendChild(catImgArea);
  catImgArea.appendChild(catImg);
  cats.appendChild(catElement)
}

var addCat = function( name, fave, img) {
  var catElement = createCatList();
  var catName = createCatName(name);
  var catFood = createCatFood(fave);
  var catImgArea = createCatImgArea();
  var catImg = createCatImg(img);
  var cats = document.querySelector('section#cats');
  appendElements( cats, catName, catFood, catImgArea, catImg, catElement);
}

// var makeNewCat = function() {
//
//   var catElement = document.createElement('ul')
//   catElement.classList.add('cat')
//
//   var catName = document.createElement('li')
//   catName.textContent = 'Name: Willow'
//   catElement.appendChild(catName)
//
//   var catFood = document.createElement('li')
//   catFood.textContent = 'Favourite food: Jerry'
//   catElement.appendChild(catFood)
//
//   var catImgArea = document.createElement('li')
//   catElement.appendChild(catImgArea)
//
//   var catImg = document.createElement('img')
//   catImg.src = "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"
//   catImgArea.appendChild(catImg)
//
//   var cats = document.querySelector('section#cats')
//   cats.appendChild(catElement)
// }



var app = function() {
  for(var cat of CAT_ARRAY) {
    addCat(cat.name, cat.fave, cat.img);
  }
  // makeNewCat()
}

window.addEventListener('DOMContentLoaded', app)
