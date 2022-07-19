//---------------------------------------------------------- method-1 ---------------------------------------------------------- 
function palindrome(str){
	return str.split("").every((char,i)=>{
		return char === str[str.length -i-1];
	});
}
result=palindrome('madam');
console.log(result);
palindrome('fs');
