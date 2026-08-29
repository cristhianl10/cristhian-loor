export const portfolioData = {
  profile: {
    name: 'Cristhian Loor',
    role: 'Software Engineering | Software Developer',
    location: 'Guayaquil, Ecuador',
    focus: 'Java • Spring Boot • .NET • React • AI Integration',
    statement: 'Building clean, scalable, and user-centered software.',
    cvUrl: '/cv-cristhian-loor.pdf',
  },
  about: {
    paragraphs: [
      'I’m a Software Engineering student at the University of Guayaquil, focused on building clean, maintainable, and scalable software.',
      'I’m particularly interested in backend development, REST APIs, software architecture, and integrating AI capabilities into modern applications. I also care about UX/UI and the complete experience of the software I build.',
    ],
    note: 'Open-source enthusiast and Linux user.',
  },
  expertise: [
    { area: 'Backend', primary: ['Java', 'Spring Boot', 'C#', '.NET'], supporting: ['REST APIs'] },
    { area: 'Frontend', primary: ['React'], supporting: ['JavaScript', 'TypeScript'] },
    { area: 'Databases', primary: ['PostgreSQL'], supporting: ['MySQL', 'Oracle'] },
    { area: 'Engineering', primary: ['Clean Architecture', 'SOLID'], supporting: ['Clean Code', 'Software Design', 'REST API Design'] },
  ],
  projects: [
    {
      id: 'pos',
      name: 'POS System',
      category: 'Backend system',
      summary: 'A point-of-sale backend organized around clear domain boundaries and maintainable application layers.',
      built: 'Layered API, Application, Domain, Infrastructure, and Utilities structure, using Repository and Unit of Work patterns. The REST API was tested with Postman.',
      tags: ['C#', '.NET', 'Entity Framework', 'SQL Server', 'REST API'],
      github: 'https://github.com/cristhianl10/POS',
    },
    {
      id: 'laboratory',
      name: 'Laboratory Reservations',
      category: 'Software architecture',
      summary: 'A system for managing laboratory reservations with an emphasis on separation of concerns.',
      built: 'A C# and .NET application structured with Clean Architecture and software development best practices.',
      tags: ['C#', '.NET', 'Clean Architecture'],
      github: 'https://github.com/cristhianl10/Laboratory-reservation-management',
    },
    {
      id: 'stockflow',
      name: 'StockFlow',
      category: 'Inventory SaaS',
      summary: 'Inventory management for small businesses in Latin America.',
      built: 'A Flutter and Supabase application with multi-tenant data access through row-level security and tiered plans.',
      tags: ['Flutter', 'Supabase', 'PostgreSQL', 'Multitenancy'],
      github: 'https://github.com/cristhianl10/Saas-inventario',
    },
    {
      id: 'literapp',
      name: 'Literapp',
      category: 'Team project',
      summary: 'A digital reading club developed as a collaborative academic project.',
      built: 'A Java web application using JSP/Servlets and PostgreSQL through Supabase, supported by software lifecycle documentation.',
      tags: ['Java', 'JSP/Servlets', 'PostgreSQL', 'Supabase'],
      github: 'https://github.com/erigsml/literapp',
    },
  ],
  capabilities: [
    {
      title: 'Software engineering',
      text: 'I care about clear boundaries, maintainable code, thoughtful API design, and architecture that fits the problem.',
      items: ['Clean Architecture', 'SOLID', 'Clean Code', 'Software Design'],
    },
    {
      title: 'AI integration',
      text: 'I’m exploring how modern AI capabilities can be incorporated into useful applications through APIs and intelligent workflows.',
      items: ['AI-powered applications', 'API integrations'],
    },
    {
      title: 'UX/UI',
      text: 'I use product thinking as a complement to development, considering the people, flows, and interfaces behind the software.',
      items: ['Figma', 'Prototyping', 'Design Thinking', 'Nielsen Heuristics'],
    },
  ],
  contact: {
    linkedin: 'https://www.linkedin.com/in/cristhian-loor/',
    github: 'https://github.com/cristhianl10',
    email: 'cristhian.loor25@outlook.com',
  },
};

