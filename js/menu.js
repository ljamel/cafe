// menu
document.getElementById("heat").onclick = menu;

function menu() {
  document.getElementById("heat").style.backgroundColor = "grey";
  document.getElementById("heat").style.color = "white";
  document.getElementById("drink").style.backgroundColor = "white";
  document.getElementById("drink").style.color = "black";

  document.getElementById("drink2").style.display = "none";
  document.getElementById("heat2").style.display = "block";
}


document.getElementById("drink").onclick = menu2;

function menu2() {
  document.getElementById("drink").style.backgroundColor = "grey";
  document.getElementById("drink").style.color = "white";
  document.getElementById("heat").style.backgroundColor = "white";
  document.getElementById("heat").style.color = "black";

  document.getElementById("heat2").style.display = "none";
  document.getElementById("drink2").style.display = "block";
}

document.documentElement.style.scrollBehavior = "smooth";
