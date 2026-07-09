async function requestJson(url, options = {}) {
  const response = await fetch(url, {
    cache: "no-store",
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

function toQueryString(params = new URLSearchParams()) {
  const query = params.toString();
  return query ? `?${query}` : "";
}

export async function getArticles(params = new URLSearchParams()) {
  const data = await requestJson(`/api/articles${toQueryString(params)}`);
  return Array.isArray(data) ? data : [data];
}

export async function getArticle(id) {
  return requestJson(`/api/articles/${id}`);
}

export async function getHomePage(params = new URLSearchParams()) {
  return requestJson(`/api/home${toQueryString(params)}`);
}

export async function createArticle(article) {
  return requestJson("/api/admin/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(article),
  });
}

export async function updateArticle(id, article) {
  return requestJson(`/api/admin/articles/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(article),
  });
}

export async function deleteArticle(id) {
  return requestJson(`/api/admin/articles/${id}`, {
    method: "DELETE",
  });
}
