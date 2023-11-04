const navbar = document.getElementById("navbar");

let prevScrollPos = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos && window.scrollY > 50) {
        navbar.classList.add("nav--hidden");
    } else {
        navbar.classList.remove("nav--hidden");
    }

    prevScrollPos = currentScrollPos;
});