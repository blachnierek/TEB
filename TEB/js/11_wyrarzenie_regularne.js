//true or false

var tekst = "";   //tutaj wpisz dane kryteria do reguły
var regula = /janusz/;
regula = /janusz/i;
regula = /^janusz/i;
regula = /^janusz$/i;

regula = /[a]/;
regula = /[J]/;
regula = /[A]/i;
regula = /[0]/;
regula = /[O]/;
regula = /[0-9]/;
regula = /[A-Z]/;
regula = /[a-z]/; // uwaga na inne znaki no []/^_'
regula = /[A-z]/;
regula = /[A-Z] | [a-z] | [ąęźżśćółń]/;
regula = /\s/; // backslesh s to jest spacja, tabulacja lub znak nowego wiersza
regula = /\S/; // znak nie zezwalający na spację, tabulacje lub znak nowego wiersza
regula = /[a-z]\s/;



// Mail
// + to jeden lub wiecej znaków
regula = /[a-z]+@/;
// ? jeden lub brak znaku
regula = /^mąk[a]?@/;
// definiowanie ilości znaków
regula = /[a]{1}/;
regula = /[a]{2}/; //muszą być obok siebie
regula = /[a]{2,4}/; // od 2 do 4 liter a obok siebie
regula = /^[a-z]{2,}$/; //

regula = /\//; // jak zobaczyć czy jest slesh
regula = /\s/; // wymaga np. spacji
regula = /\S/; // np. brak spacji
regula = /./;
regula = /../;
regula = /.../; // illość znaków
regula = /\./; // jak sprawdzić czy jest kropka
regula = /\.[a-z]{2-3}$/

// \w znak będący literą, cyfrą, znakiem podkeślenia
// \W znak nie będący literą, cyfrą, znakiem podkeślenia
regula = /\w/;


// \d znak będący cyfrą
// \D znak nie będący cyfrą

regula = /\d/;
regula = /\D/;

//grupa

regula = /(test)/;
regula = /(test){2}/;


// kod pocztowy
var kod = "12-333";
var kodPocztowy = /^\d{2}-\d{3}$/;
var sprawdz = regula.test(tekst);
var sprawdzKod = kodPocztowy.test(kod);

console.log(sprawdz);
console.log(sprawdzKod);




//#######################################################################################################


var muzyka = "tieszto.mp3 plik@mp3 arkusz.csv szkola.mp3 tekst.mp3";
var mp3 = /\w+\.mp3/g;
var test = mp3.test(muzyka);
var testMatch = muzyka.match(mp3);
var iloscUtworow = testMatch.length;

document.write("<ol>");
for(var i=0; i<iloscUtworow; i++){
    document.write("<li>" + testMatch[i] + "</li>");
}
document.write("</ol>");


console.log(test);
console.log(testMatch);















