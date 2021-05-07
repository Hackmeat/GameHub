let width = 0;
let height = 0;
let username = "Guest";

if (localStorage.getItem("width") != 0 && localStorage.getItem("height") != 0 && localStorage.getItem("width") != null && document.getElementById("currentResolution") != null) {
    document.getElementById("currentResolution").innerHTML = localStorage.getItem("width") + "x" + localStorage.getItem("height");
}

if (localStorage.getItem("username") != "" && document.getElementById("username") != null) {
    document.getElementById("username").value = localStorage.getItem("username");
}

if (localStorage.getItem("username") != "" && document.getElementById("welcome") != null){
    document.getElementById("welcome").innerHTML = "Welcome, " + localStorage.getItem("username") +"!";
}

function setBrowserResolution() {
    height = window.innerHeight;
    width = window.innerWidth;
    document.getElementById("currentResolution").innerHTML = width + "x" + height;
}

function setResolution(w, h) {
    height = h;
    width = w;
    document.getElementById("currentResolution").innerHTML = width + "x" + height;
}

function safeAll() {
    if (document.getElementById("username").value != "") {
        username = document.getElementById("username").value;
    }
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("width", "" + width);
        localStorage.setItem("height", "" + height);
        localStorage.setItem("username", username);
    }

}