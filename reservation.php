<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
$mysqli = new mysqli('db', 'root', 'root', 'cafe');
if($mysqli->connect_error) {
  exit('Could not connect');
}

$tableau = explode(",", $_GET['q']);


$stmt = $mysqli->prepare("INSERT INTO reservation (nom, nb, date, heure, message) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_Param("sisss", $tableau[0], $tableau[1], $tableau[2], $tableau[3], $tableau[4]);

$stmt->execute();

if ($stmt->error === ""){
  echo "Merci pour votre réservation";
} else {
  echo "Erreur lors de la réservation";
}
$stmt->close();
$mysqli->close();


?>
