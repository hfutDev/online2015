/**
 * Created by surongxiang on 15/10/6.
 */
$(".img-universal").click(function () {
    $(this).find('.img-content').fadeToggle(1, function () {//第一个参数为动画持续时间
        $(this).addClass('animated flipInY');//给当前元素添加摇晃效果类
    });
});
var asd = $(".main").width();
$(".main").css("marginLeft", -asd / 2);


$.get("js/report.json", function (data, status) {
    addNews("con-today", 1);
    addNews("con-tomo", 2);
    addNews("con-hou", 3);
    addNews("con-san", 4);

    function addNews(className, n) {
        $("." + className).find("li").each(function () {
            var i = $(this).index();
            if (data[n][i].title != "null") {
                $(this).find("a").html(data[n][i].title);
                $(this).find("a").attr("href", data[n][i].fromurl);
            } else {
                $(this).html("暂无安排");
            }
        });
    }
});