/**
 * Created by Administrator on 2016/10/10 0010.
 */
(function () {

    var videoWidth = 400;
    var videoHeight = 400;
    var canvas = document.getElementById("canvas");
    var memoryCanvas = document.createElement("canvas");
    memoryCanvas.width = 400;
    memoryCanvas.height = 400;
    var context = canvas.getContext("2d");
    var memoryContext = memoryCanvas.getContext("2d");
    var targetBitmap = memoryContext.createImageData(videoWidth, videoHeight);


    /**
     * @type {HTMLVideoElement}
     */
    var video;
    
    // var canvas=document.getElementById("canvas");
    // var button=document.getElementById("button");
    // var context = canvas.getContext("2d");
    // var video;
    function loadVideo() {
        video = document.createElement("video");
        video.autoplay="autoplay";
        navigator.mediaDevices.getUserMedia({
            audio:false,video:true
        }).then(function (result) {
            console.log(result);
            video.srcObject = result;
        }).catch(function (error) {
            console.log(error);
        });
    }
    function render() {

        // context.drawImage(video, 0, 0);

        memoryContext.drawImage(video, 0, 0);
        var sourceImageData = memoryContext.getImageData(0, 0, videoWidth, videoHeight);

        for (var i = 0; i < sourceImageData.data.length; i += 4) {
            var r = sourceImageData.data[i];
            var g = sourceImageData.data[i + 1];
            var b = sourceImageData.data[i + 2];

            var c = (r + g + b) / 3;

            targetBitmap.data[i] = c;
            targetBitmap.data[i + 1] = c;
            targetBitmap.data[i + 2] = c;
            targetBitmap.data[i + 3] = 255;
        }

        context.putImageData(targetBitmap, 0, 0);

        context.drawImage(video,0,0);

        // context.fillStyle = "rgba(0, 0, 0, 0.5)";
        // context.fillRect (0,0, 400, 400);
        // context.clearRect(t.sx, t.sy, t.sHeight, t.sWidth);

        requestAnimationFrame(render);
    }
    var img=document.createElement("img");
    button.onclick=function (e) {
        var drawImg=canvas.toDataURL();

        // context.beginPath();
        // context.save();
        // context.clearRect();
        // context.src =drawImg;
        // context.restore();
        img.src=drawImg;
        document.body.appendChild(img);
    };
    function init() {
        loadVideo();
        render();
    }

    init();
    // function render() {
    //     context.drawImage(video,0,0);
    //     requestAnimationFrame(render);
    // }
    // button.onclick=function (e) {
    //     var drawImg=canvas.toDataURL();
    //     console.log(drawImg);
    //     var img=document.createElement("img");
    //     img.src=drawImg;
    //     document.body.appendChild(img);
    // };
    // function init() {
    //   loadVideo();
    //     render();
    // }
    // init();
})();