

//Chargement de la fonction quand la page est chargée
$(document).ready(function() {

    var test = new CRequest();
    var init = 0;
    var divinteger = 0;
    var divid = "div0";
    var divnotation = "divnota0";
    var pvalvote = "pvalvote0";
    var poucevalvote = "poucevalvote0";
    var tabpouceval = [];
    
    $("#submit").click(function(){

        //test.getPost();

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
            text: init
        }).appendTo("#"+divnotation);
    
        //Add pouce vote dans Div Notation
        $('<p/>', {
            id: poucevalvote,
            class: "col-sm-2 p",
            text: "👍",
            val: 0
        }).appendTo("#"+divnotation);        


        //Evenement de detection de click sur poucevalvote
        $("#"+poucevalvote).click(function(){
               
            //Recup ID
            var valueid = (this.id);
            valueid = valueid.substr(valueid.length-1)

            if(this.value == 0){
                this.value = 1;
            }

            //val poucevalvote++ et stockage en tab
            tabpouceval[valueid] = this.value++;  

            //Actualisation display val
            Majvalvote(valueid);
        });     

        //Increment de l'id de div
        divinteger++;

        //Unique ID element par Div
        divid = "div"+divinteger;
        divnotation = "divnota"+divinteger;
        pvalvote = "pvalvote"+divinteger;
        poucevalvote = "poucevalvote"+divinteger;
    
    });

    function Majvalvote(idpouce){

        //Recup val en fonction de l'id
        var valid = tabpouceval[idpouce];

        //MAJ du text du pvalvote en fonction de l'id de poucevalvote
        $("#"+pvalvote.substr(0, pvalvote.length-1)+idpouce).text(valid);


    }
  

});


