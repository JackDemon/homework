/**
 * Created by Administrator on 2016/9/27 0027.
 */
$(function () {
    var GOODSNUM = 20;
    var newMain = document.getElementById("newMain");
    var goods = [];
    for(var i=0;i<GOODSNUM;i++){
        goods[i] = $("<div class='GoodsType'></div>").css({
            "width":"47%",
            "height":"8rem",
            "background":"red",
            "margin":"2% auto 0 2%",
            "float":"left"
        }).appendTo($("#newMain"));
    }

    var uiInputText = document.getElementsByClassName("ui-input-text");

    var shishangMain = document.getElementById("shizhangMain");
    var shishangM=["1.png","2.png","3.png","4.jpg","5.png","6.png","7.png","8.jpg","9.jpg","10.png","11.png","12.png","13.jpg","14.jpg","15.png","16.jpg",];
    var shishangN=shishangM.length;
    for(var j=0;j<shishangN;j++){
        $("<a><img src='../Img/fenlei/1.png'><span></span></a>").css({
            "width":"20%",
            "height":"4.58rem",
            "float":"left"
        }).appendTo($("#shishangMain"));
    }



    // $(document).ready(function(){$("#userName").tap(function(){
    //     uiInputText.css({"boxShadow":"none","border":"none"});
    //     console.log(1);
    // })});
    // $(document).ready(function(){$("#passwordName").tap(function(){
    //     uiInputText.css({"boxShadow":"none","border":"none"});
    //     console.log(1);
    // })});
});