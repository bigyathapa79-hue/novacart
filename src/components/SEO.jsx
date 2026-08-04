import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, image = "/cover.jpg", noIndex = false }) => {
  const siteName = "NovaCart";

  const fullTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} | Shop Smart. Live Better.`;

  return (
    <Helmet>
      {/* Basic SEO */}

      <title>{fullTitle}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="NovaCart, online shopping, ecommerce, electronics, fashion, furniture, lifestyle products"
      />

      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />

      {/* Open Graph */}

      <meta property="og:title" content={fullTitle} />

      <meta property="og:description" content={description} />

      <meta property="og:type" content="website" />

      <meta property="og:site_name" content={siteName} />

      <meta property="og:image" content={image} />

      {/* Twitter */}

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={fullTitle} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
