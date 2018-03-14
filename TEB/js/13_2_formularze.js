    var elImie = document.getElementById("imie");
    var elBlad = document.getElementById("blad");
    var elKolor = document.getElementById("kolor");
    var elNazwisko = document.getElementById("nazwisko");
    var blokImie = document.getElementById("blokImie");
    var blokNazwisko = document.getElementById("blokNazwisko");
function sprawdz(){
if(this.value.length < 2){
    let kolor = elKolor.value;
    elBlad.innerHTML = "Błędne Dane";
    elBlad.style.color = kolor;
}else{
    elBlad.innerHTML = "";
}

}

function witaj(){
    alert("Witaj ")
}

function zmienImie(){
    if(elImie.value != ""){
blokImie.style.color = elKolor.value;
blokImie.innerHTML = elImie.value;

       }
}

function zmienKolor(){

       blokNazwisko.style.color = elKolor.value;
       }





elImie.addEventListener("blur", sprawdz);
elNazwisko.addEventListener("blur", sprawdz);
window.addEventListener("load", witaj);
blokImie.addEventListener("mouseover", zmienImie);
elKolor.addEventListener("change", zmienKolor);

