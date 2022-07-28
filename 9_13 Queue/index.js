//---------------------------------------------------------- method-1 ---------------------------------------------------------- 
class Queue
{
	constructor()
	{
		this.data=[];
	}

	add(record){
		this.data.unshift(record);
	}
	remove(){
		return this.data.pop();
	}
}
const queue = new Queue();
queue.add(1);
queue.add(2);
queue.remove();
console.log(queue);
