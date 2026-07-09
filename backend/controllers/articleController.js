const articleService = require("../services/articleService");
const { error: sendError, success } = require("../utils/responseHelper");

function getArticleQuery(req) {
  return {
    category: req.query.category,
    date: req.query.date,
    id: req.query.id,
    sort: req.query.sort || "newest",
    limit: req.query.limit ? Number(req.query.limit) : undefined,
    featured:
      req.query.featured === "true"
        ? true
        : req.query.featured === "false"
          ? false
          : undefined,
    excludeFeatured: req.query.excludeFeatured === "true",
  };
}

async function listArticles(req, res) {
  try {
    if (req.query.id) {
      const article = await articleService.getArticleByPublicId(req.query.id);

      if (!article) {
        return sendError(res, "Article not found", 404);
      }

      return success(res, article);
    }

    if (req.query.q) {
      const articles = await articleService.searchArticles(req.query.q, getArticleQuery(req));
      return success(res, articles);
    }

    const articles = await articleService.getAllArticles(getArticleQuery(req));
    success(res, articles);
  } catch (error) {
    console.error("LIST ARTICLES ERROR:", error);
    sendError(res, error.message);
  }
}

async function getFeaturedArticles(req, res) {
  try {
    const articles = await articleService.getFeaturedArticles(getArticleQuery(req));
    success(res, articles);
  } catch (error) {
    console.error("FEATURED ARTICLES ERROR:", error);
    sendError(res, error.message);
  }
}

async function getLatestArticles(req, res) {
  try {
    const limit = req.query.limit ? Number(req.query.limit) : 6;
    const articles = req.query.category
      ? await articleService.getAllArticles({
          category: req.query.category,
          date: req.query.date,
          sort: "newest",
          limit,
        })
      : await articleService.getLatestArticles(limit);
    success(res, articles);
  } catch (error) {
    console.error("LATEST ARTICLES ERROR:", error);
    sendError(res, error.message);
  }
}

async function getPopularArticles(req, res) {
  try {
    const limit = req.query.limit ? Number(req.query.limit) : 6;
    const articles = await articleService.getPopularArticles(limit);
    success(res, articles);
  } catch (error) {
    console.error("POPULAR ARTICLES ERROR:", error);
    sendError(res, error.message);
  }
}

async function getArticle(req, res) {
  try {
    const article =
      req.query.by === "publicId"
        ? await articleService.getArticleByPublicId(req.params.id)
        : await articleService.getArticleByDocId(req.params.id);

    if (!article) {
      return sendError(res, "Article not found", 404);
    }

    success(res, article);
  } catch (error) {
    console.error("GET ARTICLE ERROR:", error);
    sendError(res, error.message);
  }
}

module.exports = {
  getArticle,
  getFeaturedArticles,
  getLatestArticles,
  getPopularArticles,
  listArticles,
};
