(function(){
	//启动函数
	init();
	function init(){
		bgHover();
		getOneMore();
		addScrollBar();
	}
	function bgHover(){
		var one_bg;
		var one_desc;
		$('.one-body img').hover(function(){
			one_bg = $(this).parent().find('.one-bg');
			one_desc = $(this).parent().parent().find('.one-desc');
			one_bg.addClass('one-bg-transform');
			// one_desc.toggle(500);
			one_desc.slideToggle(500);

		},function(){
			one_bg.removeClass('one-bg-transform');			
		});

		$('.module-one').hover(function(){
		},function(){
			var one_desc = $(this).find('.one-desc');
			if(one_desc.css('display') == 'block'){
				one_desc.slideToggle(500);
			}
		});
	}
	function getOneMore(){
		$('.get-one-more').click(function(){
			var current = $(this);
			var one_more = $(this).parent().find('.one-more');
			one_more.slideToggle('slow', function(){
				current.fadeOut();
			});
		});
		$('.one-silk').click(function(){
			var one_more = $(this).parent().parent().find('.one-more');
			var get_more = $(this).parent().parent().find('.get-one-more');
			if(one_more.css('display') == 'block'){
				get_more.fadeIn();
			}
			one_more.slideToggle('slow', function(){
				if(one_more.css('display') == 'block'){
					get_more.fadeOut();
				}
			});
		});
	}
	function addScrollBar(){
		$('.main').mCustomScrollbar();
	}

})()