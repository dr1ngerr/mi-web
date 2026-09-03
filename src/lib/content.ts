/**
 * Contenido editable de la landing page.
 * Modifica estos textos sin tocar los componentes.
 */

import { caseStudies } from "./caseStudies";

export type { CaseStudy, CaseStudyScreenshot } from "./caseStudies";
export { caseStudies, getCaseStudy } from "./caseStudies";

export const siteConfig = {
  name: "Andrei Benedec",
  positioning: "Desarrollo web, automatización con IA para empresas",
  tagline: "Para empresas que quieren trabajar mejor",
  email: "contacto@andreibenedec.com",
  whatsapp: "34642407524",
  linkedin: "https://www.linkedin.com/in/andrei-benedec-634859162/",
  github: "https://github.com/dr1ngerr",
  location: "La Rioja",
  locationShort: "La Rioja",
  year: 2026,
};

export const navLinks = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Contacto", href: "/#contacto" },
] as const;

export const heroContent = {
  name: "Andrei Benedec",
  headline:
    "Desarrollo web, automatización con IA para empresas que quieren trabajar mejor.",
  support:
    "Webs pensadas para conseguir clientes. Automatización con IA que ahorra tiempo de verdad.",
  primaryCta: "Cuéntame tu proyecto",
  secondaryCta: "WhatsApp",
};

export const problemContent = {
  eyebrow: "El problema",
  title: "Tu empresa no necesita otra web. Necesita una solución.",
  points: [
    "Una web que genere contactos.",
    "Menos tareas manuales.",
    "Procesos más organizados.",
    "Herramientas que se adapten a tu empresa.",
  ],
};

export const servicesContent = {
  title: "Cómo te ayudo",
  subtitle: "Empezamos por lo que más te frena hoy.",
  primaryCta: "Cuéntame tu proyecto",
  secondaryCta: "WhatsApp",
};

export const services = [
  {
    id: "web",
    title: "Web",
    offer: "Que te escriban.",
    description: "Landings y webs con un camino claro al contacto.",
    icon: "globe" as const,
    href: "/desarrollo-web",
  },
  {
    id: "automatizacion",
    title: "Automatización con IA",
    offer: "Menos trabajo a mano.",
    description: "Conecto herramientas y automatizo procesos con IA cuando aporta.",
    icon: "workflow" as const,
    href: "/automatizacion",
  },
  {
    id: "software",
    title: "Software",
    offer: "A medida.",
    description: "Cuando lo que usáis hoy se os queda corto.",
    icon: "building" as const,
    href: "/desarrollo-software",
  },
] as const;

export const differentiationContent = {
  eyebrow: "Por qué yo",
  title: "Desarrollo con mentalidad empresarial",
  text: "Me importa cómo funciona dentro de tu empresa, no solo cómo se ve.",
  detail:
    "He construido software que equipos reales usan cada día. Parto de cómo trabajáis vosotros — cada empresa es distinta.",
  proofs: [
    { label: "En producción", value: "Uso diario real" },
    { label: "Operativa", value: "Según tu empresa" },
    { label: "Enfoque", value: "Proceso primero" },
  ],
};

export const trustContent = {
  eyebrow: "Confianza",
  title: "Pruebas que puedes verificar",
  subtitle: "No solo digas “profesional”. Muestra por qué confiar.",
  items: [
    { label: "Titulación oficial DAM" },
    { label: "Software en producción" },
    { label: "Experiencia con procesos empresariales" },
    { label: "Webs que generan contactos" },
    { label: "Automatización de tareas manuales" },
    { label: "Herramientas internas a medida" },
  ],
  clientsTitle: "Proyectos con resultado",
  clientsNote:
    "Nombres y logos de clientes solo cuando haya permiso explícito. Mientras tanto, enlazo a casos reales con resultado medible.",
  clients: [
    {
      name: "Gestión de Personal",
      project: "Software interno",
      result: "En producción · Uso diario",
      href: "/proyectos/gestion-personal",
    },
    {
      name: "Web que genera contactos",
      project: "Landing / web comercial",
      result: "Foco: que escriban o llamen",
      href: "/proyectos/presencia-digital",
    },
    {
      name: "Menos trabajo a mano",
      project: "Automatización de procesos",
      result: "Menos fricción · Menos errores",
      href: "/proyectos/procesos-inteligentes",
    },
  ] as {
    name: string;
    project: string;
    result: string;
    href: string;
    logo?: string;
  }[],
};

