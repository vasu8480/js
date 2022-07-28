//---------------------------------------------------------- Debugger ---------------------------------------------------------- 
function reverse(str){
	debugger;
	return str.split("").reduce((rev,char) => char+rev,"");
}
result=reverse('vasu is a good boy')  // -- need to call when using debugger (or) reverse('fs') need's to call
console.log(result);

//---------------------------------------------------------- STEPS ----------------------------------------------------------
1. node inspect index.js
2. continue (or) c 
3. repl 
       --->>  str
