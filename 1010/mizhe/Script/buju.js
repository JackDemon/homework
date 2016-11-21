/**
 * Created by Administrator on 2016/9/27 0027.
 */
$(function () {
    var GOODSNUM = 20;
    var newMain = document.getElementById("newMain");
    // var goods = [];
    // for(var i=0;i<GOODSNUM;i++){
    //     goods[i] = $("<div class='GoodsType'></div>").css({
    //         "width":"47%",
    //         "height":"8rem",
    //         "background":"red",
    //         "margin":"2% auto 0 2%",
    //         "float":"left"
    //     }).appendTo($("#newMain"));
    // }

    var uiInputText = document.getElementsByClassName("ui-input-text");

    //添加图片
    var shishangMain = document.getElementById("shizhangMain");
    var shishangM=["1.png","2.png","3.png","4.jpg","5.png","6.png","7.png","8.jpg","9.jpg","10.png","11.png","12.png","13.jpg","14.jpg","15.png","16.jpg"];
    var shishangZ=["夏日靓裙","气质衬衫","潮流T恤","魔力卫衣","气质针织","蕾丝雪纺","个性外套","品质风衣","马甲背心","百搭牛仔裤","超值套装","优质家居服","魅力文胸","贴心内裤","半身裙","运动打底"];
    var shishangN=shishangM.length;
    for(var j=0;j<shishangN;j++){
        $("<a class='shishi shigoods' href='#'><img src=Img/fenlei/"+shishangM[j]+" style='width:82%;margin-top:.3rem'></a>").css({
            "width":"20%",
            "height":"4.58rem",
            "float":"left",
            "textAlign":"center"
        }).appendTo($("#shishangMain"));
        $("<span class='span'></span>").text(shishangZ[j]).css({
            "textAlign":"center",
            "fontSize":".5.5rem",
            "fontWeight":"100",
            "color":"#000"
        }).appendTo($(".shigoods:last"));
    }
    // document.getElementsByClassName("span").innerhtml = "lalalala";
    //判断登录




    // $(document).ready(function(){$("#userName").tap(function(){
    //     uiInputText.css({"boxShadow":"none","border":"none"});
    //     console.log(1);
    // })});
    // $(document).ready(function(){$("#passwordName").tap(function(){
    //     uiInputText.css({"boxShadow":"none","border":"none"});
    //     console.log(1);
    // })});
});