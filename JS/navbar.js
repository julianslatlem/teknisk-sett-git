const navbar = document.getElementById("navbar");

let prevScrollPos = window.scrollY;

/* This checks if the user scrolls either up or down and styles the nav-bar accordingly, effectively hiding it when the user scrolls down and showing it when the user scrolls up. */
window.addEventListener("scroll", () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos && window.scrollY > 50) {
        navbar.classList.add("nav--hidden");
    } else {
        navbar.classList.remove("nav--hidden");
    }

    prevScrollPos = currentScrollPos;
});