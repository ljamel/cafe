
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

console.log(getCookie("form"));



document.getElementById("button").onclick = form;

var contact = [];

// var date = Date.now();

let today = new Date();

function form() {


  var name = document.getElementById("name").value;
  var nombre = document.getElementById("nombre").value;
  var date = document.getElementById("date").value;
  var date = document.getElementById("time").value;
  var message =  document.getElementById("message").value;

  var contact = [name, nombre, date, message];


  document.cookie = `form=${contact}`;



}
