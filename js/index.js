$(document).ready(function(){
	$('.nav').hide();
	$('.content').hide();

	var fontImg = new Image();
	fontImg.src = "images/index/font.gif";
	fontImg.onload = function (){
		setTimeout(function(){
			$('.nav').show();
			$('.content').show();

			$(".m-modal-pic").addClass('m-clock-pic');
			setTimeout(function(){
				$(".m-modal-pic").removeClass('m-clock-pic');
				$(".m-modal-pic").addClass('m-block');
				$('.m-modal-font').hide();
				$('.m-modal-box').addClass('m-modal-transform');
			}, 5000);
		}, 3000);
	}
});