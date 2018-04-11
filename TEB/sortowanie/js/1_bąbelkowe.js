function sortBubble(t){
   var pom;
    for (var j= t.length - 1; j > 0; j--)
    for (var i=0; i<j; i++)
         if(t[i] > t[i+1]){
             pom = t[i];
             t[i] = t[i + 1];
             t[i+1] = pom;
         }
}


function wyswietl(t){
    for (i=0; i<t.length; i++){
        document.write(t[i]);
        document.write(" ");
    }
}

function wys(){
    let z = "dsadas";
    document.write(z);
}

var tab = [1,23,5,0,45];

document.write("<h3>Nie posortowane: </h3>");
wyswietl(tab);
document.write("<h4>Posortowane: </h4>");
sortBubble(tab);
wyswietl(tab);

