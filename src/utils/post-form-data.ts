export const postFormData = async ({
  url,
  body,
  token,
}: {
  url: string;
  body: FormData | any;
  token: string;
}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API}/${url}`, {
    body: body,
    method: 'post',
    headers: new Headers({
      Authorization: 'Bearer ' + token,
    }),
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};