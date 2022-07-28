//---------------------------------------------------------- method-1 ---------------------------------------------------------- 
class Queue
{
	constructor()
	{
		this.data=[];
	}

	push(record){
		this.data.push(record);
	}
	pop(){
		return this.data.pop();
	}
	peek(){
		return this.data[this.data.length-1];
	}

}
const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.pop();
console.log(queue);
