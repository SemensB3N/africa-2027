const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Открыть меню");
  mobileNav.hidden = true;
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Открыть меню" : "Закрыть меню");
  mobileNav.hidden = isOpen;
  document.body.classList.toggle("menu-open", !isOpen);
});

mobileNav.addEventListener("click", event => {
  if (event.target.closest("a")) closeMenu();
});

window.addEventListener("keydown", event => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuButton.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 800 && menuButton.getAttribute("aria-expanded") === "true") {
    closeMenu();
  }
});
