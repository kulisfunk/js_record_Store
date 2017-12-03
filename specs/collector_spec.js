var assert = require("assert");
var RecordStore = require("../record_store.js");
var Record = require("../record.js");
var Collector = require("../collector.js");



describe("Collector Tests", function(){
  var record_store1;
  var record1;
  var record2;
  var record3;
  var record4;
  var collector1;
  var collector2;
  var collector3;



  beforeEach(function(){

    record_store1 = new RecordStore("Disc World", "Glasgow");
    record1 = new Record("U2", "Joshua Tree", "Rock", 1200);
    record2 = new Record("Cocteau Twins", "Treasure", "Indie", 1400);
    record3 = new Record("Pink Floyd", "Animals", "Rock", 1500);
    record4 = new Record("Underworld", "Beaucoup Fish", "Electronic", 1300);
    collector1 = new Collector("Martin", 2000);
    collector2 = new Collector("Martin", 1000);
    collector3 = new Collector("Martin", 3000);
    collector4 = new Collector("Martin", 3000);


  })

  it("should be able to buy record", function(){
    record_store1.addRecord(record1);
    record_store1.addRecord(record2);
    collector1.buyRecord(record_store1, record1);
    var inventory = record_store1.listInventory();
    assert.deepStrictEqual(inventory, [record2]);
    assert.deepStrictEqual(collector1.collection, [record1]);
  });
  it("should be able to sell record", function(){
    record_store1.addRecord(record1);
    record_store1.addRecord(record2);
    collector1.buyRecord(record_store1, record1);
    collector1.sellRecord(record_store1, record1);
    var inventory = record_store1.listInventory();
    assert.deepStrictEqual(inventory, [record2, record1]);
    assert.deepStrictEqual(collector1.collection, []);
  });
  it("should have cash that increases when record sold", function(){
    record_store1.addRecord(record1);
    record_store1.addRecord(record2);
    collector1.buyRecord(record_store1, record1);
    collector1.sellRecord(record_store1, record1);
    assert.strictEqual(collector1.budget, 2000);
  });
  it("should have cash that decreases when record bought", function(){
    record_store1.addRecord(record1);
    record_store1.addRecord(record2);
    collector1.buyRecord(record_store1, record1);
    assert.strictEqual(collector1.budget, 800);
  });
  it("shouldn't be able to buy record if insufficient funds", function(){
    record_store1.addRecord(record1);
    record_store1.addRecord(record2);
    collector2.buyRecord(record_store1, record1);
    assert.strictEqual(collector2.budget, 1000);
    assert.deepStrictEqual(collector2.collection, []);
  });
  it("should be able to get total value of collection", function(){
    record_store1.addRecord(record1);
    record_store1.addRecord(record2);
    collector3.buyRecord(record_store1, record1);
    collector3.buyRecord(record_store1, record2);
    var total = collector3.getValue();
    assert.strictEqual(total, 2600);
  });
  it("should be able to get total value of records of given genre", function(){
    record_store1.addRecord(record1);
    record_store1.addRecord(record2);
    collector3.buyRecord(record_store1, record1);
    collector3.buyRecord(record_store1, record2);
    var total = collector3.getValue("Rock");
    assert.strictEqual(total, 1200);
  });
  it("should be able to view most valuable record", function(){
    record_store1.addRecord(record1);
    record_store1.addRecord(record2);
    collector3.buyRecord(record_store1, record1);
    collector3.buyRecord(record_store1, record2);
    var valuable = collector3.findMostValuable();
    assert.deepStrictEqual(valuable, record2);
  });
  it("should be able to sort records by value ascending", function(){
    record_store1.addRecord(record1);
    record_store1.addRecord(record2);
    collector3.buyRecord(record_store1, record1);
    collector3.buyRecord(record_store1, record2);
    var order = collector3.orderValue("asc");
    assert.deepStrictEqual(order, [record1,record2]);
  });
  it("should be able to sort records by value descending", function(){
    record_store1.addRecord(record1);
    record_store1.addRecord(record2);
    collector3.buyRecord(record_store1, record1);
    collector3.buyRecord(record_store1, record2);
    var order = collector3.orderValue("desc");
    assert.deepStrictEqual(order, [record2,record1]);
  });
  it("should be able to compare value of collection with another collector", function(){
    record_store1.addRecord(record1);
    record_store1.addRecord(record2);
    record_store1.addRecord(record3);
    record_store1.addRecord(record4);
    collector3.buyRecord(record_store1, record1);
    collector3.buyRecord(record_store1, record2);
    collector4.buyRecord(record_store1, record3);
    collector4.buyRecord(record_store1, record4);
    var compare = collector3.compareCollections(collector4);
    assert.strictEqual(compare, "Your collection is worth £26, their collection is worth £28")

  });


})
