const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

navbar.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
       link.classList.toggle("fade");
    });
});