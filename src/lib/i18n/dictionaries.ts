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
    headline: string;
    support: string;
    primaryCta: string;
    secondaryCta: string;
    scrollHint: string;
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
    title: string;
    subtitle: string;
    viewCase: string;
    viewAll: string;
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
    whatsapp: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    preferChat: string;
  };
  footer: {
    rights: string;
    basedIn: string;
    servicesTitle: string;
    localLinksTitle: string;
  };
  whatsappFloat: string;
  whatsappMessage: string;
};

const es: Dictionary = {
  positioning: "Desarrollo web, automatización con IA para empresas",
  nav: {
    services: "Servicios",
    projects: "Proyectos",
    about: "Sobre mí",
    contact: "Contacto",
    cta: "Cuéntame tu proyecto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
  },
  hero: {
    headline:
      "Desarrollo web, automatización con IA para empresas que quieren trabajar mejor.",
    support:
      "Webs pensadas para conseguir clientes. Automatización con IA que ahorra tiempo de verdad.",
    primaryCta: "Cuéntame tu proyecto",
    secondaryCta: "WhatsApp",
    scrollHint: "Descubre más",
  },
  services: {
    title: "Cómo te ayudo",
    subtitle: "Empezamos por lo que más te frena hoy.",
    see: "Ver",
    items: {
      web: {
        title: "Web",
        offer: "Que te escriban.",
        description: "Landings y webs con un camino claro al contacto.",
      },
      automatizacion: {
        title: "Automatización con IA",
        offer: "Menos trabajo a mano.",
        description: "Conecto herramientas y automatizo procesos con IA cuando aporta.",
      },
      software: {
        title: "Software",
        offer: "A medida.",
        description: "Cuando lo que usáis hoy se os queda corto.",
      },
    },
  },
  differentiation: {
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
  },
  portfolio: {
    title: "Proyectos",
    subtitle: "Casos reales, con resultado.",
    viewCase: "Ver caso",
    viewAll: "Ver todos",
  },
  caseStudy: caseStudyUiEs,
  about: {
    eyebrow: "Sobre mí",
    role: "Desarrollo web, automatización con IA para empresas",
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
    title: "¿Tienes un proyecto en mente?",
    subtitle: "Cuéntamelo. Aunque aún no sepas cómo categorizarlo.",
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    submit: "Enviar mensaje",
    sending: "Enviando...",
    success: "Mensaje enviado. Te respondo pronto.",
    whatsapp: "WhatsApp",
    namePlaceholder: "Tu nombre",
    emailPlaceholder: "tu@email.com",
    messagePlaceholder: "Qué quieres mejorar.",
    preferChat: "¿Prefieres escribir por chat?",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    basedIn: "Basado en La Rioja. Trabajo con empresas de toda España.",
    servicesTitle: "Servicios",
    localLinksTitle: "Servicios en La Rioja",
  },
  whatsappFloat: "WhatsApp",
  whatsappMessage: "Hola Andrei, quiero contarte qué me gustaría mejorar en mi empresa.",
};

