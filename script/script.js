const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

btn.addEventListener("click", () => {
  menu.classList.toggle("translate-x-full");
  menu.classList.toggle("translate-x-0");
  const isOpen = !menu.classList.contains("translate-x-full");
  btn.innerHTML = isOpen ? "✕" : "☰";
});
