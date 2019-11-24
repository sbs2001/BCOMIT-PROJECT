var display = 0;
class User{
	constructor(name,email,password)
	{
		this.name = name ;
		this.email = email;
		this.password = password;
	}
}
if(localStorage.getItem('Users'))
{
	Users = JSON.parse(localStorage.getItem('Users'));	
}
else
{
	Users = [] ;
}
		document.getElementById('signup').addEventListener('click',function(){
		document.getElementById("signupform").style.display="block";
		document.getElementById("LoginForm").style.display="none";
	});
	document.getElementById('login').addEventListener('click',function(){
		document.getElementById("signupform").style.display="none";
		document.getElementById("LoginForm").style.display="block";
	});


	document.getElementById('signupApply').addEventListener('click',function(){
		name = document.getElementById('signupName').value ;
		email = document.getElementById('signupEmail').value;
		password = document.getElementById('signupPass').value;
		Users.push(new User(name,email,password));
		localStorage.setItem("Users", JSON.stringify(Users));
		document.getElementById('signupName').value ='';
		document.getElementById('signupEmail').value='';
		document.getElementById('signupPass').value='';
	});

	document.getElementById('loginApply').addEventListener('click',function()
	{
		email = document.getElementById('loginMail').value;
		password = document.getElementById('loginPass').value;
		var found  = 0 ;
		for(var i = 0 ; i < Users.length ; i++)
		{
			if(Users[i].email == email && Users[i].password == password)
			{
				document.getElementById('user').innerHTML = Users[i].name;
				document.getElementById('greet').innerHTML = "Welcome! " + Users[i].name;
				document.getElementById("signupform").style.display="none";
				document.getElementById("LoginForm").style.display="none";
				document.getElementById("forNewUser").innerHTML='Long time no see! <br> Check out  courses';
				found =1;
				window.alert("Success");
				break;
			}

		}
		if(found==0)
		{
			window.alert("Enter a valid Username and correct Password");
		}

	});
