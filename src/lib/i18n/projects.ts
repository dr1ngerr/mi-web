import type { Locale } from "./config";

export const PROJECT_SLUGS = [
  "gestion-personal",
] as const;

export type ProjectSlug = (typeof PROJECT_SLUGS)[number];

export type ProjectScreenshotCopy = {
  alt: string;
  title: string;
  explanation: string;
};

export type ProjectCopy = {
  stats: { value: string; label: string }[];
  title: string;
  category: string;
  proof: string;
  imageAlt: string;
  headline: string;
  client: string;
  teaser: string;
  coverImageAlt: string;
  context: string;
  problem: string;
  solution: string;
  architecture: string[];
  stack: string[];
  screenshots: ProjectScreenshotCopy[];
  result: string;
  learnings: string[];
  cta: string;
};

export type ProjectsDictionary = Record<ProjectSlug, ProjectCopy>;

export function isProjectSlug(value: string): value is ProjectSlug {
  return (PROJECT_SLUGS as readonly string[]).includes(value);
}

export const projectsEs: ProjectsDictionary = {
  "gestion-personal": {
    stats: [
      { value: "191", label: "personas en el sistema" },
      { value: "9", label: "módulos operativos" },
      { value: "3", label: "roles con permisos propios" },
    ],
    title: "Gestión de Personal",
    category: "Software interno",
    proof: "En producción · Uso diario · Varios roles",
    imageAlt: "Panel de administración de gestión de personal y turnos",
    headline: "De hojas y chats a un sistema de personal en producción.",
    client: "Empresa con varios centros de trabajo",
    teaser:
      "Turnos, fichajes y vacaciones centralizados, con roles reales y uso diario por el equipo.",
    coverImageAlt: "Panel de administración de gestión de personal y turnos",
    context:
      "Empresa con varios centros. Trabajadores, jefes y administración necesitaban ver información distinta. Parte del día a día vivía en hojas, memoria y mensajes sueltos: turnos, fichajes, vacaciones y solicitudes no compartían un único sitio fiable.",
    problem:
      "Sin un sistema común, cada perfil improvisaba. Poca visibilidad entre centros, más errores al pasar datos y más tiempo perdido en tareas que deberían ser rutinarias. Escalar el equipo o abrir otro centro empeoraba el caos.",
    solution:
      "Diseñé y construí una aplicación web centralizada: empleados, horarios, fichajes y solicitudes, con permisos por rol (trabajador, jefe, administrador). Cada persona ve lo que necesita para su trabajo — ni más ni menos — y la operativa deja de depender de una hoja suelta o de un chat.",
    architecture: [
      "Roles y permisos: trabajador, jefe y administrador",
      "Módulos: centros, personas, turnos/horarios, fichajes, solicitudes, incidencias, informes",
      "Visibilidad por centro y por rol",
      "Uso diario en producción (no demo)",
    ],
    stack: [
      "Aplicación web en uso diario",
      "Roles y permisos (trabajador, jefe, admin)",
      "Varios centros de trabajo",
      "Turnos, fichajes y solicitudes",
      "Operativa de personal",
    ],
    screenshots: [
      {
        alt: "Panel de administración con resumen de centros, personas y operaciones",
        title: "Panel de administración",
        explanation:
          "Vista global: centros, personas, turnos, fichajes y vacaciones. Alertas en vivo (solicitudes pendientes, gente fichando, excesos) y acceso rápido a cada módulo. Esto no es un mockup: es el día a día del administrador.",
      },
      {
        alt: "Listado y detalle de centros de trabajo",
        title: "Centros de trabajo",
        explanation:
          "Varios centros en un solo sistema. La información no se mezcla: cada centro tiene su gente, sus turnos y su operativa.",
      },
      {
        alt: "Listado de personas y fichas de empleado",
        title: "Personas / empleados",
        explanation:
          "191 personas gestionadas desde la misma herramienta. Alta, datos y vínculo con centro y rol — sin Excel paralelo.",
      },
      {
        alt: "Pantalla de turnos y horarios",
        title: "Turnos y horarios",
        explanation:
          "Planificación de turnos visible para quien tiene que verla. Menos “¿quién trabaja mañana?” por WhatsApp.",
      },
      {
        alt: "Registro y seguimiento de fichajes",
        title: "Fichajes",
        explanation:
          "Quién ha fichado, quién sigue dentro, excesos e incidencias. Control operativo en tiempo casi real, no al final del mes.",
      },
      {
        alt: "Bandeja de solicitudes y vacaciones",
        title: "Solicitudes y vacaciones",
        explanation:
          "Flujo de petición y validación: el trabajador solicita, el jefe o admin revisa. Menos papeles y menos olvidos.",
      },
      {
        alt: "Vista según rol de trabajador, jefe o administrador",
        title: "Roles: cada perfil ve lo suyo",
        explanation:
          "Trabajador, jefe y administrador no comparten la misma pantalla. Los permisos evitan ruido y errores de acceso.",
      },
    ],
    result:
      "La aplicación sigue en producción. El equipo trabaja sobre un sistema compartido: menos improvisación, más control sobre turnos, fichajes y solicitudes, y una base sobre la que se puede seguir mejorando.",
    learnings: [
      "El diseño de roles importa tanto como la interfaz: un jefe y un trabajador no necesitan la misma pantalla.",
      "Si el proceso real no se entiende (quién valida qué, en qué centro), el software falla aunque “se vea bien”.",
      "Una herramienta interna solo vale si el equipo la usa cada día — por eso el foco fue operativa, no marketing del producto.",
    ],
    cta: "¿Tu equipo también improvisa con procesos internos? Hablemos.",
  },
};

