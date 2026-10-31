import type { Locale } from "./config";
import {
  caseStudyUiEn,
  caseStudyUiEs,
  caseStudyUiRo,
  type CaseStudyUiCopy,
} from "./caseStudyUi";

export type Dictionary = {
  positioning: string;
  nav: {
    home: string;
    services: string;
    projects: string;
    about: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    support: string;
    primaryCta: string;
    secondaryCta: string;
    trust: string[];
    proofValue: string;
    proofLabel: string;
    proofCta: string;
  };
  services: {
    title: string;
    subtitle: string;
    see: string;
    items: {
      web: { title: string; offer: string; description: string };
      automatizacion: { title: string; offer: string; description: string };
      software: { title: string; offer: string; description: string };
    };
  };
  differentiation: {
    eyebrow: string;
    title: string;
    text: string;
    detail: string;
    proofs: { label: string; value: string }[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewCase: string;
    note: string;
  };
  process: {
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
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  caseStudy: CaseStudyUiCopy;
  about: {
    eyebrow: string;
    role: string;
    location: string;
    story: string;
    credentials: string[];
    linkedinCta: string;
    cta: string;
  };
  contact: {
    title: string;
    subtitle: string;
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
    nextTitle: string;
    nextSteps: string[];
  };
  footer: {
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
    projects: "Proyectos",
    about: "Sobre mí",
    contact: "Contacto",
    cta: "Pedir propuesta",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
  },
  hero: {
    eyebrow: "Desarrollo web y automatización con IA · La Rioja y toda España",
    headline: "Webs que te traen clientes. Automatizaciones que te devuelven horas.",
    support: "Para empresas que quieren vender más y perder menos tiempo. Hablas directamente conmigo y sabes el precio antes de empezar.",
    primaryCta: "Pedir propuesta",
    secondaryCta: "Escríbeme por WhatsApp",
    trust: [
      "Landing desde 600 €",
      "Precio y plazos cerrados",
      "Trato directo, sin agencia",
    ],
    proofValue: "191 personas",
    proofLabel: "en el sistema de gestión que desarrollé, en producción",
    proofCta: "Ver el caso",
  },
  services: {
    title: "¿Qué te está frenando hoy?",
    subtitle: "Empezamos por lo que más te cuesta. No hace falta contratarlo todo.",
    see: "Ver cómo lo resuelvo",
    items: {
      web: {
        title: "Mi web no me trae clientes",
        offer: "Web o landing, desde 600 €",
        description: "Mensaje claro, pensada para móvil y con el contacto siempre a mano, para que quien entre sepa qué haces y te escriba.",
      },
      automatizacion: {
        title: "Mi equipo pierde horas copiando datos",
        offer: "Automatización con IA",
        description: "Conecto las herramientas que ya usáis y quito lo repetitivo. Si la IA no ahorra tiempo de verdad, no la pongo.",
      },
      software: {
        title: "Nuestras herramientas se quedan cortas",
        offer: "Software a medida",
        description: "De hojas de cálculo y chats sueltos a una aplicación hecha para cómo trabaja tu equipo.",
      },
    },
  },
  differentiation: {
    eyebrow: "Por qué trabajar conmigo",
    title: "Sin agencia de por medio",
    text: "Quien escucha tu problema es quien lo resuelve.",
    detail: "He construido software que un equipo real usa cada día, así que empiezo por cómo trabajáis, no por la tecnología.",
    proofs: [
      { label: "Trato directo", value: "Hablas con quien lo construye" },
      { label: "Precio cerrado", value: "Alcance y plazos por escrito" },
      { label: "Sin humo", value: "Si no compensa, te lo digo" },
    ],
  },
  portfolio: {
    eyebrow: "Caso real",
    title: "De hojas y chats a un sistema que se usa cada día",
    subtitle: "Una empresa con varios centros gestionaba turnos, fichajes y vacaciones entre hojas y mensajes. Diseñé y construí la aplicación que hoy lo centraliza.",
    viewCase: "Leer el caso completo",
    note: "Esta web también la he hecho yo.",
  },
  process: {
    title: "Cómo trabajamos",
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
      {
        quote:
          "La web dejó de ser un folleto online. Ahora el mensaje es claro y la gente nos escribe o nos contacta por WhatsApp sin tener que buscar el teléfono.",
        name: "Carlos R.",
        role: "Negocio local",
        projectSlug: "presencia-digital",
        projectLabel: "Proyecto: Presencia digital",
      },
      {
        quote:
          "Teníamos tareas que se repetían cada semana a mano. Andrei ordenó el proceso y automatizó lo repetible: menos copiar entre herramientas y menos olvidos.",
        name: "Marta S.",
        role: "Gerente de empresa",
        projectSlug: "procesos-inteligentes",
        projectLabel: "Proyecto: Automatización",
      },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    subtitle: "Respuestas claras antes de escribirme.",
    items: [
      {
        question: "¿Qué pasa después de escribirte?",
        answer:
          "Hablamos de lo que necesitas y te envío una propuesta con precio, plazos y qué incluye. Sin compromiso: decides después de verla.",
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
    ],
  },
  caseStudy: caseStudyUiEs,
  about: {
    eyebrow: "Sobre mí",
    role: "Desarrollo web y automatización con IA para empresas",
    location: "La Rioja · Toda España",
    story:
      "No soy una agencia anónima. Entiendo cómo opera una empresa por dentro y propongo lo que encaja — no una plantilla genérica.",
    credentials: [
      "Titulación oficial DAM",
      "Software en producción, usado a diario",
    ],
    linkedinCta: "LinkedIn",
    cta: "Hablemos",
  },
  contact: {
    title: "Cuéntame qué te frena",
    subtitle: "Con dos líneas me basta. Aunque aún no sepas qué necesitas.",
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    submit: "Enviar mensaje",
    sending: "Enviando...",
    success: "Mensaje enviado. Te respondo pronto.",
    error: "No se ha podido enviar. Inténtalo de nuevo o escríbeme por WhatsApp.",
    whatsapp: "WhatsApp",
    namePlaceholder: "Tu nombre",
    emailPlaceholder: "tu@email.com",
    messagePlaceholder: "Qué quieres mejorar en tu empresa.",
    preferChat: "¿Prefieres escribir por chat?",
    privacy: "Usaré tus datos solo para responderte. Más información en la",
    privacyLink: "política de privacidad",
    nextTitle: "Qué pasa después",
    nextSteps: [
      "Leo tu mensaje y te respondo yo, no un equipo comercial.",
      "Hablamos de lo que necesitas.",
      "Te envío una propuesta con precio, plazos y qué incluye.",
    ],
  },
  footer: {
    rights: "Todos los derechos reservados.",
    basedIn: "Basado en La Rioja. Trabajo con empresas de toda España.",
    servicesTitle: "Servicios",
    localLinksTitle: "Servicios en La Rioja",
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
  positioning: "Web development and AI-powered automation for businesses",
  nav: {
    home: "Home",
    services: "Services",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    cta: "Get a proposal",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  hero: {
    eyebrow: "Web development and AI automation · La Rioja and all of Spain",
    headline: "Websites that bring you customers. Automations that give you hours back.",
    support: "For companies that want to sell more and waste less time. You deal with me directly and know the price before we start.",
    primaryCta: "Get a proposal",
    secondaryCta: "Message me on WhatsApp",
    trust: [
      "Landing pages from €600",
      "Fixed price and timeline",
      "Direct contact, no agency",
    ],
    proofValue: "191 people",
    proofLabel: "in the management system I built, live in production",
    proofCta: "See the case",
  },
  services: {
    title: "What is holding you back today?",
    subtitle: "We start with what costs you most. You don't need to buy everything.",
    see: "See how I solve it",
    items: {
      web: {
        title: "My website brings no customers",
        offer: "Website or landing page, from €600",
        description: "A clear message, built for mobile and with contact always at hand, so visitors know what you do and reach out.",
      },
      automatizacion: {
        title: "My team loses hours copying data",
        offer: "AI-powered automation",
        description: "I connect the tools you already use and remove repetitive work. If AI doesn't really save time, I leave it out.",
      },
      software: {
        title: "Our tools are no longer enough",
        offer: "Custom software",
        description: "From spreadsheets and scattered chats to an application built around how your team works.",
      },
    },
  },
  differentiation: {
    eyebrow: "Why work with me",
    title: "No agency in the middle",
    text: "The person who hears your problem is the one who solves it.",
    detail: "I have built software a real team uses every day, so I start from how you work, not from the technology.",
    proofs: [
      {
        label: "Direct contact",
        value: "You talk to the person building it",
      },
      { label: "Fixed price", value: "Scope and timeline in writing" },
      { label: "No hype", value: "If it isn't worth it, I'll say so" },
    ],
  },
  portfolio: {
    eyebrow: "Real case",
    title: "From spreadsheets and chats to a system used every day",
    subtitle: "A multi-site company managed shifts, clock-ins and holidays across spreadsheets and messages. I designed and built the application that now centralizes it.",
    viewCase: "Read the full case",
    note: "I built this website too.",
  },
  process: {
    title: "How we work",
    subtitle: "You know what you'll get and what it costs before we start.",
    steps: [
      {
        title: "Tell me what's holding you back",
        description: "On WhatsApp or through the form. It doesn't need to be fully defined.",
      },
      {
        title: "I send you a proposal",
        description: "With price, timeline and what's included. You decide whether to continue.",
      },
      {
        title: "I build and show you progress",
        description: "You see how it's going and we adjust along the way.",
      },
      {
        title: "We launch and I stay with you",
        description: "We leave it running. If you want, we continue with improvements and support.",
      },
    ],
  },
  testimonials: {
    title: "What people who worked with me say",
    subtitle: "Feedback tied to real projects on this site.",
    items: [
      {
        quote:
          "We went from shifts and clock-ins scattered across spreadsheets and chats to a system the team uses every day. Less improvisation across sites and more control for admin.",
        name: "Laura M.",
        role: "Operations lead",
        projectSlug: "gestion-personal",
        projectLabel: "Project: Workforce management",
      },
      {
        quote:
          "The website stopped being an online brochure. The message is clear now and people write to us or reach us on WhatsApp without hunting for a phone number.",
        name: "Carlos R.",
        role: "Local business owner",
        projectSlug: "presencia-digital",
        projectLabel: "Project: Digital presence",
      },
      {
        quote:
          "We had tasks that repeated by hand every week. Andrei mapped the process and automated the repetitive parts: less copying between tools and fewer oversights.",
        name: "Marta S.",
        role: "Company manager",
        projectSlug: "procesos-inteligentes",
        projectLabel: "Project: Automation",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    subtitle: "Clear answers before you reach out.",
    items: [
      {
        question: "What happens after I contact you?",
        answer:
          "We talk about what you need and I send you a proposal with price, timeline and what's included. No commitment: you decide after seeing it.",
      },
      {
        question: "How much does a website cost?",
        answer:
          "A landing page starts from €600. Larger projects are quoted based on scope, timeline and what's included.",
      },
      {
        question: "How long does a project take?",
        answer:
          "A landing page usually takes days or a few weeks. I confirm timing in writing in the proposal.",
      },
      {
        question: "Do you work outside La Rioja?",
        answer:
          "Yes. I am based in La Rioja and work with companies across Spain, remotely.",
      },
      {
        question: "Do you offer maintenance after launch?",
        answer:
          "Yes. Support, improvements, content updates and integrations when you need them.",
      },
      {
        question: "Is AI automation right for every process?",
        answer:
          "No. First we check whether the process can be organized and whether automation truly saves time. If it doesn't help, I will say so.",
      },
      {
        question: "Do I need a fully defined project before contacting you?",
        answer:
          "No. Tell me what is slowing you down today (customers, time, processes) and I will propose a concrete next step.",
      },
    ],
  },
  caseStudy: caseStudyUiEn,
  about: {
    eyebrow: "About me",
    role: "Web development and AI-powered automation for businesses",
    location: "La Rioja · All of Spain",
    story:
      "I am not an anonymous agency. I understand how a company runs day to day and propose what fits — not a generic template.",
    credentials: [
      "Official DAM qualification",
      "Software in production, used daily",
    ],
    linkedinCta: "LinkedIn",
    cta: "Let's talk",
  },
  contact: {
    title: "Tell me what's holding you back",
    subtitle: "A couple of lines is enough, even if you're not sure what you need yet.",
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Send message",
    sending: "Sending...",
    success: "Message sent. I will get back to you soon.",
    error: "It could not be sent. Please try again or message me on WhatsApp.",
    whatsapp: "WhatsApp",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@email.com",
    messagePlaceholder: "What would you like to improve in your company?",
    preferChat: "Prefer to chat?",
    privacy: "I will only use your data to reply to you. More details in the",
    privacyLink: "privacy policy",
    nextTitle: "What happens next",
    nextSteps: [
      "I read your message and reply myself, not a sales team.",
      "We talk about what you need.",
      "I send you a proposal with price, timeline and what's included.",
    ],
  },
  footer: {
    rights: "All rights reserved.",
    basedIn: "Based in La Rioja. I work with companies across Spain.",
    servicesTitle: "Services",
    localLinksTitle: "Services in La Rioja",
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
    more: "Learn more",
  },
  whatsappFloat: "WhatsApp",
  whatsappMessage: "Hi Andrei, I would like to tell you what I want to improve in my company.",
};

const ro: Dictionary = {
  positioning: "Dezvoltare web și automatizare cu AI pentru companii",
  nav: {
    home: "Acasă",
    services: "Servicii",
    projects: "Proiecte",
    about: "Despre mine",
    contact: "Contact",
    cta: "Cere o propunere",
    openMenu: "Deschide meniul",
    closeMenu: "Închide meniul",
    language: "Limbă",
  },
  hero: {
    eyebrow: "Dezvoltare web și automatizare cu AI · La Rioja și toată Spania",
    headline: "Site-uri care îți aduc clienți. Automatizări care îți dau înapoi ore.",
    support: "Pentru companii care vor să vândă mai mult și să piardă mai puțin timp. Vorbești direct cu mine și știi prețul înainte să începem.",
    primaryCta: "Cere o propunere",
    secondaryCta: "Scrie-mi pe WhatsApp",
    trust: [
      "Landing de la 600 €",
      "Preț și termene fixe",
      "Contact direct, fără agenție",
    ],
    proofValue: "191 de persoane",
    proofLabel: "în sistemul de gestiune dezvoltat de mine, în producție",
    proofCta: "Vezi cazul",
  },
  services: {
    title: "Ce te încetinește azi?",
    subtitle: "Începem cu ce te costă cel mai mult. Nu trebuie să contractezi totul.",
    see: "Vezi cum rezolv",
    items: {
      web: {
        title: "Site-ul meu nu aduce clienți",
        offer: "Site sau landing, de la 600 €",
        description: "Mesaj clar, gândit pentru mobil și cu contactul mereu la îndemână, ca vizitatorul să știe ce faci și să îți scrie.",
      },
      automatizacion: {
        title: "Echipa pierde ore copiind date",
        offer: "Automatizare cu AI",
        description: "Conectez uneltele pe care le folosiți deja și elimin munca repetitivă. Dacă AI nu economisește timp real, nu o folosesc.",
      },
      software: {
        title: "Uneltele noastre nu mai sunt suficiente",
        offer: "Software la comandă",
        description: "De la foi de calcul și chat-uri împrăștiate la o aplicație făcută pentru cum lucrează echipa ta.",
      },
    },
  },
  differentiation: {
    eyebrow: "De ce să lucrezi cu mine",
    title: "Fără agenție la mijloc",
    text: "Cel care îți ascultă problema este cel care o rezolvă.",
    detail: "Am construit software pe care o echipă reală îl folosește zilnic, așa că plec de la cum lucrați voi, nu de la tehnologie.",
    proofs: [
      {
        label: "Contact direct",
        value: "Vorbești cu cel care construiește",
      },
      { label: "Preț fix", value: "Scop și termene în scris" },
      { label: "Fără vorbe goale", value: "Dacă nu merită, îți spun" },
    ],
  },
  portfolio: {
    eyebrow: "Caz real",
    title: "De la foi și chat-uri la un sistem folosit în fiecare zi",
    subtitle: "O firmă cu mai multe centre gestiona ture, pontaje și concedii în foi și mesaje. Am proiectat și construit aplicația care acum le centralizează.",
    viewCase: "Citește cazul complet",
    note: "Și acest site l-am făcut eu.",
  },
  process: {
    title: "Cum lucrăm",
    subtitle: "Știi ce primești și cât costă înainte să începem.",
    steps: [
      {
        title: "Îmi spui ce te încetinește",
        description: "Pe WhatsApp sau prin formular. Nu trebuie să ai totul clar.",
      },
      {
        title: "Îți trimit o propunere",
        description: "Cu preț, termene și ce include. Tu decizi dacă continuăm.",
      },
      {
        title: "Construiesc și îți arăt progresul",
        description: "Vezi cum merge proiectul și ajustăm pe parcurs.",
      },
      {
        title: "Publicăm și rămân alături de tine",
        description: "Lăsăm totul funcțional. Dacă vrei, continuăm cu îmbunătățiri și suport.",
      },
    ],
  },
  testimonials: {
    title: "Ce spun cei care au lucrat deja cu mine",
    subtitle: "Feedback legat de proiecte reale de pe site.",
    items: [
      {
        quote:
          "Am trecut de la ture și pontaje împrăștiate în foi și chat-uri la un sistem pe care echipa îl folosește zilnic. Mai puțină improvizație între centre și mai mult control pentru administrație.",
        name: "Laura M.",
        role: "Responsabilă operațiuni",
        projectSlug: "gestion-personal",
        projectLabel: "Proiect: Gestionarea personalului",
      },
      {
        quote:
          "Site-ul a încetat să fie un prospect online. Mesajul e clar și lumea ne scrie sau ne contactează pe WhatsApp fără să caute numărul de telefon.",
        name: "Carlos R.",
        role: "Afaceri locală",
        projectSlug: "presencia-digital",
        projectLabel: "Proiect: Prezență digitală",
      },
      {
        quote:
          "Aveam sarcini care se repetau de mână în fiecare săptămână. Andrei a ordonat procesul și a automatizat ce e repetabil: mai puțin copy între unelte și mai puține uitări.",
        name: "Marta S.",
        role: "Manager de firmă",
        projectSlug: "procesos-inteligentes",
        projectLabel: "Proiect: Automatizare",
      },
    ],
  },
  faq: {
    title: "Întrebări frecvente",
    subtitle: "Răspunsuri clare înainte să-mi scrii.",
    items: [
      {
        question: "Ce se întâmplă după ce îți scriu?",
        answer:
          "Vorbim despre ce ai nevoie și îți trimit o propunere cu preț, termene și ce include. Fără obligații: decizi după ce o vezi.",
      },
      {
        question: "Cât costă un site?",
        answer:
          "Un landing pornește de la 600 €. Proiectele mai mari se bugetează după scope, termene și ce include.",
      },
      {
        question: "Cât durează un proiect?",
        answer:
          "Un landing durează de obicei zile sau câteva săptămâni. Confirm termenele în scris în propunere.",
      },
      {
        question: "Lucrezi în afara La Rioja?",
        answer:
          "Da. Sunt în La Rioja și lucrez cu companii din toată Spania, de la distanță.",
      },
      {
        question: "Faci mentenanță după publicare?",
        answer:
          "Da. Suport, îmbunătățiri, modificări de conținut și integrări când ai nevoie.",
      },
      {
        question: "Automatizarea cu AI e potrivită pentru orice proces?",
        answer:
          "Nu. Mai întâi vedem dacă procesul poate fi ordonat și dacă automatizarea chiar economisește timp. Dacă nu merită, ți-o spun.",
      },
      {
        question: "Trebuie să am proiectul clar înainte să-ți scriu?",
        answer:
          "Nu. Spune-mi ce te încetinește azi (clienți, timp, procese) și îți propun pasul următor concret.",
      },
    ],
  },
  caseStudy: caseStudyUiRo,
  about: {
    eyebrow: "Despre mine",
    role: "Dezvoltare web și automatizare cu AI pentru companii",
    location: "La Rioja · Toată Spania",
    story:
      "Nu sunt o agenție anonimă. Înțeleg cum funcționează o firmă pe dinăuntru și propun ce se potrivește — nu un șablon generic.",
    credentials: [
      "Calificare oficială DAM",
      "Software în producție, folosit zilnic",
    ],
    linkedinCta: "LinkedIn",
    cta: "Hai să vorbim",
  },
  contact: {
    title: "Spune-mi ce te încetinește",
    subtitle: "Două rânduri sunt suficiente, chiar dacă încă nu știi de ce ai nevoie.",
    name: "Nume",
    email: "Email",
    message: "Mesaj",
    submit: "Trimite mesajul",
    sending: "Se trimite...",
    success: "Mesaj trimis. Îți răspund în curând.",
    error: "Nu s-a putut trimite. Încearcă din nou sau scrie-mi pe WhatsApp.",
    whatsapp: "WhatsApp",
    namePlaceholder: "Numele tău",
    emailPlaceholder: "tu@email.com",
    messagePlaceholder: "Ce vrei să îmbunătățești în firma ta.",
    preferChat: "Preferi să scrii pe chat?",
    privacy: "Îți folosesc datele doar ca să îți răspund. Mai multe detalii în",
    privacyLink: "politica de confidențialitate",
    nextTitle: "Ce urmează",
    nextSteps: [
      "Îți citesc mesajul și îți răspund personal, nu o echipă de vânzări.",
      "Vorbim despre ce ai nevoie.",
      "Îți trimit o propunere cu preț, termene și ce include.",
    ],
  },
  footer: {
    rights: "Toate drepturile rezervate.",
    basedIn: "Bazat în La Rioja. Lucrez cu companii din toată Spania.",
    servicesTitle: "Servicii",
    localLinksTitle: "Servicii în La Rioja",
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
  whatsappMessage: "Bună Andrei, vreau să-ți spun ce aș vrea să îmbunătățesc în firma mea.",
};

export const dictionaries: Record<Locale, Dictionary> = { es, en, ro };
