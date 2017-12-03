var assert = require("assert");
var RecordStore = require("../record_store.js");
var Record = require("../record.js");
var Collector = require("../collector.js");



describe("Collector Tests", function(){
  var record_store1;
  var record1;
  var record2;
  var collector1;



  beforeEach(function(){

    record_store1 = new RecordStore("Disc World", "Glasgow");
    record1 = new Record("U2", "Joshua Tree", "Rock", 1200);
    record2 = new Record("Cocteau Twins", "Treasure", "Indie", 1400);
    collector1 = new Collector("Martin", 2000);

  })

  it("should be able to buy record", function(){
    record_store1.addRecord(record1);
    record_store1.addRecord(record2);
    collector1.buyRecord(record_store1, record1);
    // assert.deepStrictEqual(record_store1.listInventory, [record2]);
    assert.deepStrictEqual(collector1.collection, [record1]);
  });
  it("should be able to sell record", function(){});
  it("should have cash that increases when record sold", function(){});
  it("should have cash that decreases when record bought", function(){});
  it("shouldn't be able to buy record if insufficient funds", function(){});
  it("should be able to get total value of collection", function(){});
  it("should be able to get total value of records of given genre", function(){});
  it("should be able to view most valuable record", function(){});
  it("should be able to sort records by value ascending", function(){});
  it("should be able to sort records by value descending", function(){});
  it("should be able to compare value of collection with another collector", function(){});


})
