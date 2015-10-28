
(function(){
	//启动函数
	init();
	
	function init(){
		bgHover();
		getOneMore();
		// addScrollBar();
		silkHoverRemove();
	};
	function bgHover(){
		
		var one_bg;
		var one_desc;

		$('.one-body>.one-bg, .one-body>.one-bg+img').hover(function(){		
			one_bg = $(this).parent().find('.one-bg');
			// one_desc = $(this).parent().parent().find('.one-desc');
			one_bg.addClass('transition-all');
		},function(){
			one_bg.removeClass('transition-all');	
		});

		$('.module-one').hover(function(){		
			one_desc = $(this).find('.one-desc');
			if(!one_desc.hasClass('one-show')){
				one_desc.filter(':not(:animated)').slideDown(500);
			}
			
			
		},function(){		
			if(one_desc.css('display') == 'block' && !one_desc.hasClass('one-show')){
				one_desc.slideUp(500);
			}
			
		});
		
	}
	function getOneMore(){
		$('.get-one-more').click(function(){
			var current = $(this);
			var one_more = $(this).parent().find('.one-more');
			one_more.slideToggle('slow', function(){
				// current.fadeOut();
				current.slideUp(200);
			});
		});
		$('.one-silk').click(function(){
			var one_more = $(this).parent().parent().parent().find('.one-more');
			var get_more = $(this).parent().parent().parent().find('.get-one-more');
			if(one_more.css('display') == 'block'){
				// get_more.fadeIn();
				get_more.slideDown(200);
			}
			one_more.slideToggle('slow', function(){
				if(one_more.css('display') == 'block'){
					// get_more.fadeOut();
					get_more.slideUp(200);
				}
			});
		});
	}
	function addScrollBar(){
		$('.main').mCustomScrollbar();
	}
	function silkHoverRemove(){
		$('.module-body .one-silk').each(function(){
			var get_one_more = $(this).parent().parent().parent().find('.get-one-more');
			if(!get_one_more.length){
				$(this).css('cursor','initial');
			}
		});
	}

})()