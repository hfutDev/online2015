/**
 * Created by surongxiang on 15/10/6.
 */
$(".img-universal").click(function () {
    $(this).find('a').fadeIn(1, function () {//第一个参数为动画持续时间
        $(this).addClass('animated flipInY');//给当前元素添加摇晃效果类
    });
});
$(".img-universal").find(".img-content").mouseout(function () {
    $(this).parent("a").hide();
});

var asd = $(".main").width();
$(".main").css("marginLeft", -asd / 2);

//var url = "http://news.hfut.club/news/report/";

var url = "./js/report.json";

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
                    console.log(i);
                    $(this).html("");
                    if($(this).index()==0){
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