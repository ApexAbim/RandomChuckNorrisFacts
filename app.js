let chucky = function()
{
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
	xhr.onload=function()
	{
		if(this.status == 200)
		{
			let chop = JSON.parse(this.responseText);
			chuck.innerHTML=chop.value;
		}

	}
	xhr.send();
}

document.getElementById('joke').onclick=chucky;