(function(){
	//启动函数
	init();
	function init(){
		loginBg();
	}
	function loginBg(){
		$(window).resize(function(){
			changeBg();
		});
		$(document).ready(function(){
			changeBg();
		});
	}
	function changeBg(){
		var bg_width = $('.login-bg').width();
		var bg_height = $('.login-bg').height();		
		var img = new Image();
		img.src = $('.login-bg img').attr('src');
		var img_width = img.width;
		var img_height = img.height;
		var img_scale = img_width / img_height;
		if(bg_width > bg_height*img_scale){
			$('.login-bg img').removeClass('login-bg-height').addClass('login-bg-width');
			$('.login-bg img').attr('style','');
		}else{
			$('.login-bg img').removeClass('login-bg-width').addClass('login-bg-height');
			var bg_top = (bg_height - bg_width/img_scale)/2 ;
			$('.login-bg img').attr('style','margin-top:' + bg_top + 'px');
		}
	}
	

})()