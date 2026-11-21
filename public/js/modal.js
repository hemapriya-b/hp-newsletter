export function openModal(elements, article) {
  elements.image.src = article.image;
  elements.category.innerText = article.category;
  elements.title.innerText = article.title;
  elements.excerpt.innerText = article.excerpt;
  elements.author.innerText = article.author;
  elements.date.innerText = article.date;
  elements.readTime.innerText = article.readTime;

  const articleText = article.content || article.body;
  elements.content.innerHTML = Array.isArray(articleText)
    ? articleText.map((paragraph) => `<p>${paragraph}</p>`).join("")
    : `<p>${articleText || "No full content available"}</p>`;

  elements.fullArticle.classList.remove("open");
  elements.readMoreButton.innerText = "Continue Reading ↓";
  elements.modal.style.display = "flex";
}

export function closeModal(elements) {
  elements.modal.style.display = "none";
}

export function initializeModal(elements, findArticle) {
  document.addEventListener("click", (event) => {
    const card = event.target.closest(".article-card");
    if (!card) return;

    const article = findArticle(card.dataset.id);
    if (article) openModal(elements, article);
  });

  elements.closeButton?.addEventListener("click", () => closeModal(elements));

  elements.modal?.addEventListener("click", (event) => {
    if (event.target === elements.modal) closeModal(elements);
  });

  elements.readMoreButton?.addEventListener("click", () => {
    elements.fullArticle.classList.toggle("open");
    elements.readMoreButton.innerText = elements.fullArticle.classList.contains("open")
      ? "Show Less ↑"
      : "Continue Reading ↓";
  });
}
