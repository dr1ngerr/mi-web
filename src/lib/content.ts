/**
 * Contenido editable de la landing page.
 * Modifica estos textos sin tocar los componentes.
 */

export const siteConfig = {
  name: "Andrei Benedec",
  tagline: "Webs y automatizaciones para vender más y trabajar mejor",
  email: "contacto@andreibenedec.com",
  whatsapp: "34642407524",
  linkedin: "https://www.linkedin.com/in/andrei-benedec-634859162/",
  github: "https://github.com/dr1ngerr",
  location: "Pradejón, La Rioja",
  locationShort: "La Rioja",
  year: 2026,
};

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Mi Enfoque", href: "#enfoque" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const heroContent = {
  title: "Desarrollo web y automatizaciones para empresas que quieren vender más y trabajar mejor.",
  subtitle:
    "Webs profesionales y soluciones digitales para negocios en La Rioja y toda España.",
  badge: "Desarrollo web · Automatización · IA · La Rioja",
  primaryCta: "Solicitar Presupuesto",
  secondaryCta: "Ver mis servicios",
};

export const servicesContent = {
  title: "Mis Servicios",
  subtitle: "Más ventas en internet. Menos trabajo manual en el día a día.",
};

export const services = [
  {
    id: "web-ia",
    title: "Desarrollo Web Asistido por IA",
    description:
      "Páginas modernas y rápidas, listas para captar clientes desde el primer día.",
    icon: "sparkles" as const,
  },
  {
    id: "diseno-negocio",
    title: "Diseño Orientado a Negocio",
    description:
      "Cada sección con un objetivo claro: que te contacten o compren.",
    icon: "target" as const,
  },
  {
    id: "soluciones-ia",
    title: "Automatización e IA",
    description:
      "Automatización y asistentes inteligentes para simplificar tareas repetitivas de tu negocio.",
    icon: "bot" as const,
    comingSoon: true,
    badge: "Nueva línea",
  },
] as const;

export const aboutContent = {
  title: "Experiencia real. Resultados concretos.",
  text: "Desarrollador con titulación oficial (DAM) y experiencia construyendo software que ya usan equipos reales cada día — plataformas de gestión, fichajes, horarios y procesos de negocio. Entiendo cómo opera una empresa por dentro, no solo cómo se ve una web.",
  highlights: [
    {
      title: "Software en producción",
      description: "Apps web activas con usuarios reales y flujos de trabajo que simplifican la operativa diaria.",
      icon: "briefcase" as const,
    },
    {
      title: "Enfoque de negocio",
      description: "Conozco procesos empresariales y ERP. Diseño pensando en resultados, no solo en estética.",
      icon: "zap" as const,
    },
    {
      title: "Python + IA aplicada",
      description: "Formación en Python e inteligencia artificial. El puente hacia automatización inteligente.",
      icon: "code" as const,
    },
    {
      title: "Git & GitHub",
      description: "Control de versiones y metodología profesional para entregas organizadas y escalables.",
      icon: "git" as const,
    },
  ],
};

export type PortfolioProject = {
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  href?: string;
};

export const portfolioContent = {
  title: "Proyectos Destacados",
  projects: [
    {
      title: "Gestión de Personal",
      category: "App Web Empresarial",
      image: "/portfolio/gestion-personal.png",
      imageAlt: "Panel de administración de gestión de personal y turnos",
      // href: "https://github.com/dr1ngerr/nombre-del-repo",
    },
    {
      title: "Presencia Digital",
      category: "Web & Conversión",
      image: "/portfolio/presencia-digital.png",
      imageAlt: "Mockup de landing page orientada a conversión",
      // href: "https://github.com/dr1ngerr/nombre-del-repo",
    },
    {
      title: "Procesos Inteligentes",
      category: "Automatización",
      image: "/portfolio/procesos-inteligentes.png",
      imageAlt: "Panel de automatización de procesos con IA",
      // href: "https://github.com/dr1ngerr/nombre-del-repo",
    },
  ] as PortfolioProject[],
};

export const contactContent = {
  title: "¿Listo para modernizar tu negocio?",
  subtitle: "Escríbeme y vemos qué necesita tu negocio.",
  emailButton: "Enviar email",
  whatsappButton: "Escribir por WhatsApp",
  formLabels: {
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    submit: "Enviar mensaje",
  },
};

export const footerContent = {
  cta: "Hablar de mi proyecto",
};
