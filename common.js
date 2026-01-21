"use strict";

window.addEventListener("scroll", function () {
    const btn = document.getElementById("backToTopBtn");
    if (window.scrollY > 150) {
        btn.style.display = "flex";
        btn.style.opacity = "1";
    } else {
        btn.style.opacity = "0";
        setTimeout(() => {
            if (window.scrollY < 150) btn.style.display = "none";
        }, 200);
    }
});

document.getElementById("backToTopBtn").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

