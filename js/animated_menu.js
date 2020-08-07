



const toggler = document.querySelector(".toggler");
const navLinks = document.querySelector(".nav_links");
const links = document.querySelectorAll(".nav_links li");

toggler.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(li)

});