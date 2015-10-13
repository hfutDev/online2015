$(document).ready(function(){
	var blog = $('.m-toggle ul li');
	var teacher = true;
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
	}

	var apiHost = 'http://news.hfut.club/';

	function blogTeacher(){
		var currentPage = 1;
		var list = 3;
		var items = 5;
		blogTeacherList(currentPage, list, items);

		$('.m-blog-num').delegate('span', 'click', function(){
			currentPage = $(this).text();
			blogTeacherList(currentPage, list, items);
		});

		function blogTeacherList(page, list, items){
			// var url = apiHost + 'news/guide/' + page + '/' + list + '/' + items;
			var url = '/online2015/data/blogteacher.json';
			var blogList;
			$.get(url, function (resp){
				blogList = resp.blog;
				blogList[0].blog[0].url;

				var len = blogList.length;
				for(var i = 0; i < len; i++){
					$('.m-blog-pic').eq(i).attr('src', blogList[i].avatar);

					$('.m-blog-name').eq(i).text(blogList[i].name);

					var blogStr = '';
					for(var j = 0; j < items; j++){
						blogStr += '<li><a href="' + blogList[i].blog[j].url + '">' + blogList[i].blog[j].title + '</a></li>';
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

		$('.m-news-page').eq(0).on('click', function(){
			page--;
			if(page < 1){
				return;
			}
			blogNewsList(page, items);
		});
		$('.m-news-page').eq(1).on('click', function(){
			page++;
			if(page > totalPage){
				return;
			}
			blogNewsList(page, items);
		});

		function blogNewsList(page, items){
			if(teacher){
				people = "guide";
			}else{
				people = "student";
			}
			// var url = apiHost + 'news/' + peopel + '/' + page + '/' + items;
			var url = '/online2015/data/blognews.json';
			var blogList;
			$.get(url, function (resp){
				blogList = resp.blog;
				totalPage = resp.total;

				var len = blogList.length;
				var blogStr = '';
				for(var i = 0; i < len; i++){
					blogStr += '<li><a href="' + blogList[i].url + '"><a>' + blogList[i].title + '</li>';
				}

				var newList = $('.m-news-content ul');
				newList.html(blogStr);
			});
		}
	}

	function blogStudent(){
		var items = 14;
		var url = '/online2015/data/blogstudent.json';
		// var url = apiHost + 'news/student/' + items;
		var blogList;
		$.get(url, function (resp){
			blogList = resp.blog;
			totalPage = resp.total;

			var len = blogList.length;
			var blogStr = '';
			for(var i = 0; i < len/2; i++){
				blogStr += '<li><a href="' + blogList[i].url + '"><a>' + blogList[i].title + '</li>';
			}
			var newList = $('.m-student-list ul').eq(0);
			newList.html(blogStr);

			blogStr = '';
			for(var i = len/2; i < len; i++){
				blogStr += '<li><a href="' + blogList[i].url + '"><a>' + blogList[i].title + '</li>';
			}
			newList = $('.m-student-list ul').eq(1);
			newList.html(blogStr);
		});
	}

});
