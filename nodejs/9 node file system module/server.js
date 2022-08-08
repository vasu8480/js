const fs = require('fs');

fs.readFile('./hello.txt',(err,data) =>
{
	if(err){
		console.log(err);
	}
	console.log('Asnyc',data.toString());
})

///-------------method-2 fast way to read file
const file=fs.readFileSync('./hello.txt');
console.log('Sync',file.toString());