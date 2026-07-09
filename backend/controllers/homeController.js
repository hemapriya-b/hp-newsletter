const articleService = require("../services/articleService");
const { error: sendError, success } = require("../utils/responseHelper");

async function getHomePage(req, res) {
  try {
    const homePage = await articleService.getHomePageArticles({
      date: req.query.date,
      sort: req.query.sort || "newest",
    });

    success(res, homePage);
  } catch (error) {
    console.error("HOME PAGE ERROR:", error);
    sendError(res, error.message);
  }
}

module.exports = { getHomePage };
