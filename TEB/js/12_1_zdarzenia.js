var elLitera = document.getElementById("litera");
var elKod = document.getElementById("kod");
var elX = document.getElementById("x")
var elY = document.getElementById("y")

function litera(){
    let kod = event.keyCode;
    switch(kod){
        case 32:
            kod = "space";
            break;
        case 8:
            kod ="backspace";
            break;
        case 18:
            kod = "alt";
            break;
        case 16:
            kod = "shift";
            break;
        case 17:
            kod = "ctrl";
            break;
        case 20:
            kod = "CAPSLOCK"
            break;




    }
    elKod.innerHTML = "Kod znaku: " + kod;
}

function pozycja() {
    elX.value = event.screenX;
    elY.value = event.screenY;
}







elLitera.addEventListener("keyup", litera);
window.addEventListener("mousemove", pozycja);
