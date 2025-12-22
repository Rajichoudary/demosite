// Utility to get URL parameters
function getParam(param) {
  return new URLSearchParams(window.location.search).get(param);
}

// PRODUCT DETAIL PAGE
if (window.location.pathname.includes("product.html")) {
  const name = getParam("name");
  const price = getParam("price");

  document.getElementById("productName").innerText = name;
  document.getElementById("productPrice").innerText = price;

  document.getElementById("addToCart").addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart");
  });
}

// CART PAGE
if (window.location.pathname.includes("cart.html")) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  cart.forEach(item => {
    total += Number(item.price);
    document.getElementById("cartItems").innerHTML +=
      `<p>${item.name} - $${item.price}</p>`;
  });

  document.getElementById("cartTotal").innerText = total;
}

// CHECKOUT
if (window.location.pathname.includes("checkout.html")) {
  document.getElementById("checkoutForm").addEventListener("submit", () => {
    localStorage.removeItem("cart");
    window.location.href = "purchase.html";
  });
}
