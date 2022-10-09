arr = [1,5,7,3,9];
arr.sort(function(a,b){
		return a-b;
	});
//sum of array expect last element
var sum=0;
for(let i = 0; i < arr.length-1; i++){
	sum += arr[i];
}
var min=0;
for(let i = 1; i < arr.length; i++){
	min += arr[i];
}
console.log(sum);
console.log(min);
