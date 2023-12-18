const revalidate = Number(process.env.NEXT_PUBLIC_REVALIDATE) || 3600; // 1h
const baseUrl = process.env.NEXT_PUBLIC_REST_API;
const timeout = 5000;

export const fetchDataRest = async (url: string, token = '') => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(`${baseUrl}/${url}`, {
      headers: new Headers(
        token
          ? {
              Authorization: 'Bearer ' + token,
            }
          : {}
      ),
      cache: 'no-store',
      signal: controller.signal,
    });

    clearTimeout(timeoutId); // Clear the timeout since the request completed within the timeout duration

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    // if (error.name === 'AbortError') {
    //   console.error('Request timed out');
    // } else {
    //   console.error('Error fetching data:', error);
    // }
    clearTimeout(timeoutId); // Clear the timeout in case of an error
    throw error;
  }
};
