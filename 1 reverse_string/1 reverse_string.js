//---------------------------------------------------------- method-1 ---------------------------------------------------------- 
function reverse(str){
	return str
	.split('')
	.reverse()
	.join('');
}
let str='vasu is a good boy';
result=reverse(str)
console.log(result);

//---------------------------------------------------------- method-2 ---------------------------------------------------------- 
function reverse(str){
	let reversed ='';
	for(let character of str){
		reversed =character+reversed
	}
	return reversed
}
let str='vasu is a good boy';
result=reverse(str)
console.log(result);

//---------------------------------------------------------- method-3 ---------------------------------------------------------- 
function reverse(str){
	return str.split("").reduce((rev,char) => char+rev,"");
}
let str='vasu is a good boy';
result=reverse(str)
console.log(result);
