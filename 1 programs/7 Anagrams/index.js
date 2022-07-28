//---------------------------------------------------------- method-1 ---------------------------------------------------------- 
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
//---------------------------------------------------------- method-2 ---------------------------------------------------------- 
function anagrams(str1,str2){
	const acharmap=remove_spaces_quotes(str1);
	const bcharmap=remove_spaces_quotes(str2);

	if (Object.keys(acharmap).length !== Object.keys(bcharmap).length)
			return false;

	for(let char in acharmap){
		if (acharmap[char] !== bcharmap[char])
				return false;
	}
	return true;
}
function remove_spaces_quotes(str){
	const charmap={};

	for(let char of str.replace(/[^\w]/g,'').toLowerCase())
			charmap[char]=charmap[char]+1 || 1;

	return charmap;
}
console.log(anagrams('hi! vasu','hi Vasu'));