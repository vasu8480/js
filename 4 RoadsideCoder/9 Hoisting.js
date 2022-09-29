function abc(){
	console.log(a,b,c);

	var a = 1; // undefined
	let b = 2; // temporal dead zone  means you can't access it before it's declared
	const c = 3; // temporal dead zone means you can't access it before it's declared
}
abc();