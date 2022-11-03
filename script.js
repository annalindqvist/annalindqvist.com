const toggle = document.getElementById("toggle");
const toggleClose = document.getElementById("toggle-close");
const menuLinks = document.getElementById("menu-links")

toggleMenu = () => {
    if (menuLinks.style.display === "flex"){
        menuLinks.style.display = "none";
        toggle.style.display = "block";
        toggleClose.style.display = "none";
    } else {
        menuLinks.style.display = "flex";
        toggleClose.style.display = "block";
        toggle.style.display = "none";
    }
}