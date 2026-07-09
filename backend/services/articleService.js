const { db } = require("../firebase/firebaseAdmin");
const cache = require("./cacheService");

const ARTICLES_COLLECTION = "articles";
const DOC_CACHE_PREFIX = "doc:";
const PUBLIC_ID_CACHE_PREFIX = "public:";
const VALID_CATEGORIES = [
  "global",
  "national",
  "sports",
  "business",
  "politics",
  "drama",
];

function normalizeArticle(doc) {
  return {
    firestoreId: doc.id,
    ...doc.data(),
  };
}

function getDocCacheKey(docId) {
  return `${DOC_CACHE_PREFIX}${docId}`;
}

function getPublicIdCacheKey(id) {
  return `${PUBLIC_ID_CACHE_PREFIX}${id}`;
}

function cacheArticle(article) {
  if (!article) {
    return;
  }

  if (article.firestoreId) {
    cache.set(getDocCacheKey(article.firestoreId), article);
  }

  if (article.id !== undefined) {
    cache.set(getPublicIdCacheKey(article.id), article);
  }
}

function removeArticleFromCache(article) {
  if (!article) {
    return;
  }

  if (article.firestoreId) {
    cache.delete(getDocCacheKey(article.firestoreId));
  }

  if (article.id !== undefined) {
    cache.delete(getPublicIdCacheKey(article.id));
  }
}

function sortArticles(articles, sort = "newest") {
  if (sort === "id") {
    return [...articles].sort((a, b) => (Number(a.id) || 0) - (Number(b.id) || 0));
  }

  const direction = sort === "oldest" ? 1 : -1;

  return [...articles].sort((a, b) => {
    const dateCompare = direction * String(a.date || "").localeCompare(String(b.date || ""));

    if (dateCompare !== 0) {
      return dateCompare;
    }

    return direction * ((Number(a.id) || 0) - (Number(b.id) || 0));
  });
}

function applyFilters(articles, filters = {}) {
  let result = [...articles];

  if (filters.id) {
    result = result.filter((article) => String(article.id) === String(filters.id));
  }

  if (filters.category) {
    result = result.filter((article) => article.category === filters.category);
  }

  if (filters.date) {
    result = result.filter((article) => article.date === filters.date);
  }

  if (filters.featured !== undefined) {
    result = result.filter((article) => Boolean(article.featured) === filters.featured);
  }

  if (filters.excludeFeatured) {
    result = result.filter((article) => !article.featured);
  }

  return result;
}

async function getAllArticles(options = {}) {
  const snapshot = await db.collection(ARTICLES_COLLECTION).get();
  const articles = snapshot.docs.map(normalizeArticle);
  const filtered = applyFilters(articles, options);
  const sorted = sortArticles(filtered, options.sort);

  if (Number.isInteger(options.limit)) {
    return sorted.slice(0, options.limit);
  }

  return sorted;
}

async function getArticleByDocId(docId) {
  const cacheKey = getDocCacheKey(docId);

  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  const doc = await db.collection(ARTICLES_COLLECTION).doc(docId).get();

  if (!doc.exists) {
    return null;
  }

  const article = normalizeArticle(doc);
  cacheArticle(article);

  return article;
}

async function getArticleByPublicId(id) {
  const cacheKey = getPublicIdCacheKey(id);

  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  const snapshot = await db
    .collection(ARTICLES_COLLECTION)
    .where("id", "==", Number(id))
    .limit(1)
    .get();

  if (snapshot.empty) {
    return null;
  }

  const article = normalizeArticle(snapshot.docs[0]);
  cacheArticle(article);

  return article;
}

async function getFeaturedArticles(options = {}) {
  return getAllArticles({
    ...options,
    featured: true,
  });
}

async function getLatestArticles(limit = 6) {
  return getAllArticles({
    sort: "newest",
    limit,
  });
}

async function getPopularArticles(limit = 6) {
  const articles = await getAllArticles({ sort: "newest" });

  return [...articles]
    .sort((a, b) => {
      const aScore = Number(a.views || a.popularity || a.id || 0);
      const bScore = Number(b.views || b.popularity || b.id || 0);
      return bScore - aScore;
    })
    .slice(0, limit);
}

async function getHomePageArticles(options = {}) {
  const snapshot = await db.collection(ARTICLES_COLLECTION).get();
  const articles = snapshot.docs.map(normalizeArticle);
  const baseArticles = applyFilters(articles, {
    date: options.date,
  });
  const sortedArticles = sortArticles(baseArticles, options.sort);
  const featured = sortedArticles.filter((article) => article.featured);
  const categories = VALID_CATEGORIES.reduce((result, category) => {
    result[category] = sortedArticles
      .filter((article) => article.category === category && !article.featured)
      .slice(0, 3);

    return result;
  }, {});

  return {
    articles: sortedArticles,
    featured,
    categories,
  };
}

async function searchArticles(query, options = {}) {
  const keyword = String(query || "").trim().toLowerCase();

  if (!keyword) {
    return [];
  }

  const { limit, ...searchOptions } = options;
  const articles = await getAllArticles(searchOptions);

  const results = articles.filter((article) => {
    const searchableFields = [
      article.title,
      article.category,
      article.author,
      article.excerpt,
      ...(Array.isArray(article.keywords) ? article.keywords : []),
    ];

    return searchableFields.some((field) =>
      String(field || "").toLowerCase().includes(keyword),
    );
  });

  if (Number.isInteger(limit)) {
    return results.slice(0, limit);
  }

  return results;
}

async function getNextArticleId() {
  const articles = await getAllArticles();

  return articles.reduce((maxId, article) => {
    const articleId = Number(article.id);
    return Number.isFinite(articleId) && articleId > maxId ? articleId : maxId;
  }, 0) + 1;
}

async function createArticle(articleData) {
  const nextId = await getNextArticleId();
  const article = {
    ...articleData,
    id: nextId,
  };

  const duplicateSnapshot = await db
    .collection(ARTICLES_COLLECTION)
    .where("title", "==", article.title)
    .limit(1)
    .get();

  if (!duplicateSnapshot.empty) {
    const error = new Error("An article with this title already exists.");
    error.statusCode = 409;
    throw error;
  }

  const docRef = await db.collection(ARTICLES_COLLECTION).add(article);
  const savedArticle = {
    firestoreId: docRef.id,
    ...article,
  };

  cacheArticle(savedArticle);

  return {
    firestoreId: docRef.id,
    article: savedArticle,
  };
}

async function updateArticle(docId, articleData) {
  const existingArticle = await getArticleByDocId(docId);

  if (!existingArticle) {
    const error = new Error("Article not found.");
    error.statusCode = 404;
    throw error;
  }

  const updatedArticle = {
    ...articleData,
    id: existingArticle.id,
  };

  await db.collection(ARTICLES_COLLECTION).doc(docId).update(updatedArticle);

  cacheArticle({
    firestoreId: docId,
    ...updatedArticle,
  });
}

async function deleteArticle(docId) {
  const existingArticle = await getArticleByDocId(docId);

  await db.collection(ARTICLES_COLLECTION).doc(docId).delete();
  removeArticleFromCache(existingArticle);
}

module.exports = {
  VALID_CATEGORIES,
  createArticle,
  deleteArticle,
  getAllArticles,
  getArticleByDocId,
  getArticleByPublicId,
  getFeaturedArticles,
  getLatestArticles,
  getHomePageArticles,
  getNextArticleId,
  getPopularArticles,
  searchArticles,
  updateArticle,
};
