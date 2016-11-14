// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {ipcRenderer} = require("electron");
const fs = require("fs");

class Renderer {
    constructor() {
        this.btnSelectDestDir = document.getElementById("btn-select-dest-dir");
        this.formSaveData = document.getElementById("form-data");

        this.addListener();
    }

    addListener() {
        var self = this;
        this.btnSelectDestDir.onclick = function (ev) {
            var files = ipcRenderer.sendSync("openDir");

            if (files && files.length) {
                self.destDir = files[0];
            }
        }

        this.formSaveData.onsubmit = function (ev) {
            ev.preventDefault();

            if (!self.destDir) {
                alert("请选择要保存的目录");
                return;
            }
            // var destFile = `${self.destDir}/data.html`;
            var destFile = `${self.destDir}/data.html`;
            // var destFile = `www.baidu.com/data.html`;

            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {

                    if (xhr.status === 200) {
                        fs.writeFile(destFile, xhr.responseText, err=> {
                            if (!err) {
                                alert(`成功保存文件${destFile}`);
                            } else {
                                alert("无法保存文件");
                            }
                        });
                    } else {
                        alert("连接失败！");
                    }
                }
            }

            xhr.open("GET", this["href"].value);
            xhr.send();

        }
    }
}

new Renderer();