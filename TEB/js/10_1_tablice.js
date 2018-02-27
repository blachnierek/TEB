function losowanie(){
    var auta = ["audi", "bmw", "ferrari", "fiat"];
    var panstwa = ["polska", "austria", "hiszpanie"];
    var miasta = ["poznan", "gniezdno", "wroclaw"];

   var losujAuto = Math.floor(Math.random()*auta.length);
   var losujPanstwo = Math.floor(Math.random()*panstwa.length);
   var losujMiasto = Math.floor(Math.random()*miasta.length);

    var wylosowanie = auta[losujAuto] + " " + panstwa[losujPanstwo] + " " + miasta[losujMiasto];
    console.log(wylosowanie)

}
 losowanie();