export const aboutAndreiContent = {
  eyebrow: "Sobre mí",
  name: "Andrei Benedec",
  role: "Desarrollo web, automatización con IA para empresas",
  location: "La Rioja · Toda España",
  story:
    "No soy una agencia anónima. Entiendo cómo opera una empresa por dentro y propongo lo que encaja — no una plantilla genérica.",
  credentials: [
    "Titulación oficial DAM",
    "Software en producción, usado a diario",
  ],
  linkedinCta: "LinkedIn",
  photo: "/about/andrei.jpg",
  photoAlt: "Andrei Benedec",
  cta: "Hablemos",
};

/** @deprecated usar differentiationContent — se mantiene para páginas que aún importan aboutContent */
export const aboutContent = {
  title: differentiationContent.title,
  text: `${differentiationContent.text} ${differentiationContent.detail}`,
  proofs: differentiationContent.proofs,
  highlights: [
    {
      title: "Operativa real",
      description: "Sé lo que pasa entre “tenemos una web” y “el equipo pierde tiempo cada día”.",
      icon: "briefcase" as const,
    },
    {
      title: "Clientes y ventas",
      description: "Una web bonita que no genera mensajes no sirve. El objetivo es que te contacten.",
      icon: "zap" as const,
    },
    {
      title: "Procesos y costes",
      description: "Si un proceso se repite y frena al equipo, ahí hay tiempo y dinero escondidos.",
      icon: "workflow" as const,
    },
    {
      title: "Software real",
      description: "No demos: aplicaciones en uso, con gente de verdad delante.",
      icon: "building" as const,
    },
  ],
};

export const portfolioContent = {
  title: "Proyectos",
  subtitle: "Casos reales, con resultado.",
  projects: caseStudies.map((study) => ({
    slug: study.slug,
    title: study.title,
    category: study.category,
    image: study.coverImage,
    imageAlt: study.coverImageAlt,
    client: study.client,
    teaser: study.teaser,
    proof: study.proof,
    href: `/proyectos/${study.slug}`,
    ctaLabel: "Ver caso",
  })),
};

export const pricingContent = {
  title: "Orientación de precios",
  subtitle:
    "Proyecto puntual o continuidad. La entrada suele ser una web; después puedes seguir con mantenimiento, mejoras y más.",
  note: "Tras hablar, te mando una propuesta con precio, plazos y qué incluye. Sin extras inventados a mitad de camino. La continuidad se acuerda aparte, según lo que necesites mes a mes.",
  items: [
    {
      name: "Landing para conseguir contactos",
      price: "desde 600 €",
      description:
        "Una página clara: quién eres, qué ofreces y cómo escribirte. Pensada para empresas que necesitan que les contacten — del tamaño que sean.",
      includes: [
        "Diseño limpio en móvil y escritorio",
        "Formulario o WhatsApp",
        "Publicación y puesta en marcha",
      ],
      featured: true,
    },
    {
      name: "Web de varias secciones",
      price: "Según alcance",
      description:
        "Más páginas o bloques (servicios, sobre ti, proyectos…). El precio sale del alcance, no de una tarifa inventada.",
      includes: [
        "Propuesta tras la primera conversación",
        "Precio y plazos antes de empezar",
        "Sin sorpresas de última hora",
      ],
      featured: false,
    },
    {
      name: "Herramientas internas y automatización",
      price: "Según alcance",
      description:
        "De procesos manuales o herramientas sueltas a un sistema más simple: software interno, conexiones o automatización. El precio sale de mapear cómo trabajáis.",
      includes: [
        "Análisis de cómo trabajáis hoy",
        "Propuesta con alcance cerrado",
        "Soporte después de lanzar",
      ],
      featured: false,
    },
    {
      name: "Continuidad (mantenimiento y mejoras)",
      price: "Según acuerdo",
      description:
        "Para no quedarte solo tras el lanzamiento: soporte, cambios, SEO, integraciones o nuevas automatizaciones cuando haga falta.",
      includes: [
        "Mantenimiento y soporte",
        "Mejoras y ajustes con el uso real",
        "SEO, integraciones o automatización bajo demanda",
      ],
      featured: false,
    },
  ],
  primaryCta: "Cuéntame qué quieres mejorar",
  secondaryCta: "WhatsApp",
};

