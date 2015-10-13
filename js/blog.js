$(document).ready(function(){
	var blog = $('.m-toggle ul li');
	var teacher = true;
	var apiHost = '/';
	blog.eq(0).on('click', function(){
		$('.m-student').hide();
		$('.m-left').show();
		$('.m-left .m-blog-title span').eq(1).text('优秀博导');
		$('.m-right .m-blog-title span').eq(1).text('精美博文');
		teacher = true;
		blogNews();
	});
	blog.eq(1).on('click', function(){
		$('.m-left').hide();
		$('.m-student').show();
		$('.m-student .m-blog-title span').eq(1).text('精美博文');
		$('.m-right .m-blog-title span').eq(1).text('原创美文');
		teacher = false;
		blogNews();
	});

	init();
	function init(){
		blogTeacher();
		blogNews();
		blogStudent();
		$(".m-blog-num span").eq(0).addClass("active");
	}

	function blogTeacher(){
		var currentPage = 1;
		var list = 3;
		var items = 5;
		blogTeacherList(currentPage, list, items);

		$('.m-blog-num').delegate('span', 'click', function(){
			$(this).parent().find(".active").removeClass("active");
			$(this).addClass("active");
			currentPage = $(this).text();
			blogTeacherList(currentPage, list, items);
		});

		function blogTeacherList(page, list, items){
			var url = apiHost + 'news/guide/' + page + '/' + list + '/' + items;
			// var url = '../data/blogteacher.json';
			var blogList;
			$.getJSON(url, function (resp){
				blogList = resp.blog;

				var len = blogList.length;
				for(var i = 0; i < len; i++){
					$('.m-blog-pic').eq(i).attr('src', blogList[i].avatar);

					$('.m-blog-name').eq(i).text(blogList[i].name);

					var blogStr = '';
					for(var j = 0; j < items; j++){
						blogStr += '<li><a href="' + blogList[i].blog[j].url + '" target="_blank">' + blogList[i].blog[j].title + '</a></li>';
					}
					var newList = $('.m-blog-list ul');
					newList.html(blogStr);
				}
			});
		}
	}

	function blogNews(){
		var totalPage = 0;
		
		var page = 1; items = 17;
		blogNewsList(page, items);

		$('.m-news-page span').eq(0).on('click', function(){
			if(page < 2){
				return;
			}
			page--;
			blogNewsList(page, items);
		});
		$('.m-news-page span').eq(1).on('click', function(){
			if(page > totalPage - 1){
				return;
			}
			page++;
			blogNewsList(page, items);
		});

		function blogNewsList(page, items){
			var people;
			if(teacher){
				people = "guide";
			}else{
				people = "student";
			}
			var url = apiHost + 'news/' + people + '/' + page + '/' + items;
			// var url = '../data/blognews.json';
			var blogList;
			$.getJSON(url, function (resp){
				blogList = resp.blog;
				totalPage = resp.total;

				var len = blogList.length;
				var blogStr = '';
				for(var i = 0; i < len; i++){
					blogStr += '<li><a href="' + blogList[i].url + '" target="_blank">' + blogList[i].title + '</a></li>';
				}

				var newList = $('.m-news-content ul');
				newList.html(blogStr);
			});
		}
	}

	function blogStudent(){
		var items = 14;
		// var url = '../data/blogstudent.json';
		var url = apiHost + 'news/student/' + items;
		// var blogList;
		$.getJSON(url, function (resp){
			blogList = resp.blog;
			totalPage = resp.total;

			var len = blogList.length;
			var blogStr = '';
			for(var i = 0; i < len/2; i++){
				blogStr += '<li><a href="' + blogList[i].url + '" target="_blank">' + blogList[i].title + '</a></li>';
			}
			var newList = $('.m-student-list ul').eq(0);
			newList.html(blogStr);

			blogStr = '';
			for(var i = len/2; i < len; i++){
				blogStr += '<li><a href="' + blogList[i].url + '" target="_blank">' + blogList[i].title + '</a></li>';
			}
			newList = $('.m-student-list ul').eq(1);
			newList.html(blogStr);
		});
	}

});
