// document.addEventListener("DOMContentLoaded", function () {});

function openNavbar() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  // console.log(hamburger)

  console.log("keklik");
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open"); // Optional: jika ingin animasi garis hamburger berubah
}
