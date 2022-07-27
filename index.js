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