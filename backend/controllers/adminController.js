const articleService = require("../services/articleService");
const { error: sendError, success } = require("../utils/responseHelper");

async function getNextId(req, res) {
  try {
    const nextId = await articleService.getNextArticleId();
    success(res, { nextId });
  } catch (error) {
    console.error("NEXT ID ERROR:", error);
    sendError(res, error.message);
  }
}

async function createArticle(req, res) {
  try {
    const result = await articleService.createArticle(req.article);

    success(res, {
      message: "Article created successfully",
      firestoreId: result.firestoreId,
      id: result.article.id,
    }, 201);
  } catch (error) {
    console.error("CREATE ARTICLE ERROR:", error);
    sendError(res, error.message, error.statusCode || 500);
  }
}

async function updateArticle(req, res) {
  try {
    await articleService.updateArticle(req.params.id, req.article);
    success(res, { message: "Article updated successfully" });
  } catch (error) {
    console.error("UPDATE ARTICLE ERROR:", error);
    sendError(res, error.message);
  }
}

async function deleteArticle(req, res) {
  try {
    await articleService.deleteArticle(req.params.id);
    success(res, { message: "Article deleted successfully" });
  } catch (error) {
    console.error("DELETE ARTICLE ERROR:", error);
    sendError(res, error.message);
  }
}

module.exports = {
  createArticle,
  deleteArticle,
  getNextId,
  updateArticle,
};
