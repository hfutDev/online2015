/**
 * Created by surongxiang on 15/10/6.
 */
$(".img-universal").click(function() {
    $(this).find('.img-content').fadeToggle(1,function() {//第一个参数为动画持续时间
        $(this).addClass('animated flipInY');//给当前元素添加摇晃效果类
    });
});
var asd = $(".main").width();
$(".main").css("marginLeft", -asd / 2);