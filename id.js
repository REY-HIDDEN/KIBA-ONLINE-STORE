// Array of products
const products = [
  { id: 1, name: "Laptop", price: 500, image: "laptop.jpg" },
  { id: 2, name: "Phone", price: 200, image: "phone.jpg" },
  { id: 3, name: "Headphones", price: 50, image: "headphones.jpg" }
];

// Get the container div from HTML
const productList = document.getElementById("productList");

// Display products dynamically
products.forEach(product => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>${product.name}</h3>
    <p>Price: $${product.price}</p>
    <button onclick="addToCart(${product.id})">Buy Now</button>
  `;
  productList.appendChild(div);
});

// Cart array to store selected products
let cart = [];

// Function to add product to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  alert(`${product.name} added to cart`);
}

// Optional: function to view cart contents
function viewCart() {
  let total = 0;
  cart.forEach(item => total += item.price);
  alert(`You have ${cart.length} items. Total: $${total}`);
}
