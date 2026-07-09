const express = require("express");
const adminController = require("../controllers/adminController");
const { requireAdmin } = require("../middlewares/authMiddleware");
const { validateArticle } = require("../middlewares/validationMiddleware");

const router = express.Router();

router.get("/next-id", adminController.getNextId);
router.post("/articles", requireAdmin, validateArticle, adminController.createArticle);
router.put("/articles/:id", requireAdmin, validateArticle, adminController.updateArticle);
router.delete("/articles/:id", requireAdmin, adminController.deleteArticle);

module.exports = router;
