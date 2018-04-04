
var elP = document.getElementById("dodaj");
var elL = document.getElementById("liczba");
var elKomunikat = document.getElementById("komunikat");
var tab = [];
//tab.push = elL.value;

function dodajElement(){
    tab.push(elL.value);
    console.log(tab);
}

function lider(){var lider = tab[0];
//console.log(lider);
var pom = 1, ilosc = 0;
for(var i=1; i < tab.length; i++){
//    document.write(tab[i]);
    if(pom == 0){
        lider = tab[i];
        pom=1;
    }else if(tab[i]==lider)
        pom++;
    else
        pom--;
    console.log("Lider: " + lider);
    console.log("Pomocnicza: " + pom);
}
    if (pom==0)
        elKomunikat.innerHTML = "W zbiorze nie ma lidera<br>";
    else{
        for (let i=0; i<tab.length; i++)
            if(tab[i]==lider)
                ilosc++;
        if(ilosc > tab.length/2)
            elKomunikat.innerHTML = lider + " jest liderem w zbiorze";
        else
            elKomunikat.innerHTML = "W zbiorze nie ma lidera";
    }
                }

elP.addEventListener("click", lider);
elP.addEventListener("click", dodajElement);
