document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById('lightbox');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxBody = document.getElementById('lightbox-body');
  const lightboxMeta = document.getElementById('lightbox-meta');
  const timeImage = document.getElementById('time-image');
  const now = new Date();
  const hour = now.getHours();
  const body = document.body;

  // 時間帯ごとの背景とテーマ切り替え
  if (hour >= 6 && hour < 9) {
    body.setAttribute('data-theme', 'morning');
    body.style.setProperty('--bg-gradient', 'linear-gradient(to bottom, #f8cdda, #e0c3fc)');
    timeImage.src = '/images/g001.png';
  } else if (hour >= 9 && hour < 17) {
    body.setAttribute('data-theme', 'day');
    body.style.setProperty('--bg-gradient', '#fff8e1');
    timeImage.src = '/images/g001.png';
  } else if (hour >= 17 && hour < 19) {
    body.setAttribute('data-theme', 'evening');
    body.style.setProperty('--bg-gradient', 'linear-gradient(to bottom, #ff9966, #003366)');
    timeImage.src = '/images/g001.png';
  } else {
    body.setAttribute('data-theme', 'night');
    body.style.setProperty('--bg-gradient', 'linear-gradient(to bottom, #001f3f, #000000)');
    timeImage.src = '/images/g002.png';
  }

  // Lightboxのクリックイベント設定
  document.querySelectorAll('.thumbnail').forEach(div => {
    div.addEventListener('click', () => {
      const title = div.dataset.title || "";
      const date = div.dataset.date || "";
      const tags = div.dataset.tags || "";
      const content = div.querySelector('.hidden-content')?.innerHTML || "<p>本文がありません</p>";

      if (lightboxTitle) lightboxTitle.innerText = title;
      if (lightboxMeta) lightboxMeta.innerText = `${date}　${tags}`;
      if (lightboxBody) lightboxBody.innerHTML = content;

      lightbox.classList.add('show');
    });
  });

  // Lightboxをクリックで閉じる
  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hour = new Date().getHours();
  let bg = "images/g001.png"; // デフォルトは昼用

  if (hour >= 18 || hour < 6) {
    // 夜（18時〜翌朝6時未満）
    bg = "images/g002.png";
  }

  document.body.style.backgroundImage = `url('/${bg}')`;
});

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const content = lightbox.querySelector(".lightbox-content");

  // サムネイル画像クリックで発火
  document.querySelectorAll(".thumbnail img").forEach(img => {
    img.addEventListener("click", e => {
      e.stopPropagation(); // ← ネストクリック防止

      // Lightbox に画像だけ表示
      content.innerHTML = `<img src="${img.src}" alt="${img.alt}" style="max-width:90vw; max-height:90vh;">`;

      lightbox.classList.add("show");
    });
  });

  // 背景クリックで閉じる
  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");
    content.innerHTML = "";
  });
});
