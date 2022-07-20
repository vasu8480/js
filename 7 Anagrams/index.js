//---------------------------------------------------------- method-2 ---------------------------------------------------------- 
function anagrams(str1,str2){
	return remove_spaces_quotes(str1)===remove_spaces_quotes(str2);
}

function remove_spaces_quotes(str){
	return str.replace(/[^\w]/g,'').toLowerCase()
	.split('')			//changing into array to sort
	.sort() 
	.join('');			// changing to string
			
}
console.log(anagrams('hi! vasu','hi Vasu'));