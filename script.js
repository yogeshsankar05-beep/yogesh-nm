// Show an alert when the website loads
window.onload = function () {
  console.log("Welcome to Yogesh's Portfolio!");
};

// Smooth scroll effect for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Form submission alert (demo only, not sending email yet)
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting me, Yogesh will reply soon!");
  form.reset();
});
