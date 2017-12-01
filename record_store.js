var _ = require("lodash");


var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 100000;
}

module.exports = RecordStore;
