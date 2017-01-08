<!DOCTYPE html>
<html>
    <head>
        <title>!!! -- Firebase -- !!!</title>
        <link rel="stylesheet" type="text/css" href="assets/lib/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="assets/lib/css/sweetalert2.min.css">
        <link rel="stylesheet" type="text/css" href="assets/css/custom.css">
        <link rel="stylesheet" type="text/css" href="assets/css/chat.css">
        
        <script type="text/javascript" src="assets/lib/js/jquery.min.js"></script>
        <script type="text/javascript" src="assets/lib/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="assets/lib/js/sweetalert2.min.js"></script>
        <script src="https://www.gstatic.com/firebasejs/3.6.4/firebase.js"></script>
        <script type="text/javascript" src="assets/js/config.js"></script>
    </head>
    <body>
        <div class="container">
            <nav class="navbar navbar-default">
              <div class="container-fluid">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand" href="#">Firebase</a>
                </div>
            
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav navbar-right">
                    <li><a href="tpl-movies.php">Movies</a></li>
                    <li><a href="tpl-chat.php">Chat</a></li>
                    <li><a href="tpl-posts.php">Posts</a></li>
                    <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
                      <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                        <li class="divider"></li>
                        <li><a href="#">One more separated link</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>