export const postData = async ({
  url,
  body,
  token,
}: {
  url: string;
  body: FormData | any;
  token?: string;
}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API}/${url}`, {
    body: body,
    method: 'post',
    mode: 'cors',
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
  });

  if (res.ok) {
    return res.json();
  }
  return res.text().then((text) => {
    throw new Error(text);
  });
};
