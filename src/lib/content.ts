/**
 * Contenido editable de la landing page.
 * Modifica estos textos sin tocar los componentes.
 */

import { caseStudies } from "./caseStudies";

export type { CaseStudy, CaseStudyScreenshot } from "./caseStudies";
export { caseStudies, getCaseStudy } from "./caseStudies";

export const siteConfig = {
  name: "Andrei Benedec",
  positioning: "Desarrollo web, automatización e IA para empresas",
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
    "Desarrollo web, automatización e IA para empresas que quieren trabajar mejor.",
  support:
    "Creo webs orientadas a conseguir clientes y soluciones digitales que automatizan procesos, ahorran tiempo y hacen crecer tu empresa.",
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
  subtitle: "Cuatro caminos. Empezamos por lo que tu empresa necesita ahora — yo al otro lado.",
  primaryCta: "Cuéntame tu proyecto",
  secondaryCta: "WhatsApp",
};

export const services = [
  {
    id: "web",
    title: "Web",
    offer: "Presencia digital + conversión.",
    description: "Landings y webs pensadas para que te escriban, no solo para “estar online”.",
    icon: "globe" as const,
    href: "/desarrollo-web",
  },
  {
    id: "automatizacion",
    title: "Automatización",
    offer: "Menos tareas manuales.",
    description: "Conecto herramientas y quito pasos a mano en el día a día.",
    icon: "workflow" as const,
    href: "/automatizacion",
  },
  {
    id: "ia",
    title: "Menos repetición",
    offer: "Que el equipo deje de hacer lo mismo a mano.",
    description: "Resumir, clasificar, avisar o rellenar — cuando ahorra tiempo de verdad.",
    icon: "bot" as const,
    href: "/inteligencia-artificial",
  },
  {
    id: "software",
    title: "Software",
    offer: "Herramientas hechas a medida.",
    description: "Para lo que hoy vivís en Excel, WhatsApp o procesos improvisados.",
    icon: "building" as const,
    href: "/desarrollo-software",
  },
] as const;

