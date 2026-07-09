import { getArticles, getHomePage } from "./api.js";
import { findArticle, rememberArticles, resetArticles } from "./articleStore.js";
import { getBaseParams, initializeFilters, updateFilterMessage } from "./filters.js";
import { hideLoading, showLoading } from "./loading.js";
import { initializeModal } from "./modal.js";
import { displayResults, renderCategory, renderTopStories } from "./render.js";
import { initializeSearch, runSearch } from "./search.js";

const categories = [
  { name: "global", containerId: "global-news" },
  { name: "national", containerId: "national-news" },
  { name: "sports", containerId: "sports-news" },
  { name: "business", containerId: "business-news" },
  { name: "politics", containerId: "politics-news" },
  { name: "drama", containerId: "drama-news" },
];

const elements = {
  filters: {
    sortOrder: document.getElementById("sortOrder"),
    filterDate: document.getElementById("filterDate"),
    form: document.getElementById("newsFilters"),
    clearButton: document.getElementById("clearFilters"),
  },
  loading: {
    loading: document.getElementById("newsLoading"),
    content: document.querySelectorAll(".news-content"),
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
  topStories: document.getElementById("top-stories"),
  topStoriesIndicators: document.getElementById("topStoriesIndicators"),
  filterMessage: document.getElementById("filterMessage"),
};

function getHomeParams() {
  return getBaseParams(elements.filters);
}

async function loadHomePage() {
  try {
    showLoading(elements.loading);

    const homePage = await getHomePage(getHomeParams());
    resetArticles(homePage.articles);

    renderTopStories(elements.topStories, elements.topStoriesIndicators, homePage.featured);

    categories.forEach(({ name, containerId }) => {
      renderCategory(
        document.getElementById(containerId),
        homePage.categories[name] || [],
      );
    });

    updateFilterMessage(
      elements.filterMessage,
      homePage.articles,
      elements.filters.filterDate?.value,
    );
  } catch (error) {
    console.error("Error loading articles:", error);
  } finally {
    hideLoading(elements.loading);
  }
}

async function runHomeSearch() {
  await runSearch(
    elements.search,
    getHomeParams,
    async (params) => {
      const results = await getArticles(params);
      rememberArticles(results);
      return results;
    },
    (results) => displayResults(elements.search.results, elements.search.section, results),
  );
}

async function refreshNews() {
  await loadHomePage();
  await runHomeSearch();
}

initializeModal(elements.modal, findArticle);
initializeSearch(elements.search, runHomeSearch);
initializeFilters(elements.filters, refreshNews);
loadHomePage();
