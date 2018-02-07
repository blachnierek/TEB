

/*for(var j= 50; j>=5; j--){
    if(j==5)
        document.write(j);
    else
    document.write(j + " ,");
}*/



//ZADANIE WYŚWIETL LICZBY OD 50 DO 5 ODDZIELONE PRZECINKIEM I SPACJ


document.write("<br>");
 //wypisz liczby od 10 do 100 zwiększ każdą z nich o 5
//w wyświetleniu pomiń wartości 30,55,75
/*for(var i=10; i<=100; i=i+5){
    if(i !=30 & i !=55 && i !=75)


    document.write(i + " ");
}
document.write("<br>");*/


//użytkownik z klawiatury w formularzu podaje jaki liczby mają być wyświetlone tzn wartość początkową i końcową
//wartości mają być roznące i zwiększane o 1

var elPoczatek = document.getElementById("poczatek");
var elKoniec = document.getElementById("koniec");
var elGozik = document.getElementById("gozik");
var elKomunikat = document.getElementById("komunikat");
var tekst ="";
var x;
var y;
var m;
function wyswietl(){
        x = elPoczatek.value;
        x = parseInt(x);
        y=elKoniec.value;
        y = parseInt(y);
        for(m = x; m <= y; m++){
            tekst += m + " ";
        }
    elKomunikat.innerHTML = tekst + "<br>";
}
elGozik.addEventListener("click", wyswietl);