export const processContent = {
  title: "Proceso",
  subtitle: "De la conversación a la mejora continua.",
  steps: [
    {
      number: "01",
      title: "Hablamos",
      description: "Me cuentas qué quieres mejorar y cómo trabajáis hoy.",
    },
    {
      number: "02",
      title: "Analizo",
      description: "Miro el problema real: contactos, procesos, herramientas, fricción.",
    },
    {
      number: "03",
      title: "Propongo",
      description: "Te digo qué haría, con alcance, precio y plazos claros.",
    },
    {
      number: "04",
      title: "Desarrollo",
      description: "Construyo y te voy enseñando avances.",
    },
    {
      number: "05",
      title: "Lanzamos",
      description: "Publicamos, comprobamos y dejamos todo funcionando.",
    },
    {
      number: "06",
      title: "Mejoramos",
      description: "Mantenimiento, ajustes y siguientes pasos si encaja seguir.",
    },
  ],
};

export const serviceLadderContent = {
  title: "Una relación que puede crecer contigo",
  subtitle:
    "Muchos clientes empiezan por una web. Si encaja, podemos seguir: más contactos, menos trabajo a mano y soporte en el tiempo.",
  note: "No hace falta contratarlo todo de golpe. Empezamos por lo que más te frena hoy.",
  primaryCta: "Empezar por lo que más te frena",
  steps: [
    {
      stage: "Entrada",
      title: "Web profesional",
      description: "Landing o web clara para que te escriban y te encuentren.",
      href: "/desarrollo-web",
      ticket: "Punto de partida",
    },
    {
      stage: "Siguiente paso",
      title: "Optimización y conversión",
      description: "Mejorar mensaje, SEO y el camino hasta el contacto cuando ya tienes web.",
      href: "/contacto",
      ticket: "Más rendimiento",
    },
    {
      stage: "Mayor ticket",
      title: "Automatización con IA",
      description: "Quitar pasos a mano conectando herramientas y usando IA cuando aporta.",
      href: "/automatizacion",
      ticket: "Más valor",
    },
    {
      stage: "Mayor ticket todavía",
      title: "Software interno",
      description: "Herramientas a medida cuando lo actual se os queda corto.",
      href: "/desarrollo-software",
      ticket: "Proyecto grande",
    },
    {
      stage: "En el tiempo",
      title: "Mantenimiento y soporte",
      description: "Cambios, mejoras y acompañamiento después del lanzamiento.",
      href: "/mantenimiento",
      ticket: "Relación continua",
    },
  ],
};

export const continuityContent = {
  eyebrow: "Continuidad",
  title: "No termino el día que publicamos.",
  subtitle:
    "Una web o una herramienta sin alguien detrás se queda quieta. Yo ofrezco seguir: mantenimiento, mejoras y lo que tu empresa vaya necesitando.",
  text: "El objetivo no es solo cerrar un proyecto. Es construir una relación útil: cuando hace falta un cambio, una integración, más SEO o automatizar algo nuevo, ya me conoces y conoces cómo trabajo.",
  items: [
    {
      title: "Mantenimiento",
      description: "Que la web o la herramienta siga funcionando, actualizada y sin sorpresas.",
    },
    {
      title: "Soporte",
      description: "Dudas, incidencias y ayuda cuando algo no cuadra en el día a día.",
    },
    {
      title: "Mejoras continuas",
      description: "Textos, secciones, formularios o flujos que se van afinando con el uso real.",
    },
    {
      title: "SEO y conversión",
      description: "Que te encuentren mejor y que más visitas acaben escribiéndote.",
    },
    {
      title: "Integraciones",
      description: "Conectar formularios, email, chat o las herramientas que ya usáis.",
    },
    {
      title: "Nuevas automatizaciones",
      description: "Cuando el equipo vuelve a perder tiempo a mano, ordenamos el siguiente proceso.",
    },
  ],
  primaryCta: "Hablar de continuidad",
  secondaryCta: "Ver mantenimiento",
  secondaryHref: "/mantenimiento",
};

export const faqContent = {
  title: "Preguntas frecuentes",
  subtitle: "Lo esencial.",
  items: [
    {
      question: "¿Cuánto cuesta una web?",
      answer:
        "Una landing parte desde 600 €. Proyectos mayores se presupuestan según alcance.",
    },
    {
      question: "¿Cuánto tarda?",
      answer:
        "Una landing suele ir en días o pocas semanas. Te lo confirmo en la propuesta.",
    },
    {
      question: "¿Trabajas fuera de La Rioja?",
      answer: "Sí. Trabajo con empresas de toda España, en remoto.",
    },
    {
      question: "¿Haces mantenimiento?",
      answer:
        "Sí. Soporte, mejoras e integraciones después del lanzamiento.",
    },
  ],
};

