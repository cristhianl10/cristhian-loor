export const contenidoEs = {
  locale: 'es',
  metadata: {
    title: 'Cristhian Loor | Desarrollador Backend & Full Stack',
    description:
      'Portfolio de Cristhian Loor, estudiante de Ingeniería de Software enfocado en backend con Java/Spring Boot y C#/.NET.',
    author: 'Cristhian José Loor Quimí',
    url: 'https://cristhian-loor.vercel.app/',
    image: 'https://cristhian-loor.vercel.app/social-card.png',
  },
  persona: {
    nombreCompleto: 'Cristhian José Loor Quimí',
    nombreProfesional: 'Cristhian Loor',
    rol: 'Desarrollador Backend & Full Stack',
    ubicacion: 'Guayaquil, Ecuador',
    correo: 'cristhian.loor25@outlook.com',
    github: 'https://github.com/cristhianl10',
    linkedin: 'https://www.linkedin.com/in/cristhian-loor/',
    cv: '/cv-cristhian-loor.pdf',
    idiomas: ['Español nativo', 'Inglés intermedio'],
  },
  navegacion: [
    { etiqueta: 'Proyectos', destino: '#proyectos' },
    { etiqueta: 'Stack', destino: '#tecnologias' },
    { etiqueta: 'Cómo construyo', destino: '#metodologia' },
    { etiqueta: 'Trayectoria', destino: '#trayectoria' },
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
    capas: 'Capas',
    proyectoPresentado: 'Proyecto presentado',
    aspectosInteres: 'Aspectos técnicos de interés',
    cambiarAIngles: 'Cambiar el sitio a inglés',
    cambiarAEspanol: 'Cambiar el sitio a español',
    activarModoClaro: 'Activar modo claro',
    activarModoOscuro: 'Activar modo oscuro',
    proyectoAnterior: 'Ver proyecto anterior',
    proyectoSiguiente: 'Ver proyecto siguiente',
    seleccionarProyecto: 'Seleccionar proyecto',
    tecnologiasPorProyecto: 'Tecnologías por proyecto',
    proyecto: 'Proyecto',
    de: 'de',
    abrirNuevaPestana: 'abre en una pestaña nueva',
    progresoLectura: 'Progreso de lectura',
    enlacesProyecto: 'Enlaces del proyecto',
    verCodigo: 'Ver código',
    verDemo: 'Ver demo',
    verDocumentacion: 'Ver documentación',
    demoProximamente: 'Demo próximamente',
    repositorioProximamente: 'Repositorio próximamente',
  },
  presentacion: {
    etiqueta: '// BACKEND — FULL STACK',
    titulo: 'Desarrollo de software desde la lógica que lo sostiene.',
    descripcion:
      'Estudiante de Ingeniería de Software enfocado en backend con Java/Spring Boot y C#/.NET. Desarrollo APIs REST y aplicaciones full stack centradas en lógica de negocio, arquitectura y gestión de datos.',
    focos: ['Java / Spring Boot', 'C# / .NET', 'Backend / Full Stack'],
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
    etiqueta: '// PROYECTOS',
    titulo: 'Proyectos que explican cómo construyo.',
    descripcion:
      'Tres soluciones reales donde la arquitectura, la lógica de negocio y el manejo de datos tienen un papel central.',
  },
  proyectos: [
    {
      id: 'ibatch',
      indice: '01',
      nombre: 'iBatch Financial Operations',
      tipo: 'Procesamiento de transacciones desde archivos CSV',
      reconocimiento: 'Segundo lugar — Hackathon UPS × ÉPICO Guayaquil',
      contexto:
        'Proyecto desarrollado durante una hackathon organizada por la Universidad Politécnica Salesiana junto con ÉPICO Guayaquil.',
      descripcion:
        'Plataforma para procesar archivos CSV con transacciones financieras, con validaciones, seguimiento de progreso e historial de auditoría.',
      tecnologias: ['Java', 'Spring Boot', 'Spring Data JDBC', 'Next.js', 'React', 'MySQL'],
      destacados: [
        'API desarrollada con Spring Boot y acceso a datos mediante Spring Data JDBC.',
        'Interfaz construida con Next.js y React.',
        'Procesamiento asíncrono e inserciones de registros por lotes.',
        'Actualización periódica del progreso y consulta paginada de registros.',
        'Validación de montos, cuentas y fechas.',
        'Registro de errores e historial de auditoría durante el procesamiento.',
      ],
      arquitectura: ['API', 'Application', 'Domain', 'Infrastructure'],
      visual: {
        tipo: 'procesamiento',
        etapas: ['Archivo CSV', 'Validaciones', 'Procesamiento', 'Auditoría'],
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
      nombre: 'Banco Horizonte — Gestión de Reclamos',
      tipo: 'Aplicación full stack',
      contexto:
        'Sistema diseñado para gestionar reclamos bancarios de extremo a extremo, con priorización automática basada en reglas de negocio.',
      descripcion:
        'La prioridad no se asigna de forma aislada: surge de reglas acumulativas que también determinan el SLA y condicionan el flujo de estados controlado.',
      tecnologias: ['C#', '.NET', 'Angular', 'PostgreSQL', 'Supabase', 'Entity Framework Core'],
      arquitectura: ['API', 'Application', 'Domain', 'Infrastructure'],
      destacados: [
        'API REST con .NET y frontend con Angular.',
        'Clean Architecture con capas API, Application, Domain e Infrastructure.',
        'Motor de priorización automática basado en reglas acumulativas.',
        'Cálculo dinámico de prioridad y del SLA correspondiente.',
        'Flujo de estados controlado con historial completo y trazabilidad.',
        'Supabase Auth, JWT y autorización basada en roles.',
        'Pruebas unitarias con xUnit y Jasmine/Karma.',
      ],
      roles: ['Operador', 'Analista', 'Supervisor', 'Administrador'],
      visual: {
        tipo: 'priorizacion',
        etapas: ['Reclamo', 'Reglas acumulativas', 'Prioridad', 'SLA', 'Flujo de estados', 'Trazabilidad'],
      },
      enlaces: {
        repositorio: 'https://github.com/cristhianl10/banco-horizonte-reclamos',
        demo: null,
        documentacion: null,
      },
      media: { portada: null, alt: 'Banco Horizonte Gestión de Reclamos', capturas: [] },
    },
    {
      id: 'pos-api',
      indice: '03',
      nombre: 'POS API',
      tipo: 'Backend para un sistema de punto de venta',
      contexto:
        'Proyecto orientado al aprendizaje y aplicación de arquitectura limpia en un backend de API REST.',
      descripcion:
        'Su valor está en la estructura del backend y en la aplicación de patrones para mantener separadas las responsabilidades.',
      tecnologias: ['C#', '.NET', 'Entity Framework', 'SQL Server'],
      arquitectura: ['API', 'Application', 'Domain', 'Infrastructure'],
      destacados: [
        'Organización por capas: API, Application, Domain e Infrastructure.',
        'Acceso a datos mediante Entity Framework.',
        'Repository Pattern y Unit of Work.',
        'Separación de responsabilidades entre las capas del backend.',
        'Endpoints probados mediante peticiones HTTP/Postman.',
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
    titulo: 'Tecnologías aplicadas en contexto.',
    introduccion:
      'Las competencias se organizan por el lugar que ocupan en una solución y se relacionan con proyectos donde fueron utilizadas.',
    categorias: [
      {
        id: 'backend',
        nombre: 'Backend',
        items: ['Java', 'Spring Boot', 'C#', '.NET', 'APIs REST', 'Entity Framework'],
      },
      {
        id: 'frontend',
        nombre: 'Frontend',
        items: ['JavaScript', 'React', 'Next.js', 'Angular', 'HTML', 'CSS'],
      },
      {
        id: 'datos',
        nombre: 'Bases de datos',
        items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle SQL', 'Supabase'],
      },
      {
        id: 'arquitectura',
        nombre: 'Arquitectura y prácticas',
        items: ['Clean Architecture', 'SOLID', 'Repository Pattern', 'Unit of Work'],
      },
      {
        id: 'testing',
        nombre: 'Testing',
        items: ['xUnit', 'Jasmine/Karma'],
      },
      {
        id: 'herramientas',
        nombre: 'Herramientas e infraestructura',
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
    relacionTitulo: 'Tecnologías relacionadas con proyectos reales',
  },
  metodologia: {
    etiqueta: '// CÓMO CONSTRUYO',
    titulo: 'Cómo construyo.',
    panel: {
      titulo: 'Resultado',
      nucleo: 'Soluciones verificables',
      descripcion:
        'Cada decisión queda documentada y respaldada por pruebas y evidencia real del comportamiento esperado.',
    },
    pasos: [
      { numero: '01', titulo: 'Entender el problema', texto: 'Identifico el contexto, las restricciones y las reglas que debe cumplir la solución.' },
      { numero: '02', titulo: 'Separar responsabilidades', texto: 'Diseño el modelo de datos y distribuyo la lógica en capas con responsabilidades claras.' },
      { numero: '03', titulo: 'Implementar y validar', texto: 'Construyo los casos críticos, pruebo escenarios principales y compruebo el comportamiento esperado.' },
      { numero: '04', titulo: 'Documentar y preparar', texto: 'Registro decisiones técnicas, limpio el código y preparo la solución para su despliegue.' },
    ],
  },
  trayectoria: {
    etiqueta: '// TRAYECTORIA',
    titulo: 'Formación y evolución.',
    formacion: {
      programa: 'Ingeniería de Software',
      institucion: 'Universidad de Guayaquil',
      periodo: 'Octubre de 2023 — Actualidad',
      estado: 'Actualmente cursando.',
    },
    hitos: [
      {
        titulo: 'Hackathon UPS × ÉPICO Guayaquil',
        descripcion: 'Segundo lugar con iBatch Financial Operations.',
        fecha: '2024',
      },
      {
        titulo: 'Tech Lab UG',
        descripcion: 'Proyecto relacionado con GNU/Linux y servidor web local.',
        fecha: '2024',
      },
      {
        titulo: 'Escuela de Ventas de ÉPICO',
        descripcion: 'Formación complementaria en comunicación, ventas y producto.',
        fecha: '2024',
      },
    ],
    idiomas: {
      titulo: 'Idiomas',
      lista: ['Español nativo', 'Inglés intermedio'],
    },
  },
  sobreMi: {
    etiqueta: '// SOBRE MÍ',
    titulo: 'El software más allá de la interfaz.',
    parrafos: [
      'Soy estudiante de Ingeniería de Software. Me interesa comprender el software más allá de la interfaz: cómo se estructura, cómo se organiza la lógica de negocio y cómo se gestionan los datos.',
      'Me atraen la arquitectura, los sistemas empresariales y la construcción de soluciones mantenibles. Complemento el conocimiento de backend con frontend y UX para comprender el producto completo.',
      'Busco seguir creciendo profesionalmente mediante proyectos reales y retos técnicos que me permitan aplicar lo que aprendo.',
    ],
    aspectos: ['Arquitectura de software', 'Lógica de negocio', 'Sistemas empresariales', 'Crecimiento continuo'],
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
    descripcion: 'Desarrollador Backend & Full Stack · Guayaquil, Ecuador',
    volver: 'Volver al inicio',
    marca: 'CRISTHIAN',
    cta: 'Escríbeme',
    derechos: '© 2026 Cristhian Loor — Todos los derechos reservados',
  },
};
