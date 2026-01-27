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

// ここから下は自分が変更した☟ 
document.addEventListener("DOMContentLoaded", () => {
  const genreButtons = document.querySelectorAll(".genre-btn");
  const cards = document.querySelectorAll(".anime-card");

  genreButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const genre = btn.dataset.genre;

      cards.forEach(card => {
        if (card.dataset.genre === genre) {
          card.classList.remove("d-none");
        } else {
          card.classList.add("d-none");
        }
      });
    });
  });
});


