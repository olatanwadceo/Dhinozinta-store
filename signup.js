document.querySelector('form').addEventListener('submit', function(e){
	e.preventDefault();
	
	const user = document.getElementById('username').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const confirm = document.getElementById('confirm_password').value;

	const errorMessage = document.getElementById('error-message');
	
	
	if(user === ''|| email === '' || password === '' || confirm === '' ){
		if(errorMessage){
			errorMessage.textContent = 'All field Required';
			errorMessage.style.display = 'block';
			errorMessage.style.color = 'red';
		}	
		return;
	}
	if(password !== confirm){
		if(errorMessage){
			errorMessage.textContent = 'passwords do not match';
			errorMessage.style.display = 'block';
			errorMessage.style.color = 'red';
		}	
		return;
	}
	

	// Check if email already used
	let users = JSON.parse(localStorage.getItem('users') || '[]');
		if(users.some(u => u.email === email)){
			errorMessage.textContent = 'Email already exists, please log in,';
			errorMessage.style.display = 'block';
			errorMessage.style.color = 'red';
			return;
		}
		// save new users
		users.push({
			username: user,
			email: email,
			password: password
		});	
	
	localStorage.setItem('users', JSON.stringify(users));
	
	// Auto login to the dashboard after Sign up
	localStorage.setItem('currentUser', JSON.stringify({username: user, email: email}));
	window.location.href ='dashboard.html';
});