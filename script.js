const toggle = document.getElementById("toggle");
const menuLinks = document.getElementById("menu-links")
toggle.onclick = () => {
    if (menuLinks.style.display === "block"){
        menuLinks.style.display = "none";
        console.log("stäng meny")
    } else {
        menuLinks.style.display = 'block';
        console.log("öppna meny")
    }
}