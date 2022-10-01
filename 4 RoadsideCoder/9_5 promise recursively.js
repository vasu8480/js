// promises in array to be executed
// output will be :important action to vasu like the video subscribe   share
promRecurse([
	importantAction("vasu"),
	likethevideo("like vasu"),
	subscribe("subscribe to vasu"),
	share("share the video")
]);

function promRecurse(funcPromises){
	if(funcPromises.length === 0)	return;
	
	const currentPromise = funcPromises.shift();
	currentPromise
	.then((data) => 
		console.log(data))
	.catch((err) =>
		console.log(err));

		promRecurse(funcPromises);
}

function importantAction(name) {
		return new Promise((resolve, reject) => {
				setTimeout(() => {
						resolve(`important action to ${name}`);
				}, 2000);
		});
}

function likethevideo() {
		return new Promise((resolve, reject) => {
				setTimeout(() => {
						resolve("like the video");
				}, 2000);
		});
}

function subscribe() {
		return new Promise((resolve, reject) => {
				setTimeout(() => {
						resolve("subscribe");
				}, 2000);
		});
}

function share() {
		return new Promise((resolve, reject) => {
				setTimeout(() => {
						resolve("share");
				}, 2000);
		});
}

