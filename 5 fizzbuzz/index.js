//---------------------------------------------------------- method-1 ---------------------------------------------------------- 
function fizzbuzz(n){
	for (let i=1;i<=n-1;i++){
		if(i%3===0 && i%5===0)  // or if(i%15===0)
			console.log("fizzbuzz");
		else if(i%3==0)
			console.log("fizz");
		else if(i%5===0)
			console.log("buzz");
		else
		console.log(i);
	}
}
console.log(fizzbuzz(19));