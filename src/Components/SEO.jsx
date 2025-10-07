import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, canonical }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vebsigns",
    "url": "https://vebsigns.com",
    "logo": "https://vebsigns.com/assets/Header/vebsigns.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919970876727",
      "contactType": "customer service"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      {/* Social Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://vebsigns.com/assets/Header/vebsigns.png" />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://vebsigns.com/assets/Header/vebsigns.png" />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
