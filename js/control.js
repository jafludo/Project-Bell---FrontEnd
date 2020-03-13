//Chargement de la fonction quand la page est chargée
$(document).ready(function() {

    var init = 0;
    var divinteger = 0;
    var divid = "div0";
    var divnotation = "divnota0";
    var pvalvote = "pvalvote0";
    var poucevalvote = "poucevalvote0";

    $("#submit").click(function(){

        //Add Div Generale
        $('<div/>', {
            id: divid,
            "class": "divson"
        }).appendTo('#globaldiv');

        //Add iframe dans Div Generale
        $('<iframe />', {
            name: $("#Nom").val(),
            id: 'iframe',
            frameborder: "0", 
            src: $("#Lien").val()
        }).appendTo("#"+divid);

        //Add div notation dans Div Generale
        $('<div/>', {
            id: divnotation,
            class: "notation d-flex"
        }).appendTo("#"+divid);

        //Add value vote dans Div Notation
        $('<p/>', {
            id: pvalvote,
        }).appendTo("#"+divnotation);
    
        //Add pouce vote dans Div Notation
        $('<p/>', {
            id: poucevalvote,
            class: "col-sm-2",
            text: "👍"
        }).appendTo("#"+divnotation);
       
        console.log("val : "+pvalvote);
        //Evenement de detection de click sur poucevalvote
        $("#"+poucevalvote).click(function(){

            console.log(this.id);
            console.log($("#"+pvalvote));

            //MAJ val poucevalvote
            var parent = $(this).parent();
            parent.children("#"+pvalvote);
            //var pval = $("#"+pvalvote);
            //parent.find(pval);

            //parent.text(init++);
            
            //$(".init").text(init++);

        });   
        console.log("val 2 : "+pvalvote);
        //Initialisation vote a 0
        $("#"+pvalvote).text(0);

        //Increment de l'id de div
        divinteger++;

        //Unique ID element par Div
        divid = "div"+divinteger;
        divnotation = "divnota"+divinteger;
        pvalvote = "pvalvote"+divinteger;
        poucevalvote = "poucevalvote"+divinteger;
    
    });
});


