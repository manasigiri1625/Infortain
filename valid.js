function validate()
{
	var userName = document.getElementById('user');
	var passWord = document.getElementById('pass');

	if(userName.value == "saddie@gmail.com")
	{
		if(passWord.value == "member")
		{
			alert('Login successful!')
			location.href = "home.html";
		}
		else if(passWord.value == "")
		{
			alert("Please enter a password");
			pass.focus();
		}
		else
		{
			alert("Please enter a valid password");
			pass.focus();	
		}
	}
	else
	{
		alert("Please enter valid email");
		user.focus();
		return false;
	}
}