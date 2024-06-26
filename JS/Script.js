document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Add a scroll-to-top button
  const scrollToTopButton = document.createElement("button");
  scrollToTopButton.innerHTML = "↑";
  scrollToTopButton.setAttribute("id", "scroll-to-top");
  document.body.appendChild(scrollToTopButton);

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Show/hide scroll-to-top button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  // Add a simple dark mode toggle
  const darkModeToggle = document.createElement("button");
  darkModeToggle.innerHTML = "🌓";
  darkModeToggle.setAttribute("id", "dark-mode-toggle");
  document.body.appendChild(darkModeToggle);

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
