// Handle active link switching in sidebar
const sidebarLinks = document.querySelectorAll(".sidebar nav a");
sidebarLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove active class from all
    sidebarLinks.forEach(l => l.classList.remove("active"));

    // Add active to clicked link
    link.classList.add("active");

    // Update main content dynamically
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML = getSectionContent(link.textContent.trim());
  });
});

// Function to return section content dynamically
function getSectionContent(sectionName) {
  switch (sectionName) {
    case "👤 Profile":
      return `
        <h2>My Profile</h2>
        <p>Here you can update your personal details and manage your account.</p>
        <form class="profile-form">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name">

          <label>Email</label>
          <input type="email" placeholder="Enter your email">

          <button type="submit">Update Profile</button>
        </form>
      `;

    case "🛒 My Orders":
      return `
        <h2>My Orders</h2>
        <p>Here are your recent purchases:</p>
        <ul class="orders-list">
          <li>Order #1234 - Delivered ✅</li>
          <li>Order #5678 - Processing ⏳</li>
          <li>Order #9012 - Shipped 🚚</li>
        </ul>
      `;

    case "⚙️ Settings":
      return `
        <h2>Settings</h2>
        <p>Manage your preferences:</p>
        <div class="settings">
          <label>
            <input type="checkbox" checked>
            Enable Notifications
          </label><br>
          <label>
            <input type="checkbox">
            Dark Mode
          </label>
        </div>
      `;

    case "❤️ Wishlist":
      return `
        <h2>Wishlist</h2>
        <p>Items you saved for later:</p>
        <ul>
          <li>Product A ❤️</li>
          <li>Product B ❤️</li>
        </ul>
      `;

    case "❓ Help":
      return `
        <h2>Help & Support</h2>
        <p>Visit our <a href="help.html">Help Center</a> for FAQs and contact information.</p>
      `;

    default:
      return `
        <h2>Dashboard</h2>
        <p>Welcome back! Choose an option from the sidebar to get started.</p>
      `;
  }
}
