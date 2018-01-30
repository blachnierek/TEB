var przycisk = document.getElementById("gozik");




przycisk.onclick = function(){
    var imie, nazwisko, tekst;
     imie = document.getElementById("imie").value;
     nazwisko = document.getElementById("nazwisko").value;
    var blok = document.getElementById("wynik");

    tekst = "Twoje imię: " + imie + "<br>";
    tekst += "Twoje nazwisko:" + nazwisko + "<br>";
    blok.innerHTML = tekst;

    document.write("Twoje imie: " + imie + "<br>");
    document.write("Twoje nazwisko: " + nazwisko + "<br>");

    blok.innerHTML = tekst
}
