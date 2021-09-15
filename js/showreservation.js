
document.getElementById("show").onclick = showreservation

function showreservation() {
  
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("txtHint").innerHTML = this.responseText;
  }
  xhttp.open("GET", "getreservation.php");
  xhttp.send();
}
