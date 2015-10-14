/**
 * Created by surongxiang on 15/10/9.
 */

$(document).ready(function () {


    //var url1 = "http://news.hfut.club/news/1/1000";
    var url1 = "./js/report.json";
//var url2 = "./js/report2.json";
    var url2 = "http://news.hfut.club/news/news/51";
    var clientWid = $(window).width();
    var rate = clientWid / 1920;

    getNews(url1);

    $(".info-list").find("ul").find("li").click(function () {
        getContent(url2, $(this).attr("title"));
    });


    $(".info-list").find("li:last").css("borderBottom", "1px solid #777");
    $(".info-div").css("width", $(".info-img").width() / 2 - 40);
    $(".info-div").find("img").css("width", $(".info-img").width() / 2 - 40);
    $(".info-div").find("p").css({
        "width": $(".info-img").width() / 4 - 24
    });


    $(".main").css("paddingTop", 7 / rate + "%");


    function getNews(url) {
        $.ajax({
            type: "get",
            //url: url+i+"/"+item,
            url: url,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                var item = 14 * rate;
                item = Math.round(item);
                initPagination(item);
                var a = $(".info-con").find("li").height();
                var b = $(".info-con").find("li").css("paddingTop");
                var c = parseInt(a) + parseInt(b) * 2;
                $(".info-con").css("height", c * item);
                function handlePaginationClick(page_index, jq) {
                    page_index++;
                    $(".info-list").find("ul").empty();
                    for (var i = (page_index - 1) * item; i <= page_index * item - 1 && i < data.news.length; i++) {
                        var tab = "<li title='" + data.news[i].aid + "'><span>" + data.news[i].time + "</span><a  data-toggle='modal' data-target='#myModal'>" + data.news[i].title + "</a></li>";
                        $(".info-list").find("ul").append(tab);
                    }
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

                //function getCon(id){
                //    var i;
                //    for( i =0;i<data.news.length;i++){
                //        if(data.news[i].aid==id){
                //            break;
                //        }
                //    }
                //    return data.news[i].title;
                //}


            },
            error: function (err) {
                console.log(err);
            }
        });
    }


    function getContent(url, aid) {
        $.ajax({
            type: "get",
            url: url,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                console.log(data);
                $(".con-title").html(data.title);
                $(".con-time").html(data.time);
                $(".con-con").html(data.content);
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

});