let obj1={a:true};
let obj2=obj1;
obj1.a='vas';
delete obj1.a;
obj2='bye';
console.log(obj1);
console.log(obj2);