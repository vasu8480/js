const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
]

//------------------------------------ Normal way of doing it -----------------------------------------------
Promise.all(urls.map(url => 
	fetch(url).then(resp => resp.json())
)).then(array =>{
			console.log('users',array[0])
			console.log('posta',array[1])
			console.log('albums',array[2])
}).catch('oops');

//----------------------------------- Using async/await	-------------------------------------------------------
const getData = async () => {
	try{
		const [users,posts,albums] = await Promise.all(urls.map(async function(url){ 
		const response=await fetch(url);
		return resp.json();
	}));
		console.log('users',users)
		console.log('posta',posts)
		console.log('albums',albums)
	}
	catch(err){
		console.log('oops',err)
	}
}
getData();

// new async 
const getData2=async function(){
	const arrayofpromises=urls.map(url=>fetch(url));
	for await(let request of arrayofpromises){
		const data=await request.json();
		console.log(data);
	}
}
getData2();

