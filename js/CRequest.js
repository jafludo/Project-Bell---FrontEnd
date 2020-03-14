class CRequest{


    getPost(){
        var settings = {
          "url": "https://quickpay-api.herokuapp.com/api/v1/customers/",   
          "method": "GET",
          "contentType": "application/json"   
        };
          
        $.ajax(settings).done(function (response) {  
            let test = document.getElementById("test");
            test.innerHTML = "";
            
            $.each(response, function(cle,value){
                //Recup cle + valeurs
                console.log("JSON : "+cle+" "+value);
            });
 
        });   
      }

}
