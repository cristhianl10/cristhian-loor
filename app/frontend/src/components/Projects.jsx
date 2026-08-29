import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { getGitHubUrl } from '../utils/links';

export const Projects = ({ data }) => (
  <section className="section projects" id="projects" aria-labelledby="projects-title">
    <div className="section-shell">
      <div className="section-heading projects-heading"><h2 id="projects-title">Selected projects</h2><p>Academic and personal work viewed through the problems solved, systems built, and engineering decisions made.</p></div>
      <div className="project-list">
        {data.map((project, index) => (
          <motion.article className="project" key={project.id} initial={false} whileInView={{ y: [12, 0] }} viewport={{ once: true, amount: 0.25 }}>
            <div className="project-meta"><span>{String(index + 1).padStart(2, '0')}</span><span>{project.category}</span></div>
            <div className="project-main">
              <h3>{project.name}</h3><p className="project-summary">{project.summary}</p>
              <p className="project-built"><strong>What I built</strong>{project.built}</p>
              <ul className="tag-list" aria-label={`${project.name} technologies`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </div>
            <a className="project-link" href={getGitHubUrl(project.github)} target="_blank" rel="noreferrer" aria-label={`View ${project.name} repository on GitHub`}><Github size={18} /> Repository <ArrowUpRight size={17} /></a>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
