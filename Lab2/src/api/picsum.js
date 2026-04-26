const BASE_URL = 'https://picsum.photos'

export const PAGE_SIZE = 30

export async function fetchImagesPage(page, limit = PAGE_SIZE) {
  const res = await fetch(`${BASE_URL}/v2/list?page=${page}&limit=${limit}`)
  if (!res.ok) throw new Error(`Request failed with status ${res.status}`)
  return res.json()
}

export function getThumbnailUrl(id, width = 600, height = 400) {
  return `${BASE_URL}/id/${id}/${width}/${height}`
}
