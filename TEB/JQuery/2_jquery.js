jQuery(document).ready(function(){
   $("div").css("background", "red");
    $(".text").css("background", "blue");
    $("#id1").css("background", "orange");
    $("#id2").css("background", "green");
    $("p").css("color", "yellow");
    $("*").css("font-family", "arial", "Tahoma");
    $("*").css("color", "green");
    $("*").css({"color":"red", "font-size":"110%"});

});
/*
stwórz przycisk i akapit ze swoim imieniem
po naciścięciu przycisku schowa się akapit lub schowa w czasie 4 sekund
dodatkowo zmieni kolor tekstu na brązowy a tła na szary*/


jQuery(document).ready(function(){
$("#gozik").click(function(){
    $("#akapit").toggle(4000);
    $("#akapit").css({"color":"brown", "background":"grey"});


    });
});


$(document).ready(function(){


   $("#pokazAkapit").click(function(){
       $("#akapit111").show(2000);
   });
    $("#ukryjAkapit").click(function(){
        $("#akapit111").hide(2000);
    });
});