export const projectsEn: ProjectsDictionary = {
  "gestion-personal": {
    stats: [
      { value: "191", label: "people in the system" },
      { value: "9", label: "operational modules" },
      { value: "3", label: "roles with their own permissions" },
    ],
    title: "Workforce management",
    category: "Internal software",
    proof: "In production · Daily use · Multiple roles",
    imageAlt: "Admin panel for workforce and shift management",
    headline: "From spreadsheets and chats to a live workforce system.",
    client: "Company with multiple work sites",
    teaser:
      "Shifts, clock-ins and time off in one place, with real roles and daily team use.",
    coverImageAlt: "Admin panel for workforce and shift management",
    context:
      "A company with several sites. Workers, managers and admin needed different information. Day-to-day work lived in spreadsheets, memory and scattered messages: shifts, clock-ins, time off and requests did not share one reliable place.",
    problem:
      "Without a shared system, every role improvised. Little visibility across sites, more errors when moving data, and more time lost on tasks that should be routine. Growing the team or opening another site made the chaos worse.",
    solution:
      "I designed and built a central web app: employees, schedules, clock-ins and requests, with role-based permissions (worker, manager, admin). Each person sees what they need for their job — nothing more — and operations no longer depend on a loose spreadsheet or a chat.",
    architecture: [
      "Roles and permissions: worker, manager and admin",
      "Modules: sites, people, shifts/schedules, clock-ins, requests, incidents, reports",
      "Visibility by site and by role",
      "Daily production use (not a demo)",
    ],
    stack: [
      "Web app in daily use",
      "Roles and permissions (worker, manager, admin)",
      "Multiple work sites",
      "Shifts, clock-ins and requests",
      "Workforce operations",
    ],
    screenshots: [
      {
        alt: "Admin panel with summary of sites, people and operations",
        title: "Admin panel",
        explanation:
          "Global view: sites, people, shifts, clock-ins and time off. Live alerts (pending requests, people clocked in, overtime) and quick access to each module. This is not a mockup — it is the admin’s daily work.",
      },
      {
        alt: "List and detail of work sites",
        title: "Work sites",
        explanation:
          "Several sites in one system. Information stays separate: each site has its people, shifts and operations.",
      },
      {
        alt: "People list and employee records",
        title: "People / employees",
        explanation:
          "Hundreds of people managed in the same tool. Onboarding, data and links to site and role — no parallel Excel.",
      },
      {
        alt: "Shifts and schedules screen",
        title: "Shifts and schedules",
        explanation:
          "Shift planning visible to whoever needs it. Fewer “who works tomorrow?” WhatsApp messages.",
      },
      {
        alt: "Clock-in tracking screen",
        title: "Clock-ins",
        explanation:
          "Who clocked in, who is still on site, overtime and incidents. Near real-time operational control — not at month end.",
      },
      {
        alt: "Requests and time-off inbox",
        title: "Requests and time off",
        explanation:
          "Request and approval flow: the worker asks, the manager or admin reviews. Less paperwork and fewer forgotten items.",
      },
      {
        alt: "Views by worker, manager or admin role",
        title: "Roles: each profile sees what they need",
        explanation:
          "Worker, manager and admin do not share the same screen. Permissions cut noise and access mistakes.",
      },
    ],
    result:
      "The app is still in production. The team works on a shared system: less improvisation, more control over shifts, clock-ins and requests, and a base that can keep improving.",
    learnings: [
      "Role design matters as much as the UI: a manager and a worker do not need the same screen.",
      "If the real process is unclear (who approves what, at which site), the software fails even if it “looks good”.",
      "Internal tools only matter if the team uses them every day — so the focus was operations, not product marketing.",
    ],
    cta: "Is your team also improvising internal processes? Let’s talk.",
  },
};

