const { VALID_CATEGORIES } = require("../services/articleService");

function isValidDate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(String(value || ""));
}

function cleanString(value) {
  return String(value || "").trim();
}

function normalizeBody(value) {
  if (Array.isArray(value)) {
    return value.map(cleanString).filter(Boolean);
  }

  return String(value || "")
    .split(/\n\s*\n/)
    .map(cleanString)
    .filter(Boolean);
}

function validateArticle(req, res, next) {
  const errors = [];
  const body = req.body || {};

  const article = {
    title: cleanString(body.title),
    category: cleanString(body.category),
    author: cleanString(body.author),
    image: cleanString(body.image),
    excerpt: cleanString(body.excerpt),
    body: normalizeBody(body.body),
    date: cleanString(body.date),
    readTime: cleanString(body.readTime),
    featured: Boolean(body.featured),
    keywords: Array.isArray(body.keywords)
      ? body.keywords.map(cleanString).filter(Boolean)
      : String(body.keywords || "")
          .split(",")
          .map(cleanString)
          .filter(Boolean),
  };

  if (!article.title) errors.push("Title is required.");
  if (!VALID_CATEGORIES.includes(article.category)) errors.push("Valid category is required.");
  if (!article.author) errors.push("Author is required.");
  if (!article.image) errors.push("Image URL is required.");
  if (!article.excerpt) errors.push("Excerpt is required.");
  if (!article.body.length) errors.push("Article body is required.");
  if (!isValidDate(article.date)) errors.push("Date must use YYYY-MM-DD format.");
  if (!article.readTime) errors.push("Read time is required.");

  if (errors.length) {
    return res.status(400).json({ errors });
  }

  req.article = article;
  next();
}

function validateArticleQuery(req, res, next) {
  const { category, sort, date, limit, featured, excludeFeatured, id } = req.query;
  const errors = [];

  if (category && !VALID_CATEGORIES.includes(category)) {
    errors.push("Invalid category.");
  }

  if (sort && !["newest", "oldest", "id"].includes(sort)) {
    errors.push("Invalid sort value.");
  }

  if (date && !isValidDate(date)) {
    errors.push("Date must use YYYY-MM-DD format.");
  }

  if (limit && (!Number.isInteger(Number(limit)) || Number(limit) < 1)) {
    errors.push("Limit must be a positive number.");
  }

  if (featured && !["true", "false"].includes(featured)) {
    errors.push("Featured must be true or false.");
  }

  if (excludeFeatured && !["true", "false"].includes(excludeFeatured)) {
    errors.push("excludeFeatured must be true or false.");
  }

  if (id && !Number.isInteger(Number(id))) {
    errors.push("Article id must be a number.");
  }

  if (errors.length) {
    return res.status(400).json({ errors });
  }

  next();
}

module.exports = {
  validateArticle,
  validateArticleQuery,
};
