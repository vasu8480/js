//---------------------------------------------------------- method-1 ---------------------------------------------------------- 
function chunk(arr,size){
	const chunked=[];
	let index=0;
	while (index <arr.length){
		chunked.push(arr.slice(index,index+size));
		index+=size;
	}
	return chunked;
}
console.log(chunk([1,2,3,4,5,6,7,8],3));
//---------------------------------------------------------- method-2 ---------------------------------------------------------- 
function chunk(arr,size){
	const chunked=[];
	for(let ele of arr){
		const last=chunked[chunked.length-1];
		if(!last || last.length===size)
			chunked.push([ele]);
		else
			last.push(ele);
	}
	return chunked;
}
console.log(chunk([1,2,3,4,5,6,7,8],3));