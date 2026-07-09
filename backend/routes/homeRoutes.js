const express = require("express");
const homeController = require("../controllers/homeController");
const { validateArticleQuery } = require("../middlewares/validationMiddleware");

const router = express.Router();

router.get("/", validateArticleQuery, homeController.getHomePage);

module.exports = router;
