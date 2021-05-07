if(document.getElementById("gameScreen") != null){
    document.getElementById("gameScreen").height = localStorage.getItem("height");
    document.getElementById("gameScreen").width = localStorage.getItem("width");
}