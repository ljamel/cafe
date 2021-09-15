<?php
$mysqli = new mysqli("localhost", "root", "root", "cafe", 3308);
if($mysqli->connect_error) {
  exit('Could not connect');
}

$tableau = explode(",", $_GET['q']);

var_dump($tableau[2]);

$sql = "SELECT date, heure, SUM(nb) AS totaux FROM reservation GROUP BY date, heure";
$result = $mysqli->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {

    if ($row["totaux"] + $tableau[0] > 50 and $row["date"] == $tableau["1"] and $row["heure"] == $tableau["2"] ){
      echo "Désoler plus de place";
    } else {
      /*
      echo "Votre réservation à bien été prise.";
      $stmt = $mysqli->prepare("INSERT INTO reservation (nom, nb, date, heure, message) VALUES (?, ?, ?, ?, ?)");
      $stmt->bind_Param("sisss", $tableau[0], $tableau[1], $tableau[2], $tableau[3], $tableau[4]);

      $stmt->execute();
      $stmt->close();
      $mysqli->close();
      */
    }

  }
} else {
  echo "0 results";
}
$mysqli->close();


?>
