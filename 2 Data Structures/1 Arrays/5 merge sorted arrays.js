function mergesortedarrays(array1,array2){
	const mergedArray = [];
	let array1Item = array1[0];
	let array2Item = array2[0];
	let i = 1;
	let j = 1;

	if(array1.length === 0){
		return array2;
	}
	if(array2.length === 0){
		return array1;
	}
	while (array1Item || array2Item){
		if(!array2Item ||array1Item < array2Item){
			mergedArray.push(array1Item);
			array1Item = array1[i];
			i++;
		}
		else{
			mergedArray.push(array2Item);
			array2Item = array2[j];
			j++;
		}
	}
	return mergedArray;
}
console.log(mergesortedarrays([1,3,5],[2,6,8]));
console.log(mergesortedarrays([4,7],[2,4,5,458]))
console.log(mergesortedarrays([1,3,45,47],[26,48]))