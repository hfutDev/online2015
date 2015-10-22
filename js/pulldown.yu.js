
(function(){
	jQuery.fn.pulldown = function(options){
		var defaults = {
		}
		var opts = $.extend(defaults, options);
		
		$(this).css('position','relative');
		$(this).append('<link rel="stylesheet" href="./css/pulldown.yu.css"><div class="pulldown"><div class="pulldown-black"><img class="pulldown-circle" src="./images/nav/circle.png" /></div><div class="pulldown-body"><img src="./images/nav/wechat.jpg" /></div><div class="pulldown-black"><img class="pulldown-silk" src="./images/nav/silk.png"></div></div>');
		var top, oldTop, oldtime, newtime, onlyDoOne = true;

		
		$('.pulldown-silk').hover(function(){
			top = $(this).parent().parent().css('top');
			top = Number( top.substr(0, top.length - 2) );
			if( top < 0){
				pulldownSilk($(this));
			}
		});
		function pulldownSilk(ele){
			var parentElement = ele.parent().parent();			
			top = parentElement.css('top');
			top = Number( top.substr(0, top.length - 2) );
			/*第一次执行，获取高度*/
			if(onlyDoOne){
				oldTop = top;
				onlyDoOne = false;
			}
			parentElement.addClass('pulldown-animation');
			if(top < 0){				
				parentElement.addClass('pulldown-show');
			}else{
				parentElement.removeClass('pulldown-show');
			}
			
			oldtime = new Date();
			/*设计定时器，20s 后自动关闭*/
			setTimeout(function(){
				top = parentElement.css('top');
				top = Number( top.substr(0, top.length - 2) );
				if(top >= 0){
					parentElement.removeClass('pulldown-show');
				}
			}, 10000);
		}

		$('.pulldown').click(function(){
			top = $(this).css('top');
			top = Number( top.substr(0, top.length - 2) );
			if(top >= 0){
				$(this).removeClass('pulldown-show');
			}
		});
	}
	
	$('body').pulldown();
})(jQuery);