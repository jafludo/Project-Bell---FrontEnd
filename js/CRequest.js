class CRequest{


    getPost(){
        var settings = {
          "url": "https://quickpay-api.herokuapp.com/",   
          "method": "GET"   
        };
          
        $.ajax(settings).done(function (response) {  
            let textBlock = document.getElementById("test");
            textBlock.innerHTML = "";
            
            var nom = "/api/v1/customers/docs";
            $.each( response, function( i, item ){
                console.log("Customers : "+item.nom);
            });
 
        });   
      }

}
