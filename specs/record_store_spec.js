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
    it("can add records to inventory", function(){});
})
