import { siteConfig } from "@/lib/content";

const siteUrl = "https://andreibenedec.com";

export function JsonLd() {
  const person = {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: siteConfig.name,
    url: siteUrl,
    email: siteConfig.email,
    jobTitle: "Desarrollo web, automatización con IA para empresas",
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
    name: "Andrei Benedec — Desarrollo web, automatización con IA para empresas",
    url: siteUrl,
    image: `${siteUrl}/icon`,
    email: siteConfig.email,
    telephone: `+${siteConfig.whatsapp}`,
    description:
      "Creo webs orientadas a conseguir clientes y soluciones digitales que automatizan procesos, ahorran tiempo y hacen crecer tu empresa.",
    areaServed: {
      "@type": "Country",
      name: "Spain",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "La Rioja",
      addressCountry: "ES",
    },
    founder: { "@id": `${siteUrl}/#person` },
    priceRange: "€€",
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteConfig.name,
    description:
      "Desarrollo web, automatización con IA para empresas que quieren trabajar mejor.",
    publisher: { "@id": `${siteUrl}/#person` },
    inLanguage: "es-ES",
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [person, professionalService, website],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
