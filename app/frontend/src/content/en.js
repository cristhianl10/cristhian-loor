export const contenidoEn = {
  locale: 'en',
  metadata: {
    title: 'Cristhian Loor | Backend & Full Stack Developer',
    description:
      'Cristhian Loor\'s portfolio: Software Engineering student focused on backend with Java/Spring Boot and C#/.NET.',
    author: 'Cristhian José Loor Quimí',
    url: 'https://cristhian-loor.vercel.app/',
    image: 'https://cristhian-loor.vercel.app/social-card.png',
  },
  persona: {
    nombreCompleto: 'Cristhian José Loor Quimí',
    nombreProfesional: 'Cristhian Loor',
    rol: 'Backend & Full Stack Developer',
    ubicacion: 'Guayaquil, Ecuador',
    correo: 'cristhian.loor25@outlook.com',
    github: 'https://github.com/cristhianl10',
    linkedin: 'https://www.linkedin.com/in/cristhian-loor/',
    cv: '/cv-cristhian-loor.pdf',
    idiomas: ['Native Spanish', 'Intermediate English'],
  },
  navegacion: [
    { etiqueta: 'Projects', destino: '#proyectos' },
    { etiqueta: 'Stack', destino: '#tecnologias' },
    { etiqueta: 'How I build', destino: '#metodologia' },
    { etiqueta: 'Career', destino: '#trayectoria' },
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
    enlacesProyecto: 'Project links',
    verCodigo: 'View code',
    verDemo: 'View demo',
    verDocumentacion: 'View documentation',
    demoProximamente: 'Demo coming soon',
    repositorioProximamente: 'Repository coming soon',
  },
  presentacion: {
    etiqueta: '// BACKEND — FULL STACK',
    titulo: 'Software development from the logic that supports it.',
    descripcion:
      'Software Engineering student focused on backend with Java/Spring Boot and C#/.NET. I build REST APIs and full stack applications centered on business logic, architecture, and data management.',
    focos: ['Java / Spring Boot', 'C# / .NET', 'Backend / Full Stack'],
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
    etiqueta: '// PROJECTS',
    titulo: 'Projects that show how I build.',
    descripcion:
      'Three real solutions where architecture, business logic, and data management play a central role.',
  },
  proyectos: [
    {
      id: 'ibatch',
      indice: '01',
      nombre: 'iBatch Financial Operations',
      tipo: 'CSV transaction processing platform',
      reconocimiento: '2nd place — Hackathon UPS × ÉPICO Guayaquil',
      contexto:
        'Built during a hackathon organized by Universidad Politécnica Salesiana together with ÉPICO Guayaquil.',
      descripcion:
        'A platform that processes CSV files with financial transactions, with validations, progress tracking, and audit history.',
      tecnologias: ['Java', 'Spring Boot', 'Spring Data JDBC', 'Next.js', 'React', 'MySQL'],
      destacados: [
        'API built with Spring Boot and data access through Spring Data JDBC.',
        'Interface built with Next.js and React.',
        'Asynchronous processing and batch record insertion.',
        'Periodic progress updates and paginated record queries.',
        'Validation of amounts, accounts, and dates.',
        'Error logging and audit history throughout processing.',
      ],
      arquitectura: ['API', 'Application', 'Domain', 'Infrastructure'],
      visual: {
        tipo: 'procesamiento',
        etapas: ['CSV file', 'Validation', 'Processing', 'Audit'],
      },
      enlaces: {
        repositorio: 'https://github.com/cristhianl10/iBatch',
        demo: null,
        documentacion: null,
      },
      media: { portada: null, alt: 'iBatch Financial Operations', capturas: [] },
    },
    {
      id: 'banco-horizonte',
      indice: '02',
      nombre: 'Banco Horizonte — Claims Management',
      tipo: 'Full stack application',
      contexto:
        'A system designed to manage bank claims end to end, with automatic prioritization based on business rules.',
      descripcion:
        'Priority is not assigned in isolation: it comes from cumulative rules that also determine the SLA and shape the controlled status flow.',
      tecnologias: ['C#', '.NET', 'Angular', 'PostgreSQL', 'Supabase', 'Entity Framework Core'],
      arquitectura: ['API', 'Application', 'Domain', 'Infrastructure'],
      destacados: [
        'REST API with .NET and frontend with Angular.',
        'Clean Architecture with API, Application, Domain, and Infrastructure layers.',
        'Automatic prioritization engine based on cumulative rules.',
        'Dynamic priority and SLA calculation.',
        'Controlled status flow with complete history and traceability.',
        'Supabase Auth, JWT, and role-based authorization.',
        'Unit tests with xUnit and Jasmine/Karma.',
      ],
      roles: ['Operator', 'Analyst', 'Supervisor', 'Administrator'],
      visual: {
        tipo: 'priorizacion',
        etapas: ['Claim', 'Cumulative rules', 'Priority', 'SLA', 'Status flow', 'Traceability'],
      },
      enlaces: {
        repositorio: 'https://github.com/cristhianl10/banco-horizonte-reclamos',
        demo: null,
        documentacion: null,
      },
      media: { portada: null, alt: 'Banco Horizonte Claims Management', capturas: [] },
    },
    {
      id: 'pos-api',
      indice: '03',
      nombre: 'POS API',
      tipo: 'Backend for a point-of-sale system',
      contexto:
        'A learning-oriented project focused on applying clean architecture in a REST API backend.',
      descripcion:
        'Its value lies in the backend structure and the use of patterns to keep responsibilities separate.',
      tecnologias: ['C#', '.NET', 'Entity Framework', 'SQL Server'],
      arquitectura: ['API', 'Application', 'Domain', 'Infrastructure'],
      destacados: [
        'Layered organization: API, Application, Domain, and Infrastructure.',
        'Data access through Entity Framework.',
        'Repository Pattern and Unit of Work.',
        'Separation of responsibilities across backend layers.',
        'Endpoints tested via HTTP requests with Postman.',
      ],
      visual: {
        tipo: 'capas',
        etapas: ['API', 'Application', 'Domain', 'Infrastructure'],
      },
      enlaces: {
        repositorio: null,
        demo: null,
        documentacion: null,
      },
      media: { portada: null, alt: 'POS API', capturas: [] },
    },
  ],
  tecnologias: {
    etiqueta: '// STACK',
    titulo: 'Technologies applied in context.',
    introduccion:
      'Skills are organized by their role in a solution and connected to the projects where they were applied.',
    categorias: [
      {
        id: 'backend',
        nombre: 'Backend',
        items: ['Java', 'Spring Boot', 'C#', '.NET', 'REST APIs', 'Entity Framework'],
      },
      {
        id: 'frontend',
        nombre: 'Frontend',
        items: ['JavaScript', 'React', 'Next.js', 'Angular', 'HTML', 'CSS'],
      },
      {
        id: 'datos',
        nombre: 'Databases',
        items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle SQL', 'Supabase'],
      },
      {
        id: 'arquitectura',
        nombre: 'Architecture & practices',
        items: ['Clean Architecture', 'SOLID', 'Repository Pattern', 'Unit of Work'],
      },
      {
        id: 'testing',
        nombre: 'Testing',
        items: ['xUnit', 'Jasmine/Karma'],
      },
      {
        id: 'herramientas',
        nombre: 'Tools & infrastructure',
        items: ['Git', 'GitHub', 'Docker', 'Linux', 'Postman'],
      },
    ],
    porProyecto: [
      {
        nombre: 'iBatch',
        items: ['Java', 'Spring Boot', 'Spring Data JDBC', 'Next.js', 'React', 'MySQL'],
      },
      {
        nombre: 'Banco Horizonte',
        items: ['C#', '.NET', 'Angular', 'PostgreSQL', 'Supabase', 'Entity Framework Core'],
      },
      {
        nombre: 'POS API',
        items: ['C#', '.NET', 'Entity Framework', 'SQL Server'],
      },
    ],
    relacionTitulo: 'Technologies connected to real projects',
  },
  metodologia: {
    etiqueta: '// HOW I BUILD',
    titulo: 'How I build.',
    panel: {
      titulo: 'Result',
      nucleo: 'Verifiable solutions',
      descripcion:
        'Every decision is documented and backed by tests and real evidence of expected behavior.',
    },
    pasos: [
      { numero: '01', titulo: 'Understand the problem', texto: 'I identify the context, constraints, and rules the solution must follow.' },
      { numero: '02', titulo: 'Separate responsibilities', texto: 'I design the data model and distribute logic across layers with clear responsibilities.' },
      { numero: '03', titulo: 'Implement and validate', texto: 'I build critical cases, test main scenarios, and verify expected behavior.' },
      { numero: '04', titulo: 'Document and prepare', texto: 'I record technical decisions, clean the code, and prepare the solution for deployment.' },
    ],
  },
  trayectoria: {
    etiqueta: '// CAREER',
    titulo: 'Training and growth.',
    formacion: {
      programa: 'Software Engineering',
      institucion: 'Universidad de Guayaquil',
      periodo: 'October 2023 — Present',
      estado: 'Currently pursuing degree.',
    },
    hitos: [
      {
        titulo: 'Hackathon UPS × ÉPICO Guayaquil',
        descripcion: '2nd place with iBatch Financial Operations.',
        fecha: '2024',
      },
      {
        titulo: 'Tech Lab UG',
        descripcion: 'Project related to GNU/Linux and local web server.',
        fecha: '2024',
      },
      {
        titulo: 'ÉPICO Sales School',
        descripcion: 'Complementary training in communication, sales, and product.',
        fecha: '2024',
      },
    ],
    idiomas: {
      titulo: 'Languages',
      lista: ['Native Spanish', 'Intermediate English'],
    },
  },
  sobreMi: {
    etiqueta: '// ABOUT',
    titulo: 'Software beyond the interface.',
    parrafos: [
      'I am a Software Engineering student. I am interested in understanding software beyond its interface: how it is structured, how business logic is organized, and how data is managed.',
      'I am drawn to architecture, enterprise systems, and building maintainable solutions. I complement backend knowledge with frontend and UX to understand the complete product.',
      'I am looking to keep growing professionally through real projects and technical challenges that let me apply what I learn.',
    ],
    aspectos: ['Software architecture', 'Business logic', 'Enterprise systems', 'Continuous growth'],
  },
  contacto: {
    etiqueta: '// CONTACT',
    titulo: 'Professional contact',
    descripcion:
      'Explore my repositories, view my professional profile, or reach me directly by email.',
    correoEtiqueta: 'Email',
    ubicacionEtiqueta: 'Location',
  },
  pie: {
    descripcion: 'Backend & Full Stack Developer · Guayaquil, Ecuador',
    volver: 'Back to top',
    marca: 'CRISTHIAN',
    cta: 'Write to me',
    derechos: '© 2026 Cristhian Loor — All rights reserved',
  },
};
