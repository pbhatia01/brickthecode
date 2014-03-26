<?php

	$code = $_POST['code'];
	$code_process = $_POST['code-process'];
	$level = $_POST['level'];
	
?>
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title> Brick the Code | Output </title>
  
  	<script type='text/javascript' src='src/code-app/jquery.js'></script>
	<?php
		 if($level == 'a'){
			echo('<script type="text/javascript" src="src/code-app/core-util.js"></script>'.
					'<script type="text/javascript" src="assets/js-libs/mediaelement/build/mediaelement-and-player.min.js"></script>'.
					'<link rel="stylesheet" href="assets/js-libs/mediaelement/build/mediaelementplayer.css">');	
		}
	?>	
  
  <link rel="stylesheet" type="text/css" href="assets/css/basic.css">
</head>
<body>
  
  

			<?php 
				if($level == 'a') {
					echo '<script type="text/javascript">
						$(function () {'." $code ". "function process () {" . "$code_process" . "}" . 
							'$("button.run").click(function(){ $(this).hide(); put($n,$n); process(); })' . 
							'}) </script>';
					
					echo "<script type='text/javascript'> $('video,audio').mediaelementplayer(); </script>";
				} 

			?>
</body>


</html>
