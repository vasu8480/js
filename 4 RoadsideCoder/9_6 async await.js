async function loadJson(url) {
	let response = await fetch(url);

	if (response.status == 200) {
		let json = await response.json();
		return json;
	}

	throw new Error(response.status);
}
loadJson('https://fakeurl.com')
.catch((err)=> console.log(err));