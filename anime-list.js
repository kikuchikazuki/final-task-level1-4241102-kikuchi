// anime-data.json を読み込む
fetch("anime-data.json")

    // 読み込みが成功したら次へ進む
    .then(function (response) {
        // JSON形式としてデータを取り出す
        return response.json();
    })

    // JSONデータが使える状態になったらここに来る
    .then(function (animes) {

        // 作品カードを表示する場所（div#contentDisplay）を取得
        const container = document.getElementById("contentDisplay");

        // もともと書いてあったHTMLを一旦ぜんぶ消す
        container.innerHTML = "";

        // 作品データを1件ずつ取り出す
        animes.forEach(function (anime) {

            // HTMLを追加する（カード1枚分）
            container.insertAdjacentHTML(
                "beforeend",              // 末尾に追加
                createAnimeCard(anime)    // 下で作る関数を呼ぶ
            );
        });
    });

// アニメ1作品分のHTMLを作る関数
function createAnimeCard(anime) {

    // HTMLを文字列として返す
    return `
    <div class="col-md-6 col-lg-4">
      <div class="card anime-card">

        <!-- 作品画像 -->
        <img src="${anime.image}" class="card-img-top" alt="${anime.title}">

        <div class="card-body">

          <!-- ジャンル・放送状況 -->
          <div class="d-flex gap-2 mb-2">
            ${anime.genre.map(function (g) {
                return `<span class="badge bg-primary">${g}</span>`;
            }).join("")}
            <span class="badge bg-success">${anime.status}</span>
          </div>

          <!-- タイトル -->
          <h5 class="card-title fw-bold">${anime.title}</h5>

          <!-- あらすじ -->
          <p class="card-text text-muted small text-clamp-3">
            ${anime.description}
          </p>

          <!-- 星評価 -->
          ${createStars(anime.rating)}

          <!-- レビュー数 -->
          <small class="text-muted">
            ${anime.reviews.toLocaleString()}件
          </small>

        </div>
      </div>
    </div>
  `;
}

// 星評価をHTMLで作る関数
function createStars(rating) {

    // 星のHTMLを入れる箱
    let stars = "";

    // 星は最大5個
    for (let i = 1; i <= 5; i++) {

        // 評価がその数字以上なら「満点の星」
        if (rating >= i) {
            stars += `<i class="bi bi-star-fill"></i>`;

        // 0.5以上なら「半分の星」
        } else if (rating >= i - 0.5) {
            stars += `<i class="bi bi-star-half"></i>`;

        // それ以外は「空の星」
        } else {
            stars += `<i class="bi bi-star"></i>`;
        }
    }

    // 星＋数値をまとめて返す
    return `
    <div class="rating-stars small">
      ${stars}
      <span class="ms-1">${rating}</span>
    </div>
  `;
}
