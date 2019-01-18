<?php
	switch ($_SERVER["SCRIPT_NAME"]) {
		case '/exo_php1/about.php':
			$CURRENT_PAGE = "About";
			$PAGE_TITLE = "A propos";

			break;
		case '/exo_php1/users.php':
			$CURRENT_PAGE = "Users";
			$PAGE_TITLE = "Users";
			break;

		case '/exo_php1/contact.php':
			$CURRENT_PAGE = "Contact";
			$PAGE_TITLE = "Contact";
			break;
		case '/exo_php1/boucle.php':
			$CURRENT_PAGE = "Boucle";
			$PAGE_TITLE = "Boucle";
			break;
		default:
			$CURRENT_PAGE = "Contact";
			$PAGE_TITLE = "Contact";
			break;
	}

	function monMsg($colorMsg='red') {
		echo "<p class='color lead text center pure-u-1' style= 'color:$colorMsg' ;>Je suis injectée en PHP ! </p>";
	}
?>