const express = require("express");
const articleController = require("../controllers/articleController");
const { validateArticleQuery } = require("../middlewares/validationMiddleware");

const router = express.Router();

router.get("/", articleController.listArticles);
router.get(
  "/featured",
  validateArticleQuery,
  articleController.getFeaturedArticles,
);
router.get(
  "/latest",
  validateArticleQuery,
  articleController.getLatestArticles,
);
router.get(
  "/popular",
  validateArticleQuery,
  articleController.getPopularArticles,
);
router.get("/:id", articleController.getArticle);

module.exports = router;
