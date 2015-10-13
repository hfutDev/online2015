$(document).ready(function(){
	var blog = $('.m-toggle ul li');
	console.log(blog);
	blog.eq(0).on('click', function(){
		$('.m-student').hide();
		$('.m-left').show();
		console.log(444444444)
	});
	blog.eq(1).on('click', function(){
		$('.m-left').hide();
		$('.m-student').show();
		console.log(55555555)
	});
});
