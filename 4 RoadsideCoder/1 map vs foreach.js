//map vs foreach

const arr =[1,2,3,4];

// you can add more in built functions to the map and original array will not be affected
const mapres=arr.map((ar) => {
		return ar+2;
}).filter((ar) => {
		return ar%2;
		});

// you can not add  built functions to foreach and original array will be affected
const foreachres=arr.forEach((ar,i) => {
	arr[i]=ar+2;
});


console.log(mapres, foreachres, arr);

