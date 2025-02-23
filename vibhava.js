const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navMenu = document.querySelector(".nav-menu");

menuOpenButton.addEventListener("click", () => {
    navMenu.classList.add("show");
});

menuCloseButton.addEventListener("click", () => {
    navMenu.classList.remove("show");
});
