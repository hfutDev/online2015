
(function(){
	jQuery.fn.pulldown = function(options){
		var defaults = {
		}
		var opts = $.extend(defaults, options);
		
		$(this).css('position','relative');
		$(this).append('<link rel="stylesheet" href="./css/pulldown.yu.css"><div class="pulldown"><div class="pulldown-black"><img class="pulldown-circle" src="./images/nav/circle.png" /></div><div class="pulldown-body"><img src="./images/nav/erweima.png" /></div><div class="pulldown-black"><img class="pulldown-silk" src="./images/nav/silk.png"></div></div>');
		var top, oldTop, oldtime, newtime, onlyDoOne = true;

		$('.pulldown-silk').click(function(){
			var parentElement = $(this).parent().parent();
			/*第一次执行，获取高度*/
			if(onlyDoOne){
				oldTop = parentElement.css('top');
				oldTop = Number( oldTop.substr(0, oldTop.length - 2) );
				onlyDoOne = false;
			}
			parentElement.filter(':not(:animated)').animate({
				top:4
			},800);
			top = 4;
			oldtime = new Date();
			/*设计定时器，20s 后自动关闭*/
			setTimeout(function(){
				top = parentElement.css('top');
				top = Number( top.substr(0, top.length - 2) );
				if(top >= 0){
					parentElement.filter(':not(:animated)').animate({
						top: oldTop
					},800);
				}
			}, 10000);
		});
		$('.pulldown').click(function(){
			top = $(this).css('top');
			top = Number( top.substr(0, top.length - 2) );
			if(top >= 0){
				$(this).filter(':not(:animated)').animate({
					top: oldTop
				},800);
				top = oldTop;
			}
		});
	}
	
	$('body').pulldown();
})(jQuery);