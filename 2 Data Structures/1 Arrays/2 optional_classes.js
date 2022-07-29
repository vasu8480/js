//reference type
var object1={value: 10};
var object2=object1;
var object3={value: 10};
console.log(object1===object2);
console.log(object1===object3);

//context and scope
const object4={
		a: function(){
			console.log(this);
		}
	}
object4.a()

//instantiation
class player{
	constructor(name,type){
		console.log(this);
		this.name=name;
		this.type=type;
	}
	introduce(){
		console.log(`Hi I am ${this.name}, I am a ${this.type}`);
	}
}
class wizard extends player{
	constructor(name,type){
		super(name,type);
		console.log(this);
	}
	play(){
		console.log(`Wizard ${this.name} is playing.`);
	}
}
const wizard1=new wizard('Shelly','Healer');
const wizard2=new wizard('Shawn','Dark Magic');
