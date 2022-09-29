// LRU Cache

class LRU{
	constructor(max=5){
		this.max = max;
		this.cache = new Map();
	}
	set(key, value){
		if(this.cache.has(key)) this.cache.delete(key);
		
		else if (this.cache.size === this.max){
			this.cache.delete(this.first());
		}
		this.cache.set(key, value);
	}
	first(){
		return this.cache.keys().next().value;
	}
	get(key){
		if(this.cache.has(key)){
			let value = this.cache.get(key);
			this.cache.delete(key);
			this.cache.set(key, value);
			return value;
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