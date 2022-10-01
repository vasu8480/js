// // output will be: Error 1 and success 4
function job(){
	return new Promise(function(resolve, reject){
		reject();
	});
}
let promise=job();
promise
	.then(function(){
	console.log("success 1");
	})
	.then(function(){
	console.log("success 2");
	})
	.then(function(){
	console.log("success 3");
	})
	.catch(function(){
	console.log("error 1");
	})
	.then(function(){
	console.log("success 4");
	});

// ------------------------------------------------- question 2 -------------------------------------------------
// output will be:  success error  Error Caught
function job(state){
	return new Promise(function(resolve, reject){
		if(state){
			resolve("success");
		}
		else{
			reject("error");
		}
	});
}
let promise=job(true);
promise
	.then(function(data){
	console.log(data);
	return job(false);
	})
	.catch(function(error){
	console.log(error);
	return "Error Caught";
	})
	.then(function(data){
	console.log(data);
	return job(true);
	})
	.catch(function(error){
		console.log(error);
	});

// ------------------------------------------------- question 3 -------------------------------------------------
