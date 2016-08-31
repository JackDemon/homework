/**
 * Created by Administrator on 2016/8/31 0031.
 */

$(function () {

    var rr=0;
    $(".peel").draggable({
        containment:"#container",
        cursor:"pointer",
        scope:"group1",
        revert:true,
        revertDuration:2000
    });
    $(".battery").draggable({
        containment:"#container",
        cursor:"pointer",
        scope:"group2",
        revert:true,
        revertDuration:2000
    });
    $(".glass").draggable({
        containment:"#container",
        cursor:"pointer",
        scope:"group3",
        revert:true,
        revertDuration:2000
    });
    
    $(".life").droppable({
        scope:"group1",
        drop:function () {
            alert("回收成功");
            $(".peel").remove();
            rr=1;
        },
        deactivate:function () {
            if(rr==0) {
                alert("回收失败，请重新回收")
            }
            rr=0;
        }
    });
    $(".recycle").droppable({
        scope:"group2",
        drop:function () {
            alert("回收成功");
            $(".battery").remove();
            rr=1;
        },
        deactivate:function () {
            if(rr==0) {
                alert("回收失败，请重新回收")
            }
            rr=0;
        }
    });
    $(".noRecycle").droppable({
        scope:"group3",
        drop:function () {
            alert("回收成功");
            $(".glass").remove();
            rr=1;
        },
        deactivate:function () {
            if(rr==0) {
                alert("回收失败，请重新回收")
            }
            rr=0;
        }
    });
});
