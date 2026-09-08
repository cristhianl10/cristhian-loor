export const contenidoEn = {
  locale: 'en',
  metadata: {
    title: 'Cristhian Loor | Backend & Full Stack Developer',
    description:
      'Cristhian Loor’s portfolio: Backend & Full Stack development with Java, Spring Boot, C#, .NET, React, Next.js, and Angular.',
    author: 'Cristhian José Loor Quimí',
    url: 'https://portfolio-cristhian-loor.vercel.app/',
  },
  persona: {
    nombreCompleto: 'Cristhian José Loor Quimí',
    nombreProfesional: 'Cristhian Loor',
    rol: 'Backend & Full Stack Developer',
    ubicacion: 'Guayaquil, Ecuador',
    correo: 'cristhian.loor25@outlook.com',
    github: 'https://github.com/cristhianl10',
    linkedin: 'https://www.linkedin.com/in/cristhian-loor/',
    idiomas: ['Native Spanish', 'Intermediate English'],
  },
  navegacion: [
    { etiqueta: 'Projects', destino: '#proyectos' },
    { etiqueta: 'Technologies', destino: '#tecnologias' },
    { etiqueta: 'About', destino: '#sobre-mi' },
    { etiqueta: 'Education', destino: '#formacion' },
  ],
  interfaz: {
    saltarContenido: 'Skip to main content',
    irInicio: 'Go to the top',
    abrirMenu: 'Open menu',
    cerrarMenu: 'Close menu',
    menuContacto: 'Contact',
    navegacionPrincipal: 'Main navigation',
    enlacesPrincipales: 'Primary links',
    tecnologias: 'Technologies',
    tecnologiasProyecto: 'Project technologies',
    aspectosDestacados: 'Technical highlights',
    rolesImplementados: 'Implemented roles',
    alcanceActual: 'Current scope',
    capas: 'Layers',
    proyectoPresentado: 'Submitted project',
    aspectosInteres: 'Technical interests',
    cambiarAIngles: 'Switch the site to English',
    cambiarAEspanol: 'Switch the site to Spanish',
    activarModoClaro: 'Switch to light mode',
    activarModoOscuro: 'Switch to dark mode',
    proyectoAnterior: 'View previous project',
    proyectoSiguiente: 'View next project',
    seleccionarProyecto: 'Select a project',
    tecnologiasPorProyecto: 'Technologies by project',
    proyecto: 'Project',
    de: 'of',
    abrirNuevaPestana: 'opens in a new tab',
    progresoLectura: 'Reading progress',
  },
  presentacion: {
    titulo: 'Software development from the logic that supports it.',
    descripcion:
      'Software Engineering student focused on web applications and REST APIs with Java, Spring Boot, and .NET. I also have hands-on experience building full stack solutions with React, Next.js, and Angular.',
    enfoque:
      'I am particularly interested in software architecture, business logic, databases, and building maintainable solutions.',
    focos: ['Java / Spring Boot', 'C# / .NET', 'Backend / Full Stack'],
    panel: {
      titulo: 'Technical focus',
      estado: 'In training',
      nucleo: 'Backend',
      principales: ['Java / Spring Boot', 'C# / .NET'],
      flujo: ['API', 'Logic', 'Data'],
    },
    acciones: {
      proyectos: 'View projects',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
  },
  seccionProyectos: {
    titulo: 'Projects that show how I build.',
    descripcion:
      'Three real solutions where architecture, business logic, and data management play a central role.',
  },
  proyectos: [
    {
      id: 'ibatch',
      indice: '01',
      nombre: 'iBatch Financial Operations',
      tipo: 'CSV transaction processing',
      reconocimiento: 'Second place at the Hackathon',
      contexto:
        'Built during a Hackathon organized by Universidad Politécnica Salesiana together with ÉPICO Guayaquil.',
      descripcion:
        'A platform that processes CSV files containing financial transactions and tracks processing, validations, progress, and history.',
      tecnologias: ['Java', 'Spring Boot', 'Spring Data JDBC', 'Next.js', 'React', 'MySQL'],
      destacados: [
        'API built with Spring Boot and data access through Spring Data JDBC.',
        'Interface built with Next.js and React.',
        'Asynchronous processing and batch record insertion.',
        'Periodic progress updates and paginated record queries.',
        'Validation of amounts, accounts, and dates.',
        'Error logging and audit history throughout processing.',
      ],
      visual: {
        tipo: 'procesamiento',
        etapas: ['CSV file', 'Validation', 'Processing', 'Audit'],
      },
    },
    {
      id: 'banco-horizonte',
      indice: '02',
      nombre: 'Banco Horizonte — Claims Management',
      tipo: 'Full stack application',
      descripcion:
        'A full stack platform for managing bank claims end to end. Priority is not assigned in isolation: it comes from business rules that also determine the SLA and shape the subsequent flow.',
      explicacionVisual:
        'Rules accumulate criteria; the resulting priority determines the SLA before the claim continues through a controlled status flow.',
      tecnologias: ['C#', '.NET 10', 'Angular 20', 'PostgreSQL', 'Supabase'],
      arquitectura: ['API', 'Application', 'Domain', 'Infrastructure'],
      destacados: [
        'REST API with .NET and frontend with Angular 20, Angular Signals, and reactive forms.',
        'Clean Architecture with API, Application, Domain, and Infrastructure layers.',
        'Automatic prioritization engine based on cumulative business rules.',
        'Dynamic priority and SLA calculation.',
        'Controlled status flow with validations, complete history, and traceability.',
        'Supabase Auth, JWT authentication, and role-based authorization.',
        'Backend unit tests with xUnit and frontend tests with Jasmine/Karma.',
      ],
      roles: ['Operator', 'Analyst', 'Supervisor', 'Administrator'],
      visual: {
        tipo: 'priorizacion',
        etapas: ['Claim', 'Cumulative rules', 'Priority', 'SLA', 'Status flow', 'Traceability'],
      },
    },
    {
      id: 'pos-api',
      indice: '03',
      nombre: 'POS API',
      tipo: 'Backend for a point-of-sale system',
      descripcion:
        'Backend for a point-of-sale system built as a REST API. Its value lies in the backend structure and the use of patterns to keep responsibilities separate.',
      tecnologias: ['C#', '.NET', 'Entity Framework', 'SQL Server', 'REST API'],
      arquitectura: ['API', 'Application', 'Domain', 'Infrastructure'],
      destacados: [
        'Layered organization: API, Application, Domain, and Infrastructure.',
        'Data access through Entity Framework.',
        'Repository Pattern and Unit of Work implementation.',
        'Separation of responsibilities across backend layers.',
        'Endpoints tested with Postman.',
      ],
      alcanceActual: ['No authentication', 'No JWT', 'No invoicing', 'No full CRUD'],
      visual: {
        tipo: 'capas',
        etapas: ['API', 'Application', 'Domain', 'Infrastructure'],
      },
    },
  ],
  tecnologias: {
    titulo: 'Technologies applied in context.',
    introduccion:
      'Skills are organized by their role in a solution and connected to the projects where they were applied.',
    categorias: [
      { id: 'backend', nombre: 'Backend', items: ['Java', 'Spring Boot', 'C#', '.NET', 'REST APIs', 'Entity Framework'] },
      { id: 'frontend', nombre: 'Frontend', items: ['JavaScript', 'React', 'Next.js', 'Angular', 'HTML', 'CSS'] },
      { id: 'datos', nombre: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle SQL', 'Supabase'] },
      { id: 'arquitectura', nombre: 'Architecture', items: ['Clean Architecture', 'SOLID', 'Repository Pattern', 'Unit of Work'] },
      { id: 'herramientas', nombre: 'Tools', items: ['Git', 'GitHub', 'Postman'] },
    ],
    porProyecto: [
      { nombre: 'iBatch', items: ['Java', 'Spring Boot', 'Spring Data JDBC', 'Next.js', 'React', 'MySQL'] },
      { nombre: 'Banco Horizonte', items: ['C#', '.NET 10', 'Angular 20', 'PostgreSQL', 'Supabase'] },
      { nombre: 'POS API', items: ['C#', '.NET', 'Entity Framework', 'SQL Server'] },
    ],
    relacionTitulo: 'Technologies connected to real projects',
  },
  reconocimiento: {
    titulo: 'Second place',
    evento: 'Universidad Politécnica Salesiana × ÉPICO Guayaquil Hackathon',
    proyecto: 'iBatch Financial Operations',
    descripcion:
      'The submitted project was a platform for processing CSV files with financial transactions, validations, progress tracking, and audit history.',
  },
  sobreMi: {
    titulo: 'Software beyond the interface.',
    parrafos: [
      'I am a Software Engineering student at Universidad de Guayaquil, and I have oriented much of my training toward backend and full stack development. My primary focus is Java/Spring Boot and C#/.NET, complemented by frontend technologies such as React, Next.js, and Angular.',
      'I am interested in understanding an application beyond its interface: how it is structured, how business logic is organized, how data is managed, and how responsibilities remain properly separated within the software.',
      'Through my projects, I have worked with REST APIs, relational databases, layered architecture, Clean Architecture, authentication, authorization, asynchronous processing, and testing.',
    ],
    aspectos: ['Software architecture', 'Business logic', 'Data management', 'Separation of responsibilities'],
  },
  formacion: {
    titulo: 'Education',
    programa: 'Software Engineering',
    institucion: 'Universidad de Guayaquil',
    periodo: 'October 2023 — Present',
    estado: 'Currently pursuing a Software Engineering degree.',
    idiomasTitulo: 'Languages',
  },
  contacto: {
    titulo: 'Professional contact',
    descripcion:
      'Explore my repositories, view my professional profile, or reach me directly by email.',
    correoEtiqueta: 'Email',
    ubicacionEtiqueta: 'Location',
  },
  pie: {
    descripcion: 'Backend & Full Stack Developer · Guayaquil, Ecuador',
    volver: 'Back to top',
  },
};
