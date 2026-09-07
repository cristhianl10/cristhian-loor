import './App.css';
import GradientWaves from './components/GradientWaves';
import { portfolioData } from './data/mock';

function ProjectVisual({ kind }) {
  if (kind === 'operations') return <div className="operations-visual" aria-hidden="true"><div className="csv-file">CSV</div><i>→</i><div className="process-lines"><span /><span /><span /></div><i>→</i><div className="success-check">✓</div></div>;
  if (kind === 'architecture') return <div className="flow-visual" aria-hidden="true"><span>RECLAMO</span><i>↓</i><span>REGLAS DE NEGOCIO</span><i>↓</i><span>PRIORIDAD + SLA</span><i>↓</i><span>SEGUIMIENTO</span></div>;
  return <div className="layers-visual" aria-hidden="true">{['API', 'Application', 'Domain', 'Infrastructure'].map(layer => <span key={layer}>{layer}</span>)}</div>;
}

function ProjectCard({ project }) {
  return <article className={`project-case ${project.kind}`}>
    <div className="project-intro"><p className="case-number">{project.number} / SELECTED WORK</p>{project.recognition && <span className="recognition">{project.recognition}</span>}<h3>{project.name}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p><div className="tech-list">{project.technologies.map(item => <span key={item}>{item}</span>)}</div></div>
    <div className="project-evidence"><ProjectVisual kind={project.kind} /><div><p className="evidence-title">LO INTERESANTE TÉCNICAMENTE</p><ul>{project.evidence.map(item => <li key={item}>{item}</li>)}</ul></div></div>
  </article>;
}

function App() {
  const { hero, projects, approach, contact } = portfolioData;
  return <main className="portfolio-shell"><GradientWaves horizonColor="#03e198" waveColor="#FF9FFC" crestColor="#FFFFFF" speed={0.4} amplitude={2.5} waveScale={0.6} waveRatio={0.9} swell={35} turbulence={20} tilt={1.11} zoom={1} height={5.5} fogDepth={15} detail="medium" brightness={1} opacity={1} grain grainIntensity={0.05} mouseInteraction parallaxStrength={0.5} /><div className="page-overlay" />
    <header className="topbar"><a className="wordmark" href="#inicio">CL<span>·</span></a><nav><a href="#proyectos">Proyectos</a><a href="#como-trabajo">Cómo trabajo</a><a href="#sobre-mi">Sobre mí</a></nav><a className="topbar-contact" href="#contacto">Hablemos <span>↗</span></a></header>
    <div className="page-content"><section className="hero" id="inicio"><p className="eyebrow">{hero.location} · DISPONIBLE PARA OPORTUNIDADES</p><h1>{hero.name}</h1><p className="hero-role">{hero.role}</p><p className="hero-text">Estudiante de Ingeniería de Software enfocado en construir aplicaciones web y APIs con Java, Spring Boot y .NET.</p><div className="hero-actions"><a className="button button-main" href="#proyectos">Ver proyectos <span>↓</span></a><a className="button button-quiet" href={contact.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a className="button button-quiet" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div><p className="hero-stack">Java <i>·</i> Spring Boot <i>·</i> .NET <i>·</i> React</p><div className="hero-code" aria-hidden="true"><span>API</span><i>→</i><span>DOMAIN</span><i>→</i><span>DATA</span></div></section>
      <section className="work-section" id="proyectos"><div className="section-title"><p>01 / PROYECTOS</p><h2>La evidencia<br />antes que la lista.</h2><span>03 casos seleccionados</span></div><div className="cases">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div></section>
      <section className="approach-section" id="como-trabajo"><div className="section-title"><p>02 / CÓMO CONSTRUYO SOFTWARE</p><h2>El código es parte<br />del criterio.</h2></div><div className="approach-grid">{approach.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div><div className="tool-strip">Java <i>·</i> Spring Boot <i>·</i> C# / .NET <i>·</i> React <i>·</i> Next.js <i>·</i> Angular <i>·</i> PostgreSQL <i>·</i> MySQL <i>·</i> SQL Server <i>·</i> Supabase</div></section>
      <section className="about-section" id="sobre-mi"><div className="about-index">03 / SOBRE MÍ</div><div><h2>Software, producto<br />y criterio técnico.</h2><p>Estudio Ingeniería de Software en la Universidad de Guayaquil y he orientado mi formación hacia el desarrollo backend y full stack.</p><p>Me interesa entender qué ocurre detrás de una aplicación: cómo se estructura, cómo fluye la información, dónde vive la lógica de negocio y cómo mantener el software a medida que crece.</p><p>Esa curiosidad me ha llevado a trabajar con Java/Spring Boot y .NET, además de desarrollar aplicaciones completas con React, Next.js y Angular.</p></div><aside className="education-card"><span>2023 — HOY</span><strong>Ingeniería de Software</strong><p>Universidad de Guayaquil</p><hr /><span>2026</span><strong>2.º lugar · Hackathon</strong><p>UPS × ÉPICO Guayaquil</p></aside></section>
      <section className="contact-section" id="contacto"><p>04 / CONTACTO</p><h2>Construyamos<br /><em>algo.</em></h2><span>Estoy abierto a oportunidades para crecer como desarrollador y aportar en productos de software.</span><a className="mail-link" href={`mailto:${contact.email}`}>{contact.email} <b>↗</b></a><div><a href={contact.github}>GitHub ↗</a><a href={contact.linkedin}>LinkedIn ↗</a><a href={hero.cvUrl}>CV.pdf ↗</a></div></section><footer><span>© 2026 Cristhian Loor</span><span>Guayaquil, Ecuador</span></footer>
    </div>
  </main>;
}

export default App;
