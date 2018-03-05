/*zad 1
użytkownik podaje w polu tekstowym kod pocztowy
pod polem wyświetl komunikat czy dane zostały prawidłowo wprowadzone
Jeśli będą prawidłowe dane to wyświetl komunikat o treści "prawidłowy kod pocztowy: ....."
jeśli będzie błędny to wyświetl komunikat "błędny kod pocztowy" i umieśc kursor w polu tekstowym*/


var gozik = document.getElementById("gozik");
var kod = document.getElementById("kod");
var regula = (kod.value);
regula = "/^\d{2}-\d{3}$/";
var wynik = regula.test(regula);



console.log(wynik);

