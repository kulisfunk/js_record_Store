var _ = require("lodash");


var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 100000;
};


RecordStore.prototype = {

  addRecord: function(record){
    this.inventory.push(record);
  },

  listInventory: function(){
    return this.inventory;
  },

  finances: function(){
    var inventorySum = _.sumBy(this.inventory, 'price');
    return "Balance is: £" + this.balance/100 + ", inventory value is: £" + inventorySum/100;
  }

}

module.exports = RecordStore;
