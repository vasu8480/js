function firstrecurringcharacter(input){
		var hash = {};
		for(var i = 0; i < input.length; i++){
				if(hash[input[i]]){
						return input[i];
				}
				hash[input[i]] = true;
		}
		return null;
}
console.log(firstrecurringcharacter([1,2,3,4,2,15,13,4]));

function firstrecurringcharacter(input){
	for(let i=0;i<input.length;i++){
		for(let j=i+1;j<input.length;j++){
			if(input[i]===input[j]){
				return input[i];
			}
		}
	}
	return undefined;
}
console.log(firstrecurringcharacter([1,2,3,4,2,15,13,4]));