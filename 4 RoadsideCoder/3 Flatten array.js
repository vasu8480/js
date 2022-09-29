//Flatten array
let arr=[
		[1,2,3],
		[4,5,6],
		[7,[8,9],10],
];
//-------------------------------- method 1--------------------------------
console.log(arr.flat(2)); // in this case 2 is the depth of the array

//-------------------------------- method 2--------------------------------
let Flattened = [].concat(...arr);
console.log(Flattened);

//-------------------------------- method 3--------------------------------
function customflattend(arr,depth=1) {
	let result=[];
	arr.forEach((ar)=>{
		if (Array.isArray(ar) && depth>0) {
			result.push(...customflattend(ar,depth-1));
		}
		else{
			result.push(ar);
		}
	});
	return result;
}
console.log(customflattend(arr,2));

