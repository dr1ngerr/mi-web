import type { Locale } from "./config";
import {
  caseStudyUiEn,
  caseStudyUiEs,
  caseStudyUiRo,
  type CaseStudyUiCopy,
} from "./caseStudyUi";

export type ServiceKey = "web" | "automatizacion" | "software";
export type NeedKey = "web" | "automatizacion" | "software" | "unsure";

export type Dictionary = {
  positioning: string;
  nav: {
    home: string;
    services: string;
    work: string;
    pricing: string;
    about: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    support: string;
    primaryCta: string;
    secondaryCta: string;
    trust: string[];
    cardValue: string;
    cardLabel: string;
    cardCta: string;
    ticker: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    see: string;
    items: Record<
      ServiceKey,
      { pain: string; offer: string; description: string; bullets: string[] }
    >;
  };
  work: {
    eyebrow: string;
    title: string;
    subtitle: string;
    beforeLabel: string;
    before: string;
    afterLabel: string;
    after: string;
    cta: string;
    note: string;
  };
  calculator: {
    eyebrow: string;
    title: string;
    subtitle: string;
    people: string;
    hours: string;
    cost: string;
    hoursResult: string;
    moneyResult: string;
    half: string;
    method: string;
    cta: string;
    whatsappTemplate: string;
  };
  why: {
    eyebrow: string;
    title: string;
    items: { title: string; text: string }[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    badge: string;
    items: {
      name: string;
      price: string;
      description: string;
      includes: string[];
      featured?: boolean;
    }[];
    note: string;
    cta: string;
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      quote: string;
      name: string;
      role: string;
      projectSlug: string;
      projectLabel: string;
    }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  caseStudy: CaseStudyUiCopy;
  about: {
    eyebrow: string;
    title: string;
    story: string;
    story2: string;
    credentials: string[];
    linkedinCta: string;
    cta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    auditTitle: string;
    auditItems: string[];
    needLabel: string;
    needs: Record<NeedKey, string>;
    site: string;
    sitePlaceholder: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    whatsapp: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    preferChat: string;
    privacy: string;
    privacyLink: string;
    optional: string;
  };
  footer: {
    tagline: string;
    rights: string;
    basedIn: string;
    servicesTitle: string;
    localLinksTitle: string;
    legalTitle: string;
    legalNotice: string;
    privacy: string;
    cookies: string;
    cookieSettings: string;
  };
  cookies: { text: string; accept: string; reject: string; more: string };
  whatsappFloat: string;
  whatsappMessage: string;
};

const es: Dictionary = {
  positioning: "Desarrollo web y automatización con IA para empresas",
  nav: {
    home: "Inicio",
    services: "Servicios",
    work: "Caso real",
    pricing: "Precios",
    about: "Sobre mí",
    contact: "Contacto",
    cta: "Auditoría gratis",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
  },
  hero: {
    eyebrow: "Desarrollador en La Rioja · Trabajo con toda España",
    titleA: "Webs que consiguen clientes.",
    titleB: "Sistemas que te devuelven horas.",
    support:
      "Diseño y programo la web, las automatizaciones y el software interno de empresas que quieren vender más y trabajar con menos caos. Hablas conmigo directamente y sabes el precio antes de empezar.",
    primaryCta: "Pide tu auditoría gratis",
    secondaryCta: "Escríbeme por WhatsApp",
    trust: ["Landing desde 600 €", "Precio y plazos por escrito", "Sin agencia ni comerciales"],
    cardValue: "191 personas",
    cardLabel: "gestionadas en el sistema que desarrollé, en producción",
    cardCta: "Ver el caso",
    ticker: [
      "Webs para empresas",
      "Landings que convierten",
      "Automatización con IA",
      "WhatsApp automatizado",
      "Software a medida",
      "Mantenimiento y mejoras",
    ],
  },
  services: {
    eyebrow: "Qué resuelvo",
    title: "Empieza por lo que más te frena hoy",
    subtitle: "No hace falta contratarlo todo. Elegimos un problema y lo resolvemos bien.",
    see: "Ver cómo lo hago",
    items: {
      web: {
        pain: "«Mi web no me trae clientes»",
        offer: "Web o landing · desde 600 €",
        description:
          "Una web que explica en segundos qué haces, por qué elegirte y cómo pedirte presupuesto. Pensada para móvil y para que Google te encuentre.",
        bullets: [
          "Mensaje y estructura pensados para el contacto",
          "Formulario y WhatsApp siempre a mano",
          "SEO local para aparecer en tu zona",
        ],
      },
      automatizacion: {
        pain: "«Perdemos horas copiando datos»",
        offer: "Automatización con IA",
        description:
          "Conecto las herramientas que ya usáis — formularios, email, hojas, WhatsApp — y quito lo repetitivo. La IA solo entra si ahorra tiempo de verdad.",
        bullets: [
          "Avisos y seguimientos que salen solos",
          "Datos que pasan entre herramientas sin copiar",
          "Menos errores y menos olvidos",
        ],
      },
      software: {
        pain: "«Excel y los chats ya no dan más de sí»",
        offer: "Software a medida",
        description:
          "Una aplicación hecha para cómo trabaja tu equipo: roles, permisos, informes y un único sitio fiable para la información.",
        bullets: [
          "Cada persona ve lo que necesita",
          "Informes sin montar hojas a mano",
          "Crece contigo cuando abres otro centro",
        ],
      },
    },
  },
  work: {
    eyebrow: "Caso real · Software interno",
    title: "De hojas y chats a un sistema que se usa cada día",
    subtitle:
      "Una empresa con varios centros gestionaba turnos, fichajes y vacaciones entre hojas y mensajes. Diseñé y construí la aplicación que hoy lo centraliza.",
    beforeLabel: "Antes",
    before: "Turnos, fichajes y solicitudes repartidos entre hojas, memoria y mensajes sueltos.",
    afterLabel: "Después",
    after: "Un único sistema con permisos por rol, visibilidad por centro e informes al momento.",
    cta: "Leer el caso completo",
    note: "Y esta web también la he diseñado y programado yo.",
  },
  calculator: {
    eyebrow: "Calculadora",
    title: "¿Cuánto te cuesta hacer las cosas a mano?",
    subtitle:
      "Pon los datos de tu empresa: copiar datos, pasar pedidos, mandar avisos, montar informes… Es una estimación, pero suele sorprender.",
    people: "Personas que hacen tareas repetitivas",
    hours: "Horas por persona a la semana",
    cost: "Coste por hora (€)",
    hoursResult: "horas al año",
    moneyResult: "al año en trabajo repetitivo",
    half: "Automatizando solo la mitad recuperas {money} al año.",
    method: "Cálculo: personas × horas × 46 semanas laborables × coste por hora.",
    cta: "Quiero recuperar ese tiempo",
    whatsappTemplate:
      "Hola Andrei, según tu calculadora perdemos unas {hours} horas al año en tareas repetitivas. ¿Vemos qué se puede automatizar?",
  },
  why: {
    eyebrow: "Por qué conmigo",
    title: "Sin agencia, sin humo, sin sorpresas",
    items: [
      {
        title: "Hablas con quien lo construye",
        text: "Sin comerciales ni intermediarios. Quien escucha tu problema es quien lo resuelve.",
      },
      {
        title: "Precio cerrado por escrito",
        text: "Alcance, plazos y precio antes de empezar. Sin extras inventados a mitad de camino.",
      },
      {
        title: "Primero tu negocio",
        text: "He construido software que un equipo real usa a diario. Empiezo por cómo trabajáis, no por la tecnología.",
      },
      {
        title: "Si no compensa, te lo digo",
        text: "Prefiero perder un proyecto a venderte algo que no necesitas.",
      },
      {
        title: "Sigo contigo después",
        text: "Mantenimiento, mejoras y nuevas automatizaciones cuando las necesites.",
      },
      {
        title: "Cerca y en remoto",
        text: "En La Rioja para vernos en persona. En remoto para el resto de España.",
      },
    ],
  },
  pricing: {
    eyebrow: "Precios",
    title: "Precios claros desde el principio",
    subtitle:
      "Cada proyecto lleva su propuesta cerrada. Esto es para que sepas por dónde empezamos.",
    badge: "Punto de partida",
    items: [
      {
        name: "Landing para captar clientes",
        price: "desde 600 €",
        description: "Una página que explica tu oferta y convierte visitas en contactos.",
        includes: [
          "Diseño a medida en móvil y escritorio",
          "Formulario o WhatsApp",
          "Publicación y puesta en marcha",
        ],
        featured: true,
      },
      {
        name: "Web de varias secciones",
        price: "Según alcance",
        description: "Servicios, proyectos, sobre ti… Para empresas que necesitan contar más.",
        includes: [
          "Propuesta tras la primera conversación",
          "Precio y plazos antes de empezar",
          "Sin sorpresas de última hora",
        ],
      },
      {
        name: "Automatización y software",
        price: "Según alcance",
        description: "De procesos manuales y hojas sueltas a un sistema que trabaja por vosotros.",
        includes: [
          "Análisis de cómo trabajáis hoy",
          "Propuesta con alcance cerrado",
          "Soporte después de lanzar",
        ],
      },
      {
        name: "Mantenimiento y mejoras",
        price: "Según acuerdo",
        description: "Para no quedarte solo tras el lanzamiento.",
        includes: [
          "Soporte y cambios",
          "Mejoras con el uso real",
          "SEO e integraciones bajo demanda",
        ],
      },
    ],
    note: "Tras hablar te mando una propuesta con precio, plazos y qué incluye. Tú decides si seguimos.",
    cta: "Pedir propuesta",
  },
  process: {
    eyebrow: "Cómo trabajamos",
    title: "De la primera conversación a tenerlo funcionando",
    subtitle: "Sabes qué vas a recibir y cuánto cuesta antes de empezar.",
    steps: [
      {
        title: "Me cuentas qué te frena",
        description: "Por WhatsApp o formulario. No hace falta tenerlo todo claro.",
      },
      {
        title: "Te envío una propuesta",
        description: "Con precio, plazos y qué incluye. Tú decides si seguimos.",
      },
      {
        title: "Construyo y te enseño avances",
        description: "Ves cómo va el proyecto y lo ajustamos sobre la marcha.",
      },
      {
        title: "Publicamos y sigo contigo",
        description: "Lo dejamos funcionando. Si quieres, seguimos con mejoras y soporte.",
      },
    ],
  },
  testimonials: {
    title: "Lo que dicen quienes ya han trabajado conmigo",
    subtitle: "Opiniones ligadas a proyectos reales de la web.",
    items: [
      {
        quote:
          "Pasamos de turnos y fichajes repartidos en hojas y chats a un sistema que el equipo usa cada día. Menos improvisación entre centros y más control para administración.",
        name: "Laura M.",
        role: "Responsable de operaciones",
        projectSlug: "gestion-personal",
        projectLabel: "Proyecto: Gestión de Personal",
      },
    ],
  },
  faq: {
    eyebrow: "Dudas",
    title: "Preguntas frecuentes",
    subtitle: "Lo que suelen preguntarme antes de escribir.",
    items: [
      {
        question: "¿Qué incluye la auditoría gratuita?",
        answer:
          "Reviso tu web o el proceso que quieres mejorar y te envío por escrito las mejoras con más impacto, con una estimación de precio y plazos. Sin compromiso.",
      },
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
        question: "¿Y si todavía no tengo web?",
        answer:
          "Mejor: empezamos bien desde el principio. Te propongo la estructura y te digo el precio antes de empezar.",
      },
      {
        question: "¿Trabajas fuera de La Rioja?",
        answer: "Sí. Estoy en La Rioja y trabajo con empresas de toda España, en remoto.",
      },
      {
        question: "¿Automatización con IA para cualquier proceso?",
        answer:
          "No. Primero miramos si el proceso se puede ordenar y si automatizarlo ahorra tiempo de verdad. Si no aporta, te lo digo.",
      },
      {
        question: "¿Haces mantenimiento después de publicar?",
        answer: "Sí. Soporte, mejoras, cambios de contenido e integraciones cuando lo necesites.",
      },
    ],
  },
  caseStudy: caseStudyUiEs,
  about: {
    eyebrow: "Sobre mí",
    title: "Soy Andrei. Construyo herramientas que se usan de verdad.",
    story:
      "No soy una agencia anónima: soy desarrollador en La Rioja, con titulación oficial en Desarrollo de Aplicaciones Multiplataforma. He diseñado y programado el sistema de gestión de personal que hoy usa una empresa con varios centros.",
    story2:
      "Me importa cómo funciona tu empresa por dentro, no solo cómo se ve tu web. Por eso empiezo escuchando y propongo solo lo que encaja.",
    credentials: [
      "Titulación oficial DAM",
      "Software en producción, usado a diario",
      "La Rioja · toda España en remoto",
    ],
    linkedinCta: "LinkedIn",
    cta: "Hablemos",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Pide tu auditoría gratis o cuéntame tu proyecto",
    subtitle: "Con dos líneas me basta. Te respondo yo, no un equipo comercial.",
    auditTitle: "Qué recibes",
    auditItems: [
      "Una revisión de tu web o del proceso que quieres mejorar",
      "Las mejoras con más impacto, explicadas por escrito",
      "Una estimación de precio y plazos, sin compromiso",
    ],
    needLabel: "¿Qué necesitas?",
    needs: {
      web: "Web o landing",
      automatizacion: "Automatización",
      software: "Software a medida",
      unsure: "Aún no lo sé",
    },
    site: "Tu web actual",
    sitePlaceholder: "tuempresa.com",
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    submit: "Enviar",
    sending: "Enviando...",
    success: "Mensaje enviado. Te respondo pronto.",
    error: "No se ha podido enviar. Inténtalo de nuevo o escríbeme por WhatsApp.",
    whatsapp: "Escribir por WhatsApp",
    namePlaceholder: "Tu nombre",
    emailPlaceholder: "tu@email.com",
    messagePlaceholder: "Qué quieres mejorar en tu empresa.",
    preferChat: "¿Prefieres el chat?",
    privacy: "Usaré tus datos solo para responderte. Más información en la",
    privacyLink: "política de privacidad",
    optional: "opcional",
  },
  footer: {
    tagline: "Webs que consiguen clientes. Sistemas que te devuelven horas.",
    rights: "Todos los derechos reservados.",
    basedIn: "Basado en La Rioja. Trabajo con empresas de toda España.",
    servicesTitle: "Servicios",
    localLinksTitle: "En La Rioja",
    legalTitle: "Legal",
    legalNotice: "Aviso legal",
    privacy: "Privacidad",
    cookies: "Cookies",
    cookieSettings: "Configurar cookies",
  },
  cookies: {
    text: "Uso cookies opcionales de medición para saber cómo se usa la web. Solo se activan si aceptas.",
    accept: "Aceptar",
    reject: "Rechazar",
    more: "Más información",
  },
  whatsappFloat: "WhatsApp",
  whatsappMessage: "Hola Andrei, quiero contarte qué me gustaría mejorar en mi empresa.",
};

