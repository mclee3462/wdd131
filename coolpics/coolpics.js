document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const navMenu = document.querySelector("nav ul");

    menuButton.addEventListener("click", () => {
        const isVisible = navMenu.style.display === "block";
        navMenu.style.display = isVisible ? "none" : "block";
    });
});
