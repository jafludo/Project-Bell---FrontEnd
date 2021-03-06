<!DOCTYPE html>
<html>
<head>
    <title>Projet</title>
    <link href="css/style.css" rel="stylesheet">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body id="body">
	<?php header('x-frame-options: sameorigin'); ?>
  <div class="container">
    <h3 class="centertext">Ajouter une sonnerie : </h3>
    </br>
    <form id="formulaire">
        <div class="form-group">
          <label for="Nom">Nom</label>
          <input id="Nom" type="text" class="form-control" placeholder="Youtube Name">
        </div>
        <div class="form-group">
          <label for="Lien">Nom du lien</label>
          <input id="Lien" type="text" class="form-control" placeholder="Youtube Link">
        </div>
        <div class="row">
          <button id="submit" type="button" class="btn btn-primary col-1">Envoyer</button>
          <label id="labelcooldown" class="col-6" ></label>
        </div>
      </form>
      </br>



      <h3 class="centertext">Listes des sonneries : </h3>
      </br>

      <div id="globaldiv" class="d-flex flex-wrap justify-content-around">
        <!--
        <div class="divson">
            <iframe 
              src="https://www.youtube.com/embed/wiQMfaKcA9k" 
              frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
          </iframe>
          <div class="notation d-flex">
                <p id="button-addon1" class="col-sm-2"></p>
                <p class="col-sm-2" id="p">👍</p>
          </div>
        </div>
        <p class="init"></p>-->
      </div>
      <p id="test"></p>
    <!--<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>-->
    <script
      src="https://code.jquery.com/jquery-3.4.1.js"
      integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
      crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script 
      src="js/CRequest.js">
    </script>
    <script 
        src="js/control.js">
    </script>
</body>
</html>