const en: Dictionary = {
  positioning: "Web development and AI automation for businesses",
  nav: {
    home: "Home",
    services: "Services",
    work: "Case study",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    cta: "Free audit",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  hero: {
    eyebrow: "Developer based in La Rioja, Spain · Working remotely",
    titleA: "Websites that win clients.",
    titleB: "Systems that give you hours back.",
    support:
      "I design and build the website, automations and internal software for businesses that want to sell more and work with less chaos. You talk to me directly and know the price before we start.",
    primaryCta: "Get your free audit",
    secondaryCta: "Message me on WhatsApp",
    trust: ["Landing pages from €600", "Fixed price and timeline in writing", "No agency, no salespeople"],
    cardValue: "191 people",
    cardLabel: "managed in the system I built, in production",
    cardCta: "See the case",
    ticker: [
      "Business websites",
      "Landing pages that convert",
      "AI automation",
      "Automated WhatsApp",
      "Custom software",
      "Maintenance and improvements",
    ],
  },
  services: {
    eyebrow: "What I solve",
    title: "Start with what's holding you back today",
    subtitle: "You don't need everything at once. We pick one problem and solve it properly.",
    see: "See how I do it",
    items: {
      web: {
        pain: "“My website doesn't bring in clients”",
        offer: "Website or landing page · from €600",
        description:
          "A site that explains in seconds what you do, why choose you and how to ask for a quote. Built for mobile and for Google.",
        bullets: [
          "Message and structure built around contact",
          "Form and WhatsApp always at hand",
          "Local SEO so people nearby find you",
        ],
      },
      automatizacion: {
        pain: "“We lose hours copying data”",
        offer: "AI automation",
        description:
          "I connect the tools you already use — forms, email, spreadsheets, WhatsApp — and remove the repetitive work. AI only comes in when it truly saves time.",
        bullets: [
          "Reminders and follow-ups that send themselves",
          "Data that moves between tools without copying",
          "Fewer errors, fewer things forgotten",
        ],
      },
      software: {
        pain: "“Spreadsheets and chats can't keep up”",
        offer: "Custom software",
        description:
          "An application built around how your team works: roles, permissions, reports and one reliable place for your information.",
        bullets: [
          "Everyone sees what they need",
          "Reports without building spreadsheets by hand",
          "Grows with you when you open another site",
        ],
      },
    },
  },
  work: {
    eyebrow: "Real case · Internal software",
    title: "From spreadsheets and chats to a system used every day",
    subtitle:
      "A company with several work centres managed shifts, clock-ins and holidays across spreadsheets and messages. I designed and built the application that now centralises it.",
    beforeLabel: "Before",
    before: "Shifts, clock-ins and requests scattered across spreadsheets, memory and loose messages.",
    afterLabel: "After",
    after: "One system with role-based permissions, per-centre visibility and instant reports.",
    cta: "Read the full case",
    note: "And I designed and built this website too.",
  },
  calculator: {
    eyebrow: "Calculator",
    title: "How much does manual work cost you?",
    subtitle:
      "Enter your company's numbers: copying data, entering orders, sending reminders, building reports… It's an estimate, but it's usually eye-opening.",
    people: "People doing repetitive tasks",
    hours: "Hours per person per week",
    cost: "Cost per hour (€)",
    hoursResult: "hours a year",
    moneyResult: "a year on repetitive work",
    half: "Automating just half gives you back {money} a year.",
    method: "Calculation: people × hours × 46 working weeks × hourly cost.",
    cta: "I want that time back",
    whatsappTemplate:
      "Hi Andrei, according to your calculator we lose around {hours} hours a year on repetitive tasks. Can we look at what could be automated?",
  },
  why: {
    eyebrow: "Why me",
    title: "No agency, no fluff, no surprises",
    items: [
      {
        title: "You talk to the person who builds it",
        text: "No salespeople or middlemen. Whoever hears your problem is whoever solves it.",
      },
      {
        title: "Fixed price in writing",
        text: "Scope, timeline and price before we start. No extras invented halfway through.",
      },
      {
        title: "Your business comes first",
        text: "I've built software a real team uses every day. I start with how you work, not with technology.",
      },
      {
        title: "If it isn't worth it, I'll tell you",
        text: "I'd rather lose a project than sell you something you don't need.",
      },
      {
        title: "I stay with you afterwards",
        text: "Maintenance, improvements and new automations whenever you need them.",
      },
      {
        title: "Local and remote",
        text: "In La Rioja to meet in person. Remote for the rest of Spain and beyond.",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Clear prices from the start",
    subtitle: "Every project gets a fixed proposal. This is so you know where we start.",
    badge: "Starting point",
    items: [
      {
        name: "Landing page to win clients",
        price: "from €600",
        description: "One page that explains your offer and turns visits into enquiries.",
        includes: [
          "Custom design for mobile and desktop",
          "Form or WhatsApp",
          "Launch and setup",
        ],
        featured: true,
      },
      {
        name: "Multi-section website",
        price: "Depends on scope",
        description: "Services, projects, about you… For businesses with more to tell.",
        includes: [
          "Proposal after our first conversation",
          "Price and timeline before we start",
          "No last-minute surprises",
        ],
      },
      {
        name: "Automation and software",
        price: "Depends on scope",
        description: "From manual processes and loose spreadsheets to a system that works for you.",
        includes: [
          "Analysis of how you work today",
          "Proposal with fixed scope",
          "Support after launch",
        ],
      },
      {
        name: "Maintenance and improvements",
        price: "By agreement",
        description: "So you're not left alone after launch.",
        includes: [
          "Support and changes",
          "Improvements based on real use",
          "SEO and integrations on demand",
        ],
      },
    ],
    note: "After we talk, I send a proposal with price, timeline and what's included. You decide whether to go ahead.",
    cta: "Request a proposal",
  },
  process: {
    eyebrow: "How we work",
    title: "From the first conversation to a working result",
    subtitle: "You know what you'll get and what it costs before we start.",
    steps: [
      {
        title: "Tell me what's holding you back",
        description: "Via WhatsApp or the form. You don't need it all figured out.",
      },
      {
        title: "I send you a proposal",
        description: "With price, timeline and what's included. You decide whether we continue.",
      },
      {
        title: "I build and show progress",
        description: "You see how it's going and we adjust along the way.",
      },
      {
        title: "We launch and I stay with you",
        description: "We leave it working. If you want, we continue with improvements and support.",
      },
    ],
  },
  testimonials: {
    title: "What people I've worked with say",
    subtitle: "Feedback tied to real projects on this site.",
    items: [
      {
        quote:
          "We went from shifts and clock-ins scattered across spreadsheets and chats to a system the team uses every day.",
        name: "Laura M.",
        role: "Operations lead",
        projectSlug: "gestion-personal",
        projectLabel: "Project: Staff management",
      },
    ],
  },
  faq: {
    eyebrow: "Questions",
    title: "Frequently asked questions",
    subtitle: "What people usually ask before getting in touch.",
    items: [
      {
        question: "What does the free audit include?",
        answer:
          "I review your website or the process you want to improve and send you, in writing, the changes with the most impact, plus an estimate of price and timeline. No commitment.",
      },
      {
        question: "How much does a website cost?",
        answer:
          "A landing page starts from €600. Larger projects are quoted by scope, timeline and what's included.",
      },
      {
        question: "How long does a project take?",
        answer:
          "A landing page usually takes days or a few weeks. I confirm it in writing in the proposal.",
      },
      {
        question: "What if I don't have a website yet?",
        answer:
          "Even better: we start properly from day one. I propose the structure and tell you the price before we begin.",
      },
      {
        question: "Do you work outside La Rioja?",
        answer: "Yes. I'm based in La Rioja and work with businesses across Spain, remotely.",
      },
      {
        question: "AI automation for any process?",
        answer:
          "No. First we check whether the process can be organised and whether automating it truly saves time. If it doesn't help, I'll tell you.",
      },
      {
        question: "Do you offer maintenance after launch?",
        answer: "Yes. Support, improvements, content changes and integrations whenever you need them.",
      },
    ],
  },
  caseStudy: caseStudyUiEn,
  about: {
    eyebrow: "About me",
    title: "I'm Andrei. I build tools people actually use.",
    story:
      "I'm not an anonymous agency: I'm a developer based in La Rioja with an official qualification in Multiplatform Application Development. I designed and built the staff management system a multi-site company uses today.",
    story2:
      "I care about how your business works inside, not just how your website looks. That's why I start by listening and only propose what fits.",
    credentials: [
      "Official DAM qualification",
      "Software in production, used daily",
      "La Rioja · remote across Spain",
    ],
    linkedinCta: "LinkedIn",
    cta: "Let's talk",
  },
  contact: {
    eyebrow: "Contact",
    title: "Get your free audit or tell me about your project",
    subtitle: "Two lines are enough. I reply personally, not a sales team.",
    auditTitle: "What you get",
    auditItems: [
      "A review of your website or the process you want to improve",
      "The changes with the most impact, explained in writing",
      "An estimate of price and timeline, no commitment",
    ],
    needLabel: "What do you need?",
    needs: {
      web: "Website or landing",
      automatizacion: "Automation",
      software: "Custom software",
      unsure: "Not sure yet",
    },
    site: "Your current website",
    sitePlaceholder: "yourcompany.com",
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Send",
    sending: "Sending...",
    success: "Message sent. I'll get back to you soon.",
    error: "It couldn't be sent. Try again or message me on WhatsApp.",
    whatsapp: "Message on WhatsApp",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@email.com",
    messagePlaceholder: "What you'd like to improve in your business.",
    preferChat: "Prefer chat?",
    privacy: "I'll only use your details to reply. More in the",
    privacyLink: "privacy policy",
    optional: "optional",
  },
  footer: {
    tagline: "Websites that win clients. Systems that give you hours back.",
    rights: "All rights reserved.",
    basedIn: "Based in La Rioja. Working with businesses across Spain.",
    servicesTitle: "Services",
    localLinksTitle: "In La Rioja",
    legalTitle: "Legal",
    legalNotice: "Legal notice",
    privacy: "Privacy",
    cookies: "Cookies",
    cookieSettings: "Cookie settings",
  },
  cookies: {
    text: "I use optional analytics cookies to understand how the site is used. They only run if you accept.",
    accept: "Accept",
    reject: "Reject",
    more: "More info",
  },
  whatsappFloat: "WhatsApp",
  whatsappMessage: "Hi Andrei, I'd like to tell you what I want to improve in my business.",
};

const ro: Dictionary = {
  positioning: "Dezvoltare web și automatizare cu AI pentru firme",
  nav: {
    home: "Acasă",
    services: "Servicii",
    work: "Caz real",
    pricing: "Prețuri",
    about: "Despre mine",
    contact: "Contact",
    cta: "Audit gratuit",
    openMenu: "Deschide meniul",
    closeMenu: "Închide meniul",
    language: "Limbă",
  },
  hero: {
    eyebrow: "Programator în La Rioja · Lucrez cu toată Spania",
    titleA: "Site-uri care aduc clienți.",
    titleB: "Sisteme care îți dau ore înapoi.",
    support:
      "Proiectez și programez site-ul, automatizările și software-ul intern pentru firme care vor să vândă mai mult și să lucreze cu mai puțin haos. Vorbești direct cu mine și știi prețul înainte să începem.",
    primaryCta: "Cere auditul gratuit",
    secondaryCta: "Scrie-mi pe WhatsApp",
    trust: ["Landing page de la 600 €", "Preț și termene în scris", "Fără agenție, fără agenți de vânzări"],
    cardValue: "191 de persoane",
    cardLabel: "gestionate în sistemul pe care l-am dezvoltat, în producție",
    cardCta: "Vezi cazul",
    ticker: [
      "Site-uri pentru firme",
      "Landing pages care convertesc",
      "Automatizare cu AI",
      "WhatsApp automatizat",
      "Software la comandă",
      "Mentenanță și îmbunătățiri",
    ],
  },
  services: {
    eyebrow: "Ce rezolv",
    title: "Începe cu ce te frânează cel mai mult azi",
    subtitle: "Nu trebuie să contractezi totul deodată. Alegem o problemă și o rezolvăm bine.",
    see: "Vezi cum lucrez",
    items: {
      web: {
        pain: "„Site-ul meu nu-mi aduce clienți”",
        offer: "Site sau landing · de la 600 €",
        description:
          "Un site care explică în câteva secunde ce faci, de ce să te aleagă și cum să-ți ceară o ofertă. Gândit pentru mobil și pentru Google.",
        bullets: [
          "Mesaj și structură gândite pentru contact",
          "Formular și WhatsApp mereu la îndemână",
          "SEO local ca să te găsească în zona ta",
        ],
      },
      automatizacion: {
        pain: "„Pierdem ore copiind date”",
        offer: "Automatizare cu AI",
        description:
          "Conectez instrumentele pe care le folosiți deja — formulare, email, tabele, WhatsApp — și elimin munca repetitivă. AI-ul intră doar dacă economisește timp cu adevărat.",
        bullets: [
          "Notificări și follow-up-uri care pleacă singure",
          "Date care trec între aplicații fără copiere",
          "Mai puține greșeli și uitări",
        ],
      },
      software: {
        pain: "„Excelul și chaturile nu mai fac față”",
        offer: "Software la comandă",
        description:
          "O aplicație făcută după cum lucrează echipa ta: roluri, permisiuni, rapoarte și un singur loc de încredere pentru informații.",
        bullets: [
          "Fiecare vede ce are nevoie",
          "Rapoarte fără tabele făcute de mână",
          "Crește odată cu firma",
        ],
      },
    },
  },
  work: {
    eyebrow: "Caz real · Software intern",
    title: "De la tabele și chaturi la un sistem folosit zilnic",
    subtitle:
      "O firmă cu mai multe centre gestiona ture, pontaje și concedii între tabele și mesaje. Am proiectat și construit aplicația care centralizează acum totul.",
    beforeLabel: "Înainte",
    before: "Ture, pontaje și cereri împrăștiate între tabele, memorie și mesaje.",
    afterLabel: "După",
    after: "Un singur sistem cu permisiuni pe roluri, vizibilitate pe centru și rapoarte imediate.",
    cta: "Citește cazul complet",
    note: "Și acest site l-am proiectat și programat tot eu.",
  },
  calculator: {
    eyebrow: "Calculator",
    title: "Cât te costă munca făcută de mână?",
    subtitle:
      "Pune datele firmei tale: copiat date, introdus comenzi, trimis notificări, făcut rapoarte… E o estimare, dar de obicei surprinde.",
    people: "Persoane care fac sarcini repetitive",
    hours: "Ore pe persoană pe săptămână",
    cost: "Cost pe oră (€)",
    hoursResult: "ore pe an",
    moneyResult: "pe an pe muncă repetitivă",
    half: "Automatizând doar jumătate, recuperezi {money} pe an.",
    method: "Calcul: persoane × ore × 46 de săptămâni lucrătoare × cost pe oră.",
    cta: "Vreau timpul ăsta înapoi",
    whatsappTemplate:
      "Bună Andrei, după calculatorul tău pierdem în jur de {hours} ore pe an cu sarcini repetitive. Vedem ce se poate automatiza?",
  },
  why: {
    eyebrow: "De ce eu",
    title: "Fără agenție, fără vorbe goale, fără surprize",
    items: [
      {
        title: "Vorbești cu cine construiește",
        text: "Fără agenți de vânzări sau intermediari. Cine îți ascultă problema e cel care o rezolvă.",
      },
      {
        title: "Preț fix, în scris",
        text: "Scop, termene și preț înainte să începem. Fără costuri inventate pe parcurs.",
      },
      {
        title: "Întâi afacerea ta",
        text: "Am construit software pe care o echipă reală îl folosește zilnic. Pornesc de la cum lucrați, nu de la tehnologie.",
      },
      {
        title: "Dacă nu merită, îți spun",
        text: "Prefer să pierd un proiect decât să-ți vând ceva de care nu ai nevoie.",
      },
      {
        title: "Rămân alături și după",
        text: "Mentenanță, îmbunătățiri și automatizări noi când ai nevoie.",
      },
      {
        title: "Aproape și la distanță",
        text: "În La Rioja ne putem vedea față în față. La distanță pentru restul Spaniei.",
      },
    ],
  },
  pricing: {
    eyebrow: "Prețuri",
    title: "Prețuri clare de la început",
    subtitle: "Fiecare proiect primește o ofertă fixă. Asta ca să știi de unde pornim.",
    badge: "Punct de plecare",
    items: [
      {
        name: "Landing page pentru clienți",
        price: "de la 600 €",
        description: "O pagină care îți explică oferta și transformă vizitele în contacte.",
        includes: [
          "Design personalizat pe mobil și desktop",
          "Formular sau WhatsApp",
          "Publicare și punere în funcțiune",
        ],
        featured: true,
      },
      {
        name: "Site cu mai multe secțiuni",
        price: "În funcție de proiect",
        description: "Servicii, proiecte, despre tine… Pentru firme care au mai multe de spus.",
        includes: [
          "Ofertă după prima discuție",
          "Preț și termene înainte de start",
          "Fără surprize de ultim moment",
        ],
      },
      {
        name: "Automatizare și software",
        price: "În funcție de proiect",
        description: "De la procese manuale și tabele la un sistem care lucrează pentru voi.",
        includes: [
          "Analiza modului în care lucrați azi",
          "Ofertă cu scop închis",
          "Suport după lansare",
        ],
      },
      {
        name: "Mentenanță și îmbunătățiri",
        price: "Conform acordului",
        description: "Ca să nu rămâi singur după lansare.",
        includes: [
          "Suport și modificări",
          "Îmbunătățiri după utilizarea reală",
          "SEO și integrări la cerere",
        ],
      },
    ],
    note: "După ce vorbim, îți trimit o ofertă cu preț, termene și ce include. Tu decizi dacă mergem mai departe.",
    cta: "Cere o ofertă",
  },
  process: {
    eyebrow: "Cum lucrăm",
    title: "De la prima discuție la ceva care funcționează",
    subtitle: "Știi ce primești și cât costă înainte să începem.",
    steps: [
      {
        title: "Îmi spui ce te frânează",
        description: "Pe WhatsApp sau prin formular. Nu trebuie să ai totul clar.",
      },
      {
        title: "Îți trimit o ofertă",
        description: "Cu preț, termene și ce include. Tu decizi dacă continuăm.",
      },
      {
        title: "Construiesc și îți arăt progresul",
        description: "Vezi cum merge proiectul și ajustăm pe parcurs.",
      },
      {
        title: "Lansăm și rămân alături",
        description: "Îl lăsăm funcționând. Dacă vrei, continuăm cu îmbunătățiri și suport.",
      },
    ],
  },
  testimonials: {
    title: "Ce spun cei cu care am lucrat",
    subtitle: "Păreri legate de proiecte reale de pe site.",
    items: [
      {
        quote:
          "Am trecut de la ture și pontaje împrăștiate în tabele și chaturi la un sistem pe care echipa îl folosește zilnic.",
        name: "Laura M.",
        role: "Responsabil operațiuni",
        projectSlug: "gestion-personal",
        projectLabel: "Proiect: Gestionare personal",
      },
    ],
  },
  faq: {
    eyebrow: "Întrebări",
    title: "Întrebări frecvente",
    subtitle: "Ce mă întreabă oamenii de obicei înainte să-mi scrie.",
    items: [
      {
        question: "Ce include auditul gratuit?",
        answer:
          "Analizez site-ul tău sau procesul pe care vrei să-l îmbunătățești și îți trimit în scris schimbările cu cel mai mare impact, plus o estimare de preț și termene. Fără obligații.",
      },
      {
        question: "Cât costă un site?",
        answer:
          "Un landing page pornește de la 600 €. Proiectele mai mari se calculează după scop, termene și ce includ.",
      },
      {
        question: "Cât durează un proiect?",
        answer:
          "Un landing page durează de obicei câteva zile sau câteva săptămâni. Îți confirm în scris în ofertă.",
      },
      {
        question: "Și dacă încă nu am site?",
        answer:
          "Cu atât mai bine: pornim corect de la început. Îți propun structura și îți spun prețul înainte să începem.",
      },
      {
        question: "Lucrezi și în afara La Rioja?",
        answer: "Da. Sunt în La Rioja și lucrez cu firme din toată Spania, la distanță.",
      },
      {
        question: "Automatizare cu AI pentru orice proces?",
        answer:
          "Nu. Întâi verificăm dacă procesul poate fi ordonat și dacă automatizarea economisește timp cu adevărat. Dacă nu ajută, îți spun.",
      },
      {
        question: "Faci mentenanță după lansare?",
        answer: "Da. Suport, îmbunătățiri, modificări de conținut și integrări când ai nevoie.",
      },
    ],
  },
  caseStudy: caseStudyUiRo,
  about: {
    eyebrow: "Despre mine",
    title: "Sunt Andrei. Construiesc instrumente care chiar se folosesc.",
    story:
      "Nu sunt o agenție anonimă: sunt programator în La Rioja, cu diplomă oficială în Dezvoltarea Aplicațiilor Multiplatformă. Am proiectat și programat sistemul de gestionare a personalului pe care îl folosește azi o firmă cu mai multe centre.",
    story2:
      "Mă interesează cum funcționează firma ta pe dinăuntru, nu doar cum arată site-ul. De aceea încep prin a asculta și propun doar ce se potrivește.",
    credentials: [
      "Diplomă oficială DAM",
      "Software în producție, folosit zilnic",
      "La Rioja · toată Spania la distanță",
    ],
    linkedinCta: "LinkedIn",
    cta: "Hai să vorbim",
  },
  contact: {
    eyebrow: "Contact",
    title: "Cere auditul gratuit sau povestește-mi proiectul",
    subtitle: "Două rânduri îmi ajung. Îți răspund eu personal, nu o echipă de vânzări.",
    auditTitle: "Ce primești",
    auditItems: [
      "O analiză a site-ului tău sau a procesului pe care vrei să-l îmbunătățești",
      "Schimbările cu cel mai mare impact, explicate în scris",
      "O estimare de preț și termene, fără obligații",
    ],
    needLabel: "De ce ai nevoie?",
    needs: {
      web: "Site sau landing",
      automatizacion: "Automatizare",
      software: "Software la comandă",
      unsure: "Încă nu știu",
    },
    site: "Site-ul tău actual",
    sitePlaceholder: "firmata.ro",
    name: "Nume",
    email: "Email",
    message: "Mesaj",
    submit: "Trimite",
    sending: "Se trimite...",
    success: "Mesaj trimis. Îți răspund curând.",
    error: "Nu s-a putut trimite. Încearcă din nou sau scrie-mi pe WhatsApp.",
    whatsapp: "Scrie pe WhatsApp",
    namePlaceholder: "Numele tău",
    emailPlaceholder: "tu@email.com",
    messagePlaceholder: "Ce vrei să îmbunătățești în firma ta.",
    preferChat: "Preferi chatul?",
    privacy: "Îți folosesc datele doar ca să-ți răspund. Mai multe în",
    privacyLink: "politica de confidențialitate",
    optional: "opțional",
  },
  footer: {
    tagline: "Site-uri care aduc clienți. Sisteme care îți dau ore înapoi.",
    rights: "Toate drepturile rezervate.",
    basedIn: "Cu sediul în La Rioja. Lucrez cu firme din toată Spania.",
    servicesTitle: "Servicii",
    localLinksTitle: "În La Rioja",
    legalTitle: "Legal",
    legalNotice: "Mențiuni legale",
    privacy: "Confidențialitate",
    cookies: "Cookie-uri",
    cookieSettings: "Setări cookie-uri",
  },
  cookies: {
    text: "Folosesc cookie-uri opționale de măsurare ca să înțeleg cum e folosit site-ul. Se activează doar dacă accepți.",
    accept: "Accept",
    reject: "Refuz",
    more: "Mai multe",
  },
  whatsappFloat: "WhatsApp",
  whatsappMessage: "Bună Andrei, aș vrea să-ți spun ce vreau să îmbunătățesc în firma mea.",
};

export const dictionaries: Record<Locale, Dictionary> = { es, en, ro };
