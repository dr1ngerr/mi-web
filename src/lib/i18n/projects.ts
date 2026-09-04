import type { Locale } from "./config";

export const PROJECT_SLUGS = [
  "gestion-personal",
  "presencia-digital",
  "procesos-inteligentes",
] as const;

export type ProjectSlug = (typeof PROJECT_SLUGS)[number];

export type ProjectScreenshotCopy = {
  alt: string;
  title: string;
  explanation: string;
};

export type ProjectCopy = {
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
          "Cientos de personas gestionadas desde la misma herramienta. Alta, datos y vínculo con centro y rol — sin Excel paralelo.",
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
  "presencia-digital": {
    title: "Presencia digital que genera contactos",
    category: "Web",
    proof: "Foco: que te escriban",
    imageAlt: "Hero de landing pensada para conseguir contactos",
    headline: "Una web que no solo “está online”: hace fácil contactarte.",
    client: "Negocios locales y profesionales",
    teaser:
      "Mensaje claro, estructura simple y un camino obvio al contacto (formulario o WhatsApp).",
    coverImageAlt: "Hero de landing pensada para conseguir contactos",
    context:
      "Negocios que ya tenían web (o la necesitaban) pero casi nadie escribía ni llamaba. Estar en Google o “tener página” no bastaba: el visitante no entendía la oferta o no sabía qué hacer después.",
    problem:
      "Mensaje genérico, contacto escondido, demasiadas distracciones. La web parecía un folleto, no una herramienta de captación. Resultado: visitas sin conversación.",
    solution:
      "Landings y webs comerciales con oferta clara, estructura corta y una llamada a la acción visible: formulario o WhatsApp. Pensadas para móvil, con el contacto como objetivo — no como detalle al pie.",
    architecture: [
      "Hero con oferta y CTA de contacto",
      "Bloques de servicios / prueba según la empresa",
      "Formulario o WhatsApp siempre a un clic",
      "Diseño responsive priorizando móvil",
    ],
    stack: [
      "Landing / web comercial",
      "Mensaje y llamada a la acción claros",
      "Formulario y/o WhatsApp",
      "Pensada para móvil",
      "Publicación y puesta en marcha",
    ],
    screenshots: [
      {
        alt: "Hero de la landing con mensaje y CTA",
        title: "Hero: oferta + siguiente paso",
        explanation:
          "En pocos segundos se entiende qué ofreces y qué hacer. El CTA no está escondido al final.",
      },
      {
        alt: "Sección de servicios o propuesta de valor",
        title: "Servicios / propuesta",
        explanation:
          "Bloques cortos: qué haces y para quién. Sin relleno que diluya el mensaje.",
      },
      {
        alt: "Sección de prueba social o confianza",
        title: "Prueba / confianza",
        explanation:
          "Elementos que reducen duda antes de escribir: experiencia, enfoque o casos, según la empresa.",
      },
      {
        alt: "Formulario de contacto o WhatsApp visible",
        title: "Contacto a un clic",
        explanation:
          "Formulario o WhatsApp visibles. El producto de la página es la conversación, no el scroll.",
      },
      {
        alt: "Vista móvil de la landing",
        title: "Vista móvil",
        explanation:
          "La mayoría llega desde el móvil. El contacto tiene que funcionar con el pulgar, no solo en escritorio.",
      },
    ],
    result:
      "El visitante entiende qué ofreces y cómo pedirte presupuesto o una llamada. La web deja de ser decoración y pasa a ser un canal de contacto.",
    learnings: [
      "“Bonito” sin un camino de contacto claro no genera clientes.",
      "Menos secciones y más claridad suelen convertir mejor que un site largo vacío de intención.",
      "WhatsApp y el formulario no son secundarios: son el producto de la página.",
    ],
    cta: "¿Tu web se ve bien pero no genera mensajes? Cuéntame tu caso.",
  },
  "procesos-inteligentes": {
    title: "Menos trabajo a mano",
    category: "Automatización",
    proof: "Menos copiar · Menos olvidos · Menos errores",
    imageAlt: "Vista de automatización de un flujo de trabajo",
    headline: "Cuando el mismo proceso se hace a mano cada semana, se puede ordenar.",
    client: "Empresas con tareas repetitivas",
    teaser:
      "Mapear el proceso, conectar herramientas y quitar el copiar/pegar entre Excel y WhatsApp.",
    coverImageAlt: "Vista de automatización de un flujo de trabajo",
    context:
      "Equipos que pierden horas en tareas que se repiten: copiar datos entre Excel y WhatsApp, revisar listas, recordar avisos. El trabajo depende de memoria y de personas concretas.",
    problem:
      "Lo repetible no está sistematizado. Escala mal, genera errores y quita tiempo a lo que sí aporta valor. Contratar más gente no arregla un proceso frágil.",
    solution:
      "Primero mapear el proceso real (quién, cuándo, dónde falla). Luego conectar lo que ya usáis y automatizar lo repetible: menos copiar/pegar, menos olvidos, menos dependencia de una sola persona.",
    architecture: [
      "Diagnóstico del proceso actual",
      "Conexión entre herramientas en uso",
      "Automatización de pasos repetibles y avisos",
      "Propuesta con alcance cerrado antes de construir",
    ],
    stack: [
      "Análisis de cómo trabajáis hoy",
      "Conexión entre herramientas",
      "Menos pasos a mano",
      "Avisos cuando algo falla",
      "Ahorro solo si se puede medir",
    ],
    screenshots: [
      {
        alt: "Diagrama o vista del flujo automatizado",
        title: "Flujo automatizado",
        explanation:
          "El proceso deja de vivir en la cabeza de alguien: pasos, ramas y resultados visibles.",
      },
      {
        alt: "Comparativa del proceso manual frente al automatizado",
        title: "Antes → después",
        explanation:
          "Qué se hacía a mano (Excel, chats, listas) y qué queda automatizado. El contraste vende el valor.",
      },
      {
        alt: "Conexiones entre herramientas de la empresa",
        title: "Integraciones",
        explanation:
          "Herramientas que ya usáis conectadas: menos copiar datos de un sitio a otro.",
      },
      {
        alt: "Avisos o notificaciones del flujo",
        title: "Avisos y excepciones",
        explanation:
          "Cuando algo falla o necesita revisión humana, el sistema avisa. No depende de memoria.",
      },
      {
        alt: "Métricas o resultado operativo del flujo",
        title: "Resultado operativo",
        explanation:
          "Menos horas en lo repetible y menos errores. El criterio es ahorro real, no “tener automatización”.",
      },
    ],
    result:
      "Menos pasos a mano y menos fallos. Cada caso se cierra con alcance y precio claros — sin vender automatización por moda.",
    learnings: [
      "Automatizar un proceso mal entendido multiplica el caos.",
      "A veces basta conectar dos herramientas; otras hace falta rediseñar el flujo antes de tocar tecnología.",
      "El criterio es tiempo y errores recuperados, no el número de “integraciones” en un diagrama.",
    ],
    cta: "¿Qué proceso os come tiempo cada semana? Hablemos.",
  },
};

