const topStoriesContainer = document.getElementById("top-stories");

const topStories = articles.filter((article) => article.featured);

//  HERO CARDS 

function createHeroCard(article) {
  return `
    <div class="col-lg-4 col-md-6">
      <div class="card hero-card h-100 shadow">

        <img src="${article.image}" class="card-img-top" alt="${article.title}">

        <div class="card-body">

          <span class="badge bg-danger">
            ${article.category}
          </span>

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

topStories.forEach((article) => {
  topStoriesContainer.innerHTML += createHeroCard(article);
});

//  GET CATEGORY NEWS 

function getCategoryNews(category, count) {
  return articles
    .filter(
      (article) => article.category === category && article.featured === false,
    )
    .slice(0, count);
}

//  CATEGORY CARDS 

function createCategoryCard(article) {
  return `
    <div class="col-lg-4 col-md-6">
      <div class="card category-card h-100">

        <img src="${article.image}" class="card-img-top" alt="${article.title}">

        <div class="card-body">

          <span class="badge bg-primary">
            ${article.category}
          </span>

          <h6 class="mt-2">
            ${article.title}
          </h6>

          <small class="text-muted">
            ${article.date} • ${article.readTime}
          </small>

        </div>

      </div>
    </div>
  `;
}

//  RENDER FUNCTION 

function renderCategory(category, containerId, count) {
  const container = document.getElementById(containerId);

  if (!container) return;

  const news = getCategoryNews(category, count);

  news.forEach((article) => {
    container.innerHTML += createCategoryCard(article);
  });
}

//  DISPLAY ALL CATEGORIES 

renderCategory("global", "global-news", 3);
renderCategory("national", "national-news", 3);
renderCategory("sports", "sports-news", 3);
renderCategory("business", "business-news", 3);
renderCategory("politics", "politics-news", 3);
renderCategory("drama", "drama-news", 3);
