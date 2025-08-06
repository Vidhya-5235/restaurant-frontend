// Restore form values from localStorage
window.addEventListener("DOMContentLoaded", () => {
  const savedData = JSON.parse(localStorage.getItem("bookingData"));
  if (savedData) {
    document.getElementById("name").value = savedData.name || "";
    document.getElementById("email").value = savedData.email || "";
    document.getElementById("phone").value = savedData.phone || "";
    document.getElementById("guests").value = savedData.guests || "";
    document.getElementById("datetime").value = savedData.datetime || "";
    document.getElementById("message").value = savedData.message || "";
  }
});

// Preorder button → Save booking form data + go to preorder.html
document.getElementById("preorder-btn").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const guests = document.getElementById("guests").value;
  const datetime = document.getElementById("datetime").value;
  const message = document.getElementById("message").value;

  // Save booking data
  localStorage.setItem("bookingData", JSON.stringify({
    name, email, phone, guests, datetime, message
  }));

  window.location.href = "preorder.html";
});

// Handle form submission
document.getElementById("booking-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const guests = document.getElementById("guests").value;
  const datetime = document.getElementById("datetime").value;
  const message = document.getElementById("message").value;

  const preorder = JSON.parse(localStorage.getItem("preorder")) || [];

  const data = { name, email, phone, guests, datetime, message, preorder };

  try {
    const response = await fetch("https://restaurant-backend-thtc.onrender.com/book-table", {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    alert(result.message);

    // Cleanup
    localStorage.removeItem("bookingData");
    localStorage.removeItem("preorder");

    window.location.href = "thankyou.html";
  } catch (error) {
    alert("Error booking table. Try again.");
    console.error(error);
  }
});
