<?php


$mysqli = new mysqli('db', 'root', 'root', 'cafe');
if ($mysqli->connect_error) {
    exit('Could not connect');
}

$tableau = explode(",", $_GET['q']);



$sql = "SELECT date, heure, message, SUM(nb) AS totaux FROM reservation GROUP BY date, heure";
$result = $mysqli->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        $tot = $row["totaux"] + $tableau[1];

        if ($tot > 5) {
            echo "Désoler plus de place";
        } else {

            echo "Votre réservation à bien été prise.";

            $stmt = $mysqli->prepare("INSERT INTO reservation (nom, nb, date, heure, message) VALUES (?, ?, ?, ?, ?)");
            $stmt->bind_Param("sisss", $tableau[0], $tableau[1], $tableau[2], $tableau[3], $tableau[4]);

            $stmt->execute();
            $stmt->close();
            $mysqli->close();


        }

    }
} else {
    echo "0 results";
    $mysqli->close();
}
