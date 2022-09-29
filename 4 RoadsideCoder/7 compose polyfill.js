// compose polyfill
function addfive(x) {
	return x + 5;
}
function multiplybythree(x) {
	return x * 3;
}
function substracttwo(x) {
	return x -2;
}
function compose(...fns) {
	return (x)=> {
		return fns.reduceRight((acc, fn) => fn(acc), x);
	};
}
const addfiveandmultiplybythree = compose(multiplybythree,substracttwo, addfive);
console.log(addfiveandmultiplybythree(5));
// 24