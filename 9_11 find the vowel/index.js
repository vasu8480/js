//---------------------------------------------------------- method-1 ---------------------------------------------------------- 
function vowel(str){
	let count	= 0;
	let checker = ['a','e','i','o','u'];

	for(let char of str.toLowerCase())
	{
		if (checker.includes(char))
			count++;
	}
	return count;
}
console.log(vowel("hi am vasu"));
//---------------------------------------------------------- method-2 ---------------------------------------------------------- 
function vowel(str){

	const matches=str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;

}
console.log(vowel("hi am vasu nurukurthi"));