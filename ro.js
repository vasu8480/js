//---------------------------------------------------------- method-2 ---------------------------------------------------------- 
function signed_int(n){
	const rev=n
	.toString()
	.split('')
	.reverse()
	.join('');

	return parseInt(rev) * Math.sign(n); // multiply with n sign if postive nor negative
}
console.log(signed_int(-725));