function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("show");
}

/* Scroll Animation */
const elements = document.querySelectorAll(".scroll-animate");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.2 }
);

elements.forEach(el => observer.observe(el));
/* Mouse Animation */
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});
document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
    });
    el.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
    });
});