export const projectsRo: ProjectsDictionary = {
  "gestion-personal": {
    stats: [
      { value: "191", label: "persoane în sistem" },
      { value: "9", label: "module operaționale" },
      { value: "3", label: "roluri cu permisiuni proprii" },
    ],
    title: "Gestionarea personalului",
    category: "Software intern",
    proof: "În producție · Uz zilnic · Mai multe roluri",
    imageAlt: "Panou de administrare pentru personal și ture",
    headline: "De la foi și chat-uri la un sistem de personal în producție.",
    client: "Companie cu mai multe centre de lucru",
    teaser:
      "Ture, pontaje și concedii centralizate, cu roluri reale și uz zilnic de către echipă.",
    coverImageAlt: "Panou de administrare pentru personal și ture",
    context:
      "Companie cu mai multe centre. Angajații, șefii și administrația aveau nevoie de informații diferite. Ziua de lucru trăia în foi, memorie și mesaje risipite: turele, pontajele, concediile și cererile nu aveau un singur loc de încredere.",
    problem:
      "Fără un sistem comun, fiecare rol improviză. Vizibilitate slabă între centre, mai multe erori la transferul datelor și timp pierdut pe sarcini care ar trebui să fie de rutină. Extinderea echipei sau deschiderea unui alt centru înrăutățea haosul.",
    solution:
      "Am proiectat și construit o aplicație web centralizată: angajați, orare, pontaje și cereri, cu permisiuni pe rol (angajat, șef, administrator). Fiecare persoană vede ce îi trebuie pentru munca ei — nici mai mult — iar operațiunile nu mai depind de o foaie sau de un chat.",
    architecture: [
      "Roluri și permisiuni: angajat, șef și administrator",
      "Module: centre, persoane, ture/orare, pontaje, cereri, incidente, rapoarte",
      "Vizibilitate pe centru și pe rol",
      "Uz zilnic în producție (nu demo)",
    ],
    stack: [
      "Aplicație web folosită zilnic",
      "Roluri și permisiuni (angajat, șef, admin)",
      "Mai multe centre de lucru",
      "Ture, pontaje și cereri",
      "Operațiuni de personal",
    ],
    screenshots: [
      {
        alt: "Panou de administrare cu sumar de centre, persoane și operațiuni",
        title: "Panou de administrare",
        explanation:
          "Vedere globală: centre, persoane, ture, pontaje și concedii. Alerte live (cereri în așteptare, oameni pontați, depășiri) și acces rapid la fiecare modul. Nu e un mockup: e ziua de lucru a administratorului.",
      },
      {
        alt: "Listă și detaliu ale centrelor de lucru",
        title: "Centre de lucru",
        explanation:
          "Mai multe centre într-un singur sistem. Informația nu se amestecă: fiecare centru are oamenii, turele și operațiunile lui.",
      },
      {
        alt: "Listă de persoane și fișe de angajat",
        title: "Persoane / angajați",
        explanation:
          "Sute de persoane gestionate din aceeași unealtă. Înscriere, date și legătură cu centrul și rolul — fără Excel paralel.",
      },
      {
        alt: "Ecran de ture și orare",
        title: "Ture și orare",
        explanation:
          "Planificarea turelor vizibilă pentru cine trebuie s-o vadă. Mai puține mesaje pe WhatsApp de tip „cine lucrează mâine?”.",
      },
      {
        alt: "Înregistrarea și urmărirea pontajelor",
        title: "Pontaje",
        explanation:
          "Cine a pontat, cine e încă înăuntru, depășiri și incidente. Control operațional aproape în timp real, nu la final de lună.",
      },
      {
        alt: "Inbox de cereri și concedii",
        title: "Cereri și concedii",
        explanation:
          "Flux de cerere și validare: angajatul cere, șeful sau adminul revizuiește. Mai puține hârtii și mai puține uitări.",
      },
      {
        alt: "Vedere după rol de angajat, șef sau administrator",
        title: "Roluri: fiecare profil vede ce-i trebuie",
        explanation:
          "Angajatul, șeful și administratorul nu împart același ecran. Permisiunile reduc zgomotul și greșelile de acces.",
      },
    ],
    result:
      "Aplicația e încă în producție. Echipa lucrează pe un sistem comun: mai puțină improvizație, mai mult control pe ture, pontaje și cereri, și o bază pe care se poate continua îmbunătățirea.",
    learnings: [
      "Designul rolurilor contează la fel de mult ca interfața: un șef și un angajat nu au nevoie de același ecran.",
      "Dacă procesul real nu e înțeles (cine validează ce, în ce centru), software-ul eșuează chiar dacă „arată bine”.",
      "Un tool intern valorează doar dacă echipa îl folosește zilnic — de aceea focusul a fost pe operațiuni, nu pe marketingul produsului.",
    ],
    cta: "Și echipa ta improvizează procese interne? Hai să vorbim.",
  },
};

export const projectDictionaries: Record<Locale, ProjectsDictionary> = {
  es: projectsEs,
  en: projectsEn,
  ro: projectsRo,
};
