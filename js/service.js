/**
 * Created by surongxiang on 15/10/5.
 */
$(document).ready(function () {
    var clientWid = $(window).width();
    var rate = clientWid / 1920;

    $(".img-2").find("img").css("marginTop", 67 * rate);
    $(".img-4").find("img").css("marginTop", 49 * rate);
    $(".tag-all").css("width", 105 * rate);

    $(".img-con-1").css({
        width: $(".img-universal").eq(0).width() + 5,
        height: $(".img-universal").eq(0).width() + 8,
        "marginLeft": parseInt($(".img-universal").eq(0).css("paddingLeft")) + 14,
        "marginTop": -parseInt($(".img-universal").eq(0).css("paddingLeft")) - parseInt($(".img-universal").eq(0).width()) - 24
    });

    $(".img-con-2").css({
        width: $(".img-universal").eq(1).width() + 6,
        height: $(".img-universal").eq(1).width() / 1.19 + 5,
        marginLeft: parseInt($(".img-universal").eq(1).css("paddingLeft")) + 13,
        marginTop: -parseInt($(".img-universal").eq(1).css("paddingLeft")) - parseInt($(".img-universal").eq(1).width() / 1.19) - 22
    });
    $(".img-con-4").css({
        width: $(".img-universal").eq(3).width() + 3,
        height: $(".img-universal").eq(3).width() + 3,
        marginLeft: parseInt($(".img-universal").eq(3).css("paddingLeft")) + 16,
        marginTop: -parseInt($(".img-universal").eq(3).css("paddingLeft")) - parseInt($(".img-universal").eq(3).width()) - 22
    });

    $(".img-con-3").css({
        width: $(".img-universal").eq(2).width() + 5,
        height: $(".img-universal").eq(2).width() / 0.56+7,
        marginLeft: parseInt($(".img-universal").eq(2).css("paddingLeft")) + 13,
        marginTop: -parseInt($(".img-universal").eq(2).css("paddingLeft")) - parseInt($(".img-universal").eq(2).width() / 0.56) - 24
    });

    $(".sprite-main").find(".sprite-ul1 li").each(function () {
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

    var ilight;
    $(".img-hover").hover(function () {
        ilight = $(this).parents(".img-all").index() - 2;
        $(".paint-light").find("div").eq(ilight).fadeIn();
    }, function () {
        $(".paint-light").find("div").eq(ilight).fadeOut();
    });

    $(".img-hover").mouseenter(function () {
        $(this).find('a').fadeIn(1, function () {//第一个参数为动画持续时间
            $(this).find(".img-content").addClass('animated flipInY');//给当前元素添加摇晃效果类
        }).css("display", "block");
    });
    $(".img-hover").mouseleave(function () {
        $(this).find(".img-content").removeClass('animated flipInY');
        $(this).find("a").hide();
    });


    $("body").on('click', '[data-action]', function () {
        var actionName = $(this).data('action');
        switch (actionName) {
            case 'tag-1':
                openLink("http://book.hfutonline.net/");
                break;
            case 'tag-2':
                openLink("http://sunnyradio.hfutonline.net/radio/index/");
                break;
            case 'tag-3':
                openLink("http://upan.hfutonline.net/upload");
                break;
            case 'tag-4':
                openLink("http://sketch.hfutonline.net/sketch/index");
                break;
        }
    });

    function openLink(url) {
        setTimeout(window.open(url), 100);
    }
});