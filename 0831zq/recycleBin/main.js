/**
 * Created by Administrator on 2016/8/31 0031.
 */

$(function () {

    $(".peel").draggable({
        containment:"#container",
        cursor:"pointer",
        scope:"group1",
        revert:true,
        revertDuration:2000,
        stop:function () {
            alert("回收失败，请重新回收")
        }
    });
    $(".battery").draggable({
        containment:"#container",
        cursor:"pointer",
        scope:"group2",
        revert:true,
        revertDuration:2000,
        stop:function () {
            alert("回收失败，请重新回收")
        }
    });
    $(".glass").draggable({
        containment:"#container",
        cursor:"pointer",
        scope:"group3",
        revert:true,
        revertDuration:2000,
        stop:function () {
            alert("回收失败，请重新回收")
        }
    });
    
    $(".life").droppable({
        scope:"group1",
        drop:function () {
            alert("回收成功");
            $(".peel").css({"display": "none"})
        }
    });
    $(".recycle").droppable({
        scope:"group2",
        drop:function () {
            // alert("回收失败,请重新回收");
            alert("回收成功");
            $(".battery").css({"display": "none"})
        }
    });
    $(".noRecycle").droppable({
        scope:"group3",
        drop:function () {
            // alert("回收失败,请重新回收")
            alert("回收成功");
            $(".glass").css({"display": "none"})
        }
    });
    
});
