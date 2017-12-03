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
    var inventory = this.inventory;
    return inventory;
  },


  finances: function(){
    var inventorySum = _.sumBy(this.inventory, 'price');
    return "Balance is: £" + this.balance/100 + ", inventory value is: £" + inventorySum/100;
  },

  details: function(title){

    var album =  this.inventory.find(function(record){
      return record.title === title;
    })
    return "Artist: " + album.artist + ", title: " + album.title +
    ", genre: " + album.genre + ", price: £" + (album.price/100);

  }

}

module.exports = RecordStore;
