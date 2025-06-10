fetch("navbar.html") // Ambil isi navbar.html
  .then((response) => response.text()) // Ubah ke teks
  .then((data) => {
    const parser = new DOMParser();
    const navbarPage = parser.parseFromString(data, 'text/html');
    console.log(navbarPage);
    document.getElementById("navbar").innerHTML = navbarPage.querySelector("#navbar").innerHTML; // Masukkan ke div
  })
  .catch((error) => console.error("Error loading navbar:", error));

fetch("credit_pages_putih.html") // Ambil isi navbar.html
  .then((response) => response.text()) // Ubah ke teks
  .then((data) => {
    const parser = new DOMParser();
    const navbarPage = parser.parseFromString(data, 'text/html');
    console.log(navbarPage);
    document.getElementById("credit_page").innerHTML = navbarPage.querySelector("#credit_page").innerHTML; // Masukkan ke div
  })
  .catch((error) => console.error("Error loading navbar:", error));