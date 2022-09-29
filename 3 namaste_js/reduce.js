const users=[
								 {firstname:"vasu",lastname:"nurukurthi",age:22},
								 {firstname:"ravi",lastname:"nuri",age:12},
								 {firstname:"shraddha",lastname:"kapoor",age:22},
	];
const output=users.reduce((acc,curr) => {
			if(acc[curr.age])
					acc[curr.age]= ++acc[curr.age];
					else
							acc[curr.age]= 1;
				 return acc;
	},{});

	console.log(output);
	const firstnam=users.filter((x) => x.age>16).map((x) => x.firstname);
	console.log(firstnam);

