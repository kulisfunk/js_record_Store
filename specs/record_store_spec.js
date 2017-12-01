var assert = require("assert");
var Record = require("../record.js");
var RecordStore = require("../record_store.js");


describe("RecordStore tests", function(){

  beforeEach(function(){
    record_store1 = new RecordStore("DiscWorld", "Glasgow");
    record1 = new Record("Pink Floyd", "Animals", "Rock", 1500);
    record2 = new Record("Underworld", "Beaucoup Fish", "Electronic", 1300);

    it("should have a name", function(){});
    it("should have a city", function(){});
    it("should have a balance", function(){});
    it("should have empty inventory", function(){});
    it("can add records to inventory", function(){});
  })
})
