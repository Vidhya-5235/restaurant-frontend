// app.js

// Load cart on page load
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const clearCart = urlParams.get("clearCart");

  if (clearCart === "true") {
    localStorage.removeItem("cart");
  }

  loadCart();
});

// Load cart items
function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsDiv = document.getElementById("cart-items");
  const grandTotalDiv = document.getElementById("grand-total");
  cartItemsDiv.innerHTML = "";
  let grandTotal = 0;

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = `<div class="empty-cart">Your cart is empty. 🛒</div>`;
    grandTotalDiv.textContent = "";
    return;
  }

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    grandTotal += itemTotal;

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <img src="${item.image || 'images/default.jpg'}" alt="${item.name}">
      <div class="item-info">
        <h3>${item.name}</h3>
        <p>Price: ₹${item.price}</p>
        <p>Total: ₹${itemTotal}</p>
      </div>
      <div class="cart-actions">
        <input type="number" min="1" value="${item.quantity}" data-index="${index}" class="qty-input"/>
        <button class="btn-update" data-index="${index}">Update</button>
        <button class="btn" data-index="${index}">Remove</button>
      </div>
    `;
    cartItemsDiv.appendChild(itemDiv);
  });

  grandTotalDiv.innerHTML = `<strong>Total: ₹${grandTotal}</strong>`;
}

// Handle click events for update and remove buttons
document.addEventListener("click", function (e) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Remove item
  if (e.target.classList.contains("btn")) {
    const index = e.target.getAttribute("data-index");
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
  }

  // Update quantity
  if (e.target.classList.contains("btn-update")) {
    const index = e.target.getAttribute("data-index");
    const qtyInput = document.querySelector(`input.qty-input[data-index="${index}"]`);
    const newQty = parseInt(qtyInput.value);
    if (newQty > 0) {
      cart[index].quantity = newQty;
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCart();
    }
  }
});
