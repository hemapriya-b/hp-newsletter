export async function runSearch(elements, getParams, getArticles, displayResults) {
  const keyword = elements.input?.value.trim();

  if (!keyword) {
    elements.section.style.display = "none";
    elements.results.innerHTML = "";
    return;
  }

  const params = getParams();
  params.set("q", keyword);

  const results = await getArticles(params);
  displayResults(results);
}

export function initializeSearch(elements, runSearchHandler) {
  elements.form?.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      await runSearchHandler();
    } catch (error) {
      console.error("Search failed:", error);
    }
  });
}
