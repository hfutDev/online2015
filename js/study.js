/**
 * Created by surongxiang on 15/10/6.
 */
$(".img-universal").mouseenter(function () {
    $(this).find("a").fadeIn(1, function () {//第一个参数为动画持续时间
        $(this).find(".img-content").addClass('animated flipInY');//给当前元素添加摇晃效果类
    });
});
$(".img-universal").mouseleave(function () {
    $(this).find("a").hide();
    $(this).find(".img-content").removeClass('animated flipInY');
});

$(".img-con-1").css({
    width: $(".img-universal").eq(0).width() + 3,
    height: $(".img-universal").eq(0).width()+3,
    marginLeft: parseInt($(".img-universal").eq(0).find("img").css("paddingLeft")) + 15,
    marginTop: parseInt($(".img-universal").eq(0).find("img").css("paddingLeft")) + 15
});

$(".img-con-2").css({
    width: $(".img-universal").eq(1).width()+3,
    height: $(".img-universal").eq(1).width()+3,
    marginLeft: parseInt($(".img-universal").eq(1).find("img").css("paddingLeft")) + 15,
    marginTop: parseInt($(".img-universal").eq(1).find("img").css("paddingLeft")) + 15
});

var url = "http://news.hfut.club/news/report/";

$.ajax({
    type: "get",
    url: url,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
        addNews("con-today", 1);
        addNews("con-tomo", 2);
        addNews("con-hou", 3);
        addNews("con-san", 4);
        function addNews(className, n) {
            $("." + className).find("li").each(function () {
                var i = $(this).index();
                if (data[n] != null) {
                    if (i < data[n].length) {
                        $(this).find("a").html(data[n][i].title);
                        $(this).find("a").attr("href", data[n][i].fromurl);
                    }
                    else {
                        $(this).html("");
                    }
                } else {
                    $(this).html("");
                    if ($(this).index() == 0) {
                        $(this).html("暂无安排");
                    }
                }
            });
        }
    },
    error: function (err) {
        console.log(err);
    }
});