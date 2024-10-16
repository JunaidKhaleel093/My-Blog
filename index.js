function scrollToCard(cardId) {
  const card = document.getElementById(cardId);
  if (card) {
    card.scrollIntoView({ behavior: "smooth" });
  }
}

function showCard(category) {
  const cards = document.querySelectorAll(".col-md-4");
  cards.forEach((card) => {
    card.style.display = "none";
  });

  const selectedCards = document.querySelectorAll("." + category);
  selectedCards.forEach((card) => {
    card.style.display = "block";
  });
}
document
  .getElementById("commentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    const newComment = document.createElement("div");
    newComment.classList.add("comment");
    newComment.innerHTML = `<p><strong>${name}:</strong> ${comment}</p>`;

    document.getElementById("commentsSection").appendChild(newComment);

    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
  });