export const contactContent = {
  title: "¿Tienes un proyecto en mente?",
  subtitle: "Cuéntamelo. Aunque aún no sepas cómo categorizarlo.",
  closing: "",
  emailButton: "Enviar email",
  whatsappButton: "WhatsApp",
  formLabels: {
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    submit: "Enviar mensaje",
  },
  messagePlaceholder: "Qué quieres mejorar.",
};

export const footerContent = {
  cta: "Cuéntame tu proyecto",
  servicesTitle: "Servicios",
  localLinksTitle: "Servicios en La Rioja",
};

export const whatsappMessage =
  "Hola Andrei, quiero contarte qué me gustaría mejorar en mi empresa.";

export function getWhatsAppUrl(message = whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type SeoLanding = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  points: readonly string[];
  cta: string;
  eyebrow?: string;
  relatedHref?: string;
  relatedLabel?: string;
};

export const servicePages: SeoLanding[] = [
  {
    slug: "desarrollo-web",
    title: "Desarrollo web",
    metaTitle: "Desarrollo web para conseguir clientes | Andrei Benedec",
    metaDescription:
      "Webs y landings con mensaje claro, formulario o WhatsApp a la vista, y un camino obvio para que te escriban o te llamen.",
    headline: "Una web que explique qué haces y haga fácil contactarte.",
    intro:
      "Si alguien llega desde Google o desde un enlace, en pocos segundos debería saber qué ofreces y cómo pedirte presupuesto. Diseño la página alrededor de ese contacto — no alrededor de relleno genérico.",
    points: [
      "Landing desde 600 €, con formulario o WhatsApp",
      "Web de varias secciones si tu empresa lo necesita",
      "Mensaje, estructura y llamada a la acción claros",
      "Publicación y dominio si lo necesitas",
    ],
    cta: "Pedir presupuesto para tu web",
    eyebrow: "Servicio",
    relatedHref: "/desarrollo-web-la-rioja",
    relatedLabel: "También: desarrollo web en La Rioja",
  },
  {
    slug: "automatizacion",
    title: "Automatización con IA",
    metaTitle: "Automatización con IA para empresas | Andrei Benedec",
    metaDescription:
      "Automatización con IA: conecto herramientas, elimino pasos a mano y aplico IA solo cuando ahorra tiempo de verdad.",
    headline: "Automatización con IA para las tareas que te hacen perder tiempo.",
    intro:
      "Conecto tus herramientas y quito lo repetitivo. Cuando tiene sentido, uso IA — el criterio es el tiempo que recuperáis, no poner IA de adorno.",
    points: [
      "Mapear el proceso real de tu equipo",
      "Conectar las herramientas que ya usáis",
      "IA solo cuando el ahorro es claro",
      "Propuesta con alcance, precio y plazos cerrados",
    ],
    cta: "Hablar de automatizar tu empresa",
    eyebrow: "Servicio",
    relatedHref: "/automatizacion-empresas-la-rioja",
    relatedLabel: "También: automatización para empresas en La Rioja",
  },
  {
    slug: "inteligencia-artificial",
    title: "Automatización con IA",
    metaTitle: "Automatización con IA | Andrei Benedec",
    metaDescription:
      "Automatización con IA para empresas: resumir, clasificar, rellenar o avisar — cuando ahorra tiempo de verdad.",
    headline: "Automatización con IA: menos repetición, más tiempo útil.",
    intro:
      "Si el equipo pierde horas en tareas repetitivas, lo miramos. Forma parte de automatizar el proceso — con IA cuando aporta, no como escaparate.",
    points: [
      "Partir de una tarea concreta que hoy se hace a mano",
      "Automatizar con IA solo cuando el ahorro es claro",
      "Medir tiempo y errores, no “innovación”",
      "Propuesta con alcance y precio cerrados",
    ],
    cta: "Consultar tu caso",
    eyebrow: "Servicio",
    relatedHref: "/automatizacion",
    relatedLabel: "Ver automatización con IA",
  },
  {
    slug: "desarrollo-software",
    title: "Herramientas internas",
    metaTitle: "Herramientas internas para empresas | Andrei Benedec",
    metaDescription:
      "¿Las herramientas actuales se os quedan cortas? Las convierto en software más simple, conectado y usable para el día a día.",
    headline: "¿Las herramientas actuales se os quedan cortas?",
    intro:
      "Puedo ayudarte a convertir procesos manuales o improvisados en herramientas digitales más claras. El punto de partida es cómo trabajáis vosotros — no una plantilla genérica.",
    points: [
      "Mapear el proceso real del equipo",
      "Sustituir lo improvisado por una herramienta clara",
      "Adaptado a cómo operáis, no al revés",
      "Alcance, precio y plazos antes de empezar",
    ],
    cta: "Hablar de tu operativa",
    eyebrow: "Servicio",
    relatedHref: "/desarrollo-software-la-rioja",
    relatedLabel: "También: herramientas internas en La Rioja",
  },
  {
    slug: "mantenimiento",
    title: "Mantenimiento y continuidad",
    metaTitle: "Mantenimiento web y soporte continuo | Andrei Benedec",
    metaDescription:
      "Mantenimiento, soporte, mejoras, SEO, integraciones y automatizaciones. De proyecto puntual a relación recurrente.",
    headline: "No termino el día que publicamos.",
    intro:
      "Una web o una herramienta sin alguien detrás se queda quieta. Ofrezco continuidad: mantenimiento, soporte, mejoras, SEO, integraciones y nuevas automatizaciones cuando tu empresa lo pida — para convertir un proyecto en una relación útil en el tiempo.",
    points: [
      "Mantenimiento y soporte tras el lanzamiento",
      "Mejoras continuas según el uso real",
      "SEO, conversión e integraciones",
      "Nuevas automatizaciones cuando haga falta",
    ],
    cta: "Hablar de continuidad",
    eyebrow: "Continuidad",
  },
];

