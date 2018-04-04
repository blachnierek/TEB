var tab = [1, 2, 0, 4, 2, 2, 2];
var lider = tab[0];
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
        document.write("W zbiorze nie ma lidera<br>");
    else{
        for (let i=0; i<tab.length; i++)
            if(tab[i]==lider)
                ilosc++;
        if(ilosc > tab.length/2)
            document.write(lider + " jest liderem w zbiorze")
        else
            document.write("W zbiorze nie ma lidera");
    }

