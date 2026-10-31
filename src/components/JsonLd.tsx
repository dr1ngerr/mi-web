import { siteConfig, servicePages } from "@/lib/content";
import { dictionaries } from "@/lib/i18n/dictionaries";

const siteUrl = "https://www.andreibenedec.com";

const faqItems = dictionaries.es.faq.items;

export function JsonLd() {
  const person = {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: siteConfig.name,
    url: siteUrl,
    email: siteConfig.email,
    jobTitle: "Desarrollo web y automatización con IA para empresas",
    image: `${siteUrl}/about/andrei.jpg`,
    address: {
      "@type": "PostalAddress",
      addressRegion: "La Rioja",
      addressCountry: "ES",
    },
    sameAs: [siteConfig.linkedin, siteConfig.github],
  };

  const professionalService = {
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,
    name: "Andrei Benedec — Desarrollo web y automatización con IA para empresas",
    url: siteUrl,
    image: `${siteUrl}/about/andrei.jpg`,
    logo: `${siteUrl}/icon`,
    email: siteConfig.email,
    telephone: `+${siteConfig.whatsapp}`,
    description:
      "Webs pensadas para conseguir clientes y automatizaciones que ahorran horas a tu equipo. Trato directo y precio cerrado. La Rioja y toda España.",
    areaServed: [
      { "@type": "AdministrativeArea", name: "La Rioja" },
      { "@type": "Country", name: "Spain" },
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "La Rioja",
      addressCountry: "ES",
    },
    founder: { "@id": `${siteUrl}/#person` },
    priceRange: "€€",
    knowsAbout: [
      "Desarrollo web",
      "Automatización con IA",
      "Software interno",
      "SEO local",
      "Landings de captación",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios",
      itemListElement: servicePages.map((page, index) => ({
        "@type": "OfferCatalog",
        name: page.title,
        itemListElement: [
          {
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name: page.title,
              description: page.metaDescription,
              url: `${siteUrl}/${page.slug}`,
              provider: { "@id": `${siteUrl}/#business` },
            },
          },
        ],
      })),
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteConfig.name,
    description:
      "Desarrollo web y automatización con IA para empresas que quieren trabajar mejor.",
    publisher: { "@id": `${siteUrl}/#person` },
    inLanguage: "es-ES",
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [person, professionalService, website, faqPage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
