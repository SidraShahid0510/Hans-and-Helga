const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navLinks = document.querySelector(".nav-links");

closeMenu.style.display = "none";

openMenu.addEventListener("click", () => {
  navLinks.classList.add("active");
  closeMenu.style.display = "block";
  openMenu.style.display = "none";
});

closeMenu.addEventListener("click", () => {
  navLinks.classList.remove("active");
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
});
