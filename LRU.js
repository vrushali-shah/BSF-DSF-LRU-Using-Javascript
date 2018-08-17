
//****LRU Cache****

//initialize cache capacity
function LruCache(capacity){
    this._capacity = capacity || 1;
    this._accessMap = [];
    this._items = {};
}

//add new item to the the _accessMap
LruCache.prototype.addItem = function(key, value){
    if(this._accessMap.length >= this._capacity) this.removeOldest();
    this._accessMap.push(key);
    this._items[key] = value;
};

//remove an item with given key from the _accessMap
LruCache.prototype.remove = function(key){
    this._accessMap.splice(this._accessMap.indexOf(key), 1);
    delete this._items[key];
};

//remove the oldestKey from _accessMap
LruCache.prototype.removeOldest = function(){
    var oldestKey = this._accessMap.shift();
    delete this._items[oldestKey];
};

//get the capacity of cache
LruCache.prototype.getCapacity = function(){
    return this._capacity;
};

//get the size of cache
LruCache.prototype.getSize = function(){
    return this._accessMap.length;
};

//fetch all the items (key-value pairs)
LruCache.prototype.getItems = function(){
    var instance = this;
    return Object.keys(this._items).reduce(function(carry, key){
        carry[key] = instance._items[key];
        return carry;
    }, {});
};


//dataset with LRU Cache size 2
console.log("Dataset with LRU Cache size 2")
var lru = new LruCache(2);
lru.addItem(1,2);
console.log(lru.getItems());
lru.addItem(5,3);
console.log(lru.getItems());
lru.addItem(6,4);
console.log(lru.getItems());
lru.addItem(7,2);
console.log(lru.getItems());


//dataset with LRU Cache size 3
console.log("Dataset with LRU Cache size 3")
var lru = new LruCache(3);
lru.addItem(1,2);
console.log(lru.getItems());
lru.addItem(5,3);
console.log(lru.getItems());
lru.addItem(6,4);
console.log(lru.getItems());
lru.addItem(7,2);
console.log(lru.getItems());
lru.addItem(1,2);
console.log(lru.getItems());
