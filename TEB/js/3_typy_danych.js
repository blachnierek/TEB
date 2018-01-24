var a = 10, b = 5;
var wynik = a + b;

//alert(wynik)';
alert(a + b);
console.log("tekst");
console.log(a);
console.log(typeof(a)); //number
console.log(typeof(b)); //string
console.log(typeof(wynik)); //string

console.trace();

var _zmienna1 = 10;
//var 3liczba = 10; //błędna nazwa zmiennej

var zmiennazmiennoprzecinkowa = 2.5;

console.log(zmiennazmiennoprzecinkowa);
console.log(typeof(zmiennazmiennoprzecinkowa));


//bool
var prawda = true;
console.log(typeof(prawda));

//string
var tekst = "janusz";
console.log(typeof(tekst));

//undefidend

var inna;
console.log(typeof(inna)); //undefident
console.log(inna); //undefident

//object

var tab = ["aqua", "brązowy"];
console.log(tab);
console.log(typeof(tab)); //object

//###############################################################################################################################


//var liczba = prompt("Podaj Liczbę");
var liczba1 = prompt("Podaj Liczbę", "liczba1");
var liczba2 = prompt("Podaj liczbę", "liczba2");
var suma = liczba1 + liczba2;

liczba1 = parseInt(liczba1);
liczba1 = parseInt(liczba2);
var suma1 = liczba1 + liczba2;
console.log("Po konwersji typów: " + suma1);
console.log(typeof(liczba1));
console.log(typeof(liczba2));





