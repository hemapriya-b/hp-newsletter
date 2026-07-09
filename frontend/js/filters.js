export function getBaseParams(elements, defaults = {}) {
  const params = new URLSearchParams();

  if (defaults.category) {
    params.set("category", defaults.category);
  }

  if (elements.sortOrder?.value) {
    params.set("sort", elements.sortOrder.value);
  }

  if (elements.filterDate?.value) {
    params.set("date", elements.filterDate.value);
  }

  return params;
}

export function updateFilterMessage(element, articles, date) {
  if (!element) return;

  element.textContent = date
    ? articles.length
      ? `${articles.length} article${articles.length === 1 ? "" : "s"} found for ${date}.`
      : `No news found for ${date}.`
    : "";
}

export function initializeFilters(elements, refreshNews) {
  elements.sortOrder?.addEventListener("change", refreshNews);

  elements.form?.addEventListener("submit", (event) => {
    event.preventDefault();
    refreshNews();
  });

  elements.clearButton?.addEventListener("click", () => {
    elements.sortOrder.value = "newest";
    elements.filterDate.value = "";
    refreshNews();
  });
}
