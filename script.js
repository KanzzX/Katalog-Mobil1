// Filter kategori
const filterBtns = document.querySelectorAll(".btn-filter");
const cards = document.querySelectorAll(".card");
const search = document.getElementById("search");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    applyFilters();
  });
});

// Pencarian + filter
search.addEventListener("input", applyFilters);

function applyFilters(){
  const active = document.querySelector(".btn-filter.active").dataset.filter;
  const keyword = (search.value || "").toLowerCase().trim();

  cards.forEach(card => {
    const byCat = (active === "all") || (card.dataset.category === active);
    const byKey = !keyword || card.dataset.name.toLowerCase().includes(keyword);
    card.style.display = (byCat && byKey) ? "block" : "none";
  });
}
