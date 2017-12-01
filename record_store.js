var _ = require("lodash");


var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 100000;
}


RecordStore.prototype = function(){

  addRecord: function(record){
    this.inventory.add(record);
  }
}

module.exports = RecordStore;
