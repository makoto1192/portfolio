const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");

// ×ボタン用spanを作っておく
let menuCloseBtn = document.createElement("span");
menuCloseBtn.textContent = "×";
menuCloseBtn.style.position = "fixed";
menuCloseBtn.style.top = "20px";
menuCloseBtn.style.right = "20px";
menuCloseBtn.style.fontSize = "2rem";
menuCloseBtn.style.color = "#fff";
menuCloseBtn.style.zIndex = "12";
menuCloseBtn.style.cursor = "pointer";
menuCloseBtn.style.display = "none"; // 初期は非表示
document.body.appendChild(menuCloseBtn);

// ハンバーガークリックでメニュー開閉
toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  overlay.classList.toggle("active");
  toggle.classList.toggle("open");
  menuCloseBtn.style.display = nav.classList.contains("open")
    ? "block"
    : "none";
});

// 背景タップでメニュー閉じる
overlay.addEventListener("click", () => {
  nav.classList.remove("open");
  overlay.classList.remove("active");
  toggle.classList.remove("open");
  menuCloseBtn.style.display = "none";
});

// ×ボタンクリックで閉じる
menuCloseBtn.addEventListener("click", () => {
  nav.classList.remove("open");
  overlay.classList.remove("active");
  toggle.classList.remove("open");
  menuCloseBtn.style.display = "none";
});

// ナビリンクをクリックしたら閉じる（スマホ用）
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    overlay.classList.remove("active");
    toggle.classList.remove("open");
    menuCloseBtn.style.display = "none";
  });
});

// ロゴアニメーション
window.addEventListener("load", () => {
  const logo = document.querySelector(".logo img");
  logo.style.animation = "dropBounce 2s ease-out";
});

// ==== Lightbox モーダル ====
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const modalCloseBtn = document.querySelector(".close");

// 対象画像（バナーとロゴの両方）、ロゴカードもクリック可能に
const images = document.querySelectorAll(
  ".logo-list img, .banner-list img, .logo-card"
);

images.forEach((img) => {
  img.style.cursor = "pointer"; // カーソルをポインターに
  img.addEventListener("click", (e) => {
    let targetImg = img.tagName === "IMG" ? img : img.querySelector("img");
    if (!targetImg) return;

    // モーダル表示
    modal.style.display = "flex";
    modalImg.src = targetImg.src;
    captionText.innerText = targetImg.alt || "";

    // クリック前のサイズを取得
    const rect = targetImg.getBoundingClientRect();
    modalImg.style.width = rect.width + "px";
    modalImg.style.height = rect.height + "px";

    // 倍率で拡大
    const scale = 2; // 2倍に
    modalImg.style.width = rect.width * scale + "px";
    modalImg.style.height = rect.height * scale + "px";

    // 背景色切り替え
    modal.classList.remove("logo-modal");
    if (targetImg.closest(".logo-list")) {
      modal.classList.add("logo-modal");
    }
  });
});

// 閉じるボタン
modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// 背景クリックで閉じる
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
