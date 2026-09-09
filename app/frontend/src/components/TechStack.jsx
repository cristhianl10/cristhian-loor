import { Server, Layers3, Database, Wrench, FlaskConical } from 'lucide-react';
import SectionHeading from './SectionHeading';
const icons = { backend: Server, frontend: Layers3, datos: Database, arquitectura: Layers3, testing: FlaskConical, herramientas: Wrench };
export default function TechStack({ contenido: { tecnologias } }) {
 return <section className="seccion tecnologias" id="tecnologias" aria-labelledby="titulo-tecnologias">
 <SectionHeading id="titulo-tecnologias" etiqueta={tecnologias.etiqueta} titulo={tecnologias.titulo} descripcion={tecnologias.introduccion}/>
 <div className="constelacion-tecnica" data-reveal="cluster">
 {tecnologias.categorias.map(c=>{const Icon=icons[c.id];return <article className={`categoria-tecnica categoria-${c.id}`} key={c.id} data-foco>
 <div className="categoria-titulo"><Icon aria-hidden="true" size={19}/><h3>{c.nombre}</h3></div>
 <ul className="stack-aplicado">{c.aplicaciones.map(a=><li key={a.tecnologia}><strong>{a.tecnologia}</strong><span>{a.contexto}</span></li>)}</ul>
 </article>;})}
 </div></section>;
}
