// main.js
// Shared rendering and interaction logic for the HP Newsletter website.

(() => {
  "use strict";

  const CATEGORIES = [
    "global",
    "national",
    "sports",
    "business",
    "politics",
    "drama",
  ];

  const FALLBACK_IMAGES = {
    global: "assets/images/img1.jpg",
    national: "assets/images/img11.jpg",
    sports: "assets/images/img21.jpg",
    business: "assets/images/img31.jpg",
    politics: "assets/images/img41.jpg",
    drama: "assets/images/logo.png",
  };

  const SELECTORS = {
    topStories: ["#top-stories", "#topStories", "#topStory"],
    latestNews: ["#latest-news", "#latestNews"],
    categoryPreviews: ["#category-previews", "#categoryPreviews"],
    categoryTitle: ["#category-title", "#categoryTitle"],
    categoryArticles: [
      "#category-articles",
      "#categoryArticles",
      "#articles-grid",
    ],
    article: ["#article-detail", "#articleDetail", "#full-article"],
    related: ["#related-articles", "#relatedArticles"],
    searchResults: ["#search-results", "#searchResults"],
    searchTitle: ["#search-title", "#searchTitle"],
  };

  let newsArticles = [];

  /**
   * Returns the first matching element from a list of selectors.
   */
  function findElement(selectors, root = document) {
    for (const selector of selectors) {
      const element = root.querySelector(selector);
      if (element) return element;
    }
    return null;
  }

  /**
   * Escapes data before inserting it into generated HTML.
   */
  function escapeHTML(value = "") {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  /**
   * Converts category names to display labels.
   */
  function formatCategory(category = "") {
    return category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  /**
   * Formats YYYY-MM-DD without timezone-related date shifts.
   */
  function formatDate(dateString) {
    if (!dateString) return "";

    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);

    if (Number.isNaN(date.getTime())) return dateString;

    return new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  }

  /**
   * Returns a copy sorted with the newest stories first.
   */
  function newestFirst(items) {
    return [...items].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }

  function articleURL(article) {
    return `article.html?id=${encodeURIComponent(article.id)}`;
  }

  function categoryURL(category) {
    return `category.html?category=${encodeURIComponent(category)}`;
  }

  function imageErrorAttribute(category) {
    const fallback = FALLBACK_IMAGES[category] || FALLBACK_IMAGES.global;
    return `onerror="this.onerror=null;this.src='${escapeHTML(fallback)}'"`;
  }

  /**
   * Creates a reusable standard article card.
   */
  function createArticleCard(article, options = {}) {
    const { compact = false } = options;

    return `
      <article class="card h-100 shadow-sm news-card">
        <a href="${articleURL(article)}" class="text-decoration-none">
          <img
            src="${escapeHTML(article.image)}"
            class="card-img-top ${compact ? "news-card__image--compact" : "news-card__image"}"
            alt="${escapeHTML(article.title)}"
            loading="lazy"
            ${imageErrorAttribute(article.category)}
          >
        </a>
        <div class="card-body d-flex flex-column">
          <a
            href="${categoryURL(article.category)}"
            class="text-uppercase small fw-semibold text-decoration-none mb-2"
          >
            ${escapeHTML(formatCategory(article.category))}
          </a>
          <h3 class="${compact ? "h6" : "h5"} card-title">
            <a href="${articleURL(article)}" class="text-body text-decoration-none">
              ${escapeHTML(article.title)}
            </a>
          </h3>
          ${
            compact
              ? ""
              : `<p class="card-text text-body-secondary">${escapeHTML(article.excerpt)}</p>`
          }
          <div class="small text-body-secondary mt-auto">
            <span>${escapeHTML(formatDate(article.date))}</span>
            <span aria-hidden="true"> · </span>
            <span>${escapeHTML(article.readTime)}</span>
          </div>
        </div>
      </article>
    `;
  }

  /**
   * Creates the large lead-story card used in Top Stories.
   */
  function createFeaturedCard(article) {
    return `
      <article class="card border-0 overflow-hidden shadow top-story-card">
        <div class="row g-0">
          <div class="col-lg-7">
            <img
              src="${escapeHTML(article.image)}"
              class="w-100 h-100 top-story-card__image"
              alt="${escapeHTML(article.title)}"
              ${imageErrorAttribute(article.category)}
            >
          </div>
          <div class="col-lg-5">
            <div class="card-body h-100 d-flex flex-column justify-content-center p-4 p-lg-5">
              <a
                href="${categoryURL(article.category)}"
                class="text-uppercase small fw-bold text-decoration-none mb-3"
              >
                ${escapeHTML(formatCategory(article.category))}
              </a>
              <h1 class="display-6 fw-bold">
                <a href="${articleURL(article)}" class="text-body text-decoration-none">
                  ${escapeHTML(article.title)}
                </a>
              </h1>
              <p class="lead text-body-secondary">${escapeHTML(article.excerpt)}</p>
              <p class="small text-body-secondary mb-4">
                By ${escapeHTML(article.author)} ·
                ${escapeHTML(formatDate(article.date))} ·
                ${escapeHTML(article.readTime)}
              </p>
              <a href="${articleURL(article)}" class="btn btn-primary align-self-start">
                Read full story
              </a>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function gridHTML(items, options = {}) {
    if (!items.length) return createEmptyState("No articles found.");

    return `
      <div class="row g-4">
        ${items
          .map(
            (article) => `
              <div class="${options.columnClass || "col-md-6 col-lg-4"}">
                ${createArticleCard(article, options)}
              </div>
            `,
          )
          .join("")}
      </div>
    `;
  }

  function createEmptyState(message) {
    return `
      <div class="alert alert-light border text-center py-5" role="status">
        <h2 class="h5 mb-2">Nothing to show</h2>
        <p class="text-body-secondary mb-0">${escapeHTML(message)}</p>
      </div>
    `;
  }

  function createErrorState(title, message) {
    return `
      <div class="alert alert-danger py-5 text-center" role="alert">
        <h1 class="h3">${escapeHTML(title)}</h1>
        <p>${escapeHTML(message)}</p>
        <a href="index.html" class="btn btn-outline-danger">Return to home</a>
      </div>
    `;
  }

  /**
   * Renders the featured lead and additional featured stories.
   */
  function renderTopStories(container) {
    const featured = newestFirst(
      newsArticles.filter((article) => article.featured),
    );

    if (!featured.length) {
      container.innerHTML = createEmptyState("No featured stories are available.");
      return;
    }

    container.innerHTML = `
      ${createFeaturedCard(featured[0])}
      ${
        featured.length > 1
          ? `<div class="mt-4">${gridHTML(featured.slice(1, 4), {
              compact: true,
            })}</div>`
          : ""
      }
    `;
  }

  /**
   * Renders the latest articles regardless of category.
   */
  function renderLatestNews(container, limit = 6) {
    container.innerHTML = gridHTML(newestFirst(newsArticles).slice(0, limit));
  }

  /**
   * Renders three recent stories and a View All link for each category.
   */
  function renderCategoryPreviews(container) {
    container.innerHTML = CATEGORIES.map((category) => {
      const stories = newestFirst(
        newsArticles.filter((article) => article.category === category),
      ).slice(0, 3);

      return `
        <section class="mb-5" aria-labelledby="${category}-heading">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h2 class="h3 mb-0" id="${category}-heading">
              ${escapeHTML(formatCategory(category))}
            </h2>
            <a href="${categoryURL(category)}" class="btn btn-sm btn-outline-primary">
              View all
            </a>
          </div>
          ${gridHTML(stories)}
        </section>
      `;
    }).join("");
  }

  /**
   * Renders all stories for category.html?category=name.
   */
  function renderCategoryPage() {
    const container = findElement(SELECTORS.categoryArticles);
    if (!container) return false;

    const params = new URLSearchParams(window.location.search);
    const requestedCategory =
      params.get("category") ||
      document.body.dataset.category ||
      getCategoryFromFilename();
    const category = requestedCategory?.toLowerCase().trim();
    const title = findElement(SELECTORS.categoryTitle);

    if (!CATEGORIES.includes(category)) {
      if (title) title.textContent = "Category not found";
      container.innerHTML = createErrorState(
        "Category not found",
        "Choose a valid news category from the navigation menu.",
      );
      return true;
    }

    const categoryArticles = newestFirst(
      newsArticles.filter((article) => article.category === category),
    );

    document.title = `${formatCategory(category)} News | HP Newsletter`;
    if (title) title.textContent = `${formatCategory(category)} News`;
    container.innerHTML = gridHTML(categoryArticles);
    markActiveCategory(category);
    return true;
  }

  function getCategoryFromFilename() {
    const filename = window.location.pathname
      .split("/")
      .pop()
      .replace(/\.html$/i, "");

    return CATEGORIES.includes(filename) ? filename : "";
  }

  /**
   * Renders article.html?id=number and three related stories.
   */
  function renderArticlePage() {
    const container = findElement(SELECTORS.article);
    if (!container) return false;

    const id = Number(new URLSearchParams(window.location.search).get("id"));
    const article = newsArticles.find((item) => item.id === id);

    if (!article) {
      document.title = "Article not found | HP Newsletter";
      container.innerHTML = createErrorState(
        "Article not found",
        "The story may have moved, or the article link is invalid.",
      );
      const relatedContainer = findElement(SELECTORS.related);
      if (relatedContainer) relatedContainer.innerHTML = "";
      return true;
    }

    document.title = `${article.title} | HP Newsletter`;
    container.innerHTML = `
      <article>
        <header class="mx-auto mb-4 article-header">
          <a
            href="${categoryURL(article.category)}"
            class="text-uppercase fw-semibold text-decoration-none"
          >
            ${escapeHTML(formatCategory(article.category))}
          </a>
          <h1 class="display-5 fw-bold mt-2">${escapeHTML(article.title)}</h1>
          <p class="lead text-body-secondary">${escapeHTML(article.excerpt)}</p>
          <div class="text-body-secondary">
            By <strong class="text-body">${escapeHTML(article.author)}</strong>
            <span aria-hidden="true"> · </span>
            ${escapeHTML(formatDate(article.date))}
            <span aria-hidden="true"> · </span>
            ${escapeHTML(article.readTime)}
          </div>
        </header>
        <img
          src="${escapeHTML(article.image)}"
          class="img-fluid w-100 rounded mb-5 article-hero"
          alt="${escapeHTML(article.title)}"
          ${imageErrorAttribute(article.category)}
        >
        <div class="mx-auto article-body">
          ${article.body
            .map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`)
            .join("")}
        </div>
      </article>
    `;

    renderRelatedArticles(article);
    markActiveCategory(article.category);
    return true;
  }

  function renderRelatedArticles(currentArticle) {
    const container = findElement(SELECTORS.related);
    if (!container) return;

    const related = newestFirst(
      newsArticles.filter(
        (article) =>
          article.category === currentArticle.category &&
          article.id !== currentArticle.id,
      ),
    ).slice(0, 3);

    container.innerHTML = gridHTML(related, { compact: true });
  }

  /**
   * Searches titles, excerpts, authors, categories, and keywords.
   */
  function searchArticles(query) {
    const terms = query
      .toLocaleLowerCase()
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    if (!terms.length) return [];

    return newestFirst(newsArticles).filter((article) => {
      const searchableText = [
        article.title,
        article.excerpt,
        article.author,
        article.category,
        ...(article.keywords || []),
      ]
        .join(" ")
        .toLocaleLowerCase();

      return terms.every((term) => searchableText.includes(term));
    });
  }

  function renderSearchResults(query) {
    const container = findElement(SELECTORS.searchResults);
    if (!container) return false;

    const title = findElement(SELECTORS.searchTitle);
    const results = searchArticles(query);

    if (title) {
      title.textContent = query
        ? `Search results for “${query}”`
        : "Search the news";
    }

    container.innerHTML = query
      ? gridHTML(results)
      : createEmptyState("Enter a word or phrase to search all articles.");
    return true;
  }

  /**
   * Connects every search form. On a dedicated search-results page it renders
   * in place; otherwise it sends the query to index.html?q=search-term.
   */
  function setupSearch() {
    const params = new URLSearchParams(window.location.search);
    const query = (params.get("q") || "").trim();
    const forms = document.querySelectorAll(
      'form[role="search"], #search-form, .search-form',
    );

    forms.forEach((form) => {
      const input = form.querySelector('input[type="search"]');
      if (!input) return;

      if (query) input.value = query;

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const nextQuery = input.value.trim();
        if (!nextQuery) {
          input.focus();
          return;
        }

        if (findElement(SELECTORS.searchResults)) {
          const url = new URL(window.location.href);
          url.searchParams.set("q", nextQuery);
          window.history.pushState({}, "", url);
          renderSearchResults(nextQuery);
        } else {
          window.location.href = `index.html?q=${encodeURIComponent(nextQuery)}`;
        }
      });
    });

    if (query && !findElement(SELECTORS.searchResults)) {
      renderSearchOverlay(query);
    } else {
      renderSearchResults(query);
    }
  }

  /**
   * Lets search work on the current index.html even before a dedicated
   * #search-results container is added.
   */
  function renderSearchOverlay(query) {
    const target =
      findElement(SELECTORS.topStories) ||
      document.querySelector("main") ||
      document.querySelector(".container");

    if (!target) return;

    const results = searchArticles(query);
    target.innerHTML = `
      <section aria-labelledby="generated-search-title">
        <div class="d-flex flex-wrap justify-content-between gap-3 mb-4">
          <h1 class="h2 mb-0" id="generated-search-title">
            Search results for “${escapeHTML(query)}”
          </h1>
          <a href="index.html" class="btn btn-outline-secondary">Clear search</a>
        </div>
        ${gridHTML(results)}
      </section>
    `;
  }

  function markActiveCategory(category) {
    document.querySelectorAll("[data-category-link]").forEach((link) => {
      const isActive = link.dataset.categoryLink === category;
      link.classList.toggle("active", isActive);
      if (isActive) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  function renderHomePage() {
    const topStories = findElement(SELECTORS.topStories);
    const latestNews = findElement(SELECTORS.latestNews);
    const categoryPreviews = findElement(SELECTORS.categoryPreviews);

    if (topStories) renderTopStories(topStories);
    if (latestNews) renderLatestNews(latestNews);
    if (categoryPreviews) renderCategoryPreviews(categoryPreviews);
  }

  function showDataError() {
    const target =
      document.querySelector("main") ||
      findElement(SELECTORS.topStories) ||
      document.querySelector(".container");

    if (target) {
      target.innerHTML = createErrorState(
        "News could not be loaded",
        "Make sure data.js is included before main.js.",
      );
    }
    console.error("HP Newsletter: data.js must be loaded before main.js.");
  }

  function initialise() {
    if (typeof articles === "undefined" || !Array.isArray(articles)) {
      showDataError();
      return;
    }

    newsArticles = articles;
    renderArticlePage();
    renderCategoryPage();
    renderHomePage();
    setupSearch();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialise);
  } else {
    initialise();
  }
})();
