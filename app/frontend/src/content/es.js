export const contenidoEs = {
  locale: 'es',
  metadata: {
    title: 'Cristhian Loor | Desarrollador Backend & Full Stack',
    description:
      'Portfolio de Cristhian Loor, desarrollador Backend & Full Stack. Proyectos con Java, Spring Boot, C#, .NET, React, Next.js y Angular.',
    author: 'Cristhian José Loor Quimí',
    url: 'https://portfolio-cristhian-loor.vercel.app/',
  },
  persona: {
    nombreCompleto: 'Cristhian José Loor Quimí',
    nombreProfesional: 'Cristhian Loor',
    rol: 'Desarrollador Backend & Full Stack',
    ubicacion: 'Guayaquil, Ecuador',
    correo: 'cristhian.loor25@outlook.com',
    github: 'https://github.com/cristhianl10',
    linkedin: 'https://www.linkedin.com/in/cristhian-loor/',
    idiomas: ['Español nativo', 'Inglés intermedio'],
  },
  navegacion: [
    { etiqueta: 'Proyectos', destino: '#proyectos' },
    { etiqueta: 'Tecnologías', destino: '#tecnologias' },
    { etiqueta: 'Sobre mí', destino: '#sobre-mi' },
    { etiqueta: 'Formación', destino: '#formacion' },
  ],
  interfaz: {
    saltarContenido: 'Saltar al contenido principal',
    irInicio: 'Ir al inicio',
    abrirMenu: 'Abrir menú',
    cerrarMenu: 'Cerrar menú',
    menuContacto: 'Contacto',
    navegacionPrincipal: 'Navegación principal',
    enlacesPrincipales: 'Enlaces principales',
    tecnologias: 'Tecnologías',
    tecnologiasProyecto: 'Tecnologías del proyecto',
    aspectosDestacados: 'Aspectos técnicos destacados',
    rolesImplementados: 'Roles implementados',
    alcanceActual: 'Alcance actual',
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
  },
  presentacion: {
    etiqueta: '// BACKEND — FULL STACK',
    titulo: 'Desarrollo de software desde la lógica que lo sostiene.',
    descripcion:
      'Estudiante de Ingeniería de Software enfocado en el desarrollo de aplicaciones web y APIs REST con Java, Spring Boot y .NET. También cuento con experiencia práctica desarrollando soluciones full stack con React, Next.js y Angular.',
    enfoque:
      'Me interesa especialmente la arquitectura de software, la lógica de negocio, las bases de datos y la construcción de soluciones mantenibles.',
    focos: ['Java / Spring Boot', 'C# / .NET', 'Backend / Full Stack'],
    panel: {
      titulo: 'Enfoque técnico',
      estado: 'En formación',
      nucleo: 'Backend',
      principales: ['Java / Spring Boot', 'C# / .NET'],
      flujo: ['API', 'Lógica', 'Datos'],
    },
    acciones: {
      proyectos: 'Ver proyectos',
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
      reconocimiento: 'Segundo lugar en Hackathon',
      contexto:
        'Proyecto desarrollado durante una Hackathon organizada por la Universidad Politécnica Salesiana junto con ÉPICO Guayaquil.',
      descripcion:
        'Plataforma para procesar archivos CSV que contienen transacciones financieras y permitir el seguimiento de su procesamiento, validaciones, progreso e historial.',
      tecnologias: ['Java', 'Spring Boot', 'Spring Data JDBC', 'Next.js', 'React', 'MySQL'],
      destacados: [
        'API desarrollada con Spring Boot y acceso a datos mediante Spring Data JDBC.',
        'Interfaz desarrollada con Next.js y React.',
        'Procesamiento asíncrono e inserciones de registros por lotes.',
        'Actualización periódica del progreso y consulta paginada de registros.',
        'Validación de montos, cuentas y fechas.',
        'Registro de errores e historial de auditoría durante el procesamiento.',
      ],
      visual: {
        tipo: 'procesamiento',
        etapas: ['Archivo CSV', 'Validaciones', 'Procesamiento', 'Auditoría'],
      },
    },
    {
      id: 'banco-horizonte',
      indice: '02',
      nombre: 'Banco Horizonte — Gestión de Reclamos',
      tipo: 'Aplicación full stack',
      descripcion:
        'Plataforma full stack desarrollada para gestionar reclamos bancarios de extremo a extremo. La prioridad no se asigna de forma aislada: surge de reglas de negocio que también determinan el SLA y condicionan el flujo posterior.',
      explicacionVisual:
        'Las reglas acumulan criterios; la prioridad resultante determina el SLA antes de que el reclamo continúe por un flujo de estados controlado.',
      tecnologias: ['C#', '.NET 10', 'Angular 20', 'PostgreSQL', 'Supabase'],
      arquitectura: ['API', 'Application', 'Domain', 'Infrastructure'],
      destacados: [
        'API REST con .NET y frontend con Angular 20, Angular Signals y formularios reactivos.',
        'Clean Architecture con capas API, Application, Domain e Infrastructure.',
        'Motor de priorización automática basado en reglas de negocio acumulativas.',
        'Cálculo dinámico de prioridad y del SLA correspondiente.',
        'Flujo de estados controlado mediante validaciones, historial completo y trazabilidad.',
        'Supabase Auth, autenticación mediante JWT y autorización basada en roles.',
        'Pruebas unitarias backend con xUnit y pruebas frontend con Jasmine/Karma.',
      ],
      roles: ['Operador', 'Analista', 'Supervisor', 'Administrador'],
      visual: {
        tipo: 'priorizacion',
        etapas: ['Reclamo', 'Reglas acumulativas', 'Prioridad', 'SLA', 'Flujo de estados', 'Trazabilidad'],
      },
    },
    {
      id: 'pos-api',
      indice: '03',
      nombre: 'POS API',
      tipo: 'Backend para un sistema de punto de venta',
      descripcion:
        'Backend de un sistema de punto de venta desarrollado mediante una API REST. Su importancia está en la estructura del backend y en la aplicación de patrones para mantener separadas las responsabilidades.',
      tecnologias: ['C#', '.NET', 'Entity Framework', 'SQL Server', 'REST API'],
      arquitectura: ['API', 'Application', 'Domain', 'Infrastructure'],
      destacados: [
        'Organización por capas: API, Application, Domain e Infrastructure.',
        'Acceso a datos mediante Entity Framework.',
        'Aplicación de Repository Pattern y Unit of Work.',
        'Separación de responsabilidades entre las capas del backend.',
        'Endpoints probados utilizando Postman.',
      ],
      alcanceActual: ['Sin autenticación', 'Sin JWT', 'Sin facturación', 'Sin CRUD completo'],
      visual: {
        tipo: 'capas',
        etapas: ['API', 'Application', 'Domain', 'Infrastructure'],
      },
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
        nombre: 'Arquitectura',
        items: ['Clean Architecture', 'SOLID', 'Repository Pattern', 'Unit of Work'],
      },
      {
        id: 'herramientas',
        nombre: 'Herramientas',
        items: ['Git', 'GitHub', 'Postman'],
      },
    ],
    porProyecto: [
      {
        nombre: 'iBatch',
        items: ['Java', 'Spring Boot', 'Spring Data JDBC', 'Next.js', 'React', 'MySQL'],
      },
      {
        nombre: 'Banco Horizonte',
        items: ['C#', '.NET 10', 'Angular 20', 'PostgreSQL', 'Supabase'],
      },
      {
        nombre: 'POS API',
        items: ['C#', '.NET', 'Entity Framework', 'SQL Server'],
      },
    ],
    relacionTitulo: 'Tecnologías relacionadas con proyectos reales',
  },
  sistema: {
    etiqueta: '// EL SISTEMA',
    titulo: 'El sistema, de un vistazo.',
    barrasNota: 'aspectos técnicos por proyecto',
    nucleoNota: 'núcleo verificado en producción académica',
  },
  metodologia: {
    etiqueta: '// METODOLOGÍA',
    titulo: 'Cómo construyo.',
    pasos: [
      { numero: '01', titulo: 'Modelar la lógica', texto: 'Las reglas de negocio definen prioridad, SLA y flujo antes que la interfaz.' },
      { numero: '02', titulo: 'Estructurar por capas', texto: 'API, Application, Domain e Infrastructure con responsabilidades separadas.' },
      { numero: '03', titulo: 'Validar y auditar', texto: 'Validaciones, historial y trazabilidad en cada operación.' },
    ],
  },
  reconocimiento: {
    titulo: 'Segundo lugar',
    evento: 'Hackathon Universidad Politécnica Salesiana × ÉPICO Guayaquil',
    proyecto: 'iBatch Financial Operations',
    descripcion:
      'El proyecto presentado fue una plataforma para procesar archivos CSV con transacciones financieras, validaciones, seguimiento de progreso e historial de auditoría.',
  },
  sobreMi: {
    etiqueta: '// PERFIL',
    titulo: 'El software más allá de la interfaz.',
    parrafos: [
      'Soy estudiante de Ingeniería de Software en la Universidad de Guayaquil y he orientado gran parte de mi formación hacia el desarrollo backend y full stack. Mi enfoque principal está en Java/Spring Boot y C#/.NET, complementado con tecnologías frontend como React, Next.js y Angular.',
      'Me interesa comprender una aplicación más allá de su interfaz: cómo se estructura, cómo se organiza la lógica de negocio, cómo se gestionan los datos y cómo mantener una separación adecuada de responsabilidades dentro del software.',
      'A través de mis proyectos he trabajado con APIs REST, bases de datos relacionales, arquitectura por capas, Clean Architecture, autenticación, autorización, procesamiento asíncrono y pruebas.',
    ],
    aspectos: ['Arquitectura de software', 'Lógica de negocio', 'Gestión de datos', 'Separación de responsabilidades'],
  },
  formacion: {
    titulo: 'Formación',
    programa: 'Ingeniería de Software',
    institucion: 'Universidad de Guayaquil',
    periodo: 'Octubre de 2023 — Actualidad',
    estado: 'Actualmente cursando Ingeniería de Software.',
    idiomasTitulo: 'Idiomas',
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
    marca: 'LOOR',
    cta: 'Escríbeme',
    derechos: '© 2026 Cristhian Loor — Todos los derechos reservados',
  },
};
