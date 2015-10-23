$(document).ready(function(){
	$(".n-box-nav ul").delegate('li', 'mouseover', function(e){
		var src = e.target.src;
		src = src.split('.');
		e.target.src = src[0] + '1.' + src[1];
	});
	$(".n-box-nav ul").delegate('li', 'mouseout', function(e){
		var src = e.target.src;
		src = src.split('1.');
		e.target.src = src[0] + '.' + src[1];
	});

	$.each($('.content>ul>li a p span'), function (index, item) {
		var obj = $(item);
		obj.hover(function() {
			console.log(111111111111)
			obj.toggleClass('active');
		});
	})
});