// utils/seo.tsx

import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  image?: String | '/logo.png';
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta charSet="UTF-8" />
      <meta property="og:image" content={`${image}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default SEO;
