//dłuższa wersja
$("document").ready(function(){
   $(".blok").bind("click", function(){
       alert("Uwaga");
   });
});
//krótsza wersja
$("document").ready(function(){
    $(".blok").click(function(){
        alert("uwaga!");
    });
});


$(document).ready(function(){
    $("#akapit").mouseover(function(){
        $("#akapit").addClass("tlo1");
    });
    $("#akapit").mouseout(function(){
        $("#akapit").removeClass("tlo1");
    });
});

