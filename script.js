// Tombol filter
const filterBtns = document.querySelectorAll(".btn-filter");
const cards = document.querySelectorAll(".card");
const searchInput = document.getElementById("search");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.filter;

    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    cards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Search produk
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  cards.forEach((card) => {
    const name = card.dataset.name.toLowerCase();
    if (name.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
