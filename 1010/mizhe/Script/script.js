/**
 * Created by Administrator on 2016/9/26 0026.
 */

var autoSetRem = (function(doc, win) {
    var docEl = doc.documentElement,
        done = false,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        set = function(paper) {
            if(paper==null){
                paper=360;
            }
            var clientWidth = docEl.clientWidth || win.innerWidth || screen.width;
            if (!clientWidth) return;
            docEl.style.fontSize = 22 * (clientWidth / paper) + 'px';
            done = true;
            return done;
        };
    return {
        set:set
    };
    //AbortifbrowserdoesnotsupportaddEventListener
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, set, false);
    doc.addEventListener('DOMContentLoaded', set, false);
})(document, window);

window.onload=function(){
    autoSetRem.set();
};

$('.submitBtn').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $.ajax({
        url: '/path/to/file',
        type: 'default GET (Other values: POST)',
        dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
        data: {
            param1: 'value1'
        }
    })
        .done(function(data) {
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });

});

