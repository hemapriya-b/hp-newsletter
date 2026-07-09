export function showLoading(elements) {
  elements.loading?.classList.remove("hide");
  elements.content.forEach((section) => section.classList.add("hide"));
}

export function hideLoading(elements) {
  elements.loading?.classList.add("hide");
  elements.content.forEach((section) => section.classList.remove("hide"));
}