export const localLandings: SeoLanding[] = [
  {
    slug: "desarrollo-web-la-rioja",
    title: "Desarrollo web en La Rioja",
    metaTitle: "Desarrollo web en La Rioja | Andrei Benedec",
    metaDescription:
      "Desarrollo web en La Rioja y Logroño: mensaje claro, contacto fácil (formulario o WhatsApp) y una página pensada para que te escriban.",
    headline: "Webs en La Rioja para empresas que necesitan más contactos.",
    intro:
      "Si tienes una empresa en La Rioja o Logroño y casi nadie te escribe desde la web, lo arreglamos: texto claro, estructura simple y un camino obvio para contactar.",
    points: [
      "Landing o web comercial según tu empresa",
      "Formulario o WhatsApp a la vista",
      "Que te encuentren y sepan qué pedir",
      "Trabajo local, entrega seria",
    ],
    cta: "Pedir presupuesto para tu web",
    eyebrow: "La Rioja",
    relatedHref: "/desarrollo-web",
    relatedLabel: "Ver servicio de desarrollo web",
  },
  {
    slug: "automatizacion-empresas-la-rioja",
    title: "Automatización con IA en La Rioja",
    metaTitle: "Automatización con IA en La Rioja | Andrei Benedec",
    metaDescription:
      "Automatización con IA en La Rioja: conecto herramientas, elimino pasos a mano y aplico IA cuando ahorra tiempo.",
    headline: "Automatización con IA para las tareas que te hacen perder tiempo (La Rioja).",
    intro:
      "Para empresas riojanas: conecto lo que ya usáis, corto el trabajo a mano y uso IA cuando aporta.",
    points: [
      "Menos copiar y pegar entre herramientas",
      "Menos errores al pasar datos",
      "Tiempo recuperado en admin y operativa",
      "Propuesta cerrada según tu caso",
    ],
    cta: "Hablar de automatizar tu empresa",
    eyebrow: "La Rioja",
    relatedHref: "/automatizacion",
    relatedLabel: "Ver servicio de automatización",
  },
  {
    slug: "desarrollo-software-la-rioja",
    title: "Herramientas internas en La Rioja",
    metaTitle: "Herramientas internas en La Rioja | Andrei Benedec",
    metaDescription:
      "¿Tu empresa en La Rioja necesita herramientas internas más claras? Las adapto a cómo trabajáis.",
    headline: "¿Las herramientas actuales se os quedan cortas?",
    intro:
      "Para empresas en La Rioja: convierto procesos manuales o improvisados en herramientas digitales más simples, conectadas y pensadas para el día a día del equipo.",
    points: [
      "Mapear cómo trabajáis hoy",
      "De lo improvisado a una herramienta clara",
      "Pensado para uso diario",
      "Menos fricción, más control",
    ],
    cta: "Hablar de tu operativa",
    eyebrow: "La Rioja",
    relatedHref: "/desarrollo-software",
    relatedLabel: "Ver servicio de herramientas internas",
  },
];

