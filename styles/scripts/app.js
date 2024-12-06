let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    alert(`${product} added to cart!`);
}

function renderCart() {
    const cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = "<h2>Your Cart:</h2>";
    cart.forEach(item => {
        cartDiv.innerHTML += `<p>${item.product} - $${item.price}</p>`;
    });
}
