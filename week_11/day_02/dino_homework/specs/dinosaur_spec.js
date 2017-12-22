var assert = require("assert");
var Dinosaur = require("../dinosaur")

var raptor;

describe("Dinosaur", function() {

  beforeEach(function () {
    raptor = new Dinosaur("Raptor");
  });

  it("should have a type", function() {
    assert.strictEqual(raptor.type, "Raptor");
  });

});
