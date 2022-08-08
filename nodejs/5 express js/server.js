const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/users', (req, res) => {
	res.send("geeting");
});

app.post('/users', (req, res) => {
	const user = {
		name: 'John',
		age: 30
	}
	res.send('user');
});

app.listen(3000);