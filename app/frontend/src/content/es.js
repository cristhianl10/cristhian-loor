export const contenidoEs = {
  locale: 'es',
  metadata: {
    title: 'Cristhian Loor | Desarrollador Fullstack Junior',
    description:
      'Portafolio de Cristhian Loor, desarrollador Fullstack Junior con experiencia en Spring Boot, Angular, React y C#/.NET. Proyectos, decisiones técnicas y UX Research.',
    author: 'Cristhian José Loor Quimí',
    url: 'https://cristhian-loor.vercel.app/es',
    image: 'https://cristhian-loor.vercel.app/social-card.png',
  },
  persona: {
    nombreCompleto: 'Cristhian José Loor Quimí',
    nombreProfesional: 'Cristhian Loor',
    rol: 'Desarrollador Fullstack Junior · Backend Java/Spring Boot',
    ubicacion: 'Guayaquil, Ecuador',
    correo: 'cristhian.loor05@outlook.com',
    github: 'https://github.com/cristhianl10',
    linkedin: 'https://www.linkedin.com/in/cristhian-loor/',
    cv: '/cv-cristhian-loor.pdf',
    idiomas: ['Español nativo', 'Inglés intermedio'],
  },
  navegacion: [
    { etiqueta: 'Proyectos', destino: '#proyectos' },
    { etiqueta: 'Experiencia', destino: '#experiencia' },
    { etiqueta: 'Perfil', destino: '#perfil' },
  ],
  interfaz: {
    saltarContenido: 'Saltar al contenido principal',
    irInicio: 'Ir al inicio',
    abrirMenu: 'Abrir menú',
    cerrarMenu: 'Cerrar menú',
    menuContacto: 'Contacto',
    navegacionPrincipal: 'Navegación principal',
    navegacionPie: 'Enlaces de la página',
    enlacesPrincipales: 'Enlaces principales',
    tecnologias: 'Tecnologías',
    tecnologiasProyecto: 'Tecnologías del proyecto',
    aspectosDestacados: 'Aspectos técnicos destacados',
    rolesImplementados: 'Roles implementados',
    responsabilidades: 'Responsabilidades',
    capas: 'Capas',
    aspectosInteres: 'Aspectos técnicos de interés',
    cambiarAIngles: 'Cambiar el sitio a inglés',
    cambiarAEspanol: 'Cambiar el sitio a español',
    activarModoClaro: 'Activar modo claro',
    activarModoOscuro: 'Activar modo oscuro',
    abrirNuevaPestana: 'abre en una pestaña nueva',
    progresoLectura: 'Progreso de lectura',
    enlacesProyecto: 'Enlaces del proyecto',
    verCaso: 'Ver caso',
    cerrarCaso: 'Cerrar caso',
    verCodigo: 'Ver código',
    verDemo: 'Ver demo',
    verApi: 'Ver API',
    verDocumentacion: 'Ver documentación',
    demoProximamente: 'Demo próximamente',
    copiarCorreo: 'Copiar correo',
    correoCopiado: 'Correo copiado',
  },
  presentacion: {
    etiqueta: '// FULLSTACK JUNIOR — BACKEND',
    descripcion:
      'Desarrollo microservicios con Spring Boot e interfaces con Angular y React. Trabajo con APIs REST, autenticación JWT, bases de datos relacionales y pipelines CI/CD. Complemento el backend con investigación y diseño UX.',
    panel: {
      titulo: 'Enfoque técnico',
      nucleo: 'Backend',
      principales: ['Java / Spring Boot', 'C# / .NET'],
      flujo: ['API', 'Lógica', 'Datos'],
    },
    capasVisual: ['Negocio', 'Dominio', 'Aplicación', 'API'],
    acciones: {
      proyectos: 'Ver proyectos',
      cv: 'Descargar CV',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
  },
  seccionProyectos: {
    etiqueta: '// TRABAJO',
    titulo: 'Proyectos que explican cómo construyo.',
    descripcion:
      'Primero las aplicaciones fullstack, donde la arquitectura, la lógica de negocio y los datos son el centro. Después, las landings y sitios frontend que iré publicando.',
    grupos: {
      fullstack: {
        etiqueta: '// FULLSTACK',
        titulo: 'Aplicaciones fullstack',
        descripcion: 'Backend, frontend y persistencia en un mismo caso. Abre uno para ver la arquitectura, las decisiones y los enlaces.',
      },
      frontend: {
        etiqueta: '// FRONTEND',
        titulo: 'Landings y sitios frontend',
        descripcion: 'Trabajos de interfaz y sitios de una sola página. La selección se irá ampliando.',
      },
    },
    landingsVacio: {
      titulo: 'Landings en preparación',
      descripcion: 'Estoy construyendo una selección de landings y sitios frontend. Cuando estén publicados, aparecerán aquí con su enlace y las decisiones de diseño.',
    },
  },
  proyectos: [
    {
      id: 'payflow',
      indice: '01',
      nombre: 'PayFlow — Billetera digital',
      tipo: 'Transferencias atómicas e idempotentes',
      resumen: 'Transferencias atómicas e idempotentes con libro contable y sesiones JWT.',
      descripcion:
        'Billetera digital de demostración con registro de usuarios, transferencias entre cuentas e historial de movimientos. El foco está en que el saldo no se descuadre y en que una transferencia no se ejecute dos veces.',
      explicacionVisual:
        'La operación se ejecuta de forma atómica e idempotente; el libro contable registra los movimientos para evitar duplicados y descuadres.',
      tecnologias: ['Java 21', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
      destacados: [
        'Operaciones atómicas e idempotentes con un libro contable para evitar transferencias duplicadas y descuadres de saldo.',
        'Sesiones con JWT y refresh tokens almacenados en cookies HttpOnly.',
        'Migraciones de base de datos con Flyway y pruebas contra PostgreSQL con Testcontainers.',
        'Registro de usuarios, transferencias entre cuentas e historial de movimientos.',
      ],
      visual: {
        tipo: 'transferencia',
        etapas: ['Solicitud', 'Validación', 'Débito y crédito', 'Libro contable'],
      },
      enlaces: {
        repositorio: 'https://github.com/cristhianl10/payflow',
        demo: 'https://payflow-alpha-brown.vercel.app',
        api: 'https://payflow-backend-p76b.onrender.com',
      },
      media: { portada: null, alt: 'Diagrama de una transferencia atómica en PayFlow', capturas: [] },
    },
    {
      id: 'ibatch',
      indice: '02',
      nombre: 'iBatch Financial Operations',
      tipo: 'Procesamiento de transacciones desde archivos CSV',
      resumen: 'Carga y procesamiento asíncrono de transacciones desde CSV, con auditoría.',
      reconocimiento: 'Segundo lugar en Hackathon',
      contexto:
        'Proyecto desarrollado durante una Hackathon organizada por la Universidad Politécnica Salesiana junto con ÉPICO Guayaquil.',
      descripcion:
        'Plataforma para cargar, validar y procesar archivos CSV con transacciones financieras, con seguimiento de progreso, auditoría y consultas paginadas.',
      tecnologias: ['Java', 'Spring Boot', 'Spring Data JDBC', 'Next.js', 'React', 'MySQL'],
      destacados: [
        'Procesamiento asíncrono de cargas masivas e inserciones de registros por lotes.',
        'Actualización periódica del progreso y consulta paginada de registros.',
        'Validación previa de registros y registro de errores durante el procesamiento.',
        'Historial de auditoría y trazabilidad de cada carga.',
      ],
      visual: {
        tipo: 'procesamiento',
        etapas: ['Archivo CSV', 'Validaciones', 'Procesamiento', 'Auditoría'],
      },
      enlaces: {
        repositorio: 'https://github.com/cristhianl10/iBatch',
        demo: 'https://i-batch.vercel.app/login',
        api: 'https://ibatch-backend.onrender.com',
        documentacion: 'https://github.com/cristhianl10/iBatch#readme',
      },
      media: { portada: null, alt: 'Diagrama del procesamiento de transacciones de iBatch', capturas: [] },
    },
    {
      id: 'banco-horizonte',
      indice: '03',
      nombre: 'Banco Horizonte — Gestión de Reclamos',
      tipo: 'Aplicación full stack',
      resumen: 'Reclamos bancarios con reglas de prioridad, SLA y flujo de estados.',
      descripcion:
        'Plataforma full stack para registrar, asignar y dar seguimiento a reclamos bancarios. La prioridad no se asigna de forma aislada: surge de reglas de negocio que también determinan el SLA y condicionan el flujo posterior.',
      explicacionVisual:
        'Las reglas acumulan criterios; la prioridad resultante determina el SLA antes de que el reclamo continúe por un flujo de estados controlado.',
      tecnologias: ['C#', 'ASP.NET Core', 'Angular', 'PostgreSQL', 'Supabase'],
      arquitectura: ['API', 'Application', 'Domain', 'Infrastructure'],
      destacados: [
        'API REST en ASP.NET Core con autenticación por roles, validaciones e historial de cambios.',
        'Reglas de prioridad y SLA para organizar la atención de los reclamos más urgentes.',
        'Frontend Angular con guards de rutas, bandeja filtrable y formularios con validación.',
        'Flujo de estados controlado con trazabilidad completa de cada caso.',
        'Pruebas unitarias backend con xUnit y pruebas frontend con Jasmine/Karma.',
      ],
      roles: ['Operador', 'Analista', 'Supervisor', 'Administrador'],
      visual: {
        tipo: 'priorizacion',
        etapas: ['Reclamo', 'Reglas acumulativas', 'Prioridad', 'SLA', 'Flujo de estados', 'Trazabilidad'],
      },
      enlaces: {
        repositorio: 'https://github.com/cristhianl10/banco-horizonte-reclamos',
        demo: 'https://banco-horizonte-reclamos.vercel.app/login',
        api: 'https://banco-horizonte-api.onrender.com',
        documentacion: 'https://github.com/cristhianl10/banco-horizonte-reclamos/tree/main/docs',
      },
      media: { portada: null, alt: 'Diagrama del flujo de reclamos bancarios', capturas: [] },
    },
    {
      id: 'noche-cero',
      indice: '04',
      nombre: 'Noche Cero — Simulación epidemiológica',
      tipo: 'Finalista de hackathon',
      resumen: 'Simulación SEIR de brotes y comparación de estrategias de vacunación.',
      reconocimiento: 'Finalista de hackathon',
      descripcion:
        'Aplicación web que simula un brote ficticio con un modelo SEIR y compara estrategias de vacunación para una alcaldía.',
      explicacionVisual:
        'El motor SEIR simula escenarios de vacunación; la optimización con NumPy reduce el tiempo de cálculo sin alterar los resultados, verificados por hash.',
      tecnologias: ['Python', 'NumPy', 'React', 'TypeScript', 'AWS', 'Terraform'],
      destacados: [
        'Optimización del motor de simulación con NumPy: de 377,9 s a 44,3 s (8,5x más rápido).',
        'Resultados idénticos verificados por hash antes y después de la optimización.',
        'Interfaz para ejecutar y monitorear simulaciones.',
        'Informe para la alcaldía exportable a PDF y HTML.',
      ],
      visual: {
        tipo: 'simulacion',
        etapas: ['Modelo SEIR', 'Simulación', 'Comparación', 'Informe'],
      },
      enlaces: {
        repositorio: 'https://github.com/Freddys21333/proxyendpoint-Noche-Cero',
        demo: null,
      },
      media: { portada: null, alt: 'Diagrama del modelo SEIR de Noche Cero', capturas: [] },
    },
  ],
  landings: [],
  experiencia: {
    etiqueta: '// EXPERIENCIA',
    titulo: 'Experiencia profesional.',
    descripcion:
      'Desde septiembre de 2026 formo parte del equipo de desarrollo de Global Hitss Ecuador, donde trabajo con microservicios, aplicaciones Java y entregas controladas.',
    puestos: [
      {
        empresa: 'Global Hitss Ecuador',
        rol: 'Pasante de Desarrollo de Software',
        periodo: 'Sep 2026 — Actualidad',
        resumen:
          'Integro el equipo de desarrollo en la construcción de microservicios y en la modernización de aplicaciones Java del cliente.',
        puntos: [
          'Desarrollo de microservicios con Spring Boot e interfaces con Angular dentro del ciclo de entrega del equipo.',
          'Migraciones de aplicaciones Java y gestión de ambientes para validar cambios antes de liberarlos.',
          'Calidad y despliegue: pipelines con GitLab, Jenkins y SonarQube, y pases a producción en OpenShift.',
        ],
        tecnologias: ['Spring Boot', 'Angular', 'Java', 'GitLab', 'Jenkins', 'SonarQube', 'OpenShift', 'CI/CD'],
      },
    ],
  },
  perfil: {
    etiqueta: '// PERFIL',
    titulo: 'Perfil',
    descripcion: 'Quién soy, cómo investigo y qué formación sostiene mi trabajo.',
  },
  ux: {
    etiqueta: '// UX RESEARCH',
    titulo: 'Investigación y diseño UX.',
    descripcion:
      'Investigación cualitativa y diseño de interfaces aplicados en proyectos académicos. El proceso importa tanto como la pantalla final.',
    casos: [
      {
        nombre: 'Catequesis',
        tipo: 'Investigación UX y diseño UX/UI',
        puntos: [
          'Entrevistas cualitativas y transcripción de audios con OpenAI Whisper.',
          'Análisis de hallazgos con apoyo de IA para detectar patrones y necesidades.',
          'User Personas y User Journey Map a partir de la investigación.',
          'Propuesta de aplicación diseñada en Figma.',
        ],
        tecnologias: ['Figma', 'OpenAI Whisper', 'User Personas', 'Journey Mapping'],
      },
      {
        nombre: 'GOB.EC',
        tipo: 'Diseño de interfaces',
        puntos: [
          'Propuesta académica de interfaces para GOB.EC.',
          'Diseño y exploración visual en Figma.',
        ],
        tecnologias: ['Figma', 'UX/UI'],
      },
    ],
  },
  sobreMi: {
    titulo: 'El software más allá de la interfaz.',
    parrafos: [
      'Me interesa construir software donde las reglas de negocio y los datos estén bien delimitados. Disfruto convertir requisitos ambiguos en un modelo claro y en un flujo que se pueda probar.',
      'Complemento el backend con UX Research: entrevistas, personas y journey maps para entender el problema antes de implementar. Esa mezcla me ayuda a tomar mejores decisiones de producto.',
    ],
    aspectos: ['Arquitectura de software', 'Lógica de negocio', 'Gestión de datos', 'Investigación UX'],
  },
  formacion: {
    titulo: 'Formación',
    programa: 'Ingeniería en Software',
    institucion: 'Universidad de Guayaquil',
    periodo: '2023 — Actualidad · 7.º semestre',
    estado: 'Actualmente cursando el 7.º semestre de Ingeniería en Software.',
    idiomasTitulo: 'Idiomas',
    hitosTitulo: 'Cursos y certificaciones',
    hitos: [
      { titulo: 'AWS Compute Services Overview · AWS', descripcion: 'Octubre de 2026.' },
      { titulo: 'Git y GitHub · Oracle Next Education (Alura Latam)', descripcion: 'Febrero de 2025 · 6 horas.' },
    ],
  },
  contacto: {
    etiqueta: '// CONTACTO',
    titulo: 'Contacto profesional',
    descripcion:
      'Puedes consultar mis repositorios, revisar mi perfil profesional o escribirme directamente por correo.',
    correoEtiqueta: 'Correo',
    ubicacionEtiqueta: 'Ubicación',
  },
  pie: {
    descripcion: 'Desarrollador Fullstack Junior · Guayaquil, Ecuador',
    volver: 'Volver al inicio',
    marca: 'CRISTHIAN',
    cta: 'Escríbeme',
    derechos: '© 2026 Cristhian Loor — Todos los derechos reservados',
  },
};
