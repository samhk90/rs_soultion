document.querySelector('#contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
    } else {
        alert("Thank you for reaching out. We'll get back to you soon!");
        this.reset();
    }
});
// Add a 'scrolled' class to navbar when the user scrolls
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

