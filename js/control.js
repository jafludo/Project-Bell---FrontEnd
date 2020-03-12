$(document).ready(function() {
    var recup = $("#button-addon1").val();
    var recup2 = $("#button-addon2").val();


    $("#submit").click(function(){
        console.log("f");
        
    });

    $("#button-addon1").click(function(){
        recup++;
        $("#button-addon1").val(recup);
    });


});


class Request{

}


