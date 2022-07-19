//---------------------------------------------------------- method-1 ---------------------------------------------------------- 
function signed_int(n){
	const rev=n
	.toString()
	.split('')
	.reverse()
	.join('');

	if(n<0)
		return parseInt(rev) * -1;
	return parseInt(rev);
}
console.log(signed_int(-725));


