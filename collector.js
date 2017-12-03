var Collector = function(name, budget){
  this.name = name;
  this.budget = budget;
  this.collection = [];
}


Collector.prototype = {

  buyRecord: function(record_store, record){
    var title = record.title;
    var purchase = record_store.sellRecord(title);
    var array = this.collection.concat(purchase);
    this.collection = array;
  }
}


module.exports = Collector;
