/**
 * Created by Administrator on 2016/9/27 0027.
 */
//注册
$(function () {
    $("#button").on('click',function (event) {
        event.preventDefault();
        $.ajax({
            url:'http://datainfo.duapp.com/shopdata/userinfo.php',
            type:'get',
            dataType:'json',
            data:{
                status:'register',
                userID:$('#userID').val(),
                password:$('#password').val()
            }
        })
            .done(function (info) {
                console.log(info+'done');
                // if(info==1){
                //
                // }
            })

            .fail(function () {
                console.log('error');
            })
            .always(function () {
                console.log('complete');
            })
    });



    //登录
    $("#button1").on('click',function (event) {
        var button1 = document.getElementById("button1");
        event.preventDefault();
        $.ajax({
            url:'http://datainfo.duapp.com/shopdata/userinfo.php',
            type:'get',
            dataType:'json',
            data:{
                status:'login',
                userID:$('#userName').val(),
                password:$('#passwordName').val()
            }
        })
            .done(function (info) {
                console.log(info+'done');
                if(info!==0&&info!==2){
                    window.location.href="#Singinup";     //登录跳转
                }else{
                    alert("用户名或密码错误");
                }
            })

            .fail(function () {
                console.log('error');
            })
            .always(function () {
                console.log('complete');
            })
    });


    $("window").on('click',function (event) {
        event.preventDefault();
        $.ajax({
            url:'http://datainfo.duapp.com/shopdata/getclass.php',
            type:'get',
            dataType:'json',
            data:{

            }
        })
            .done(function (info) {
                console.log(info+'done');
                // console.log(http://datainfo.duapp.com/shopdata/getclass.php);
            })

            .fail(function () {
                console.log('error');
            })
            .always(function () {
                console.log('complete');
            })
    });

// });


// $(function () {
    //搜索栏的搜索AJAX
    // $("#searchID").on("click",function (event) {
    //     event.preventDefault();
    //     /* Act on the event */
    //     $.ajax({
    //         url: 'http://datainfo.duapp.com/shopdata/selectGoodes.php',
    //         type: 'GET',  //'default GET (Other values: POST)',
    //         dataType: 'jsonp', //'default: Intelligent Guess (Other values: xml, json, script, or html)',
    //         data: {
    //             selectText: encodeURI($("#search-content").val()),
    //             pageCode: 0  ,
    //             linenumber: 10
    //         }
    //     }).done(function (data) {
    //         if(data==0){
    //             alert('暂无该商品');
    //         }
    //         else{
    //             console.log(data);
    //         }
    //     }).fail(function () {
    //         console.log("error");
    //     }).always(function () {
    //         console.log("complete");
    //     });
    // });
    // var goodsArr=[];
    //获取热推商品列表
    $.ajax({
        url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
        type: 'GET',  //'default GET (Other values: POST)',
        dataType: 'jsonp' //'default: Intelligent Guess (Other values: xml, json, script, or html)',
        // data: {

        // }
    }).done(function (data) {
        if(data==0){
            // alert('暂无该商品');
        }
        else{
            console.log(data);
            var dataN = data.length;
            for(var i=0;i<dataN;i++) {
                addDiv(data[i]);
                j++;
            }
        }
    }).fail(function () {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });
    var Goods=$("#newMain");
    var GoodsL=$(".nineOclick");
    var goodN = [];
    var j=0;
    //将AjAX中获取到的商品信息动态添加到goods内；
    function addDiv(goods) {
        var div=document.createElement("div");
        var div1=document.createElement("div");

        // div.style.backgroundRepeat="no-repeat";
        // div.style.backgroundSize="100% 66%";
        // div.style.backgroundImage="url("+goods[3]+")";
        // div1.style.backgroundRepeat="no-repeat";
        // div1.style.backgroundSize="100% 66%";
        // div1.style.backgroundImage="url("+goods[3]+")";

        addDivStyle(div,goods);
        addDivStyle(div1,goods);


        // var img = document.createElement("img");


        // goodN[j] =  $("<div class='GoodsType'></div>").css({
        // var div =  $("<div class='GoodsType'></div>").css({
        //     "width":"47%",
        //     "height":"11rem",
        //     "margin":"2% auto 0 2%",
        //     "float":"left",
        //     "backgroundRepeat":"no-repeat",
        //     "backgroundSize":"100% 66%",
        //     "backgroundImage":"url("+goods[3]+")"
        // }).appendTo($("#newMain"));


        // console.log(goods[3]);
        // div.style.backgroundImage=goods[6];

        // var p1=document.createElement("p");
        // p1.innerHTML=goods[2];
        // p1.style.fontSize=".6rem";
        // p1.style.textAlign="center";
        // p1.style.marginTop="8rem";

        // goodN[i].appendChild(p1);
        // div.appendChild(p1);
        // div1.appendChild(p1);
        Goods.append(div);
        GoodsL.append(div1);
        // div.addClass("getGoods div1");
        // div1.addClass("getGoods div2");
        function addDivStyle(div,goods) {
            div.style.float="left";
            div.style.width="47%";
            div.style.height="11rem";
            div.style.margin="2% auto 0 2%";
            div.style.backgroundPosition="2% 2%";
            div.style.backgroundRepeat="no-repeat";
            div.style.backgroundSize="100% 66%";
            div.style.backgroundImage="url("+goods[3]+")";
            var p1=document.createElement("p");
            p1.innerHTML=goods[2];
            var p2=document.createElement("p");
            p2.innerHTML=goods[1];
            var p3=document.createElement("p");
            p3.innerHTML="商品价格"+goods[4];
            var p4=document.createElement("p");
            p4.innerHTML=goods[5];
            p1.style.fontSize=".6rem";
            p1.style.textAlign="center";
            p1.style.marginTop="8rem";
            div.appendChild(p1);
            // div.appendChild(p2);
            div.appendChild(p3);
            div.appendChild(p4);
        }
    }

    // function addDivStyle(div,goods) {
    //     div.style.float="left";
    //     div.style.width="47%";
    //     div.style.height="11rem";
    //     div.style.margin="2% auto 0 2%";
    //     div.style.backgroundPosition="2% 2%";
    //     div.style.backgroundRepeat="no-repeat";
    //     div.style.backgroundSize="100% 66%";
    //     // div.style.backgroundImage="url("+goods[3]+")";
    //     var p1=document.createElement("p");
    //     p1.innerHTML=goods[2];
    //     p1.style.fontSize=".6rem";
    //     p1.style.textAlign="center";
    //     p1.style.marginTop="8rem";
    // }
});


// (function () {
// function createXHR() {
//     if(typeof XMLHttpRequest!='undefined'){
//         return new XMLHttpRequest();
//     }else if(typeof ActiveXObject){
//         var version = [
//             'MSXML2.XMLHttp.6.0',
//             'MSXML2.XMLHttp.3.0',
//             'MSXML2.XMLHttp'
//         ];
//         for(var i=0;i<version.length;i++){
//             try{
//                 return new ActiveXObject(version[i]);
//             }  catch (e){
//                 //跳过
//             }
//         }
//     }else {
//         throw new Error('您的浏览器不支持XHR对象！')
//     }
// }
// addEventListener(document,'click',function () {
//     var xhr = createXHR();
//     xhr.open('get','http://datainfo.duapp.com/shopdata/getclass.php',false);
//     xhr.send(null);
//     alert(xhr.responseText);
// });
// })();
