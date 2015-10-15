/**
 * Created by surongxiang on 15/10/5.
 */
$(document).ready(function () {
    var rightmar = $("#right-main").width();
    $(".right-main").css("marginLeft", -rightmar / 2);
    var xxx = $(".paint-light").width();
    $(".paint-light").css("marginLeft", -xxx / 2);
    var clientWid = $(window).width();
    var rate = clientWid / 1920;


    var icon1 = $(".icon-1").width();
    var icon2 = $(".icon-2").width();
    var icon3 = $(".icon-3").width();
    var icon4 = $(".icon-4").width();
    var icon5 = $(".icon-5").width();
    var icon6 = $(".icon-6").width();
    var icon7 = $(".icon-7").width();
    var icon8 = $(".icon-8").width();
    var ss = rightmar - icon1 - icon2 - icon3 - icon4 - icon5 - icon6 - icon7 - icon8 - 86;
    $(".sprite-main").find(".sprite-ul1 li").each(function () {
        if ($(this).index() != 7) {
            //$(this).css("marginRight", ss / 7);
        }
        $(this).mouseover(function () {
            var i = $(this).find("p").eq(1).attr("class");
            i = i.charAt(i.length - 1);
            $(this).find(".book-" + i).addClass("book-shelf-hover");
            var x = $(".light-" + (i));
            x.fadeIn().mouseout(function () {
                $(this).fadeOut();
                $(".book-" + i).removeClass("book-shelf-hover");
            });
            $(x).parents("li").siblings("li").find(".light").fadeOut();
            $(this).siblings("li").find("p").removeClass("book-shelf-hover");
        });

    });
    $(".sprite-ul1").find("li").css("margin", "0 " + 35 * rate + "px");
    var iconw = icon1 + icon2 + icon3 + icon4 + icon5 + icon6 + icon7 + icon8 + parseInt($(".sprite-ul1").find("li").css("marginRight")) * 17;
    $(".sprite-ul1").css("marginLeft", -iconw / 2);
    $(".sprite-ul2").css("marginLeft", -iconw / 2);

    var ilight;
    $(".img-hover").hover(function () {
         ilight = $(this).parents(".img-all").index()-2;
        $(".paint-light").find("div").eq(ilight).fadeIn();
    }, function () {
        $(".paint-light").find("div").eq(ilight).fadeOut();
    });

    $(".img-hover").mouseenter(function () {
        $(this).find('a').fadeIn(1, function () {//第一个参数为动画持续时间
            $(this).find(".img-content").addClass('animated flipInY');//给当前元素添加摇晃效果类
        }).css("display","block");
    });
    $(".img-hover").mouseleave(function () {
        $(this).find(".img-content").removeClass('animated flipInY');
        $(this).find("a").hide();
    });



    $(".tag-1").css("top", 25 * rate);
    $(".tag-3").css("top", 25 * rate);
    $(".img-2").find("img").css("marginTop", 49 * rate);
    $(".img-4").find("img").css("marginTop", 49 * rate);
    $(".tag-all").css("width", 105 * rate);

    $(".img-con-1").css({
        width: $(".img-universal").eq(0).width()+5,
        height: $(".img-universal").eq(0).width()+3,
        "marginRight": parseInt($(".img-universal").eq(0).css("paddingLeft"))+15,
        "marginTop": -parseInt($(".img-universal").eq(0).css("paddingLeft"))-parseInt($(".img-universal").eq(0).width())-17
    });

    setTimeout(function () {
        $(".img-con-2").css({
            width: $(".img-universal").eq(1).width()+2,
            height: $(".img-universal").eq(1).width()/1.19,
            marginRight: parseInt($(".img-universal").eq(1).css("paddingLeft"))+15,
            marginTop: -parseInt($(".img-universal").eq(1).css("paddingLeft"))-parseInt($(".img-universal").eq(1).width()/1.19)-15
        });
        $(".img-con-4").css({
            width: $(".img-universal").eq(3).width(),
            height: $(".img-universal").eq(3).width(),
            marginRight: parseInt($(".img-universal").eq(3).css("paddingLeft"))+15,
            marginTop: -parseInt($(".img-universal").eq(3).css("paddingLeft"))-parseInt($(".img-universal").eq(3).width())-15
        });
    },100);

    $(".img-con-3").css({
        width: $(".img-universal").eq(2).width()+2,
        height: $(".img-universal").eq(2).width()/0.55,
        marginRight: parseInt($(".img-universal").eq(2).css("paddingLeft"))+15,
        marginTop: -parseInt($(".img-universal").eq(2).css("paddingLeft"))-parseInt($(".img-universal").eq(2).width()/0.56)-18
    });



    $(".book-shelf").find("img").css("width", $(".book-shelf").width() + 33);

    $(".tag-1").click(function () {
        setTimeout(window.open('http://book.hfutonline.net/'), 100);
    });
    $(".tag-2").click(function () {
        setTimeout(window.open('http://sunnyradio.hfutonline.net/radio/index/'), 100);
    });
    $(".tag-3").click(function () {
        setTimeout(window.open('http://upan.hfutonline.net/upload'), 100);
    });
    $(".tag-4").click(function () {
        setTimeout(window.open('http://sketch.hfutonline.net/sketch/index'), 100);
    });
});