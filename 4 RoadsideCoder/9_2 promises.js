//    output will be            start 1 3 end  2
console.log("start");

const promise = new Promise((resolve, reject) => {
	console.log(1);			//sync
	resolve(2);					//async
	console.log(3);			//sync
});

promise.then((res) => {
	console.log(res);	//async
});

console.log("end");  //sync
