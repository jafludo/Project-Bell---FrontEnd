$(document).ready(function() {
    var recup = $("#button-addon1").val();
    var recup2 = $("#button-addon2").val();


    $("#submit").click(function(){
        var div = $(<div></div>);
        $(div).append(<table></table>);
        
    });

    /*
    $("#pouce").click(function(){
        recup++;
        $("#button-addon1").val(recup);
    });
*/
     $("#p").click(function(){
         console.log($("#button-addon1").val());
        recup++;
        $("#button-addon1").text(recup);
    });    


});


class Request{

}


