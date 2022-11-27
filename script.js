function navBar(y) {
    y.classList.toggle("change");
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("navbar").style.outlineStyle = "none";
    } else {
        x.style.display = "block";
        document.getElementById("navbar").style.background = "white";
        document.getElementById("navbar").style.outlineStyle = "solid";
    }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    if (window.innerWidth > 960) {
      navbar.classList.add("sticky");
    }
  } else {
    if (window.innerWidth > 960) {
      navbar.classList.remove("sticky");
    }
  }
}