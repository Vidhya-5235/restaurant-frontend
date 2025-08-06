document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      const price = parseInt(button.dataset.price);
      const image = button.dataset.image;
      const quantityInput = button.previousElementSibling;
      const quantity = parseInt(quantityInput.value);

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingItemIndex = cart.findIndex((item) => item.name === name);

      if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
      } else {
        cart.push({ name, price, image, quantity });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      showCartMessage(`${name} added to cart!`);
    });
  });
});

// 👇 This function displays the message temporarily
function showCartMessage(message) {
  const msgDiv = document.getElementById("cart-message");
  msgDiv.textContent = message;
  msgDiv.classList.add("show");

  setTimeout(() => {
    msgDiv.classList.remove("show");
  }, 2000); // Show for 2 seconds
}


