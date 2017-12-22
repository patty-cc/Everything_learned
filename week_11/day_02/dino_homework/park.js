var Park = function() {
  this.enclosure = [];
};

Park.prototype.dinoAmount = function() {
  return this.enclosure.length;
};

Park.prototype.addDinosaur = function(dino) {
  this.enclosure.push(dino);
};

module.exports = Park;