const en: Dictionary = {
  positioning: "Web development and AI-powered automation for businesses",
  nav: {
    services: "Services",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    cta: "Tell me about your project",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  hero: {
    headline:
      "Web development and AI-powered automation for businesses that want to work better.",
    support:
      "Websites built to win customers. AI-powered automation that actually saves time.",
    primaryCta: "Tell me about your project",
    secondaryCta: "WhatsApp",
    scrollHint: "Discover more",
  },
  services: {
    title: "How I can help",
    subtitle: "We start with whatever is slowing you down most today.",
    see: "View",
    items: {
      web: {
        title: "Web",
        offer: "Get more inquiries.",
        description: "Landings and websites with a clear path to contact you.",
      },
      automatizacion: {
        title: "AI-powered automation",
        offer: "Less manual work.",
        description: "I connect tools and automate processes with AI when it helps.",
      },
      software: {
        title: "Software",
        offer: "Custom-built.",
        description: "When what you use today is no longer enough.",
      },
    },
  },
  differentiation: {
    eyebrow: "Why me",
    title: "Development with a business mindset",
    text: "I care about how it works inside your company, not only how it looks.",
    detail:
      "I have built software that real teams use every day. I start from how you work — every company is different.",
    proofs: [
      { label: "In production", value: "Real daily use" },
      { label: "Operations", value: "Fitted to your company" },
      { label: "Approach", value: "Process first" },
    ],
  },
  portfolio: {
    title: "Projects",
    subtitle: "Real cases, with results.",
    viewCase: "View case",
    viewAll: "View all",
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
    title: "Got a project in mind?",
    subtitle: "Tell me about it — even if you are not sure how to categorize it yet.",
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Send message",
    sending: "Sending...",
    success: "Message sent. I will get back to you soon.",
    whatsapp: "WhatsApp",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@email.com",
    messagePlaceholder: "What would you like to improve?",
    preferChat: "Prefer to chat?",
  },
  footer: {
    rights: "All rights reserved.",
    basedIn: "Based in La Rioja. I work with companies across Spain.",
    servicesTitle: "Services",
    localLinksTitle: "Services in La Rioja",
  },
  whatsappFloat: "WhatsApp",
  whatsappMessage: "Hi Andrei, I would like to tell you what I want to improve in my company.",
};

const ro: Dictionary = {
  positioning: "Dezvoltare web și automatizare cu AI pentru companii",
  nav: {
    services: "Servicii",
    projects: "Proiecte",
    about: "Despre mine",
    contact: "Contact",
    cta: "Spune-mi despre proiectul tău",
    openMenu: "Deschide meniul",
    closeMenu: "Închide meniul",
    language: "Limbă",
  },
  hero: {
    headline:
      "Dezvoltare web și automatizare cu AI pentru companii care vor să lucreze mai bine.",
    support:
      "Site-uri gândite să aducă clienți. Automatizare cu AI care chiar economisește timp.",
    primaryCta: "Spune-mi despre proiectul tău",
    secondaryCta: "WhatsApp",
    scrollHint: "Descoperă mai mult",
  },
  services: {
    title: "Cum te pot ajuta",
    subtitle: "Începem cu ceea ce te încetinește cel mai mult acum.",
    see: "Vezi",
    items: {
      web: {
        title: "Web",
        offer: "Să te contacteze.",
        description: "Landing-uri și site-uri cu un drum clar spre contact.",
      },
      automatizacion: {
        title: "Automatizare cu AI",
        offer: "Mai puțină muncă manuală.",
        description: "Conectez unelte și automatizez procese cu AI când merită.",
      },
      software: {
        title: "Software",
        offer: "La comandă.",
        description: "Când ce folosiți azi nu mai e suficient.",
      },
    },
  },
  differentiation: {
    eyebrow: "De ce eu",
    title: "Dezvoltare cu mentalitate de business",
    text: "Mă interesează cum funcționează în interiorul firmei tale, nu doar cum arată.",
    detail:
      "Am construit software pe care echipe reale îl folosesc zilnic. Plec de la cum lucrați voi — fiecare firmă e diferită.",
    proofs: [
      { label: "În producție", value: "Uz zilnic real" },
      { label: "Operațional", value: "După firma ta" },
      { label: "Abordare", value: "Procesul întâi" },
    ],
  },
  portfolio: {
    title: "Proiecte",
    subtitle: "Cazuri reale, cu rezultat.",
    viewCase: "Vezi cazul",
    viewAll: "Vezi toate",
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
    title: "Ai un proiect în minte?",
    subtitle: "Spune-mi. Chiar dacă încă nu știi cum să-l încadrezi.",
    name: "Nume",
    email: "Email",
    message: "Mesaj",
    submit: "Trimite mesajul",
    sending: "Se trimite...",
    success: "Mesaj trimis. Îți răspund în curând.",
    whatsapp: "WhatsApp",
    namePlaceholder: "Numele tău",
    emailPlaceholder: "tu@email.com",
    messagePlaceholder: "Ce vrei să îmbunătățești.",
    preferChat: "Preferi să scrii pe chat?",
  },
  footer: {
    rights: "Toate drepturile rezervate.",
    basedIn: "Bazat în La Rioja. Lucrez cu companii din toată Spania.",
    servicesTitle: "Servicii",
    localLinksTitle: "Servicii în La Rioja",
  },
  whatsappFloat: "WhatsApp",
  whatsappMessage: "Bună Andrei, vreau să-ți spun ce aș vrea să îmbunătățesc în firma mea.",
};

export const dictionaries: Record<Locale, Dictionary> = { es, en, ro };
