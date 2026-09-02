/**
 * Contenido editable de la landing page.
 * Modifica estos textos sin tocar los componentes.
 */

export const siteConfig = {
  name: "Andrei Benedec",
  tagline: "Desarrollo Web de Alto Impacto",
  email: "benedecandrei24@gmail.com",
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
  title: "Tu negocio en internet, más rápido y profesional que nunca.",
  subtitle:
    "Webs que convierten visitas en clientes. Para empresas en La Rioja y en toda España que quieren dejar de perder oportunidades en Google.",
  badge: "Desarrollo web · Python · IA · La Rioja",
  primaryCta: "Solicitar Presupuesto",
  secondaryCta: "Ver mis servicios",
};

export const servicesContent = {
  title: "Mis Servicios",
  subtitle:
    "No vendo código: vendo presencia digital que genera contactos, confianza y ventas.",
};

export const services = [
  {
    id: "web-ia",
    title: "Desarrollo Web Asistido por IA",
    description:
      "Páginas corporativas modernas, rápidas y optimizadas para captar clientes desde el primer día — con tiempos de entrega que la competencia no suele igualar.",
    icon: "sparkles" as const,
  },
  {
    id: "diseno-negocio",
    title: "Diseño Orientado a Negocio",
    description:
      "Cada sección tiene un objetivo: que te escriban, te llamen o compren. Estructura, mensaje y diseño alineados con lo que tu cliente necesita ver para decidirse.",
    icon: "target" as const,
  },
  {
    id: "soluciones-ia",
    title: "Automatización e IA",
    description:
      "Asistentes inteligentes y flujos automatizados con Python e IA. Una línea de servicio en crecimiento, apoyada en formación especializada y experiencia con procesos empresariales reales.",
    icon: "bot" as const,
    comingSoon: true,
    badge: "Nueva línea",
  },
] as const;

export const aboutContent = {
  title: "Experiencia real. Stack en expansión.",
  text: "Soy desarrollador con titulación oficial (DAM) y trayectoria construyendo software que ya se usa cada día en el entorno empresarial: plataformas de gestión de personal con fichajes, horarios, vacaciones y distintos niveles de permiso según el rol del usuario.\n\nEsa experiencia en producción — junto con el trabajo en procesos de negocio y entornos ERP como Business Central — me da una ventaja que muchos freelancers no tienen: entiendo cómo opera una empresa por dentro, no solo cómo se ve una landing page.\n\nAhora amplío ese perfil con Python — formación orientada a la certificación PCEP y aplicación directa en inteligencia artificial con DeepLearning.ai — y un flujo de trabajo profesional con Git y GitHub. Más herramientas, mismo objetivo: entregar soluciones que generen resultados.",
  highlights: [
    {
      title: "Software en producción",
      description:
        "Plataformas web activas, con usuarios reales, roles diferenciados y flujos de trabajo que simplifican la operativa diaria.",
      icon: "briefcase" as const,
    },
    {
      title: "Visión de negocio + ERP",
      description:
        "Conocimiento de procesos empresariales y sistemas de gestión: la base para integrar automatización e IA donde de verdad aporta valor.",
      icon: "zap" as const,
    },
    {
      title: "Python + IA aplicada",
      description:
        "Formación en Python (certificación PCEP) e inteligencia artificial práctica. El puente entre desarrollo web y automatización inteligente.",
      icon: "code" as const,
    },
    {
      title: "Git & GitHub",
      description:
        "Control de versiones y metodología profesional para entregas organizadas, trazables y preparadas para escalar en equipo.",
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
  subtitle:
    "Cuéntame qué necesitas. En una conversación de 15 minutos vemos si encajo contigo y qué enfoque te daría más retorno.",
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
