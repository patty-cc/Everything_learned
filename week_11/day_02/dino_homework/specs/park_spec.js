var assert = require("assert");
var Park = require("../park");
var Dinosaur = require("../dinosaur");

var jurrasicPark;
var raptor

describe("Park", function() {

  beforeEach( function() {
    jurrasicPark = new Park();
    raptor = new Dinosaur("Raptor");
  });

  it("should start off with no dinosaurs", function() {
    assert.strictEqual(jurrasicPark.dinoAmount(), 0);
  });

  it("should be able to add a dinosaur", function() {
    jurrasicPark.addDinosaur(raptor);
    assert.strictEqual(jurrasicPark.dinoAmount(), 1);
  });

  it("should give the type of dino", function() {
    jurrasicPark.addDinosaur(raptor);
    assert.strictEqual(raptor.type, "Raptor");
  });

})
