var elLitera = document.getElementById("litera");
var elKod = document.getElementById("kod");

function litera(){
    console.log(event.keyCode);
}

elLitera.addEventListener("keyup", litera);
