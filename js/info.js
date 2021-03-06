/**
 * Created by surongxiang on 15/10/9.
 */



$(document).ready(function () {

    var baseurl = "/news/news/1/10000/";
    var url1;
    $("body").on('click', '[data-action]', function () {
        var actionName = $(this).data('action');
        switch (actionName) {
            case 'a-all':
                url1 = baseurl;
                getNews(url1);
                break;
            case 'a-tongzhi':
                url1 = baseurl + 1;
                getNews(url1);
                break;
            case 'a-zhilai':
                url1 = baseurl + 7;
                getNews(url1);
                break;
            case 'a-renzai':
                url1 = baseurl + 8;
                getNews(url1);
                break;
            case 'a-baogao':
                url1 = baseurl + 3;
                getNews(url1);
                break;
            case 'a-shetuan':
                url1 = baseurl + 5;
                getNews(url1);
                break;
            case 'a-xueba':
                url1 = baseurl + 6;
                getNews(url1);
                break;
            case 'a-xiaonei':
                url1 = baseurl + 11;
                getNews(url1);
                break;
            case 'a-yishi':
                url1 = baseurl + 9;
                getNews(url1);
                break;
        }
    });

    getNews(baseurl);

    $(window).resize(function() {
        $(".info-con").empty();
        getNews(baseurl);
    });

    var url2 = "/news/news/";

    function getNews(url) {
        $.ajax({
            type: "get",
            url: url,
            dataType: "json",
            success: function (data) {
                $(".btn-all").removeClass("curr");
                if(data.errmsg=='none'){
                    $(".info-con").empty();
                    $(".info-more").hide();
                    return;
                }
                if(url=="/news/news/1/10000/"){
                    $(".btn-all").addClass("curr");
                }
                var clientWid = $(window).width();
                var rate = clientWid / 1920;
                $(".info-more").show();
                var item = 13 * rate;
                item = Math.round(item);
                initPagination(item);
                function handlePaginationClick(page_index, jq) {
                    page_index++;
                    $(".info-list").find("ul").empty();
                    for (var i = (page_index - 1) * item; i <= page_index * item - 1 && i < data.news.length; i++) {
                        var tab = "<li title='" + data.news[i].aid + "'><span>" + data.news[i].time + "</span><a  data-toggle='modal' data-target='#myModal'>" + data.news[i].title + "</a></li>";
                        $(".info-list").find("ul").append(tab);
                    }
                    $(".info-list").find("ul").find("li").click(function () {
                        getContent(url2, $(this).attr("title"));
                    });
                    return false;
                }

                /**
                 * Initialisation function for pagination
                 */
                function initPagination(ii) {
                    // count entries inside the hidden content
                    var num_entries = data.news.length;
                    // Create content inside pagination element
                    $(".searchresult_pagination").pagination(num_entries, {
                        items_per_page: ii,
                        num_edge_entries: 1,
                        callback: handlePaginationClick
                    });
                }

                function getContent(url, aid) {
                    $.ajax({
                        type: "get",
                        url: url + aid,
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (data) {
                            $(".con-title").html(data.title);
                            $(".con-time").html(data.time);
                            $(".con-con").html(data.content);
                            $("#artibody").removeClass("content");
                        },
                        error: function (err) {
                            console.log(err);
                        }
                    });
                }

            },
            error: function (err) {
                console.log(err);
            }
        });
    }


});