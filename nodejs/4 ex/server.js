const http = require('http');

const server = http.createServer((req, res) => {
	console.log('request was made: ' + req.url);
	//console.log(req.headers);
	console.log(req.method);
	const user = {
		name: 'John',
		age: 30
	};

	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(user));
})

server.listen(3000);