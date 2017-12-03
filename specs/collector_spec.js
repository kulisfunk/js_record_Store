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
  
})
