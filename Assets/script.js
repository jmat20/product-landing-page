function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "top") {
    x.className += " responsive";
  } else {
    x.className = "top";
  }
}

function myFunction2() {
  var y = document.getElementById("topnav");
  if (y.className === "top responsive") {
    y.className = "top";
  } else {
    y.className = "top responsive";
  }
}
