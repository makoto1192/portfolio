const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");

// ×ボタン用spanを作っておく
let closeBtn = document.createElement("span");
closeBtn.textContent = "×";
closeBtn.style.position = "fixed";
closeBtn.style.top = "20px";
closeBtn.style.right = "20px";
closeBtn.style.fontSize = "2rem";
closeBtn.style.color = "#fff";
closeBtn.style.zIndex = "12";
closeBtn.style.cursor = "pointer";
closeBtn.style.display = "none"; // 初期は非表示
document.body.appendChild(closeBtn);

// ハンバーガークリックでメニュー開閉
toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  overlay.classList.toggle("active");
  toggle.classList.toggle("open");
  closeBtn.style.display = nav.classList.contains("open") ? "block" : "none";
});

// 背景タップでメニュー閉じる
overlay.addEventListener("click", () => {
  nav.classList.remove("open");
  overlay.classList.remove("active");
  toggle.classList.remove("open");
  closeBtn.style.display = "none";
});

// ×ボタンクリックで閉じる
closeBtn.addEventListener("click", () => {
  nav.classList.remove("open");
  overlay.classList.remove("active");
  toggle.classList.remove("open");
  closeBtn.style.display = "none";
});

// ナビリンクをクリックしたら閉じる（スマホ用）
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    overlay.classList.remove("active");
    toggle.classList.remove("open");
    closeBtn.style.display = "none";
  });
});

// ロゴアニメーション
window.addEventListener("load", () => {
  const logo = document.querySelector(".logo img");
  logo.style.animation = "dropBounce 2s ease-out";
});
