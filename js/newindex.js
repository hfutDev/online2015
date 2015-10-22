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
});