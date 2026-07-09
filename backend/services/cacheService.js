const cache = new Map();

function get(articleId) {
  return cache.get(String(articleId));
}

function set(articleId, article) {
  cache.set(String(articleId), article);
}

function deleteEntry(articleId) {
  cache.delete(String(articleId));
}

function clear() {
  cache.clear();
}

function has(articleId) {
  return cache.has(String(articleId));
}

module.exports = {
  clear,
  delete: deleteEntry,
  get,
  has,
  set,
};
