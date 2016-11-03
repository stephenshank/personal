function activate(){
	document.getElementById('song').play();
	document.getElementById("profile").src="images/profile_blue.jpg";
}

function deactivate(){
	document.getElementById('song').pause();
	document.getElementById("profile").src="images/profile.jpg";
}

function select(page){
	$('.page').hide();
	$('li.nav').removeClass('selected');
	$('#nav-'+page).addClass('selected');
	$('#'+page).show()
}