
document.getElementById("button").onclick = reservation

function reservation() {

  var name = document.getElementById("name").value;
  var nombre = document.getElementById("nombre").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var message =  document.getElementById("message").value;

  var contact = [name, nombre, date, time, message];

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("txtHint").innerHTML = this.responseText;
  }
  xhttp.open("GET", "reservation.php?q="+contact);
  xhttp.send();

}

