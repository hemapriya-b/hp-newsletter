export function createHeroCard(article) {
  return `
    <div class="col-lg-4 col-md-6">
      <div class="card hero-card h-100 shadow article-card" data-id="${article.id}">
        <img src="${article.image}" class="card-img-top" alt="${article.title}">
        <div class="card-body">
          <span class="badge bg-danger">${article.category}</span>
          <h5 class="mt-3">${article.title}</h5>
          <p>${article.excerpt}</p>
          <small class="text-muted">
            ${article.author}<br>
            ${article.date} • ${article.readTime}
          </small>
        </div>
      </div>
    </div>
  `;
}

export function createCategoryCard(article) {
  return `
    <div class="col-lg-4 col-md-6">
      <div class="card category-card h-100 article-card" data-id="${article.id}">
        <img src="${article.image}" class="card-img-top" alt="${article.title}">
        <div class="card-body">
          <span class="badge bg-primary">${article.category}</span>
          <h6 class="mt-2">${article.title}</h6>
          <small class="text-muted">
            ${article.date} • ${article.readTime}
          </small>
        </div>
      </div>
    </div>
  `;
}

export function renderTopStories(container, indicators, articles) {
  if (!container || !indicators) return;

  container.innerHTML = articles
    .map(
      (article, index) => `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
          <img
            src="${article.image}"
            class="d-block w-100"
            alt="${article.title}"
            style="height: 1000px; object-fit: cover;"
          />
          <div class="carousel-caption text-start bg-dark bg-opacity-50 rounded p-4">
            <span class="badge bg-danger mb-2">${article.category.toUpperCase()}</span>
            <h2 class="fw-bold">${article.title}</h2>
            <p>${article.excerpt}</p>
            <button class="btn btn-primary article-card" data-id="${article.id}">
              Read More
            </button>
          </div>
        </div>
      `,
    )
    .join("");

  indicators.innerHTML = articles
    .map(
      (_, index) => `
        <button
          type="button"
          data-bs-target="#topStoriesCarousel"
          data-bs-slide-to="${index}"
          class="${index === 0 ? "active" : ""}"
          ${index === 0 ? 'aria-current="true"' : ""}
          aria-label="Slide ${index + 1}">
        </button>
      `,
    )
    .join("");
}

export function renderCategory(container, articles, card = createCategoryCard) {
  if (!container) return;

  container.innerHTML = articles.length
    ? articles.map(card).join("")
    : `<div class="col-12 text-center"><h3>No articles found.</h3></div>`;
}

export function displayResults(container, section, articles) {
  if (!container || !section) return;

  section.style.display = "block";
  renderCategory(container, articles, createHeroCard);
}

export function renderAdminArticles(container, articles) {
  if (!container) return;

  container.innerHTML = articles
    .map(
      (article) => `
        <tr>
          <td>${article.id}</td>
          <td>${article.title}</td>
          <td>${article.category}</td>
          <td>${article.author}</td>
          <td>
            <button class="btn btn-sm btn-warning edit-btn" data-id="${article.firestoreId}">
              EDIT
            </button>
            <button class="btn btn-sm btn-danger delete-btn" data-id="${article.firestoreId}">
              DELETE
            </button>
          </td>
        </tr>
      `,
    )
    .join("");
}
