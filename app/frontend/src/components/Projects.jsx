import { ArrowUpRight, Github } from 'lucide-react';

export const Projects = ({ data }) => (
  <section className="projects section" id="proyectos">
    <div className="shell">
      <div className="section-head project-heading">
        <p className="section-id">~/proyectos/</p>
        <h2>Proyectos que demuestran<br />cómo construyo software.</h2>
      </div>
      <div className="project-list">
        {data.map((project, index) => (
          <article className={`project ${project.featured ? 'featured' : ''}`} key={project.id}>
            <div className="project-index">project_{String(index + 1).padStart(2, '0')}</div>
            <div className="project-content">
              <div className="project-title">
                <div><p><span>tipo:</span> {project.type}</p><h3>{project.name}</h3></div>
                <div className="project-links">
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Abrir demo de ${project.name}`}>Demo <ArrowUpRight size={17} /></a>}
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Abrir repositorio de ${project.name}`}><Github size={18} /> GitHub <ArrowUpRight size={17} /></a>
                </div>
              </div>
              {project.recognition && <p className="recognition">{project.recognition}</p>}
              <p className="project-intro">{project.intro}</p>
              <div className="project-detail">
                <p><strong>Mi contribución</strong>{project.contribution}</p>
                {project.details && <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}
              </div>
              {project.caveat && <p className="caveat">{project.caveat}</p>}
              <ul className="tags" aria-label={`Tecnologías de ${project.name}`}>{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
