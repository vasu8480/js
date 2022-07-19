//---------------------------------------------------------- method-1 ---------------------------------------------------------- 
function maxChar(n){
	const charmap={};
	let max=0;
	let maxChar='';

	for (let char of n){
		if(charmap[char]){
			charmap[char]++;
		}
		else{
			charmap[char]=1;
		}
	}

	for(let char in charmap){
		if(charmap[char]>max){
			max=charmap[char];
			maxChar=char;
		}
	}
	return maxChar;
}
console.log(maxChar("aab111215sfd45454545484b"));
//---------------------------------------------------------- method-2 ---------------------------------------------------------- 
function maxChar(n){
	const charmap={};
	let max=0;
	let maxChar='';

	for (let char of n){
		charmap[char]=charmap[char]+1 || 1; 
	}

	for(let char in charmap){
		if(charmap[char]>max){
			max=charmap[char];
			maxChar=char;
		}
	}
	return maxChar;
}
console.log(maxChar("aab111215sfd45454545484b"));