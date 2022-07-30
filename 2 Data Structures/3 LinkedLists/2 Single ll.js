class Node{
		constructor(data){
				this.data = data;
				this.next = null;
		}
}

class LinkedList{
	constructor(value){
		this.head = {
			value: value,
			next: null
		}
		this.tail = this.head;
		this.length = 1;
	}
	append(value){
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value){
		const newNode = new Node(value);
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
		const holdingPointer = leader.next;
		leader.next = newNode;
		newNode.next = holdingPointer;
		this.length++;
		return this;
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
	remove(index){
		const leader = this.traverseToIndex(index - 1);
		const unwantedNode = leader.next;
		leader.next = unwantedNode.next;
		this.length--;
		return this;
	}
}
const myLinkedList = new Doubly_LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.printList();
myLinkedList.insert(1, 99);
myLinkedList.remove(1);
myLinkedList.printList();
console.log(myLinkedList);