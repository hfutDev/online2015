/**
 * Created by surongxiang on 15/10/5.
 */
$(document).ready(function () {
    var rightmar = $("#right-main").width();
    $(".right-main").css("marginLeft", -rightmar / 2);
    var xxx = $(".paint-light").width();
    $(".paint-light").css("marginLeft", -xxx / 2);
    var icon1 = $(".icon-1").width();
    var icon2 = $(".icon-2").width();
    var icon3 = $(".icon-3").width();
    var icon4 = $(".icon-4").width();
    var icon5 = $(".icon-5").width();
    var icon6 = $(".icon-6").width();
    var icon7 = $(".icon-7").width();
    var icon8 = $(".icon-8").width();
    var ss = rightmar - icon1 - icon2 - icon3 - icon4 - icon5 - icon6 - icon7 - icon8 - 86;
    $(".sprite-main").find("li").each(function () {
        if ($(this).index() != 7) {
            $(this).css("marginRight", ss / 7);
        }
        $(this).mouseover(function () {
            var i = $(this).find("p").eq(1).attr("class");
            i = i.charAt(i.length - 1) ;
            $(this).find(".book-"+i).addClass("book-shelf-hover");
            var x = $(".light-" + (i ));
            x.fadeIn();
            $(x).parents("li").siblings("li").find(".light").fadeOut();
            $(this).siblings("li").find("p").removeClass("book-shelf-hover")
        });
    });


    $(".img-all").mouseover(function () {
        var i = $(this).attr("class");
        i = i.charAt(i.length - 1);
        $(".paint-light-" + i).fadeIn();
        $(".paint-light-" + i).siblings().fadeOut();
    });

    $(".img-universal").click(function () {
        $(this).siblings().find('.img-content').fadeToggle(1, function () {//第一个参数为动画持续时间
            $(this).addClass('animated flipInY');//给当前元素添加摇晃效果类
        });
    });
});