//reverse string
//---------------------------------------------------------- method-1 ---------------------------------------------------------- 
function reverse2(str){
	return str.split('').reverse().join('');
}

//---------------------------------------------------------- method-2 ---------------------------------------------------------- 
const reverse3 = str => str.split('').reverse().join('');

//---------------------------------------------------------- method-3 ---------------------------------------------------------- 
const reverse4 = str => [...str].reverse().join('');

//---------------------------------------------------------- method-4 ---------------------------------------------------------- 
function reverse(str){
	if(!str || str.length < 2 || typeof str !== 'string') 
		return 'invalid input';
	const backwards = [];
	const totalItems = str.length-1;
	
	for(let i = totalItems; i >= 0; i--){
		backwards.push(str[i]);
	}
	return backwards.join('');
}
console.log(reverse4('vasu'));
console.log(reverse3('nurukurthi vasu'));
console.log(reverse('rav'));
console.log(reverse2('vasu'));
