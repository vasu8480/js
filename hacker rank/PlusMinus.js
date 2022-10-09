//plusminus
function plusMinus(arr) {
	// Write your code here
var l=arr.length;
var k=0 ,g=0,p=0;
// find negaive numbers
arr.forEach(element => {
	if (element<0) {
			k+=1;
	}
	else if (element>0) {
			g+=1;
	}
	else {
			p+=1;
	}
});

console.log((g/l).toFixed(6));
console.log((k/l).toFixed(6));
console.log((p/l).toFixed(6));
}
