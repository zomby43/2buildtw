    document.addEventListener("DOMContentLoaded", function () {
        const elements = document.querySelectorAll(".fade-in");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("opacity-100", "translate-y-0");
                    entry.target.classList.remove("opacity-0", "translate-y-10");
                    observer.unobserve(entry.target);
                }
            });
        });

        elements.forEach((el) => {
            observer.observe(el);
        });
    });

