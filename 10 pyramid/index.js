//---------------------------------------------------------- method-1 ---------------------------------------------------------- 
function pyramid(n)
{
	const midpoint =Math.floor((2*n-1)/2);

	for(let r=0;r<n;r++)
	{
		let level='';

		for(let col=0;col<2*n-1;col++)
		{
			if(midpoint-r<=col&&midpoint+r>=col)
				level+='#';
			else
				level+=' ';
		}
		console.log(level); 
	}
}
console.log(pyramid(5));