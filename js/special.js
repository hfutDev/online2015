(function () {
    //启动函数
    init();
    function init() {
        getSiteMore();
        // addScrollBar();
    }

    function getSiteMore() {
        $('.get-site-more').click(function () {
            var current = $(this);
            var site_more = $(this).parent().find('.site-more');
            site_more.slideToggle('slow', function () {
                // current.fadeOut();
                current.slideUp(200);
            });
        });
        $('.fix-silk img').click(function () {
            var site_more = $(this).parent().parent().find('.site-more');
            var get_more = $(this).parent().parent().find('.get-site-more');
            if (site_more.css('display') == 'block') {
                // get_more.fadeIn();
                get_more.slideDown(200);
            }
            site_more.slideToggle('slow', function () {
                if (site_more.css('display') == 'block') {
                    // get_more.fadeOut();
                    get_more.slideUp(200);
                }
            });
        });
    }

    // function addScrollBar() {
    //     $('.main').mCustomScrollbar();
    // }

    $('.site-flip').each(function (index, item) {
        var obj = $(item);
        var desc = obj.find('.site-description');
        desc.addClass('animated')
        
        obj.hover(function () {
            desc.filter(':not(:animated)').addClass('flipInY');
        }, function () {
            desc.filter(':not(:animated)').removeClass('flipInY');
        });
        // obj.click(function () {
        //     if(desc.hasClass('flipInY')){
        //         desc.filter(':not(:animated)').removeClass('flipInY');
        //     }else{
        //         desc.filter(':not(:animated)').addClass('flipInY');
        //     }
        // })
    });

})()