var elWys = document.getElementById("wysokosc");
var elSzer = document.getElementById("szerokosc");
var elBlok = document.getElementById("blok");
var elKolor = document.getElementById("kolor");
var elLewo = document.getElementById("lewo");
var elDodajLewo = document.getElementById("DodajLewo");



elBlok.style.backgroundColor = elKolor.value;
elBlok.style.height = "0px";
elBlok.style.width = "0px";

function rozmiar(){
        let sz = elSzer.value;
        let w = elWys.value;
        elBlok.style.height = sz + "px";
        elBlok.style.width = w + "px";
        elBlok.style.left = "200px";
        console.log(sz);
}

function kolor(){
    elBlok.style.backgroundColor = elKolor.value;
}

elLewo.value = elBlok.offsetLeft;

function dl(){
    elLewo.value = elBlok.offsetLeft + 10 +"px"
}


elSzer.addEventListener("change", rozmiar);
elWys.addEventListener("change", rozmiar);
elKolor.addEventListener("change", kolor);
elDodajLewo.addEventListener("click", dl);





