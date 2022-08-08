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

//Append file
fs.appendFile('./hello.txt','\nHello World',(err) =>
{
	if(err){
		console.log(err);
	}
	console.log('File Appended');
}
);

//write file
fs.writeFile('./hello.txt','Hello World',(err) =>
{
	if(err){
		console.log(err);
	}
	console.log('File Written');
}
);

//delete file
fs.unlink('./bye.txt',(err) =>
{
	if(err){
		console.log(err);
	}
	console.log('File Deleted');
}
);
