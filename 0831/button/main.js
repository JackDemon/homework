/**
 * Created by liuyujing on 16/9/1.
 */
$(function() {
    var index = 0;
    var content = [[{title:"葫芦娃",content:"在藤架上"},{title:"葫芦娃",content:"在藤架上"},{title:"葫芦娃",content:"在藤架上"}],[{title:"葫芦娃2",content:"在藤架上"},{title:"葫芦娃2",content:"在藤架上"},{title:"葫芦娃",content:"在藤架上2"}],[{title:"葫芦娃3",content:"在藤架上3"},{title:"葫芦娃3",content:"在藤架上3"},{title:"葫芦娃3",content:"在藤架上3"}]];

    $("#accordionDiv").accordion();

    $("#radio").buttonset().change(function () {
        index = parseInt($("[name='radio']").filter(":checked").attr("id"));
        var titleNames = ["title1","title2","title3"];
        var contentNames = ["content1","content2","content3"];

            var list = content[index-1];
        window.console.log(list);
            for (var j=0;j<list.length;j++){
                $("#"+titleNames[j]).text(list[j]["title"]);
                $("#"+contentNames[j]).text(list[j]["content"]);
            }

    });


});
