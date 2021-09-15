<?php
$mysqli = new mysqli("localhost", "root", "root", "cafe", 3308);
if($mysqli->connect_error) {
  exit('Could not connect');
}



$sql = "SELECT * FROM reservation";
$result = $mysqli->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "nom: " . $row["nom"]. " - nombre de réservation: " . $row["nb"]. " date: " . $row["date"] . " message: " . $row["message"] . "<br>";
  }
} else {
  echo "0 results";
}
$mysqli->close();


?>
