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

//---------------------------------------------------------- method-2 ---------------------------------------------------------- 
function pyramid(n,row=0,level='')
{
	const midpoint =Math.floor((2*n-1)/2);
	if(n===row)
		return;
	
	if(level.length===2*n-1)
	{
		console.log(level);
		return pyramid(n,row+1);
	}

	let add;
	if(midpoint - row <= level.length && midpoint + row >= level.length)
				add='#';
	else
		add=' ';
	pyramid(n,row,level+add);
}
console.log(pyramid(5));