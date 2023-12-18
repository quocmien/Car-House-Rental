const revalidate = Number(process.env.NEXT_PUBLIC_REVALIDATE) || 3600; // 1h
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
const timeout = 5000
export default async function fetchData(
  query: string,
  variables = {},
  token = ''
  // usePonyfill = true
) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(baseUrl, {
      method: 'POST',
      headers: new Headers(
        token
          ? {
              Authorization: 'Bearer ' + token,
              'Content-Type': 'application/json',
            }
          : {
              'Content-Type': 'application/json',
            }
      ),
      body: JSON.stringify({
        query,
        variables,
      }),
      cache: 'no-store',
      signal: controller.signal,
      // next: { revalidate },
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    clearTimeout(timeoutId); // Clear the timeout since the request completed within the timeout duration
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
      // return null
    }
  
    return res.json();
  } catch (error) {
    console.log('====> error ', error)
    clearTimeout(timeoutId); // Clear the timeout since the request completed within the timeout duration
    throw error;
  }
}
