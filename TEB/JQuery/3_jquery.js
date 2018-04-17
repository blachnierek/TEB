$(document).ready(function(){
//    $("tr:even").css("background", "green")
//    $("tr:odd").css("background", "orange")

    $("#tabela1 tr:even").css("background", "green");
    $("#tabela1 tr:odd").css("background", "orange");
    $("#tabela1 tr:first").css("background", "lime");

    $("#tabela2 tr:even").css("background", "green");
    $("#tabela2 tr:odd").css("background", "orange");
    $("#tabela2 tr:first").css("background", "lime");
    $("#tabela2 tr:last").css("background", "lime");
    $("#tabela2 tr:eq(2)").css("background", "white");

    $("#tabela3 td:contains(Sól)").css("background", "yellow");

    $("#ukryj").click(function(){
      $(":visible").css("display", "none");

      });
});

