//---------------------------------------------------------- method-1 ---------------------------------------------------------- 
//[0,1,1,2,3,5,8,13,21,34] ---fib number
// 0 1 2 3 4 5 6 7 8 9 10  --- index for fibnac number
function fib(n){
	const res=[0,1];

	for(let i=2;i<=n;i++)
	{
		const a=res[i-1];
		const b=res[i-2];
		res.push(a+b);
	}
	return res[n];
}
console.log(fib(6));
//---------------------------------------------------------- method-2 ---------------------------------------------------------- 
function fib(n){
	if(n<2)
		return	n;
	return fib(n-1)+fib(n-2);
}
console.log(fib(6));