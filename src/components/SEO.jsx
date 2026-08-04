import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  image = "/images/seo/cover.jpg",
  noIndex = false,
  structuredData,
}) => {
  const siteName = "NovaCart";

  const fullTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} | Shop Smart. Live Better.`;

  const currentUrl = window.location.href;

  // Convert relative image path to absolute URL
  const absoluteImageUrl = image.startsWith("http")
    ? image
    : `${window.location.origin}${image}`;

  return (
    <Helmet>
      {/* Basic SEO */}

      <title>{fullTitle}</title>

      <meta name="description" content={description} />

      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />

      {/* Canonical */}

      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}

      <meta property="og:title" content={fullTitle} />

      <meta property="og:description" content={description} />

      <meta property="og:type" content="website" />

      <meta property="og:site_name" content={siteName} />

      <meta property="og:url" content={currentUrl} />

      <meta property="og:image" content={absoluteImageUrl} />

      <meta property="og:image:width" content="1200" />

      <meta property="og:image:height" content="630" />

      {/* Twitter / X */}

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={fullTitle} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={absoluteImageUrl} />

      {/* Structured Data */}

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
