function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "top") {
    x.className += " responsive";
  } else {
    x.className = "top";
  }
}
