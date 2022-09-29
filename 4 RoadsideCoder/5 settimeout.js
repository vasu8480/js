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