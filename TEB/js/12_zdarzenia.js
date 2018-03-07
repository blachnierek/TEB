/*var elImie = document.getElementById('imie');
var elNazwisko = document.getElementById('nazwisko');
var elLogin = document.getElementById('login');
var elMail1 = document.getElementById('mail1');
var elMail2 = document.getElementById('mail2');*/
var elPass1 = document.getElementById('pass1');
var elPass2 = document.getElementById('pass2');
var elData = document.getElementById('data');
var elRegulamin = document.getElementById('regulamin');
var elPrzycisk = document.getElementById('przycisk');
var elKomunikat = document.getElementById('komunikat');
var elPrzycisk2 = document.getElementById('przycisk2');
var elRegulamin = document.getElementById('regulamin');
var elProgress = document.getElementById("progress")
elKomunikat.style.color = 'red';
var regImie = /^[a-ząężćźńółś]{2,20}$/i;
var regNazwisko = /^[a-ząężćźńółś]{2,20}(-[a-ząężćźńółś]{2,20})?$/i;
var regLogin = /^[a-z0-9]{1}[\w\.\-]{1,25}[a-z0-9]{1}$/i;
var regMail = /^[a-z]{1}[\w|\.|\-]{0,30}@(\w{1,20}\.){1,3}[a-z]{1,3}$/i;
var regPass = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_]).{8,35})$/; //!!!!!!!!!!!!!!!! WAŻNE !!!!!!!!!!!!!!!!!
var regPassSrednie1 = /^((?=.*\d)(?=.*[a-z]).{4,})$/;
var regPassSlabe1 = /^\d{4,}$/;
var regPassSlabe2 = /^[a-z]{4,}$/;
var regPassSlabe2 = /^[A_Z]{4,}$/;
var regPassSlabe4 = /^[A-Z]|[a-z]|[0-9]{4,}$/;
/*

elImie.onblur = function(){
    if(elImie.value.length >= 2){
        elKomunikat.innerHTML = '';
    }else{
        elKomunikat.innerHTML = 'Błędne dane!';
    }
}
*/

function sprawdzImie(){
    let imie = elImie.value;
    let sprawdz = regImie.test(imie);
    if(sprawdz){
        elKomunikat.innerHTML = '';
    }else{
        elKomunikat.innerHTML = 'Błędne Imię!';
        elImie.focus();
    }
}

function sprawdzNazwisko(){
    let nazwisko = elNazwisko.value;
    let sprawdz = regNazwisko.test(nazwisko);
    if(sprawdz){
        elKomunikat.innerHTML = '';
    }else{
        elKomunikat.innerHTML = 'Błędne Nazwisko!';
        elNazwisko.focus();
    }
}

function sprawdzLogin(){
    let login = elLogin.value;
    let sprawdz = regLogin.test(login);
    if(sprawdz){
        elKomunikat.innerHTML = '';
    }else{
        elKomunikat.innerHTML = 'Błędny Login!';
        elNazwisko.focus();
    }
}

function sprawdzMail(){
    let mail = elMail1.value;
    let sprawdz = regMail.test(mail);
    if(sprawdz){
        elMail2.disabled = false;
        elMail1.disabled = true;
        elMail2.focus();
    }else{
        elKomunikat.innerHTML = 'Błędny Mail!';
        elMail1.focus();
    }
}

function blokujmail(){
    if(elMail1.value != elMail2.value){
        elKomunikat.innerHTML = 'Maile się różnią!'
        elMail1.disabled = false;
        elMail2.disabled = true;
        elMail1.focus();
        elMail2.value = '';
    }else{
        elKomunikat.innerHTML = '';
        this.disabled = true;
    }
}

function sprawdzPass(){
    let pass = elPass1.value;
    let sprawdz = regPass.test(pass);
    if(sprawdz){
        elPass2.disabled = false;
        elPass1.disabled = true;
        elPass2.focus();
    }else{
        elKomunikat.innerHTML = 'Błędne Hasło!';
        elPass1.focus();
    }
}

function blokujpass(){
    if(elPass1.value != elPass2.value){
        elKomunikat.innerHTML = 'Hasło się różnią!'
        elPass1.disabled = false;
        elPass2.disabled = true;
        elPass1.focus();
        elPass2.value = '';
    }else{
        elKomunikat.innerHTML = '';
        this.disabled = true;
    }
}

function odblokuj(){
	let zablokowane = document.querySelectorAll('input[disabled]');
	//console.log(zablokowane);
	if(zablokowane.length > 0){
		for (var i=0; i < zablokowane.length; i++)
			zablokowane[i].disabled = false;
	}
}

function wyslij(){
	let puste = false;
	let pola = document.querySelectorAll('input');
	for(let i=0; i < pola.length; i++){
		if(pola[i].value == ''){
			puste = true;
			break;
		}
	}
	if (puste){
		elKomunikat.innerHTML = 'Wypełnij wszystkie pola';
	}else{
		elKomunikat.style.color = '#0dbe0d';
		elKomunikat.innerHTML = 'Formularz uzupełniony prawidłowo';
	}
}

function sprawdzRegulamin(){
	if(elRegulamin.checked){
		elPrzycisk.disabled = false;
	}else{
		elPrzycisk.disabled = true;
	}
}
 function sprawdzHaslo(){
     let pass = elPass1.value;
     let sprSilne = regPass.test(pass);
     let sprSrednie = regPassSrednie1.test(pass);
/*     let sprSlabe1 = regPassSlabe1.test(pass);
     let sprSlabe2 = regPassSlabe2.test(pass);
     let sprSlabe3 = regPassSlabe3.test(pass);*/
     let sprSlabe4 = regPassSlabe4.test(pass);
     elProgress.hidden = false;
     elProgress.value = 1;
     if(sprSilne){
        elProgress.value = 99;
        }else if(sprSrednie){
            elProgress.value = 66;
        }else if(sprSlabe1 || sprSlabe2 || sprSlabe3 || sprSlabe4){
            elProgress.value = 33;
        }
 }



/*elImie.addEventListener('blur',sprawdzImie);
elNazwisko.addEventListener('blur',sprawdzNazwisko);
elLogin.addEventListener('blur',sprawdzLogin);
elMail1.addEventListener('blur',sprawdzMail);
elMail2.addEventListener('blur',blokujmail);*/
elPass1.addEventListener('blur',sprawdzPass);
elPass2.addEventListener('blur',blokujpass);
elPrzycisk2.addEventListener('click',odblokuj);
elPrzycisk.addEventListener('click',wyslij);
elRegulamin.addEventListener('click',sprawdzRegulamin);
elPass1.addEventListener("keyup", sprawdzHaslo);


