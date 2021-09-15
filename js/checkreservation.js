

var nombre = document.getElementById("nombre").value;
var date = document.getElementById("date").value;
var time = document.getElementById("time").value;

var contact = [nombre, date, time];
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  document.getElementById("txtHint").innerHTML = this.responseText;
}
xhttp.open("GET", "checktreservation.php?q="+contact);
xhttp.send();
