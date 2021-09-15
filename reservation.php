<?php
$mysqli = new mysqli("localhost", "root", "root", "cafe", 3308);
if($mysqli->connect_error) {
  exit('Could not connect');
}

$tableau = explode(",", $_GET['q']);



$stmt = $mysqli->prepare("INSERT INTO reservation (nom, nb, date, heure, message) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_Param("sisss", $tableau[0], $tableau[1], $tableau[2], $tableau[3], $tableau[4]);

$stmt->execute();
$stmt->close();
$mysqli->close();


?>
