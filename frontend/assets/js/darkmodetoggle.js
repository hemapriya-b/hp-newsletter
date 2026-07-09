(() => {
  "use strict";

  const themeToggle = document.getElementById("themeToggle");

  // Load saved theme (default = light)
  let currentTheme = localStorage.getItem("theme") || "light";

  // Apply theme
  document.documentElement.setAttribute("data-bs-theme", currentTheme);

  // Update button icon
  function updateIcon() {
    if (currentTheme === "light") {
      themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
    } else {
      themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    }
  }

  updateIcon();

  // Toggle theme on button click
  themeToggle.addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-bs-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);

    updateIcon();
  });
})();
