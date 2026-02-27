// Menu Icon Toggle

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const backBox = document.getElementById("backBox");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
  backBox.classList.toggle("hidden");
});

backBox.addEventListener("click", () => {
  menu.classList.remove("open");
  backBox.classList.add("hidden");
});

// API Fetch

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  showTrendingProducts(data);
}
getProducts();

// Trending Products

function showTrendingProducts(products) {
  const firstThree = products.slice(0, 3);

  const trendingProductContainer = document.getElementById(
    "trendingProductContainer",
  );
  trendingProductContainer.innerHTML = "";

  firstThree.forEach((products) => {
    const formatted = products.category
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ");
    trendingProductContainer.innerHTML += `
     <div class="shadow rounded-lg">
              <img
                class="bg-[#e5e7eb] px-8 py-4 rounded-t-lg"
                src="${products.image}"
                alt=""
              />
              <div class="px-4">
                <div class="flex justify-between items-center my-4">
                  <span
                    class="py-1 px-2 bg-[#eef2ff] rounded-full text-[var(--primary)] text-sm font-semibold"
                    >${formatted}</span
                  >
                  <span class="text-sm text-[var(--text2)]">
                    <i class="fa-solid fa-star text-yellow-400"></i>
                    ${products.rating.rate} (${products.rating.count})
                  </span>
                </div>
                <h2 class="font-semibold mb-2">
                  ${products.title}
                </h2>
                <span class="font-bold">$${products.price}</span>
                <div class="flex justify-between items-center py-4">
                  <button class="btn w-[48%] bg-white shadow rounded-lg">
                    <i class="fa-regular fa-eye"></i>
                    Details
                  </button>
                  <button
                    class="btn w-[48%] bg-[var(--primary)] text-white shadow rounded-lg"
                  >
                    <i class="fa-solid fa-cart-shopping"></i>
                    Add
                  </button>
                </div>
              </div>
            </div>
    `;
  });
}
