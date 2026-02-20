const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  const isOpen = !mobileMenu.classList.contains("hidden");
  menuBtn.innerHTML = isOpen ? "✕" : "☰";
});

// এলিমেন্টগুলো সিলেক্ট করা
// const menuBtn = document.getElementById("menuBtn");
// const mobileMenu = document.getElementById("mobileMenu");

// // ক্লিকের মাধ্যমে মেনু টগল করা
// menuBtn.addEventListener("click", () => {
//   // মেনু দেখানো বা লুকানো
//   mobileMenu.classList.toggle("hidden");

//   // চেক করা মেনু এখন খোলা কি না
//   const isOpen = !mobileMenu.classList.contains("hidden");

//   // বাটন আইকন পরিবর্তন (ঐচ্ছিক কিন্তু ইউজার ফ্রেন্ডলি)
//   menuBtn.innerHTML = isOpen ? "✕" : "☰";

//   // এসইও এবং এক্সেসিবিলিটির জন্য এট্রিবিউট আপডেট
//   menuBtn.setAttribute("aria-expanded", isOpen);
// });

// // মেনুর বাইরের যেকোনো জায়গায় ক্লিক করলে মেনু বন্ধ হওয়া (Extra UX)
// window.addEventListener("click", (e) => {
//   if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
//     mobileMenu.classList.add("hidden");
//     menuBtn.innerHTML = "☰";
//     menuBtn.setAttribute("aria-expanded", "false");
//   }
// });
