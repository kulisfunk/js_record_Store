var assert = require("assert");
var Record = require("../record.js");
var RecordStore = require("../record_store.js");


describe("RecordStore tests", function(){
  var record_store1;
  var record1;
  var record2;

  beforeEach(function(){
    record_store1 = new RecordStore("Disc World", "Glasgow");
    record1 = new Record("Pink Floyd", "Animals", "Rock", 1500);
    record2 = new Record("Underworld", "Beaucoup Fish", "Electronic", 1300);
  })

    it("should have a name", function(){
      assert.strictEqual(record_store1.name, "Disc World");
    });
    it("should have a city", function(){
      assert.strictEqual(record_store1.city, "Glasgow");
    });
    it("should have a balance", function(){
      assert.strictEqual(record_store1.balance, 100000);
    });
    it("should have empty inventory", function(){
      assert.strictEqual(record_store1.inventory.length, 0);
    });
    it("can add records to inventory", function(){
      record_store1.addRecord(record1);
      record_store1.addRecord(record2);
      assert.strictEqual(record_store1.inventory.length, 2);
    });
    it("should return record properties as a string", function(){
      record_store1.addRecord(record1);
      var result = record_store1.details('Animals');
      assert.deepStrictEqual(result, "Artist: Pink Floyd, title: Animals, genre: Rock, price: £15");
    });
    it("should list inventory", function(){
      record_store1.addRecord(record1);
      record_store1.addRecord(record2);
      var inventory = record_store1.listInventory();
      assert.deepStrictEqual(inventory, [record1, record2]);
    })
    it("should return financial situation of store", function(){
      record_store1.addRecord(record1);
      record_store1.addRecord(record2);
      var finances = record_store1.finances();
      assert.strictEqual(finances, "Balance is: £1000, inventory value is: £28");
    });
    it("should list all records by genre", function(){
      record_store1.addRecord(record1);
      record_store1.addRecord(record2);
      var genre = record_store1.genreList("Electronic");
      assert.deepStrictEqual(genre, record2);
    });
})
