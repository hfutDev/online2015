(function(){
	//启动函数
	init();
	var user = {
		email : ''
	}
	function init(){
		addEmail();
	}
	function addEmail(){
		$('.btn-group .btn-login').click(function(){
			findByEmail();
		});
	}
	function findByEmail(){
		user.email = findForm.email.value;
		$.ajax({
			url:'',
			success:function(){
				
			}
		});
	}
	
	

})()