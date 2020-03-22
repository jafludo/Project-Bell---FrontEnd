

//Execution code on loading page
$(document).ready(function() {

    //Reset Name and Link at loading page
    $("#Nom").val("");
    $("#Lien").val("");

    var val_cooldown = 3;
    var test = new CRequest();
    var init = 0;
    var divinteger = 0;
    var divid = "div0";
    var divnotation = "divnota0";
    var pvalvote = "pvalvote0";
    var poucevalvote = "poucevalvote0";
    var tabpouceval = [];
    var myvar;
    var tabsound = [];
    var eachjsonpart = 0;

    //Creation of a div with youtube link
    function createDiv(){

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
            src: ConvertALinkIntoEmbed()
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


        //Event detect click on poucevalvote
        $("#"+poucevalvote).click(function(){
               
            //Recup ID
            var valueid = (this.id);
            valueid = valueid.substr(valueid.length-1)

            if(this.value == 0){
                this.value = 1;
            }

            //val poucevalvote++ and stock value in array
            tabpouceval[valueid] = this.value++;  

            //MAJ display val
            Majvalvote(valueid);
        });     

        //Increment de l'id de div
        divinteger++;

        //Unique ID element par Div
        divid = "div"+divinteger;
        divnotation = "divnota"+divinteger;
        pvalvote = "pvalvote"+divinteger;
        poucevalvote = "poucevalvote"+divinteger;
    }

    function createDivWithInfos(name,link){

        //Add Div Generale
        $('<div/>', {
            id: divid,
            "class": "divson"
        }).appendTo('#globaldiv');

        //Add iframe dans Div Generale
        $('<iframe />', {
            name: name,
            id: 'iframe',
            frameborder: "0", 
            src: link
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


        //Event detect click on poucevalvote
        $("#"+poucevalvote).click(function(){
               
            //Recup ID
            var valueid = (this.id);
            valueid = valueid.substr(valueid.length-1)

            if(this.value == 0){
                this.value = 1;
            }

            //val poucevalvote++ and stock value in array
            tabpouceval[valueid] = this.value++;  

            //MAJ display val
            Majvalvote(valueid);
        });     

        //Increment de l'id de div
        divinteger++;

        //Unique ID element par Div
        divid = "div"+divinteger;
        divnotation = "divnota"+divinteger;
        pvalvote = "pvalvote"+divinteger;
        poucevalvote = "poucevalvote"+divinteger;
    }

    //Function GET Method in Ajax
    function getAjax(){

        //Block button before ajax get done
        $("#submit").prop('disabled',true);

        $.ajax({

            url: "http://localhost:3000/sounds",
            method: "GET",
            headers: {  'Access-Control-Allow-Origin': '*' },
            statusCode: {
    
                200: function() {
                  //Page found
                  //console.log("Page found");
                },
                404: function() {
                    //Page not found
                    //console.log("Page not found");
                  }
    
              }
    
          }).done(function(reponse) {
            
            //Recup sounds by GET Method
            $.each(reponse,function(cle,valeur){
                
                var tabtempo = [];
                //Recup infos by sound
                $.each(valeur,function(key,value){

                    //Console log key + value of 1 element
                    //console.log(key + " : " + value);

                    //Recup name + link and push in temp array
                    tabtempo.push(value);
                });

                //Push tabtempo in tabsound => way to concat all infos in general tab
                tabsound.push(tabtempo);

            });

            //Display tab of all sounds
            //console.log(tabsound);

            //Multidimensional array
            //console.log(tabsound[0][0]);

            //Construct all div with value in database 
            for(var i=0;i<tabsound.length;i++){
                createDivWithInfos(tabsound[i][0],tabsound[i][1]);
            }
            
        });

        //Enable button after ajax get done
        $("#submit").prop('disabled',false);
    }

    //Function POST Method in Ajax
    function postAjax(){
        console.log("POST message");
        var sendingData = 
        {
            name: $("#Nom").val(),
            link: $("#Lien").val()
        }

        $.ajax({

            url: "http://localhost:3000/profile",
            method: "POST",
            contentType: "application/json",
            data: sendingData,
            }).done(function(response) {

            //Return response after post request
            console.log(response);
    
        });
    }

    //Call getAjax in loading page
    getAjax();

    //Convert Link WORK IN PROGRESS !!!
    function ConvertALinkIntoEmbed(){

        var embedlink="";
        var url = $("#Lien").val();
        //var url = "https://www.youtube.com/watch?v=sGbxmsDFVnE";

        //Recup secnd part of link
        var youtube = url.split("?v=")[1]; //sGbxmsDFVnE

        //Recup secnd part of link
        var alreadyembed = url.split("/embed/")[1]; //sGbxmsDFVnE

        if(youtube == undefined && alreadyembed == undefined){

            //Not a good link
            $("#labelcooldown").text("Ceci n'est pas un lien youtube valide!");
            return "";
            
        }
        else if(youtube){

            console.log("youtube");
            //Return embedlink
            embedlink = "http://www.youtube.com/embed/" + youtube; //www.youtube.com/embed/sGbxmsDFVnE
            return embedlink;
        }
        else if(alreadyembed){

            embedlink = url;
            return embedlink;
        }       

    }

    //Manage the cooldown request
    function gestioncooldownsubmit(){
        
        //Recup button value
        var recuptextsubmit = $("#submit").text();

        //Disable submit button
        $("#submit").prop('disabled',true);

        //Msg wait client for submit next request
        $("#labelcooldown").text("Veuillez patienter avant la prochaine demande !");

        //Set Interval of function cooldown at 1 second
        myvar = setInterval(cooldown,1000);
        
    }

    //Stop the function cooldown by clearInterval
    function stopcooldown(){
        clearInterval(myvar);
    }


    //Manage the cooldown and apply modifications
    function cooldown(){
        if(val_cooldown == 0){
            
            stopcooldown();
            $("#labelcooldown").text("");

            //Enable submit button
            $("#submit").prop('disabled',false);

            //Reset value + return function
            val_cooldown = 3;
            return;
        }
        //Change display value of label
        if(val_cooldown == 1){
            $("#labelcooldown").text("Prochaine requete disponible dans " + val_cooldown + " seconde !");
        }
        else{
            $("#labelcooldown").text("Prochaine requete disponible dans " + val_cooldown + " secondes !");
        }

        //Reduce value by increment
        val_cooldown--;
    }

    function Majvalvote(idpouce){
    
        //Recup val by ID
        var valid = tabpouceval[idpouce];

        //MAJ du text du pvalvote en fonction de l'id de poucevalvote
        $("#"+pvalvote.substr(0, pvalvote.length-1)+idpouce).text(valid);

    
    }

    $("#submit").click(function(){

        //if Lien or Link are not completed
        if($("#Nom").val() == "" || $("#Lien").val() == ""){
            
            //Msg empty value infos
            $("#labelcooldown").text("Veuillez remplir les champs !");

            //Cancel submit
            return;

        }else{

            gestioncooldownsubmit();

            //Check if link is good
            if(ConvertALinkIntoEmbed() == ""){
                return;
            }
            else{
                //test.getPost();
                createDiv();
                postAjax();
            }

    }//Fin du else

    });  

});



