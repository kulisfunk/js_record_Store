var _ = require("lodash");


var Collector = function(name, budget){
  this.name = name;
  this.budget = budget;
  this.collection = [];
}


Collector.prototype = {

  buyRecord: function(record_store, record){
    if(this.budget > record.price){
    var title = record.title;
    var purchase = record_store.sellRecord(title);
    var array = this.collection.concat(purchase);
    this.collection = array;
    this.budget -= record.price;
    record_store.balance += record.price;
  }
  },

  sellRecord: function(record_store, record){
    var title = record.title;
    var sale = _.remove(this.collection, {title: title});
    var array = record_store.inventory.concat(sale);
    record_store.inventory = array;
    this.budget += record.price;
    record_store.balance -= record.price;
  },
  getValue: function(genre){
    if(genre == null){
    var collectionSum = _.sumBy(this.collection, 'price');
    return collectionSum;
  }else{
    var albums = []
    albums.push(this.collection.find(function(record){
      return record.genre === genre;
    }))
    var genreSum = _.sumBy(albums, 'price');
    return genreSum;
  }
  },

  findMostValuable: function(){
    return _.last(_.orderBy(this.collection, 'price'));
  },

  orderValue: function(direction){
    return _.orderBy(this.collection, ['price'], [direction]);
  }
}


module.exports = Collector;
