var h = 0
var m = 9
var s = 59
var interval

function timer()
{
	s--
	if(s==0 & m!=0)
	{
		m--
		s=59;
	}
	if(s==0)
	{
		console.log(s)
		clearInterval(interval)
	}
	document.getElementById('hrs').innerText = "0" + h
	document.getElementById('min').innerText = "0" + m
	document.getElementById('sec').innerText = s
}

function start()
{
	document.getElementById('hrs').innerText = "0" + h
	document.getElementById('min').innerText = "0" + m
	document.getElementById('sec').innerText = s
	interval = setInterval(timer, 1000);
}

function reset()
{
	clearTimeout(interval);
	console.log("Hi")
	h = 0
	m = 9
	s = 59
	document.getElementById('hrs').innerText = "0" + h
	document.getElementById('min').innerText = "0" + m
	document.getElementById('sec').innerText = s
}
function pause() 
{
	clearInterval(interval);	
}