export const differentiationContent = {
  eyebrow: "Por qué yo",
  title: "Desarrollo con mentalidad empresarial",
  text: "No solo me preocupo de cómo se ve una solución. Me preocupo de cómo funciona dentro de tu empresa.",
  detail:
    "He construido software empresarial en producción: empleados, jefes, turnos, fichajes, vacaciones y roles. Ese contexto cambia lo que te propongo — y lo que evito venderte.",
  proofs: [
    { label: "En producción", value: "Software usado por equipos reales" },
    { label: "Operativa", value: "Turnos, fichajes, roles" },
    { label: "Enfoque", value: "Proceso primero, solución después" },
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
      project: "Software interno multi-centro",
      result: "En producción · Uso diario · Roles reales",
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
      result: "Menos copiar · Menos errores",
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
  eyebrow: "La persona detrás del trabajo",
  name: "Andrei Benedec",
  role: "Desarrollo web, automatización e IA para empresas",
  location: "La Rioja · Trabajo en toda España",
  story:
    "No soy una agencia anónima. Soy Andrei: alguien que ha construido herramientas que usa gente de verdad cada día. Me interesa entender cómo opera tu empresa por dentro — quién hace qué, dónde se pierde tiempo — y proponerte algo que encaje, no una plantilla genérica.",
  credentials: [
    "Titulación oficial DAM",
    "Software en producción (turnos, fichajes, vacaciones, roles)",
    "Experiencia con procesos empresariales",
    "Webs, automatización y herramientas internas para el día a día",
  ],
  linkedinCta: "Ver perfil en LinkedIn",
  photo: "/about/andrei.jpg",
  photoAlt: "Andrei Benedec",
  cta: "Hablemos de tu proyecto",
};

/** @deprecated usar differentiationContent — se mantiene para páginas que aún importan aboutContent */
export const aboutContent = {
  title: differentiationContent.title,
  text: `${differentiationContent.text} ${differentiationContent.detail}`,
  proofs: differentiationContent.proofs,
  highlights: [
    {
      title: "Empleados y operativa",
      description: "Sé lo que pasa entre “tenemos una web” y “el equipo pierde media mañana con Excel”.",
      icon: "briefcase" as const,
    },
    {
      title: "Clientes y ventas",
      description: "Una web bonita que no genera mensajes no sirve. El objetivo es que te contacten.",
      icon: "zap" as const,
    },
    {
      title: "Procesos y costes",
      description: "Si un proceso se hace igual cada día y falla a menudo, ahí hay dinero y tiempo escondidos.",
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
  subtitle: "Tres casos reales. Aquí el escaparate; dentro de cada uno, el detalle completo.",
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
    ctaLabel: "Ver caso completo",
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
        "De Excel y WhatsApp a un sistema más simple: software interno, conexiones entre herramientas o automatización. El precio sale de mapear tu operativa.",
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
      title: "Automatización",
      description: "Quitar pasos a mano: conectar herramientas y ordenar procesos repetitivos.",
      href: "/automatizacion",
      ticket: "Más valor",
    },
    {
      stage: "Mayor ticket todavía",
      title: "Software interno",
      description: "Herramientas a medida cuando Excel y WhatsApp se os quedan cortos.",
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
      description: "Conectar formularios, WhatsApp, email, hojas o herramientas que ya usáis.",
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
  subtitle: "Lo esencial antes de escribirme.",
  items: [
    {
      question: "¿Cuánto cuesta una página web?",
      answer:
        "Una landing para conseguir contactos parte desde 600 €. Webs más grandes, automatizaciones o software se presupuestan según alcance.",
    },
    {
      question: "¿Cuánto tarda?",
      answer:
        "Una landing suele ir en días o pocas semanas. Proyectos mayores se planifican antes. Te lo confirmo en la propuesta.",
    },
    {
      question: "¿Trabajas fuera de La Rioja?",
      answer: "Sí. Estoy en La Rioja y trabajo con empresas de toda España, en remoto — independientemente del tamaño.",
    },
    {
      question: "¿Puedo empezar solo con una web?",
      answer:
        "Sí. Es lo habitual. Después, si encaja, seguimos con optimización, automatización, software o mantenimiento.",
    },
    {
      question: "¿Haces mantenimiento?",
      answer:
        "Sí. Soporte, mejoras, SEO, integraciones o nuevas automatizaciones — para no quedarte solo tras el lanzamiento.",
    },
    {
      question: "¿Puedes mejorar una web que ya tengo?",
      answer:
        "Sí. A veces basta aclarar el mensaje y el contacto; otras hace falta rediseñar. Lo vemos juntos.",
    },
    {
      question: "¿Automatizas procesos internos?",
      answer:
        "Sí. Entiendo cómo trabajáis y quito lo repetitivo o frágil: Excel, WhatsApp, listas, avisos.",
    },
    {
      question: "¿Qué pasa después de publicar?",
      answer:
        "Comprobamos que todo funcione y te dejo el acceso. Si quieres continuidad, lo acordamos.",
    },
  ],
};

export const contactContent = {
  title: "¿Tienes un proyecto en mente?",
  subtitle: "Cuéntamelo. Da igual si aún no sabes si es una web, una automatización o otra cosa.",
  closing: "Hablemos.",
  emailButton: "Enviar email",
  whatsappButton: "WhatsApp",
  formLabels: {
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    submit: "Enviar mensaje",
  },
  messagePlaceholder: "Cuéntame tu proyecto — aunque aún no sepas cómo categorizarlo.",
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
    title: "Automatización",
    metaTitle: "Automatización de procesos para empresas | Andrei Benedec",
    metaDescription:
      "Automatiza las tareas que te hacen perder tiempo: conecto herramientas, elimino pasos a mano y reduzco errores al pasar datos.",
    headline: "Automatiza las tareas que te hacen perder tiempo.",
    intro:
      "Conecto tus herramientas, elimino procesos manuales y dejo el flujo ordenado: menos copiar de Excel a WhatsApp, menos listas sueltas y menos errores cuando la información salta de un sitio a otro. Primero entiendo quién hace qué; luego automatizamos lo repetible.",
    points: [
      "Mapear el proceso real (quién, cuándo, dónde falla)",
      "Conectar herramientas que ya usáis",
      "Quitar pasos a mano y avisos olvidados",
      "Propuesta con alcance, precio y plazos cerrados",
    ],
    cta: "Hablar de automatizar tu empresa",
    eyebrow: "Servicio",
    relatedHref: "/automatizacion-empresas-la-rioja",
    relatedLabel: "También: automatización para empresas en La Rioja",
  },
  {
    slug: "inteligencia-artificial",
    title: "Menos trabajo repetitivo",
    metaTitle: "Menos trabajo repetitivo en tu empresa | Andrei Benedec",
    metaDescription:
      "Deja de hacer a mano lo que se puede ordenar: resumir, clasificar, rellenar o avisar — cuando ahorra tiempo de verdad.",
    headline: "Que tu equipo dedique menos tiempo a lo repetitivo.",
    intro:
      "Si alguien pierde horas resumiendo, clasificando, rellenando o avisando, lo miramos. El criterio es el tiempo que recuperáis — no colgar un chatbot de adorno.",
    points: [
      "Partir de una tarea concreta que hoy se hace a mano",
      "Automatizar o asistir solo cuando el ahorro es claro",
      "Medir horas y errores, no “innovación”",
      "Propuesta con alcance y precio cerrados",
    ],
    cta: "Consultar tu caso",
    eyebrow: "Servicio",
  },
  {
    slug: "desarrollo-software",
    title: "Herramientas internas",
    metaTitle: "Herramientas internas para empresas | Andrei Benedec",
    metaDescription:
      "¿Tu empresa depende de Excel, WhatsApp y tareas manuales? Las convierto en herramientas digitales más simples, conectadas y usables.",
    headline: "¿Tu empresa todavía depende de Excel, WhatsApp y tareas manuales?",
    intro:
      "Puedo ayudarte a convertir esos procesos en herramientas digitales más simples, conectadas y automatizadas. He construido software en producción con turnos, fichajes, vacaciones y roles: el punto de partida es cómo trabajáis, no una plantilla genérica.",
    points: [
      "Mapear el proceso real del equipo",
      "Sustituir hojas y chats por una herramienta clara",
      "Turnos, fichajes, solicitudes, roles… según tu caso",
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
    title: "Automatización para empresas en La Rioja",
    metaTitle: "Automatización para empresas en La Rioja | Andrei Benedec",
    metaDescription:
      "Automatización en La Rioja: conecto herramientas, elimino pasos a mano y reduzco errores en administración y operativa.",
    headline: "Automatiza las tareas que te hacen perder tiempo (La Rioja).",
    intro:
      "Para empresas riojanas: conecto lo que ya usáis, corto el trabajo a mano (Excel, WhatsApps, listas) y dejo el proceso más claro para el equipo.",
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
      "¿Tu empresa en La Rioja depende de Excel y WhatsApp? Las convierto en herramientas digitales más simples y usables.",
    headline: "¿Todavía dependéis de Excel, WhatsApp y tareas manuales?",
    intro:
      "Para empresas en La Rioja: convierto esos procesos en herramientas digitales más simples, conectadas y pensadas para el día a día del equipo.",
    points: [
      "Mapear cómo trabajáis hoy",
      "De hojas y chats a una herramienta clara",
      "Pensado para uso diario",
      "Menos fricción, más control",
    ],
    cta: "Hablar de tu operativa",
    eyebrow: "La Rioja",
    relatedHref: "/desarrollo-software",
    relatedLabel: "Ver servicio de herramientas internas",
  },
];

