import React, { useState } from 'react';
import './App.css';
import { portfolioData } from './data/mock';

const skills = [['C# / .NET',90],['Java',82],['Flutter / Dart',86],['PostgreSQL',84],['Clean Architecture',88],['Supabase',82],['UX Research',78],['Figma / UI',76]];
const avatar = `       .-------.\n      /  .-. .-.  \\\n     |  |  o o  |  |\n     |  |   ^   |  |\n     |  | \'-\' |  |\n      \\  \'---\'  /\n       \'-------\'/\n        |  | |  |\n      __|  | |  |__\n     /___/  |  \\___\\`;
const prompt = (command) => <div className="terminal-prompt"><span>cristhian@portfolio</span><i>:~/dev $</i> <strong>{command}</strong></div>;

function App() {
  const { hero, projects, contact } = portfolioData;
  const [language, setLanguage] = useState('es');
  const [light, setLight] = useState(false);
  const en = language === 'en';
  const copy = en ? {
    work: '~/work', stack: '~/stack', contact: '~/contact', whoami: 'whoami --full', role: '> Software engineering student · backend builder · UX-minded founder',
    intro: <>I build real products with <mark>.NET, Java and Flutter</mark>. I care about combining clean architecture, user research and solutions that work outside the tutorial.</>,
    checks: ['[x] Guayaquil, Ecuador', '[x] backend + UX/UI'], projects: 'ls -la ~/projects  # 3 selected', selected: '> selected work', projectsTitle: 'Things I built // drwxr-xr-x',
    neofetch: 'neofetch', stackCommand: 'cat stack.txt | sort -r', proficiency: '> proficiency', stackTitle: 'Tools I reach for // honest self-assessment', contactCommand: './contact --hire',
    contactTitle: <>Let’s build something <mark>useful together.</mark></>, contactText: 'I work on backend systems, digital products and collaborations where code has a clear purpose.',
    live: '↗ live demo', source: '↗ source', footer: '$ echo "(c) 2026 Cristhian Loor, built with intention"', commit: 'last commit: today, main@portfolio, uptime 99.98%'
  } : {
    work: '~/work', stack: '~/stack', contact: '~/contact', whoami: 'whoami --full', role: '> Estudiante de ingeniería · backend builder · fundador con visión UX',
    intro: <>Construyo productos reales con <mark>.NET, Java y Flutter</mark>. Me interesa unir arquitectura limpia, investigación de usuarios y soluciones que funcionen fuera del tutorial.</>,
    checks: ['[x] Guayaquil, Ecuador', '[x] backend + UX/UI'], projects: 'ls -la ~/projects  # 3 seleccionados', selected: '> trabajo seleccionado', projectsTitle: 'Cosas que construí // drwxr-xr-x',
    neofetch: 'neofetch', stackCommand: 'cat stack.txt | sort -r', proficiency: '> proficiency', stackTitle: 'Las herramientas que uso // autoevaluación honesta', contactCommand: './contact --hire',
    contactTitle: <>Construyamos algo <mark>útil juntos.</mark></>, contactText: 'Trabajo en sistemas backend, productos digitales y colaboraciones donde el código tenga un propósito claro.',
    live: '↗ demo', source: '↗ código', footer: '$ echo "(c) 2026 Cristhian Loor, construido con intención"', commit: 'último commit: hoy, main@portfolio, uptime 99.98%'
  };
  return <main className={`crt-shell ${light ? 'light-mode' : ''}`}><div className="crt-scanlines" aria-hidden="true" /><div className="terminal-window">
    <header className="terminal-bar"><div className="traffic-lights"><b/><b/><b/></div><div className="terminal-path"><span>cristhian</span>@portfolio: ~/dev</div><nav><a href="#projects">{copy.work}</a><a href="#stack">{copy.stack}</a><a href="#contact">{copy.contact}</a></nav><div className="mode-controls"><button onClick={() => setLanguage(en ? 'es' : 'en')}>{en ? 'ES' : 'EN'}</button><button onClick={() => setLight(!light)}>{light ? 'dark' : 'light'}</button></div></header>
    <div className="terminal-body">
      <section className="hero-section" id="home">{prompt(copy.whoami)}<h1 className="name-banner">Cristhian Loor<span className="cursor">_</span></h1><p className="role-line">{copy.role}</p><p className="hero-copy">{copy.intro}</p><div className="meta-checks">{copy.checks.map(item => <span key={item}>{item}</span>)}</div><div className="command-actions"><a className="command-btn primary" href="#projects">$ ls ~/projects -&gt;</a><a className="command-btn" href="#contact">./contact --hire</a></div></section>
      <section className="section-block" id="about">{prompt(copy.neofetch)}<div className="neo-card"><div className="ascii-avatar"><pre>{avatar}</pre><span>cristhian@dev</span></div><div className="neo-info"><h2>cristhian@portfolio <small>----------------</small></h2><dl><div><dt>OS</dt><dd>Human v20.0 (engineer build)</dd></div><div><dt>Host</dt><dd>Guayaquil, EC · remote-ready</dd></div><div><dt>Role</dt><dd>Backend + UX/UI</dd></div><div><dt>Uptime</dt><dd>building, learning, shipping</dd></div><div><dt>Shell</dt><dd>zsh · VS Code · Figma</dd></div><div><dt>Stack</dt><dd>C#/.NET · Java · Flutter · SQL</dd></div><div><dt>Focus</dt><dd>Clean Architecture + useful products</dd></div></dl><div className="swatches"><i/><i/><i/><i/><i/><i/><i/><i/></div></div></div></section>
      <section className="section-block" id="projects">{prompt(copy.projects)}<p className="eyebrow">{copy.selected}</p><h2 className="section-title">{copy.projectsTitle}</h2><div className="project-grid">{projects.map((project,index)=><article className="project-card" key={project.id}><div className="project-top"><h3>{project.name.toLowerCase()}/</h3><span className="project-stats"><b>★ {index===0?'SaaS':index===1?'team':'UX'}</b><small>-rwxr-xr-x</small></span></div><p>{project.description}</p><div className="tags">{project.tags.map((tag,i)=><span className={i===0?'tag amber-tag':'tag'} key={tag}>{tag}</span>)}</div><div className="project-links"><a href="#contact">{copy.live}</a><a href="#contact">{copy.source}</a></div></article>)}</div></section>
      <section className="section-block" id="stack">{prompt(copy.stackCommand)}<p className="eyebrow">{copy.proficiency}</p><h2 className="section-title">{copy.stackTitle}</h2><div className="skills-panel"><div className="skills-grid">{skills.map(([name,value])=><div className="skill-row" key={name}><label>{name}</label><div className="meter"><i style={{width:`${value}%`}}/></div><b>{value}%</b></div>)}</div></div></section>
      <section className="section-block contact-block" id="contact">{prompt(copy.contactCommand)}<div className="contact-panel"><h2>{copy.contactTitle}</h2><p>{copy.contactText}</p><a className="mail-command" href={`mailto:${contact.email}`}>$ mail {contact.email}<span className="cursor">█</span></a><div className="socials"><a href={contact.github}>↗ github</a><a href={contact.linkedin}>↗ linkedin</a><a href={`mailto:${contact.email}`}>↗ email</a><a href={hero.cvUrl}>↗ CV.pdf</a></div></div></section>
      <footer className="terminal-footer"><span>{copy.footer} <i className="cursor">_</i></span><small>{copy.commit}</small></footer>
    </div></div></main>;
}
export default App;
