//---------------------------------------------------------- method-1 ---------------------------------------------------------- 
//two stacks to implement queue
class Queue {
	constructor() {
			this.stack1 = [];
			this.stack2 = [];
	}
	enqueue(value) {
			this.stack1.push(value);
	}
	dequeue() {
			if (this.stack2.length === 0) {
					while (this.stack1.length > 0) {
							this.stack2.push(this.stack1.pop());
					}
			}
			return this.stack2.pop();
	}
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
console.log(queue);