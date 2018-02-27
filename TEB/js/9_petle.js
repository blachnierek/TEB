

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

/*var elPoczatek = document.getElementById("poczatek");
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
elGozik.addEventListener("click", wyswietl);*/
//################################################################################
//break

/*for(var n = 10; n >= 5; n--){
    document.write(n + " ");
    if(n==7)
        break
}
document.write("<br>")


//continue

for(var o = 14; o < 20; o++){
    if(o==15 || o==18)
        continue;
    document.write(o + " ");

}*/

//#######################################
/*
Wyświetl na ekranie:
*
**
***
****
*****
*/
document.write("<br><br>");


var p;
/*var r;
for(p = 1; p <= 50; p++){
    for(r = 1; r <= p; r++){
        document.write("*");
    }

    document.write("<br>");
}*/


/*
var gozik2 =document.getElementById("gozik2");
var elWiersz =document.getElementById("wiersz");
var elZnak =document.getElementById("znak");
var elKom =document.getElementById("kom");
var ilosc;
var znak;
var c;
var d;

function znak(){
    ilosc = elWiersz.value;
    znak = elZnak.value;
    for(c = 1; c <= ilosc; c++){
        for(n = 1; n <= c; n++){
            document.write(znak);
        }
        document.write("<br>")
    }
}
gozik2.addEventListener("click", znak);

*/


/*

var x =0
var y =0
var wynikDodawania
while(x >= y){
    x = (prompt("Podaj x"));
    y= (prompt("Podaj y"));


      }
console.log("x=" + x);
console.log("y=" + y);
wynikDodawania = x + y;
console.log("x + y= " + wynikDodawania);

*/


//DO WHILE

var wiek;
do{
    wiek = prompt("Podaj wiek!");
    if(wiek >=18){
        document.write('<a href="http://wp.pl">wp.pl</a>')
    }
}while(wiek <=18)


































