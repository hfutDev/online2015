(function(){
	//启动函数
	init();
	var error = {
		begin : '<div class="error">',
		end : '</div>',
		email : '请输入正确的邮箱地址.',
		name : '长度是1~12个字符.',
		password : '6-12位字母数字组合.',
		confirmPassword : '确认密码错误.'
	};
	var check = {
		name : true,
		ps1 : true,
		ps2 : true,
		email : true
	}
	function init(){
		addEvent();
	}
	function addEvent(){
		$(document).ready(function(){
			addClick();
			addFocus();
		});
		
	}
	function addFocus(){
		$('form label input').focus(function(){
			$(this).parent().find('.error').remove();
		});
	}
	function addClick(){
		$('.btn-group a.register').click(function(){
			check.name = checkna();
			check.ps1 = checkpsd1();
			check.ps2 = checkpsd2();
			check.email = checkmail();
			if(check.name && check.ps1 && check.ps2 && check.email){
				//login ajax.
			}
		});
		
	}
	//检查用户名
	function checkna(){
		var flag = true;
		na=form1.username.value;
  		if( na.length <1 || na.length >12){		
			flag = false;
		}
		if(!flag && !$('.login-form label input[name="username"]+div').length){
			$('.login-form label input[name="username"]').after(error.begin + error.name + error.end);
		}
		return flag;
	}
    //验证密码 
	function checkpsd1(){    
		var flag = true;
		psd1=form1.password.value;  
		var flagZM=false ;
		var flagSZ=false ; 
		var flagQT=false ;
		if(psd1.length<6 || psd1.length>12){   
			flag = false;
		}else
		{   
		  for(i=0;i < psd1.length;i++)   
			{    
				if((psd1.charAt(i) >= 'A' && psd1.charAt(i)<='Z') || (psd1.charAt(i)>='a' && psd1.charAt(i)<='z')) 
				{   
					flagZM=true;
				}
				else if(psd1.charAt(i)>='0' && psd1.charAt(i)<='9')    
				{ 
					flagSZ=true;
				}else    
				{ 
					flagQT=true;
				}   
			}   
			if(!flagZM||!flagSZ||flagQT){
				flag = false;
			}

		 
		}
		if(!flag && !$('.login-form label input[name="password"]+div').length){
			$('.login-form label input[name="password"]').after(error.begin + error.password + error.end);
		}
		return flag;
	}
	//验证确认密码 
	function checkpsd2(){
		var flag = true;
		if(form1.password.value!=form1.confirmPassword.value) {
			flag = false;
		}
		if(!flag && !$('.login-form label input[name="confirmPassword"]+div').length){
			$('.login-form label input[name="confirmPassword"]').after(error.begin + error.confirmPassword + error.end);
		}
		return flag;

	}
	//验证邮箱	
	function checkmail(){
		var flag = true;
		apos=form1.email.value.indexOf("@");
		dotpos=form1.email.value.lastIndexOf(".");
		if (apos<1||dotpos-apos<2) 
		{
		  	flag = false;
		}
		if(!flag && !$('.login-form label input[name="email"]+div').length){
			$('.login-form label input[name="email"]').after(error.begin + error.email + error.end);
		}
		return flag;
	}
	
	
	

})()