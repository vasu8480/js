// settimeout
// for settimeout we have to use let instead of var
function a(){
	for(var i=0;i<3;i++){				// output is 3 3 3 because var is function scoped
		setTimeout(function log(){
			console.log(i);
	},i*1000);
	}
}
a();

//set timeout with var using closures
function b(){
	for(var i=0;i<3;i++){
		(function log(i){
			setTimeout(function(){
				console.log(i);
			},i*1000);
		})(i);
	}
}
b();

//set timeout with let using closures
function d(){
	for(let i=0;i<3;i++){
		(function log(i){
			setTimeout(function(){
				console.log(i);
			},i*1000);
		})(i);
	}
}
d();

