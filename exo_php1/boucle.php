<?php include ('head.php');?>
<?php include ('header.php');?>
<title><?php echo ($PAGE_TITLE)?>;</title>
<main>
	<div class="pure-g">
		<h2 class="pure-u-1 text-center"><?php echo ($PAGE_TITLE)?></h2>
		<section class="pure-u-1 text-center">
			<?php
                   $a = 0;
                   $b = 0;
                   $c = 0;
                       for ($i=0; $i < 5; $i++) {
                           $a+=100;
                           $b+=50;
                           $c+=10;
                       }
                       echo "<p> la valeur de 'a' à la fin de la boucle for est égale a $a</p>";
                       echo "<p> la valeur de 'b' a la fin de la boucle for est égale a $b</p>";
                       echo "<p> la valeur de 'c' a la fin de la boucle for est égale a $c</p>";
                   ?>
		</section>

		<section class="pure-u-1 text-center">
			<?php
			$x = 0;
			while ( $x < 5) {
				$x++;
				echo "La valeur est de $x <br>";
			}








			?>
		</section>
		<section class="pure-u-1 text-center">
			<?php
			monMsg ();
			?>
		</section>


		<section class="pure-u-1 text-center">
			<?php
			$arrayName = array('Yohann','Aurélien','Wikenson','Ludo','Nico','Matthias','Thibault','Ludovina','Romain','Kevin','Clément','Hortense','Quentin');
			$arrayColors = array('red','green','blue','yellow','pink','purple','gray','darkmagenta','mediumpurple','indigo','slateblue','orchid','fuchia',);
			
			$arrayMix = array_combine($arrayName, $arrayColors);
			
			foreach ($arrayMix as $arrayMix => $arrayColors) {
				echo "<div class='pure-u-1-4' style='color:$arrayColors'>$arrayMix</div>";
			}



			?>
		</section>


	</div>
</main>
<?php include ('footer.php');?>