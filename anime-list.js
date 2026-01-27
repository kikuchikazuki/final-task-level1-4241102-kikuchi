fetch("anime-data.json")
    .then(res => res.json())
    .then(animes => {
        const container = document.getElementById("contentDisplay");
        container.innerHTML = "";

        animes.forEach(anime => {
            container.insertAdjacentHTML("beforeend", createAnimeCard(anime));
        });
    });

function createAnimeCard(anime) {
    return `
  <div class="col-md-6 col-lg-4">
    <div class="card anime-card">
      <img src="${anime.image}" class="card-img-top" alt="${anime.title}">
      <div class="card-body">
        <div class="d-flex gap-2 mb-2">
          ${anime.genre.map(g => `<span class="badge bg-primary">${g}</span>`).join("")}
          <span class="badge bg-success">${anime.status}</span>
        </div>
        <h5 class="card-title fw-bold">${anime.title}</h5>
        <p class="card-text text-muted small text-clamp-3">
          ${anime.description}
        </p>
        ${createStars(anime.rating)}
        <small class="text-muted">${anime.reviews.toLocaleString()}件</small>
      </div>
    </div>
  </div>`;
}


function createStars(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars += `<i class="bi bi-star-fill"></i>`;
        } else if (rating >= i - 0.5) {
            stars += `<i class="bi bi-star-half"></i>`;
        } else {
            stars += `<i class="bi bi-star"></i>`;
        }
    }
    return `
    <div class="rating-stars small">
      ${stars}
      <span class="ms-1">${rating}</span>
    </div>`;
}
