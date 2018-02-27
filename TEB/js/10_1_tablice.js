function losowanie(){
    var auta = ["audi", "bmw", "ferrari", "fiat"];
    var panstwa = ["polska", "austria", "hiszpanie"];
    var miasta = ["poznan", "gniezdno", "wroclaw"];

   var losujAuto = Math.floor(Math.random()*auta.length);
   var losujPanstwo = Math.floor(Math.random()*panstwa.length);
   var losujMiasto = Math.floor(Math.random()*miasta.length);

    var wylosowanie = auta[losujAuto] + " " + panstwa[losujPanstwo] + " " + miasta[losujMiasto];
    console.log(wylosowanie)

}
 losowanie();




//uzytkownik podaje z klawiatury w polu numerycznym wartości ktore sa zapisywany do tablicy. Wyświetl wszystkie wartości z tablicy wyświetl ile jest ich łącznie i jaka jest ich suma oraz wartość z dokładnością do 2 miejsc po przecinku


var liczba = document.getElementById("liczba");
var przycisk = document.getElementById("przycisk");
var wynik = document.getElementById("wynik");

var liczby = [];

function dodaj(){
    let tab="";
    let suma= 0;
    liczby.push(liczba.value);

    for(var i=0; i<liczby.length; i++){
       tab += liczby[i] + " ";
       suma += Nsumber(liczby[i]);
    }
    srednia = suma/liczby.length;
    wynik.innerHTML = tab + "<br>" + "Ilośc elementów: " + liczby.length;
    wynik.innerHTML = "Suma elementów: " + suma;


}
przycisk.addEventListener('click', dodaj);









