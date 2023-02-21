const toggle = document.getElementById("toggle");
const toggleClose = document.getElementById("toggle-close");
const menuLinks = document.getElementById("menu-links")
const allPages = document.getElementById("all-pages")
let offset = 48;
const windowSize = window.matchMedia("(max-width: 767px)")

toggleMenu = () => {
    if (menuLinks.style.display === "flex"){
        menuLinks.style.display = "none";
        toggle.style.display = "block";
        toggleClose.style.display = "none";
        allPages.style.display ="block";
        
    } else {
        menuLinks.style.display = "flex";
        toggleClose.style.display = "block";
        toggle.style.display = "none";
        allPages.style.display = "none";
     
    }
}

scrollToAboutMe = () => {
    const aboutMe = document.getElementById("about-me");

    if (windowSize.matches) {
        toggleMenu();
    }
    window.scroll({ top: (aboutMe.offsetTop - offset), left: 0, behavior: 'smooth' });
}

scrollToMyWork = () => {
    const workExperience = document.getElementById("my-work");
    if (windowSize.matches) {
        toggleMenu();
    }
    window.scroll({ top: (workExperience.offsetTop - offset), left: 0, behavior: 'smooth' });
}
scrollToContact = () => {
    const contact = document.getElementById("contact-me");
    if (windowSize.matches) {
        toggleMenu();
    }
    window.scroll({ top: (contact.offsetTop - offset), left: 0, behavior: 'smooth' });
}