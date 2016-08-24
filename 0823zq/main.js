/**
 * Created by Administrator on 2016/8/24 0024.
 */
(function () {


    var balls=[];
    for(var i=0;i<10;i++) {
        var b = new Ball();
        document.body.appendChild(b.getHtmlNode());
        balls.push(b);
    }

    setInterval(function () {
        for(var j=0;j<balls.length;j++){
            balls[j].move();
        }
    },20)
})();