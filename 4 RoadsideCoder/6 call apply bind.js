//call  apply bind
var person = {
		firstname: 'vasu',
		hello: function(thing){
			console.log('Hello, ' + this.firstname +thing);
		},
	};
var person2 = {
		firstname: 'ravi',
};

person.hello.call(person2,' how are you?'); // Hello, ravi how are you?
person.hello.apply(person2,[' how are you?']); // Hello, ravi how are you?

const newhello=person.hello.bind(person2);
newhello(" how are you?"); // Hello, ravi how are you?
