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
          "191 personas gestionadas desde la misma herramienta. Alta, datos y vínculo con centro y rol — sin Excel paralelo.",
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
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
