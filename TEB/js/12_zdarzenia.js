var elImie= document.getElementById("imie");
var elNazwisko =document.getElementById("nazwisko");
var elLogin =document.getElementById("login");
var elMail1= document.getElementById("mail1");
var elMail2 =document.getElementById("mail2");
var elPass1= document.getElementById("pass1");
var elPass1= document.getElementById("pass2");
var elData = document.getElementById("data");
var elRegulamin = document.getElementById("regulamin");
var elPrzycisk = document.getElementById("przycisk");
var elKomunikat = document.getElementById("komunikat");
elKomunikat.style.color = "red";

var regImie = /^[a-ząężźńśćłó]{2,20}$/i;
var regNazwisko = /^[a-ząężćźńóąś]{2,20}(-[a-ząężćźńóąś]{2,20})?$/;
var regLogin = /^[a-z0-9]{1}[\w\.\-]{1-25}[a-z0-9]{1}$/i;
var regMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var regPass = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_]).{8,35})$/;


function sprawdzImie(){
    let pole = this.value;
    let sprawdz = regImie.test(imie);
    if(this.value.length >= 2){
        elKomunikat.innerHTML = ""
    }else{
        elKomunikat.innerHTML = "Błędne dane"
    }

}

function sprawdzNazwisko(){
    let pole = this.value;
    let sprawdz = regNazwisko.test(nazwisko);
    if(this.value.length >= 2){
        elKomunikat.innerHTML = ""
    }else{
        elKomunikat.innerHTML = "Błędne dane"

    }

}
function sprawdzLogin(){
    let login = elLogin.value;
    let sprawdz = regLogin.test(login);
    if(sprawdz){
        elKomunikat.innerHTML = ""
    }else{
        elKomunikat.innerHTML = "Błędny Login"
        elLogin.focus;

    }

}

function sprawdzMail(){
    let mail = elMail1.value;
    let sprawdz = regMail.test(mail);
    if(sprawdz){
        elMail2.disabled = false;
        elMail1.disabled = true;
        elMail2.focus;
    }else{
        elKomunikat.innerHTML = "Błędny Mail";
        elMail1.focus();
    }}
function blokujMail(){
    if(elMail1.value != elMail2.value){
        elKomunikat.innerHTML = "Pola Mail są różne"
        elMail1.disabled = false;
        elMail2.disabled = true;
        elMail1.focus();
        elMail2.value = "";
    }else{
        elKomunikat.innerHTML = "";
        this.disable = true;
    }
}








elImie.addEventListener("blur", sprawdzImie);
elNazwisko.addEventListener("blur", sprawdzNazwisko);
elLogin.addEventListener("blur", sprawdzLogin);
elMail1.addEventListener("blur", sprawdzMail);
elMail2.addEventListener("blur", blokujMail);
