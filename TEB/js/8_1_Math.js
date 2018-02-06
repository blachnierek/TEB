var pi = Math.PI;
console.log(pi);

//pierwiastek
var x= prompt("Podaj warość");
console.log(Math.sqrt(x));
var a= 13.2;
var b= 28.5;
var c= 1;

//minimum
var min = Math.min(a,b,c);
console.log("Minimum -" + min);

//maximum
var max = Math.max(a,b,c);
console.log("Maximum -" + max);

//zaokrąglenie

var e = 12.45;
var zaokraglenie = Math.round(e);
console.log(zaokraglenie);


//wartosc bezwzgledna
//zaokraglenie roung
//zaokraglenie w dol

var x = -56;
var y = -13.1;
var z = 14.9;


document.write('<br>' + Math.abs(x) + '<br>');
document.write('<br>' + Math.abs(y) + '<br>');
document.write('<br>' + Math.abs(z) + '<br>');

document.write('<br>' + Math.round(x) + '<br>');
document.write('<br>' + Math.round(y) + '<br>');
document.write('<br>' + Math.round(z) + '<br>');

document.write('<br>' + Math.floor(y) + '<br>');
document.write('<br>' + Math.floor(y) + '<br>');
document.write('<br>' + Math.floor(z) + '<br>');

//potęgowanie


var p = Math.pow(2,10)
console.log(p); //1024

//losowanie

var losuj= Math.random();
console.log(losuj);


//miejsca po przecinku

var k = 10.1234567890;
console.log(typeof(k));//number
k= k.toFixed(4);
console.log(k);
console.log(typeof(k)); //string


//precyzja
var j = 10.1234567890;
console.log(typeof(j)); //number
j = j.toPrecision(4);
console.log(j); //





