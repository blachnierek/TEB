/*zad 1
użytkownik podaje w polu tekstowym kod pocztowy
pod polem wyświetl komunikat czy dane zostały prawidłowo wprowadzone
Jeśli będą prawidłowe dane to wyświetl komunikat o treści "prawidłowy kod pocztowy: ....."
jeśli będzie błędny to wyświetl komunikat "błędny kod pocztowy" i umieśc kursor w polu tekstowym*/

var elKod = document.getElementById("kod");
var elKomunikat = document.getElementById("komunikat");
var przycisk = document.getElementById("przycisk");
var przycisk0 = document.getElementById("przycisk1");
var elMail = document.getElementById("mail");
var regKod = /\d{2}-\d{3}/;
var regMail = /^[a-z]{1}[\w|\.|\-]{0,30}@(\w{1,20}\.){1,3}[a-z]{1,3}$/;


function sprawdzKod(){
    let kod = elKod.value;
    let sprKod = regKod.test(kod);
    if(sprKod){
        //prawda
        elKomunikat.innerHTML = "Prawidłowy kod pocztowy: " +kod;
    }else{
        //błąd
        elKomunikat.innerHTML = "Błędny kod pocztowy!";
        elKod.focus(); //przenosi kursor do pola
        elKod.value =""; //jeśli jest błędny to czyści pole

    }

}

function sprawdzMail(){
    let mail = elMail.value;
    let sprMail = regMail.test(mail);
    if(sprMail){
        elKomunikat.innerHTML = "Prawidłowy mail: " + mail;
    }else{
        elKomunikat.innerHTML = "Nieprawidłowy Mail!";
        elMail.focus;
        elMail.value = "";
    }
}

przycisk.addEventListener("click", sprawdzKod);
przycisk1.addEventListener("click", sprawdzMail);
