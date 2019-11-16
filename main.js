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
    