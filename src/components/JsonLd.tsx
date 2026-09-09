import { siteConfig, servicePages } from "@/lib/content";

const siteUrl = "https://andreibenedec.com";

const faqItems = [
  {
    question: "¿Cuánto cuesta una web?",
    answer:
      "Una landing parte desde 600 €. Proyectos mayores se presupuestan según alcance, plazos y qué incluye.",
  },
  {
    question: "¿Cuánto tarda un proyecto?",
    answer:
      "Una landing suele ir en días o pocas semanas. Te lo confirmo por escrito en la propuesta.",
  },
  {
    question: "¿Trabajas fuera de La Rioja?",
    answer:
      "Sí. Estoy en La Rioja y trabajo con empresas de toda España, en remoto.",
  },
  {
    question: "¿Haces mantenimiento después de publicar?",
    answer:
      "Sí. Soporte, mejoras, cambios de contenido e integraciones cuando lo necesites.",
  },
  {
    question: "¿Automatización con IA para cualquier proceso?",
    answer:
      "No. Primero miramos si el proceso se puede ordenar y si la automatización ahorra tiempo de verdad. Si no aporta, te lo digo.",
  },
  {
    question: "¿Necesito tener claro el proyecto antes de escribirte?",
    answer:
      "No. Cuéntame qué te frena hoy (clientes, tiempo, procesos) y te propongo el siguiente paso concreto.",
  },
];

export function JsonLd() {
  const person = {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: siteConfig.name,
    url: siteUrl,
    email: siteConfig.email,
    jobTitle: "Desarrollo web, automatización con IA para empresas",
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
    name: "Andrei Benedec — Desarrollo web, automatización con IA para empresas",
    url: siteUrl,
    image: `${siteUrl}/about/andrei.jpg`,
    logo: `${siteUrl}/icon`,
    email: siteConfig.email,
    telephone: `+${siteConfig.whatsapp}`,
    description:
      "Creo webs orientadas a conseguir clientes y soluciones digitales que automatizan procesos, ahorran tiempo y hacen crecer tu empresa.",
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
      "Desarrollo web, automatización con IA para empresas que quieren trabajar mejor.",
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
