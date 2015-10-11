(function(){
	//启动函数
	init();
	var user = {
		name : '',
		password : '',
		remberme : false
	}
	function init(){
		addLogin();
	}
	function addLogin(){
		$('.btn-group .btn-login').click(function(){
			login();
		});
	}
	function login(){
		user.name = loginForm.username.value;
		user.password = loginForm.password.value;
		user.remberme = loginForm.remberme.value;
		$.ajax({
			url:'',
			success:function(){
				
			}
		});
	}
	
	

})()