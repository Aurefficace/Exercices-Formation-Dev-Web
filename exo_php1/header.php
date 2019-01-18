<body>

<header>
	<nav class="navbar w-100 navbar-expand-md navbar-light mb-5">
           <a class="navbar-brand" href="index.php">L'Armée des 12 Devs</a>
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
           </button>

           <div class="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
               <ul class="navbar-nav">
                   <li class="nav-item pr-3">
                       <a class="nav-link <?php if ($CURRENT_PAGE == "About"){echo"active";}?>" href="about.php">A Propos</a>
                   </li>
                   <li class="nav-item pr-3">
                       <a class="nav-link  <?php if ($CURRENT_PAGE == "Users"){echo"active";}?>" href="users.php">Users</a>
                   </li>
                   <li class="nav-item pr-3">
                       <a class="nav-link  <?php if ($CURRENT_PAGE == "Contact"){echo"active";}?>" href="contact.php">Contact</a>
                   </li>
                   <li class="nav-item pr-3">
                       <a class="nav-link  <?php if ($CURRENT_PAGE == "Boucle"){echo"active";}?>" href="boucle.php">Boucle</a>

                   </li>
               </ul>
           </div>
       </nav>



</header>
