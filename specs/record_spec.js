var assert = require("assert");
var Record = require("../record.js")


describe("Record Tests", function(){

  var record1;

  beforeEach(function(){
     record1 = new Record("Pink Floyd", "Animals", "Rock", 1500);

  })

  it("should have an artist name", function(){
    assert.strictEqual(record1.artist, "Pink Floyd")
  });
  it("should have a title", function(){
    assert.strictEqual(record1.title, "Animals");
  });
  it("should have a genre", function(){
    assert.strictEqual(record1.genre, "Rock");
  });
  it("should have a price", function(){
    assert.strictEqual(record1.price, 1500);
  });
})
