import { getArticles } from "./api.js";
import { findArticle, rememberArticles, resetArticles } from "./articleStore.js";
import { getBaseParams, initializeFilters, updateFilterMessage } from "./filters.js";
import { initializeModal } from "./modal.js";
import { createHeroCard, displayResults, renderCategory } from "./render.js";
import { initializeSearch, runSearch } from "./search.js";

const pageParams = new URLSearchParams(window.location.search);
const category = pageParams.get("category") || "global";
const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

const elements = {
  filters: {
    sortOrder: document.getElementById("sortOrder"),
    filterDate: document.getElementById("filterDate"),
    form: document.getElementById("newsFilters"),
    clearButton: document.getElementById("clearFilters"),
  },
  search: {
    form: document.getElementById("searchForm"),
    input: document.getElementById("searchInput"),
    section: document.getElementById("search-section"),
    results: document.getElementById("search-results"),
  },
  modal: {
    modal: document.getElementById("articleModal"),
    closeButton: document.getElementById("closeModal"),
    image: document.getElementById("modalImage"),
    category: document.getElementById("modalCategory"),
    title: document.getElementById("modalTitle"),
    excerpt: document.getElementById("modalExcerpt"),
    author: document.getElementById("modalAuthor"),
    date: document.getElementById("modalDate"),
    readTime: document.getElementById("modalReadTime"),
    content: document.getElementById("modalContent"),
    fullArticle: document.getElementById("fullArticle"),
    readMoreButton: document.getElementById("readMoreBtn"),
  },
  categoryTitle: document.getElementById("categoryTitle"),
  breadcrumb: document.getElementById("breadcrumbCategory"),
  categoryArticles: document.getElementById("categoryArticles"),
  filterMessage: document.getElementById("filterMessage"),
};

function setPageTitle() {
  elements.categoryTitle.textContent = `${categoryTitle} News`;

  if (elements.breadcrumb) {
    elements.breadcrumb.textContent = categoryTitle;
  }
}

function getCategoryParams() {
  return getBaseParams(elements.filters, { category });
}

async function loadArticles() {
  try {
    const articles = await getArticles(getCategoryParams());
    resetArticles(articles);
    renderCategory(elements.categoryArticles, articles, createHeroCard);
    updateFilterMessage(
      elements.filterMessage,
      articles,
      elements.filters.filterDate?.value,
    );
  } catch (error) {
    console.error("Error loading articles:", error);
  }
}

async function runCategorySearch() {
  await runSearch(
    elements.search,
    getCategoryParams,
    async (params) => {
      const results = await getArticles(params);
      rememberArticles(results);
      return results;
    },
    (results) => displayResults(elements.search.results, elements.search.section, results),
  );
}

async function refreshNews() {
  await loadArticles();
  await runCategorySearch();
}

setPageTitle();
initializeModal(elements.modal, findArticle);
initializeSearch(elements.search, runCategorySearch);
initializeFilters(elements.filters, refreshNews);
loadArticles();
