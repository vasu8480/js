//---------------------------------------------------------- method-1 ---------------------------------------------------------- 
function word_capitalize(str){
	const words=[];

	for(let word of str.split(' '))
			words.push(word[0].toUpperCase()+word.slice(1));
	return words.join(" ");
}
console.log(word_capitalize('hi! vasu iam sham calling you'));
//---------------------------------------------------------- method-2 ---------------------------------------------------------- 
function word_capitalize(str){
	let res=str[0].toUpperCase(); 		// chaning the first letter to capital
	for(let i=1;i<str.length;i++){
		if(str[i-1]===' ')
			res += str[i].toUpperCase();
		else
			res += str[i];
	}
	return res;
}
console.log(word_capitalize('hi! vasu iam sham calling you'));