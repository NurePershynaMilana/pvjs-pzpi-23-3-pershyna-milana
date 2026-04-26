export function dedupeById(existing, incoming) {
  const known = new Set(existing.map((item) => item.id))
  return incoming.filter((item) => !known.has(item.id))
}

export function filterImages(images, { query, favorites, favoritesOnly }) {
  let result = images

  if (favoritesOnly) {
    result = result.filter((img) => favorites.includes(img.id))
  }

  const q = query.trim().toLowerCase()
  if (q) {
    result = result.filter((img) => img.author.toLowerCase().includes(q))
  }

  return result
}
