(function(){
	//启动函数
	init();
	function init(){
		getSiteMore();
		addScrollBar();
	}
	function getSiteMore(){
		$('.get-site-more').click(function(){
			var current = $(this);
			var site_more = $(this).parent().find('.site-more');
			site_more.slideToggle('slow', function(){
				current.fadeOut();
			});
		});
		$('.fix-silk img').click(function(){
			var site_more = $(this).parent().parent().find('.site-more');
			var get_more = $(this).parent().parent().find('.get-site-more');
			if(site_more.css('display') == 'block'){
				get_more.fadeIn();
			}
			site_more.slideToggle('slow', function(){
				if(site_more.css('display') == 'block'){
					get_more.fadeOut();
				}
			});
		});
	}
	function addScrollBar(){
		$('.main').mCustomScrollbar();
	}

})()