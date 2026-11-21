import {
  createArticle,
  deleteArticle,
  getArticle,
  getArticles,
  updateArticle,
} from "./api.js";
import { renderAdminArticles } from "./render.js";

const elements = {
  form: document.getElementById("articleForm"),
  tableBody: document.getElementById("articlesTableBody"),
  submitButton: document
    .getElementById("articleForm")
    .querySelector("button[type='submit']"),
  title: document.getElementById("title"),
  category: document.getElementById("category"),
  author: document.getElementById("author"),
  image: document.getElementById("image"),
  excerpt: document.getElementById("excerpt"),
  body: document.getElementById("body"),
  date: document.getElementById("date"),
  readTime: document.getElementById("readTime"),
  featured: document.getElementById("featured"),
  keywords: document.getElementById("keywords"),
};

let editingDocId = null;

function getArticleData() {
  return {
    title: elements.title.value,
    category: elements.category.value,
    author: elements.author.value,
    image: elements.image.value,
    excerpt: elements.excerpt.value,
    body: elements.body.value
      .split(/\n\s*\n/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean),
    date: elements.date.value,
    readTime: elements.readTime.value,
    featured: elements.featured.checked,
    keywords: elements.keywords.value
      .split(",")
      .map((word) => word.trim())
      .filter(Boolean),
  };
}

function resetArticleForm() {
  elements.form.reset();
  elements.title.focus();
}

function fillArticleForm(article) {
  elements.title.value = article.title;
  elements.category.value = article.category;
  elements.author.value = article.author;
  elements.image.value = article.image;
  elements.excerpt.value = article.excerpt;
  elements.body.value = article.body.join("\n\n");
  elements.date.value = article.date;
  elements.readTime.value = article.readTime;
  elements.featured.checked = article.featured;
  elements.keywords.value = article.keywords.join(", ");
}

async function loadAdminArticles() {
  const params = new URLSearchParams({ sort: "id" });
  const articles = await getArticles(params);
  renderAdminArticles(elements.tableBody, articles);
}

async function saveArticle() {
  const article = getArticleData();

  if (editingDocId === null) {
    const result = await createArticle(article);
    console.log("Document ID:", result.firestoreId);
    alert("Article published successfully!");
    return;
  }

  await updateArticle(editingDocId, article);
  editingDocId = null;
  elements.submitButton.textContent = "Publish Article";
  alert("Article updated successfully!");
}

elements.form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await saveArticle();
    resetArticleForm();
    await loadAdminArticles();
  } catch (error) {
    console.error("Error saving article:", error);
    alert("Failed to publish article.");
  }
});

elements.tableBody.addEventListener("click", async (event) => {
  const button = event.target.closest(".edit-btn, .delete-btn");
  if (!button) return;

  const docId = button.dataset.id;

  if (button.classList.contains("delete-btn")) {
    if (!confirm("Are you sure you want to delete this article?")) return;

    try {
      await deleteArticle(docId);

      if (editingDocId === docId) {
        editingDocId = null;
        elements.submitButton.textContent = "Publish Article";
        resetArticleForm();
      }

      await loadAdminArticles();
      alert("Article deleted successfully!");
    } catch (error) {
      console.error("Error deleting article:", error);
      alert("Failed to delete article.");
    }

    return;
  }

  try {
    editingDocId = docId;
    const article = await getArticle(editingDocId);
    fillArticleForm(article);
    elements.submitButton.textContent = "Update Article";
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    console.error("Error loading article:", error);
    alert("Failed to load article.");
  }
});

loadAdminArticles();
