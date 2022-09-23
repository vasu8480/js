a()		//u can call function statement
b()		//u cant call function expression will throw error

//function statement or declaration
function a() {
	console.log('a called')
}

//function expression
var b = function() {
	console.log('b called')
}

//anonymous function
var c = function() {
	console.log('c called')
}

//first class function   ability to pass function as argument and assign function to variable
var d = function() { 
	return function xyz(){
		console.log('xyz called')
	}
}
console.log(d())	//function xyz(){console.log('xyz called')}

//Arrow function
var e = () => {
	console.log('e called')
}
e()

