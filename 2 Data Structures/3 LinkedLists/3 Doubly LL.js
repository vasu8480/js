class Node{
	constructor(data){
			this.data = data;
			this.next = null;
			this.prev = null;
	}
}

class Doubly_LinkedList{
constructor(value){
	this.head = {
		value: value,
		next: null,
		prev: null
	}

	this.tail = this.head;
	this.length = 1;
}
append(value){
	const newNode = new Node(value);
	newNode.prev = this.tail; 
	this.tail.next = newNode;
	this.tail = newNode;
	this.length++;
	return this;
}
prepend(value){
	const newNode = new Node(value);
	newNode.next = this.head;
	this.head.prev = newNode;
	this.head = newNode;
	this.length++;
	return this;
}
printList(){
	const array = [];
	let currentNode = this.head;
	while(currentNode!==null){
		array.push(currentNode.value);
		currentNode = currentNode.next;
	}
	return array;
}
insert(index, value){
	if(index >= this.length){
		return this.append(value);
	}
	const newNode = new Node(value);
	const leader = this.traverseToIndex(index - 1);
	const follower = leader.next;
	leader.next = newNode;
	newNode.pre = leader;
	newNode.next = follower;
	follower.prev = newNode;
	this.length++;
	console.log(this);
	return this.printList();
}
traverseToIndex(index){
	let counter = 0;
	let currentNode = this.head;
	while(counter !== index){
		currentNode = currentNode.next;
		counter++;
	}
	return currentNode;
}
}
const myLinkedList = new Doubly_LinkedList(10);
myLinkedList.append(45);
myLinkedList.append(16)
myLinkedList.prepend(5);
myLinkedList.printList();
myLinkedList.insert(1,152);
console.log(myLinkedList);