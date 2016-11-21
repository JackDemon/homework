/**
 * Created by Administrator on 2016/10/12 0012.
 */
(function () {
    var audio = document.getElementById("audio");
    var body = document.body;
    var musicName = [];
    var musicAllNum=0;
    var container = document.getElementById("container");
    container.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    container.addEventListener("drop", function (e) {
        e.preventDefault();
        var files = e.dataTransfer.files;
        var reader;
        var filesLength=files.length;
        var musicNum=0;
        if (files && filesLength) {
            for (var i = 0; i < files.length; i++) {
                switch (files[i].type) {
                    case "audio/mp3":
                        reader = new FileReader();
                        reader.onload = function (e) {
                            var div = document.createElement("div");
                            audio.src = reader.result;

                            // for(var j=0;j<filesLength-1;j++){
                            //     div.innerText = files[j].name;
                            // }
                            // div.innerText = files[musicNum].name;
                            if(musicAllNum==0){
                                div.innerText = files[musicNum].name;
                                container.appendChild(div);
                            }
                            for(var j=0;j<musicAllNum;j++){
                                if (musicName[j]==files[musicNum].name){
                                    alert("添加歌曲重复");
                                    break;
                                }else if(j==musicAllNum-1&&musicName.slice(0)!=files[musicNum].name){
                                    div.innerText = files[musicNum].name;
                                    container.appendChild(div);
                                }
                            }
                            // div.innerText = files[musicNum].name;
                            musicName[musicAllNum]=files[musicNum].name;
                            console.log(musicName);
                            // console.log(musicName.length);
                            console.log(musicAllNum);
                            musicNum++;
                            musicAllNum++;
                            // console.log(files[0].name);
                            // console.log(filesLength);
                            // console.log(files);
                            div.onclick = function (e) {
                                audio.src = reader.result;
                            };

                            // container.appendChild(div);
                        };
                        if(musicAllNum==0){
                            reader.readAsDataURL(files[i]);
                        }
                        for(var j=0;j<musicAllNum;j++){
                            if (musicName[j]==files[musicNum].name){
                                alert("添加歌曲重复");
                                break;
                            }else if(j==musicAllNum-1&&musicName.slice(0)!=files[musicNum].name){
                                reader.readAsDataURL(files[i]);
                            }
                        }
                        // reader.readAsDataURL(files[i]);
                        break;
                }
            }
        }
    });
    // console.log(musicName);
})();