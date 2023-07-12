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

let index = 0;
const images = document.querySelectorAll('.carousel__image');

function changeImage(n) {
    images[index].style.display = 'none';
    index = (index + n + images.length) % images.length;
    images[index].style.display = 'block';
}

var carousel_interval = setInterval(() => changeImage(1), 10000); // Change image every 10 seconds

// Handle clicks outside of the dropdown
document.addEventListener("click", function (event) {
  var dropdown = document.querySelector(".dropdown-content");
  var isClickInside = dropdown.contains(event.target) || event.target.matches(".dropbtn");

  if (!isClickInside && dropdown.style.display === "block") {
    dropdown.style.display = "none";
  }
});

document.querySelectorAll(".dropbtn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var dropdown = btn.nextElementSibling;
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });
});