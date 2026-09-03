export type CaseStudyScreenshot = {
  src: string;
  alt: string;
  title: string;
  explanation: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  client: string;
  proof?: string;
  teaser: string;
  coverImage: string;
  coverImageAlt: string;
  context: string;
  problem: string;
  solution: string;
  architecture?: string[];
  stack: string[];
  screenshots: CaseStudyScreenshot[];
  result: string;
  learnings: string[];
  cta: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "gestion-personal",
    title: "Gestión de Personal",
    category: "Software interno",
    metaTitle: "Caso: Gestión de Personal | Andrei Benedec",
    metaDescription:
      "Caso real con capturas: aplicación web de turnos, fichajes y vacaciones en producción, con roles y varios centros.",
    headline: "De hojas y chats a un sistema de personal en producción.",
    client: "Empresa con varios centros de trabajo",
    proof: "En producción · Uso diario · Varios roles",
    teaser:
      "Turnos, fichajes y vacaciones centralizados, con roles reales y uso diario por el equipo.",
    coverImage: "/portfolio/gestion-personal/01-panel-admin.png",
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
        src: "/portfolio/gestion-personal/01-panel-admin.png",
        alt: "Panel de administración con resumen de centros, personas y operaciones",
        title: "Panel de administración",
        explanation:
          "Vista global: centros, personas, turnos, fichajes y vacaciones. Alertas en vivo (solicitudes pendientes, gente fichando, excesos) y acceso rápido a cada módulo. Esto no es un mockup: es el día a día del administrador.",
      },
      {
        src: "/portfolio/gestion-personal/02-centros.png",
        alt: "Listado y detalle de centros de trabajo",
        title: "Centros de trabajo",
        explanation:
          "Varios centros en un solo sistema. La información no se mezcla: cada centro tiene su gente, sus turnos y su operativa.",
      },
      {
        src: "/portfolio/gestion-personal/03-personas.png",
        alt: "Listado de personas y fichas de empleado",
        title: "Personas / empleados",
        explanation:
          "Cientos de personas gestionadas desde la misma herramienta. Alta, datos y vínculo con centro y rol — sin Excel paralelo.",
      },
      {
        src: "/portfolio/gestion-personal/04-turnos-horarios.png",
        alt: "Pantalla de turnos y horarios",
        title: "Turnos y horarios",
        explanation:
          "Planificación de turnos visible para quien tiene que verla. Menos “¿quién trabaja mañana?” por WhatsApp.",
      },
      {
        src: "/portfolio/gestion-personal/05-fichajes.png",
        alt: "Registro y seguimiento de fichajes",
        title: "Fichajes",
        explanation:
          "Quién ha fichado, quién sigue dentro, excesos e incidencias. Control operativo en tiempo casi real, no al final del mes.",
      },
      {
        src: "/portfolio/gestion-personal/06-solicitudes-vacaciones.png",
        alt: "Bandeja de solicitudes y vacaciones",
        title: "Solicitudes y vacaciones",
        explanation:
          "Flujo de petición y validación: el trabajador solicita, el jefe o admin revisa. Menos papeles y menos olvidos.",
      },
      {
        src: "/portfolio/gestion-personal/07-roles.png",
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
  {
    slug: "presencia-digital",
    title: "Presencia digital que genera contactos",
    category: "Web",
    metaTitle: "Caso: Web que genera contactos | Andrei Benedec",
    metaDescription:
      "Caso con recorrido visual: landings y webs comerciales orientadas a que el visitante escriba o llame.",
    headline: "Una web que no solo “está online”: hace fácil contactarte.",
    client: "Negocios locales y profesionales",
    proof: "Foco: que te escriban",
    teaser: "Mensaje claro, estructura simple y un camino obvio al contacto (formulario o WhatsApp).",
    coverImage: "/portfolio/presencia-digital/01-hero.png",
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
        src: "/portfolio/presencia-digital/01-hero.png",
        alt: "Hero de la landing con mensaje y CTA",
        title: "Hero: oferta + siguiente paso",
        explanation:
          "En pocos segundos se entiende qué ofreces y qué hacer. El CTA no está escondido al final.",
      },
      {
        src: "/portfolio/presencia-digital/02-servicios.png",
        alt: "Sección de servicios o propuesta de valor",
        title: "Servicios / propuesta",
        explanation:
          "Bloques cortos: qué haces y para quién. Sin relleno que diluya el mensaje.",
      },
      {
        src: "/portfolio/presencia-digital/03-prueba.png",
        alt: "Sección de prueba social o confianza",
        title: "Prueba / confianza",
        explanation:
          "Elementos que reducen duda antes de escribir: experiencia, enfoque o casos, según la empresa.",
      },
      {
        src: "/portfolio/presencia-digital/04-contacto.png",
        alt: "Formulario de contacto o WhatsApp visible",
        title: "Contacto a un clic",
        explanation:
          "Formulario o WhatsApp visibles. El producto de la página es la conversación, no el scroll.",
      },
      {
        src: "/portfolio/presencia-digital/05-movil.png",
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
  {
    slug: "procesos-inteligentes",
    title: "Menos trabajo a mano",
    category: "Automatización",
    metaTitle: "Caso: Automatización de procesos | Andrei Benedec",
    metaDescription:
      "Caso con recorrido visual: ordenar y automatizar tareas repetitivas para reducir errores y tiempo perdido.",
    headline: "Cuando el mismo proceso se hace a mano cada semana, se puede ordenar.",
    client: "Empresas con tareas repetitivas",
    proof: "Menos copiar · Menos olvidos · Menos errores",
    teaser: "Mapear el proceso, conectar herramientas y quitar el copiar/pegar entre Excel y WhatsApp.",
    coverImage: "/portfolio/procesos-inteligentes/01-flujo.png",
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
        src: "/portfolio/procesos-inteligentes/01-flujo.png",
        alt: "Diagrama o vista del flujo automatizado",
        title: "Flujo automatizado",
        explanation:
          "El proceso deja de vivir en la cabeza de alguien: pasos, ramas y resultados visibles.",
      },
      {
        src: "/portfolio/procesos-inteligentes/02-antes-despues.png",
        alt: "Comparativa del proceso manual frente al automatizado",
        title: "Antes → después",
        explanation:
          "Qué se hacía a mano (Excel, chats, listas) y qué queda automatizado. El contraste vende el valor.",
      },
      {
        src: "/portfolio/procesos-inteligentes/03-integraciones.png",
        alt: "Conexiones entre herramientas de la empresa",
        title: "Integraciones",
        explanation:
          "Herramientas que ya usáis conectadas: menos copiar datos de un sitio a otro.",
      },
      {
        src: "/portfolio/procesos-inteligentes/04-avisos.png",
        alt: "Avisos o notificaciones del flujo",
        title: "Avisos y excepciones",
        explanation:
          "Cuando algo falla o necesita revisión humana, el sistema avisa. No depende de memoria.",
      },
      {
        src: "/portfolio/procesos-inteligentes/05-resultado.png",
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
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
