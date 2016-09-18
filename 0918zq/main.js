/**
 * Created by ZQ on 2016/9/18.
 */
(function () {

    var Button = document.getElementById("Button");
    var myCanvas = document.getElementById("myCanvas");
    var otex = myCanvas.getContext("2d");

    var firstWidth;
    var secondWidth;
    var ox;
    var total;
    var score=0;

    function main() {

        drawNum();

        getLand();

        drawLand();

        drawPeaple();

        document.onkeydown = function(event){
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if(e && e.keyCode==32){
                var lineLength;
                otex.save();
                otex.beginPath();
                otex.moveTo(firstWidth,300);

                lineLength=firstWidth+ox;

                otex.lineTo(lineLength,300);
                otex.stroke();
                if(lineLength>firstWidth+ox+secondWidth){
                    lineLength=firstWidth+ox+secondWidth;
                }
                otex.closePath();
                otex.restore();

                score++;
                lineLength++;
                // alert("hello");
            }
        };

        Button.onclick=function (event) {
            otex.clearRect(0,0,300,500);
            main();
            // event.keyCode=0;
            // event.returnValue=false;
        }
    }

    function drawLand() {
        otex.save();
        otex.beginPath();
        otex.fillRect(0,300,firstWidth,200);
        otex.fillRect(ox+firstWidth,300,secondWidth,200);
        otex.fillStyle="black";
        otex.fill();
        otex.closePath();
        otex.restore();
    }

    function getLand() {
        firstWidth = Math.random()*300;
        secondWidth = Math.random()*300;
        ox = Math.random()*300;
        if(firstWidth+secondWidth+ox>300||firstWidth<20||secondWidth<12||ox<12){
            getLand();
        }
        total=firstWidth+secondWidth+ox;
    }

    function drawNum() {
        otex.save();
        otex.beginPath();
        otex.font="60px Arial";
        otex.fillStyle="white";
        otex.fillText(score,130,80);
        otex.closePath();
        otex.restore();
    }

    function drawPeaple() {
        otex.save();
        otex.beginPath();
        otex.fillStyle="red";
        otex.fill();
        otex.fillRect(firstWidth-12,280,12,20);
        otex.closePath();
        otex.restore();
    }

    main();

})();