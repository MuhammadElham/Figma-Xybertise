let menuIcon = document.querySelector(".menu-icon");
let menuElements = document.querySelector(".menu_elements");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("move");
  menuElements.classList.toggle("active");
});
