/**
 * Created by Administrator on 2016/9/27 0027.
 */
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
            })

            .fail(function () {
                console.log('error');
            })
            .always(function () {
                console.log('complete');
            })
    });
    $("#button1").on('click',function (event) {
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
            })

            .fail(function () {
                console.log('error');
            })
            .always(function () {
                console.log('complete');
            })
    });
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