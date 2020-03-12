$(document).ready(function() {
    var recup = $("#button-addon1").val();
    var recup2 = $("#button-addon2").val();
    var divinteger = 0;
    var divid = "div0";

    $("#submit").click(function(){
        $('<div/>', {
            id: divid,
            "class": "divson",
        }).appendTo('#globaldiv');

        $('<iframe />', {
            name: 'frame1',
            id: 'frame1',
            frameborder: "0", 
            src: 'https://www.youtube.com/embed/RYjfe8OSRFw'
        }).appendTo("#"+divid);

        $('<div/>', {
            class: "notation d-flex"
        }).appendTo("#"+divid);

        divinteger++;
        divid = "div"+divinteger;

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


