const cards = document.querySelectorAll(".sand-card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    card.textContent = "Desert Wonder " + (index + 1);
  });
});
