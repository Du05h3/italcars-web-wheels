
import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const SEOHead = ({ 
  title = "ITALCARS - Sklep z częściami samochodowymi - Wodzisław Śląski",
  description = "ITALCARS - sklep z częściami samochodowymi w Wodzisławiu Śląskim. Sprzedaż części zamiennych, akcesoriów motoryzacyjnych i fachowe doradztwo. Czyżowicka 9, tel. 32 454 67 28",
  keywords = "części samochodowe, akcesoria motoryzacyjne, Wodzisław Śląski, sklep motoryzacyjny, części zamienne, doradztwo motoryzacyjne",
  ogImage = "/lovable-uploads/0621803d-e791-4378-9f61-967ffcdf2aaf.png"
}: SEOHeadProps) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // Set meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;

    // Set viewport meta tag
    let metaViewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
    if (!metaViewport) {
      metaViewport = document.createElement('meta');
      metaViewport.name = 'viewport';
      document.head.appendChild(metaViewport);
    }
    metaViewport.content = 'width=device-width, initial-scale=1.0';

    // Set charset
    let metaCharset = document.querySelector('meta[charset]') as HTMLMetaElement;
    if (!metaCharset) {
      metaCharset = document.createElement('meta');
      metaCharset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(metaCharset, document.head.firstChild);
    }

    // Set Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: ogImage },
      { property: 'og:locale', content: 'pl_PL' },
      { property: 'og:site_name', content: 'ITALCARS' }
    ];

    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`) as HTMLMetaElement;
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });

    // Set Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage }
    ];

    twitterTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`) as HTMLMetaElement;
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.name = tag.name;
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });

    // Add structured data (JSON-LD)
    let jsonLd = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!jsonLd) {
      jsonLd = document.createElement('script');
      jsonLd.type = 'application/ld+json';
      document.head.appendChild(jsonLd);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "AutoPartsStore",
      "name": "ITALCARS",
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Czyżowicka 9",
        "addressLocality": "Wodzisław Śląski",
        "addressCountry": "PL"
      },
      "telephone": "32 454 67 28",
      "url": window.location.origin,
      "image": ogImage,
      "priceRange": "$$",
      "openingHours": "Mo-Fr 08:00-17:00, Sa 08:00-14:00"
    };

    jsonLd.textContent = JSON.stringify(structuredData);

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;

  }, [title, description, keywords, ogImage]);

  return null;
};

export default SEOHead;
