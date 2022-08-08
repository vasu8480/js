const express = require('express');

const app = express();

app.use((req, res, next) => {
	console.log('middleware 1');
	next();
});

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.listen(3000);