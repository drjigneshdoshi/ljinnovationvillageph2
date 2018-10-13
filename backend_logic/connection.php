<?php
	$connect = mysqli_connect("localhost","root","","ljivillage");

	if(!$connect){
		die("Connection Failed: " .mysqli_connect_error());
	}
?>