export const projectsEn: ProjectsDictionary = {
  "gestion-personal": {
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
  "presencia-digital": {
    title: "Digital presence that generates leads",
    category: "Web",
    proof: "Focus: get them to reach out",
    imageAlt: "Landing hero designed to generate inquiries",
    headline: "A website that is not just “online”: it makes contacting you easy.",
    client: "Local businesses and professionals",
    teaser:
      "Clear message, simple structure and an obvious path to contact (form or WhatsApp).",
    coverImageAlt: "Landing hero designed to generate inquiries",
    context:
      "Businesses that already had a site (or needed one) but almost nobody wrote or called. Being on Google or “having a page” was not enough: visitors did not understand the offer or what to do next.",
    problem:
      "Generic message, hidden contact, too many distractions. The site felt like a brochure, not a lead tool. Result: visits with no conversation.",
    solution:
      "Commercial landings and websites with a clear offer, short structure and a visible call to action: form or WhatsApp. Built for mobile, with contact as the goal — not a footer detail.",
    architecture: [
      "Hero with offer and contact CTA",
      "Service / proof blocks tailored to the business",
      "Form or WhatsApp always one click away",
      "Responsive design with mobile first",
    ],
    stack: [
      "Commercial landing / website",
      "Clear message and call to action",
      "Form and/or WhatsApp",
      "Built for mobile",
      "Launch and go-live",
    ],
    screenshots: [
      {
        alt: "Landing hero with message and CTA",
        title: "Hero: offer + next step",
        explanation:
          "In a few seconds visitors understand what you offer and what to do. The CTA is not buried at the end.",
      },
      {
        alt: "Services or value proposition section",
        title: "Services / proposition",
        explanation:
          "Short blocks: what you do and for whom. No filler that dilutes the message.",
      },
      {
        alt: "Social proof or trust section",
        title: "Proof / trust",
        explanation:
          "Elements that reduce doubt before writing: experience, focus or cases, depending on the business.",
      },
      {
        alt: "Visible contact form or WhatsApp",
        title: "Contact in one click",
        explanation:
          "Form or WhatsApp in plain sight. The product of the page is the conversation, not the scroll.",
      },
      {
        alt: "Mobile view of the landing",
        title: "Mobile view",
        explanation:
          "Most people arrive on mobile. Contact has to work with a thumb, not only on desktop.",
      },
    ],
    result:
      "Visitors understand what you offer and how to ask for a quote or a call. The site stops being decoration and becomes a contact channel.",
    learnings: [
      "“Pretty” without a clear contact path does not win customers.",
      "Fewer sections and more clarity usually convert better than a long site with no intent.",
      "WhatsApp and the form are not secondary: they are the product of the page.",
    ],
    cta: "Does your site look good but generate no messages? Tell me about your case.",
  },
  "procesos-inteligentes": {
    title: "Less manual work",
    category: "Automation",
    proof: "Less copying · Fewer oversights · Fewer errors",
    imageAlt: "View of a workflow automation",
    headline: "When the same process is done by hand every week, it can be organized.",
    client: "Companies with repetitive tasks",
    teaser:
      "Map the process, connect tools and remove copy/paste between Excel and WhatsApp.",
    coverImageAlt: "View of a workflow automation",
    context:
      "Teams losing hours on repeating tasks: copying data between Excel and WhatsApp, checking lists, remembering reminders. Work depends on memory and specific people.",
    problem:
      "What is repeatable is not systematized. It scales poorly, creates errors and steals time from high-value work. Hiring more people does not fix a fragile process.",
    solution:
      "First map the real process (who, when, where it breaks). Then connect what you already use and automate the repeatable parts: less copy/paste, fewer oversights, less dependence on one person.",
    architecture: [
      "Diagnosis of the current process",
      "Connection between tools already in use",
      "Automation of repeatable steps and alerts",
      "Fixed-scope proposal before building",
    ],
    stack: [
      "Analysis of how you work today",
      "Connecting tools",
      "Fewer manual steps",
      "Alerts when something fails",
      "Savings only when they can be measured",
    ],
    screenshots: [
      {
        alt: "Diagram or view of the automated flow",
        title: "Automated flow",
        explanation:
          "The process no longer lives in someone’s head: steps, branches and outcomes are visible.",
      },
      {
        alt: "Manual process vs automated comparison",
        title: "Before → after",
        explanation:
          "What was done by hand (Excel, chats, lists) and what is now automated. The contrast sells the value.",
      },
      {
        alt: "Connections between company tools",
        title: "Integrations",
        explanation:
          "Tools you already use, connected: less copying data from one place to another.",
      },
      {
        alt: "Flow alerts or notifications",
        title: "Alerts and exceptions",
        explanation:
          "When something fails or needs human review, the system notifies. It does not rely on memory.",
      },
      {
        alt: "Operational metrics or result of the flow",
        title: "Operational result",
        explanation:
          "Fewer hours on repeatable work and fewer errors. The measure is real savings, not “having automation”.",
      },
    ],
    result:
      "Fewer manual steps and fewer failures. Each case closes with clear scope and price — without selling automation as a trend.",
    learnings: [
      "Automating a misunderstood process multiplies the chaos.",
      "Sometimes connecting two tools is enough; other times the flow must be redesigned before touching technology.",
      "The measure is time and errors recovered, not how many “integrations” sit on a diagram.",
    ],
    cta: "Which process eats your team’s time every week? Let’s talk.",
  },
};

export const projectsRo: ProjectsDictionary = {
  "gestion-personal": {
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
  "presencia-digital": {
    title: "Prezență digitală care aduce contacte",
    category: "Web",
    proof: "Focus: să te contacteze",
    imageAlt: "Hero de landing gândit să aducă contacte",
    headline: "Un site care nu e doar „online”: face ușor să te contacteze.",
    client: "Afaceri locale și profesioniști",
    teaser:
      "Mesaj clar, structură simplă și un drum evident spre contact (formular sau WhatsApp).",
    coverImageAlt: "Hero de landing gândit să aducă contacte",
    context:
      "Afaceri care aveau deja site (sau aveau nevoie) dar aproape nimeni nu scria sau suna. Să fii pe Google sau „să ai pagină” nu ajungea: vizitatorul nu înțelegea oferta sau ce să facă după.",
    problem:
      "Mesaj generic, contact ascuns, prea multe distrageri. Site-ul părea un prospect, nu un instrument de captare. Rezultat: vizite fără conversație.",
    solution:
      "Landing-uri și site-uri comerciale cu ofertă clară, structură scurtă și un call to action vizibil: formular sau WhatsApp. Gândite pentru mobil, cu contactul ca obiectiv — nu ca detaliu în subsol.",
    architecture: [
      "Hero cu ofertă și CTA de contact",
      "Blocuri de servicii / dovadă după firmă",
      "Formular sau WhatsApp mereu la un click",
      "Design responsive cu prioritate pe mobil",
    ],
    stack: [
      "Landing / site comercial",
      "Mesaj și call to action clare",
      "Formular și/sau WhatsApp",
      "Gândit pentru mobil",
      "Publicare și punere în funcțiune",
    ],
    screenshots: [
      {
        alt: "Hero-ul landing-ului cu mesaj și CTA",
        title: "Hero: ofertă + pasul următor",
        explanation:
          "În câteva secunde se înțelege ce oferi și ce trebuie făcut. CTA-ul nu e ascuns la final.",
      },
      {
        alt: "Secțiune de servicii sau propunere de valoare",
        title: "Servicii / propunere",
        explanation:
          "Blocuri scurte: ce faci și pentru cine. Fără umplutură care diluează mesajul.",
      },
      {
        alt: "Secțiune de dovadă socială sau încredere",
        title: "Dovadă / încredere",
        explanation:
          "Elemente care reduc îndoiala înainte de a scrie: experiență, focus sau cazuri, după firmă.",
      },
      {
        alt: "Formular de contact sau WhatsApp vizibil",
        title: "Contact la un click",
        explanation:
          "Formular sau WhatsApp vizibile. Produsul paginii e conversația, nu scroll-ul.",
      },
      {
        alt: "Vedere mobilă a landing-ului",
        title: "Vedere mobilă",
        explanation:
          "Majoritatea ajung de pe mobil. Contactul trebuie să meargă cu degetul, nu doar pe desktop.",
      },
    ],
    result:
      "Vizitatorul înțelege ce oferi și cum să ceară o ofertă sau un apel. Site-ul nu mai e decorație și devine canal de contact.",
    learnings: [
      "„Frumos” fără un drum clar de contact nu aduce clienți.",
      "Mai puține secțiuni și mai multă claritate convertesc de obicei mai bine decât un site lung fără intenție.",
      "WhatsApp și formularul nu sunt secundare: sunt produsul paginii.",
    ],
    cta: "Site-ul arată bine, dar nu aduce mesaje? Spune-mi cazul tău.",
  },
  "procesos-inteligentes": {
    title: "Mai puțină muncă manuală",
    category: "Automatizare",
    proof: "Mai puțin copy · Mai puține uitări · Mai puține erori",
    imageAlt: "Vedere a automatizării unui flux de lucru",
    headline: "Când același proces se face de mână în fiecare săptămână, se poate ordona.",
    client: "Companii cu sarcini repetitive",
    teaser:
      "Cartografierea procesului, conectarea uneltelor și eliminarea copy/paste între Excel și WhatsApp.",
    coverImageAlt: "Vedere a automatizării unui flux de lucru",
    context:
      "Echipe care pierd ore pe sarcini care se repetă: copiat date între Excel și WhatsApp, verificat liste, ținut minte alerte. Munca depinde de memorie și de persoane anume.",
    problem:
      "Ce e repetabil nu e sistematizat. Scalează prost, generează erori și ia timp de la ce aduce valoare. Angajarea a mai multă lume nu repară un proces fragil.",
    solution:
      "Mai întâi cartografiez procesul real (cine, când, unde cade). Apoi conectez ce folosiți deja și automatizez ce e repetabil: mai puțin copy/paste, mai puține uitări, mai puțină dependență de o singură persoană.",
    architecture: [
      "Diagnosticul procesului actual",
      "Conectarea uneltelor aflate în uz",
      "Automatizarea pașilor repetabili și a alertelor",
      "Propunere cu scope închis înainte de a construi",
    ],
    stack: [
      "Analiza modului în care lucrați azi",
      "Conectarea uneltelor",
      "Mai puțini pași manuali",
      "Alerte când ceva eșuează",
      "Economie doar dacă se poate măsura",
    ],
    screenshots: [
      {
        alt: "Diagramă sau vedere a fluxului automatizat",
        title: "Flux automatizat",
        explanation:
          "Procesul nu mai trăiește în capul cuiva: pași, ramuri și rezultate vizibile.",
      },
      {
        alt: "Comparație între procesul manual și cel automatizat",
        title: "Înainte → după",
        explanation:
          "Ce se făcea de mână (Excel, chat-uri, liste) și ce rămâne automatizat. Contrastul vinde valoarea.",
      },
      {
        alt: "Conexiuni între uneltele firmei",
        title: "Integrări",
        explanation:
          "Unelte pe care le folosiți deja, conectate: mai puțin copiat de date dintr-un loc în altul.",
      },
      {
        alt: "Alerte sau notificări ale fluxului",
        title: "Alerte și excepții",
        explanation:
          "Când ceva eșuează sau are nevoie de review uman, sistemul anunță. Nu depinde de memorie.",
      },
      {
        alt: "Metrici sau rezultat operațional al fluxului",
        title: "Rezultat operațional",
        explanation:
          "Mai puține ore pe ce e repetabil și mai puține erori. Criteriul e economia reală, nu „să ai automatizare”.",
      },
    ],
    result:
      "Mai puțini pași manuali și mai puține eșecuri. Fiecare caz se închide cu scope și preț clare — fără a vinde automatizarea pe modă.",
    learnings: [
      "Automatizarea unui proces greșit înțeles multiplică haosul.",
      "Uneori ajunge să conectezi două unelte; alteori trebuie redesenat fluxul înainte de a atinge tehnologia.",
      "Criteriul e timpul și erorile recuperate, nu numărul de „integrări” dintr-o diagramă.",
    ],
    cta: "Ce proces vă mănâncă timpul în fiecare săptămână? Hai să vorbim.",
  },
};

export const projectDictionaries: Record<Locale, ProjectsDictionary> = {
  es: projectsEs,
  en: projectsEn,
  ro: projectsRo,
};
