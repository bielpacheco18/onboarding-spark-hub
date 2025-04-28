
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
}

const SEO = ({
  title = "OnboardingSparkHub - Automação de Onboarding e Treinamento",
  description = "Plataforma SaaS que automatiza o processo de integração e capacitação de novos colaboradores, ideal para pequenas e médias empresas.",
  canonicalUrl = "https://onboardingsparkhub.com",
  ogType = "website",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
}: SEOProps) => {
  const fullTitle = title === "OnboardingSparkHub - Automação de Onboarding e Treinamento" 
    ? title 
    : `${title} | OnboardingSparkHub`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
