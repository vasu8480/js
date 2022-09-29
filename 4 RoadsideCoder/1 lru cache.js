// LRU Cache

class LRU{
	constructor(max = 4){
		this.max = max;
		this.cache = new Map(); // data structure
	}
	set(key, value){
		if(this.cache.has(key)) this.cache.delete(key); //delete if already exists
		else if (this.cache.size === this.max){ // if cache is full
			this.cache.delete(this.first());      // delete first item if max reached
		}
		this.cache.set(key, value); // add new item
	}
	first(){ // get first key
		return this.cache.keys().next().value; // return first key
	}
	get(key){
		if(this.cache.has(key)){ // if key exists
			let value = this.cache.get(key); // get value
			this.cache.delete(key);	// delete key
			this.cache.set(key, value);	// add key to end
			return value;	// return value
		}
	}
}

const lru = new LRU(3);
lru.set('a', 1);
lru.set('b', 2);
lru.set('c', 3);
console.log(lru.cache);
lru.get('a');
console.log(lru.cache);
lru.set('d', 4);
lru.set('e', 5);
lru.set('f', 6);
lru.set('g', 7);
lru.set('h', 8);
console.log(lru.cache);