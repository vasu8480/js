function sides(literals, ...expressions) {
    var a=expressions[0];
    var p=expressions[1];
    return [(p - Math.sqrt(p**2 - 16*a))/4, (p + Math.sqrt(p**2 - 16*a))/4];

} 
var literals=1;
var expressions = [10,14];

console.log(sides(literals, ...expressions));
