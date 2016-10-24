/**
 * Created by ZQ on 2016/10/22.
 */
$(function () {

    var top_div = document.getElementById( "footer" );

    window.onscroll = function(){
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if( t >= 5 ) {
            top_div.style.display = "inline";
        } else {
            top_div.style.display = "none";
        }
    };

    function init() {

    }

    top_div.onclick = function () {

    };

    // add

    // setInterval(1000,)

    init();
});