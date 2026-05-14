//Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Simple Form Submission Alert
//const contactForm = document.querySelector(".contact-form");
//if (contactForm) {
//contactForm.addEventListener("submit", function (e) {
// e.preventDefault();
//alert(
// "Thank you for your message! This is a live form, I have received your message, I will respond within 24-48 hours of receipt",
//);
//contactForm.reset();
//});
//}

// Scroll Reveal Animation
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".project-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "all 0.6s ease-out";
  observer.observe(card);
});
