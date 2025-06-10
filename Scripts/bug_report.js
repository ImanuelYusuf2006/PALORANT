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
  
// File Upload Preview
const fileUpload = document.getElementById("file-upload");
const previewContainer = document.getElementById("preview-container");

fileUpload.addEventListener('change', function () {
  previewContainer.innerHTML = '';

  if (this.files && this.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = document.createElement('img');
      img.src = e.target.result;

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-preview';
      removeBtn.addEventListener('click', function () {
        previewContainer.innerHTML = '';
        fileUpload.value = '';
      });

      previewContainer.appendChild(img);
      previewContainer.appendChild(removeBtn);
      previewContainer.style.display = 'block';
    };

    reader.readAsDataURL(this.files[0]);
  }
});

// DOM Ready
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bugForm");
  const usernameInput = document.getElementById("username");
  const serverInput = document.getElementById("server");
  const emailInput = document.getElementById("email");
  const descriptionInput = document.getElementById("description");
  const checkbox = document.getElementById("agree-terms");
  const charCount = document.getElementById("char-count");

  // Counter karakter
  descriptionInput.addEventListener("input", function () {
    if (descriptionInput.value.length > 2000) {
      
      descriptionInput.value = descriptionInput.value.substring(0, 2000);
    }
    charCount.textContent = descriptionInput.value.length;

    // Ganti warna jika sudah mencapai batas maksimal
    if (descriptionInput.value.length === 2000) {
      charCount.style.color = "red";
    } else {
      charCount.style.color = ""; // Kembali ke warna default
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const server = serverInput.value.trim();
    const email = emailInput.value.trim();
    const description = descriptionInput.value.trim();

    const messages = [];

    // Validasi 1: Username
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    if (!usernameRegex.test(username)) {
      messages.push("Username harus minimal 3 karakter dan hanya boleh huruf, angka, atau underscore.");
    }

    // Validasi 2: Server
    if (server.length < 2) {
      messages.push("Server harus minimal 2 karakter.");
    }

    // Validasi 3: Email
    if (!email.includes("@") || !email.endsWith(".com")) {
      messages.push("Email harus valid dan diakhiri dengan .com");
    }

    // Validasi 4: Deskripsi
    if (description.length === 0) {
      messages.push("Deskripsi tidak boleh kosong.");
    } else if (description.length > 2000) {
      messages.push("Deskripsi tidak boleh lebih dari 2000 karakter.");
    }

    // Validasi 5: Checkbox
    if (!checkbox.checked) {
      messages.push("Anda harus menyetujui pernyataan sebelum mengirim.");
    }

    // Tampilkan error atau popup sukses
    if (messages.length > 0) {
      alert(messages.join("\n"));
    } else {
      // Popup sukses
      const popup = document.getElementById("success-popup");
      popup.classList.remove("popup-hidden");
      popup.classList.add("popup-shown");

      // Reset form
      form.reset();
      charCount.textContent = "0";
      previewContainer.innerHTML = "";

      setTimeout(() => {
        popup.classList.remove("popup-shown");
        popup.classList.add("popup-hidden");
      }, 3000);
    }
  });
});
