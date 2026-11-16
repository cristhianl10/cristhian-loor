export const contenidoEn = {
  locale: 'en',
  metadata: {
    title: 'Cristhian Loor | Junior Full Stack Developer',
    description:
      'Cristhian Loor’s portfolio: Junior Full Stack Developer with experience in Spring Boot, Angular, React, and C#/.NET. Projects, technical decisions, and UX Research.',
    author: 'Cristhian José Loor Quimí',
    url: 'https://cristhian-loor.vercel.app/en',
    image: 'https://cristhian-loor.vercel.app/social-card.png',
  },
  persona: {
    nombreCompleto: 'Cristhian José Loor Quimí',
    nombreProfesional: 'Cristhian Loor',
    rol: 'Junior Full Stack Developer · Backend Java/Spring Boot',
    ubicacion: 'Guayaquil, Ecuador',
    correo: 'cristhian.loor05@outlook.com',
    github: 'https://github.com/cristhianl10',
    linkedin: 'https://www.linkedin.com/in/cristhian-loor/',
    cv: '/cv-cristhian-loor.pdf',
    idiomas: ['Native Spanish', 'Intermediate English'],
  },
  navegacion: [
    { etiqueta: 'Projects', destino: '#proyectos' },
    { etiqueta: 'Experience', destino: '#experiencia' },
    { etiqueta: 'Profile', destino: '#perfil' },
  ],
  interfaz: {
    saltarContenido: 'Skip to main content',
    irInicio: 'Go to the top',
    abrirMenu: 'Open menu',
    cerrarMenu: 'Close menu',
    menuContacto: 'Contact',
    navegacionPrincipal: 'Main navigation',
    navegacionPie: 'Page links',
    enlacesPrincipales: 'Primary links',
    tecnologias: 'Technologies',
    tecnologiasProyecto: 'Project technologies',
    aspectosDestacados: 'Technical highlights',
    rolesImplementados: 'Implemented roles',
    responsabilidades: 'Responsibilities',
    capas: 'Layers',
    aspectosInteres: 'Technical interests',
    cambiarAIngles: 'Switch the site to English',
    cambiarAEspanol: 'Switch the site to Spanish',
    activarModoClaro: 'Switch to light mode',
    activarModoOscuro: 'Switch to dark mode',
    abrirNuevaPestana: 'opens in a new tab',
    progresoLectura: 'Reading progress',
    enlacesProyecto: 'Project links',
    verProyecto: 'View project',
    cerrarProyecto: 'Close project',
    verCodigo: 'View code',
    verDemo: 'View demo',
    verApi: 'View API',
    verDocumentacion: 'View documentation',
    demoProximamente: 'Demo coming soon',
    copiarCorreo: 'Copy email',
    correoCopiado: 'Email copied',
  },
  presentacion: {
    etiqueta: '// JUNIOR FULL STACK — BACKEND',
    descripcion:
      'I build Spring Boot microservices and Angular/React interfaces with REST APIs, JWT, databases, and CI/CD. I complement backend work with UX Research.',
    panel: {
      titulo: 'Technical focus',
      nucleo: 'Backend',
      principales: ['Java / Spring Boot', 'C# / .NET'],
      flujo: ['API', 'Logic', 'Data'],
    },
    capasVisual: ['Business', 'Domain', 'Application', 'API'],
    acciones: {
      proyectos: 'View projects',
      cv: 'Download CV',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
  },
  seccionProyectos: {
    etiqueta: '// WORK',
    titulo: 'Projects that show how I build.',
    descripcion:
      'Full stack applications with architecture, business logic, and data at the center; then landing pages and frontend sites.',
    grupos: {
      fullstack: {
        etiqueta: '// FULL STACK',
        titulo: 'Full stack applications',
        descripcion: 'Backend, frontend, and persistence in one project. Open one to see architecture, decisions, and links.',
      },
      frontend: {
        etiqueta: '// FRONTEND',
        titulo: 'Landing pages and frontend sites',
        descripcion: 'Interface work and single-page sites. The selection will keep growing.',
      },
    },
    landingsVacio: {
      titulo: 'Landing pages in progress',
      descripcion: 'I am preparing landing pages and frontend sites. Published work will appear here with its link.',
    },
  },
  proyectos: [
    {
      id: 'payflow',
      indice: '01',
      nombre: 'PayFlow — Digital wallet',
      tipo: 'Atomic and idempotent transfers',
      resumen: 'Atomic and idempotent transfers with a ledger and JWT.',
      descripcion:
        'A demo digital wallet with user registration, account-to-account transfers, and transaction history. The focus is keeping balances consistent and ensuring a transfer never runs twice.',
      explicacionVisual:
        'The operation runs atomically and idempotently; a ledger records every movement to prevent duplicates and balance mismatches.',
      tecnologias: ['Java 21', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
      destacados: [
        'Atomic and idempotent operations backed by a ledger to prevent duplicate transfers and balance mismatches.',
        'Sessions with JWT and refresh tokens stored in HttpOnly cookies.',
        'Database migrations with Flyway and PostgreSQL tests with Testcontainers.',
        'User registration, account-to-account transfers, and transaction history.',
      ],
      visual: {
        tipo: 'transferencia',
        etapas: ['Request', 'Validation', 'Debit and credit', 'Ledger'],
      },
      enlaces: {
        repositorio: 'https://github.com/cristhianl10/payflow',
        demo: 'https://payflow-alpha-brown.vercel.app',
        api: 'https://payflow-backend-p76b.onrender.com',
      },
      media: { portada: null, alt: 'PayFlow atomic transfer diagram', capturas: [] },
    },
    {
      id: 'ibatch',
      indice: '02',
      nombre: 'iBatch Financial Operations',
      tipo: 'CSV transaction processing',
      resumen: 'Asynchronous CSV processing with auditing and paginated queries.',
      reconocimiento: 'Second place at the Hackathon',
      contexto:
        'Built during a Hackathon organized by Universidad Politécnica Salesiana together with ÉPICO Guayaquil.',
      descripcion:
        'A platform to upload, validate, and process CSV files with financial transactions, with progress tracking, auditing, and paginated queries.',
      tecnologias: ['Java', 'Spring Boot', 'Spring Data JDBC', 'Next.js', 'React', 'MySQL'],
      destacados: [
        'Asynchronous processing of large uploads and batch record insertion.',
        'Periodic progress updates and paginated record queries.',
        'Pre-validation of records and error logging during processing.',
        'Audit history and traceability for every upload.',
      ],
      visual: {
        tipo: 'procesamiento',
        etapas: ['CSV file', 'Validation', 'Processing', 'Audit'],
      },
      enlaces: {
        repositorio: 'https://github.com/cristhianl10/iBatch',
        demo: 'https://i-batch.vercel.app/login',
        api: 'https://ibatch-backend.onrender.com',
        documentacion: 'https://github.com/cristhianl10/iBatch#readme',
      },
      media: { portada: null, alt: 'iBatch transaction processing diagram', capturas: [] },
    },
    {
      id: 'banco-horizonte',
      indice: '03',
      nombre: 'Banco Horizonte — Claims Management',
      tipo: 'Full stack application',
      resumen: 'Bank claims with priority rules, SLAs, and a controlled status flow.',
      descripcion:
        'A full stack platform to register, assign, and track bank claims. Priority is not assigned in isolation: it comes from business rules that also determine the SLA and shape the subsequent flow.',
      explicacionVisual:
        'Rules accumulate criteria; the resulting priority determines the SLA before the claim continues through a controlled status flow.',
      tecnologias: ['C#', 'ASP.NET Core', 'Angular', 'PostgreSQL', 'Supabase'],
      arquitectura: ['API', 'Application', 'Domain', 'Infrastructure'],
      destacados: [
        'REST API in ASP.NET Core with role-based authentication, validations, and change history.',
        'Priority and SLA rules to organize the most urgent claims.',
        'Angular frontend with route guards, a filterable inbox, and validated forms.',
        'Controlled status flow with complete traceability for every case.',
        'Backend unit tests with xUnit and frontend tests with Jasmine/Karma.',
      ],
      roles: ['Operator', 'Analyst', 'Supervisor', 'Administrator'],
      visual: {
        tipo: 'priorizacion',
        etapas: ['Claim', 'Cumulative rules', 'Priority', 'SLA', 'Status flow', 'Traceability'],
      },
      enlaces: {
        repositorio: 'https://github.com/cristhianl10/banco-horizonte-reclamos',
        demo: 'https://banco-horizonte-reclamos.vercel.app/login',
        api: 'https://banco-horizonte-api.onrender.com',
        documentacion: 'https://github.com/cristhianl10/banco-horizonte-reclamos/tree/main/docs',
      },
      media: { portada: null, alt: 'Bank claims workflow diagram', capturas: [] },
    },
    {
      id: 'noche-cero',
      indice: '04',
      nombre: 'Noche Cero — Epidemiological simulation',
      tipo: 'Hackathon finalist',
      resumen: 'SEIR simulation to compare vaccination strategies.',
      reconocimiento: 'Hackathon finalist',
      descripcion:
        'A web application that simulates a fictional outbreak with a SEIR model and compares vaccination strategies for a city government.',
      explicacionVisual:
        'The SEIR engine simulates vaccination scenarios; NumPy optimization reduces computation time without changing the results, verified by hash.',
      tecnologias: ['Python', 'NumPy', 'React', 'TypeScript', 'AWS', 'Terraform'],
      destacados: [
        'Simulation engine optimization with NumPy: from 377.9 s to 44.3 s (8.5x faster).',
        'Identical results verified by hash before and after optimization.',
        'Interface to run and monitor simulations.',
        'Report for the city government exportable to PDF and HTML.',
      ],
      visual: {
        tipo: 'simulacion',
        etapas: ['SEIR model', 'Simulation', 'Comparison', 'Report'],
      },
      enlaces: {
        repositorio: 'https://github.com/Freddys21333/proxyendpoint-Noche-Cero',
        demo: null,
      },
      media: { portada: null, alt: 'Noche Cero SEIR model diagram', capturas: [] },
    },
  ],
  landings: [],
  experiencia: {
    etiqueta: '// EXPERIENCE',
    titulo: 'Professional experience.',
    descripcion:
      'Since September 2026 I have worked at Global Hitss Ecuador on Java microservices and controlled releases.',
    puestos: [
      {
        empresa: 'Global Hitss Ecuador',
        rol: 'Software Development Intern',
        periodo: 'Sep 2026 — Present',
        resumen:
          'I build microservices and modernize the client’s Java applications.',
        puntos: [
          'Spring Boot microservices and Angular interfaces.',
          'Java migrations and environment management.',
          'CI/CD with GitLab, Jenkins, and SonarQube; deployments on OpenShift.',
        ],
        tecnologias: ['Spring Boot', 'Angular', 'Java', 'GitLab', 'Jenkins', 'SonarQube', 'OpenShift', 'CI/CD'],
      },
    ],
  },
  perfil: {
    etiqueta: '// PROFILE',
    titulo: 'Profile',
    descripcion: 'Who I am, how I research, and the education behind my work.',
  },
  ux: {
    etiqueta: '// UX RESEARCH',
    titulo: 'Research and UX design.',
    descripcion:
      'Qualitative research and interface design in academic projects.',
    casos: [
      {
        nombre: 'Catequesis',
        tipo: 'UX research and UX/UI design',
        puntos: [
          'Qualitative interviews and audio transcription with OpenAI Whisper.',
          'AI-assisted analysis of findings to detect patterns and needs.',
          'User Personas and a User Journey Map based on the research.',
          'Application proposal designed in Figma.',
        ],
        tecnologias: ['Figma', 'OpenAI Whisper', 'User Personas', 'Journey Mapping'],
      },
      {
        nombre: 'GOB.EC',
        tipo: 'Interface design',
        puntos: [
          'Academic interface proposal for GOB.EC.',
          'Visual design and exploration in Figma.',
        ],
        tecnologias: ['Figma', 'UX/UI'],
      },
    ],
  },
  sobreMi: {
    titulo: 'Software beyond the interface.',
    parrafos: [
      'I like building software with well-defined business rules and data. I enjoy turning ambiguous requirements into clear models and testable flows.',
      'I complement backend work with UX Research to understand the problem before implementing.',
    ],
    aspectos: ['Software architecture', 'Business logic', 'Data management', 'UX research'],
  },
  formacion: {
    titulo: 'Education',
    programa: 'Software Engineering',
    institucion: 'Universidad de Guayaquil',
    periodo: '2023 — Present · 7th semester',
    estado: 'In the 7th semester of Software Engineering.',
    idiomasTitulo: 'Languages',
    hitosTitulo: 'Courses and certifications',
    hitos: [
      { titulo: 'AWS Compute Services Overview · AWS', descripcion: 'October 2026.' },
      { titulo: 'Git and GitHub · Oracle Next Education (Alura Latam)', descripcion: 'February 2025 · 6 hours.' },
    ],
  },
  contacto: {
    etiqueta: '// CONTACT',
    titulo: 'Professional contact',
    descripcion:
      'Explore my repositories, view my profile, or send me an email.',
    correoEtiqueta: 'Email',
    ubicacionEtiqueta: 'Location',
  },
  pie: {
    descripcion: 'Junior Full Stack Developer · Guayaquil, Ecuador',
    volver: 'Back to top',
    marca: 'CRISTHIAN',
    derechos: '© 2026 Cristhian Loor — All rights reserved',
  },
};
