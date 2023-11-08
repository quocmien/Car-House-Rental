const revalidate = Number(process.env.NEXT_PUBLIC_REVALIDATE) || 3600 // 1h
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const getData = async (url: string) => {
  const res = await fetch(`${baseUrl}/${url}`, {
    next: { revalidate }
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
