
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const showUser = document.getElementById('show');

if(currentUser && currentUser.username){
	if(showUser){
		showUser.textContent = `Welcome, ${currentUser.username}`;
	}	
}else{
		window.location.href = 'login.html';
}

	
document.getElementById('logoutBtn').addEventListener('click', function(){
	
		localStorage.removeItem('currentUser'); // only remove login session
		alert('you have been logged out !');
		window.location.href = 'login.html';	
});
