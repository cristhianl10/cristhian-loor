export const contenidoEs = {
  locale: 'es',
  metadata: {
    title: 'Cristhian Loor | Desarrollador Backend',
    description:
      'Portafolio de Cristhian Loor, desarrollador backend con experiencia en Java, Spring Boot y C#/.NET. APIs REST, bases de datos y CI/CD.',
    author: 'Cristhian José Loor Quimí',
    url: 'https://cristhian-loor.vercel.app/es',
    image: 'https://cristhian-loor.vercel.app/social-card.png',
  },
  persona: {
    nombreCompleto: 'Cristhian José Loor Quimí',
    nombreProfesional: 'Cristhian Loor',
    rol: 'Desarrollador Backend · Java / Spring Boot / .NET',
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
    verProyecto: 'Ver proyecto',
    cerrarProyecto: 'Cerrar proyecto',
    verCodigo: 'Ver código',
    verDemo: 'Ver demo',
    verApi: 'Ver API',
    verDocumentacion: 'Ver documentación',
    demoProximamente: 'Demo próximamente',
    copiarCorreo: 'Copiar correo',
    correoCopiado: 'Correo copiado',
  },
  presentacion: {
    etiqueta: '// BACKEND — JAVA / SPRING BOOT / .NET',
    descripcion:
      'Experiencia en backend con Java, Spring Boot y .NET: APIs REST, autenticación, bases de datos y CI/CD. Enfoque en lógica de negocio, persistencia y servicios mantenibles.',
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
    titulo: 'Trabajo seleccionado.',
    descripcion:
      'APIs, reglas de negocio y persistencia. Abre un proyecto para ver arquitectura, decisiones y enlaces.',
    grupos: {
      backend: {
        etiqueta: '// BACKEND',
        titulo: 'Proyectos backend',
        descripcion: 'Lógica de negocio, APIs y datos. Cada proyecto muestra su arquitectura, decisiones y enlaces.',
      },
    },
  },
  proyectos: [
    {
      id: 'payflow',
      indice: '01',
      nombre: 'PayFlow — Billetera digital',
      tipo: 'Transferencias atómicas e idempotentes',
      resumen: 'Transferencias atómicas e idempotentes con libro contable y JWT.',
      descripcion:
        'Billetera digital de demostración con registro de usuarios, transferencias entre cuentas e historial de movimientos. El foco está en que el saldo no se descuadre y en que una transferencia no se ejecute dos veces.',
      explicacionVisual:
        'La operación se ejecuta de forma atómica e idempotente; el libro contable registra los movimientos para evitar duplicados y descuadres.',
      tecnologias: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Docker', 'Flyway'],
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
      resumen: 'Procesamiento asíncrono de CSV con auditoría y consultas paginadas.',
      reconocimiento: 'Segundo lugar en Hackathon',
      contexto:
        'Proyecto desarrollado durante una Hackathon organizada por la Universidad Politécnica Salesiana junto con ÉPICO Guayaquil.',
      descripcion:
        'Plataforma para cargar, validar y procesar archivos CSV con transacciones financieras, con seguimiento de progreso, auditoría y consultas paginadas.',
      tecnologias: ['Java', 'Spring Boot', 'Spring Data JDBC', 'MySQL'],
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
      tipo: 'Reglas de prioridad, SLA y estados',
      resumen: 'Reclamos bancarios con reglas de prioridad, SLA y flujo de estados.',
      descripcion:
        'Plataforma para registrar, asignar y dar seguimiento a reclamos bancarios. La prioridad no se asigna de forma aislada: surge de reglas de negocio que también determinan el SLA y condicionan el flujo posterior.',
      explicacionVisual:
        'Las reglas acumulan criterios; la prioridad resultante determina el SLA antes de que el reclamo continúe por un flujo de estados controlado.',
      tecnologias: ['C#', 'ASP.NET Core', 'PostgreSQL', 'Supabase'],
      arquitectura: ['API', 'Application', 'Domain', 'Infrastructure'],
      destacados: [
        'API REST en ASP.NET Core con autenticación por roles, validaciones e historial de cambios.',
        'Reglas de prioridad y SLA para organizar la atención de los reclamos más urgentes.',
        'Flujo de estados controlado con trazabilidad completa de cada caso.',
        'Pruebas unitarias backend con xUnit y validación de reglas de negocio.',
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
      resumen: 'Simulación SEIR para comparar estrategias de vacunación.',
      reconocimiento: 'Finalista de hackathon',
      descripcion:
        'Aplicación web que simula un brote ficticio con un modelo SEIR y compara estrategias de vacunación para una alcaldía.',
      explicacionVisual:
        'El motor SEIR simula escenarios de vacunación; la optimización con NumPy reduce el tiempo de cálculo sin alterar los resultados, verificados por hash.',
      tecnologias: ['Python', 'NumPy', 'AWS', 'Terraform'],
      destacados: [
        'Optimización del motor de simulación con NumPy: de 377,9 s a 44,3 s (8,5x más rápido).',
        'Resultados idénticos verificados por hash antes y después de la optimización.',
        'Ejecución y monitoreo de simulaciones.',
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
  experiencia: {
    etiqueta: '// EXPERIENCIA',
    titulo: 'Experiencia profesional.',
    descripcion:
      'Experiencia backend en Global Hitss Ecuador desde septiembre de 2026: microservicios Java, migraciones y despliegues controlados.',
    puestos: [
      {
        empresa: 'Global Hitss Ecuador',
        rol: 'Pasante de Desarrollo de Software',
        periodo: 'Sep 2026 — Actualidad',
        resumen:
          'Desarrollo microservicios y modernizo aplicaciones Java del cliente.',
        puntos: [
          'Microservicios con Spring Boot y APIs REST.',
          'Migraciones Java y gestión de ambientes.',
          'CI/CD con GitLab, Jenkins y SonarQube; despliegues en OpenShift.',
        ],
        tecnologias: ['Spring Boot', 'Java', 'GitLab', 'Jenkins', 'SonarQube', 'OpenShift', 'CI/CD'],
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
      'Investigación cualitativa y diseño de interfaces en proyectos académicos.',
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
      'Me interesa construir software con reglas de negocio y datos bien delimitados. Disfruto convertir requisitos ambiguos en modelos claros y flujos testeables.',
      'Complemento el backend con UX Research para entender el problema antes de implementar.',
    ],
    aspectos: ['Arquitectura de software', 'Lógica de negocio', 'Gestión de datos', 'Investigación UX'],
  },
  formacion: {
    titulo: 'Formación',
    programa: 'Ingeniería en Software',
    institucion: 'Universidad de Guayaquil',
    periodo: '2023 — Actualidad · 7.º semestre',
    estado: 'Cursando el 7.º semestre de Ingeniería en Software.',
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
      'Revisa mis repositorios, mi perfil profesional o escríbeme por correo.',
    correoEtiqueta: 'Correo',
    ubicacionEtiqueta: 'Ubicación',
  },
  pie: {
    descripcion: 'Desarrollador Backend · Guayaquil, Ecuador',
    volver: 'Volver al inicio',
    marca: 'CRISTHIAN',
    derechos: '© 2026 Cristhian Loor — Todos los derechos reservados',
  },
};
