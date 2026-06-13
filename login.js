document.querySelector('form').addEventListener('submit', function(e){
	e.preventDefault();
	
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const errorMessage = document.getElementById('error-message');
		
	// Check password validation
		if(email ==='' || password ==='' ){
			if(errorMessage){
				errorMessage.textContent = 'All Fields Required';
				errorMessage.style.display = 'block';
				errorMessage.style.color = 'red';
			}	
			return;
		}
		
	//Get all Users Array
	const users = JSON.parse(localStorage.getItem('users') || '[]');
	 
	 //check if email exists
	 const emailExists = users.find(u => u.email === email);
		if(!emailExists){
			// Email not found, Sign up.
			alert('Email not found, please sign up first');
			window.location.href = 'signup.html';
			return;
		}
		
	 
	 //Found User with matching email + password
	const foundUser = users.find(u => u.email === email && u.password === password);
	 
		if(foundUser){
	 // save current logged in User
		localStorage.setItem('currentUser', JSON.stringify({
			username: foundUser.username,
			email: foundUser.email
		}));
		 window.location.href = 'index.html';
		}else{
			errorMessage.textContent = 'Invalid email or password'; 
			errorMessage.style.display = 'block';
			errorMessage.style.color = 'red';	
		}
		
});
		
		

