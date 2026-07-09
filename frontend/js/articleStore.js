let articles = [];

export function rememberArticles(newArticles = []) {
  const articleMap = new Map(articles.map((article) => [String(article.id), article]));

  newArticles.forEach((article) => {
    articleMap.set(String(article.id), article);
  });

  articles = Array.from(articleMap.values());
}

export function findArticle(id) {
  return articles.find((article) => String(article.id) === String(id));
}

export function resetArticles(newArticles = []) {
  articles = [];
  rememberArticles(newArticles);
}
