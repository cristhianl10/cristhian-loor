import { GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading';
export default function CareerTimeline({ contenido: { formacion, persona } }) {
 return <section className="seccion trayectoria" id="formacion" aria-labelledby="titulo-formacion">
 <SectionHeading id="titulo-formacion" etiqueta={formacion.etiqueta} titulo={formacion.titulo} />
 <div className="trayectoria-reticula">
 <article className="formacion" data-foco>
 <div className="formacion-cabecera"><GraduationCap aria-hidden="true" size={24}/><h3>{formacion.programa}</h3></div>
 <p className="formacion-institucion">{formacion.institucion}</p>
 <p className="formacion-meta">{formacion.periodo}</p><p>{formacion.estado}</p>
 <div className="idiomas"><h4>{formacion.idiomasTitulo}</h4>{persona.idiomas.map(i=><p key={i}>{i}</p>)}</div>
 </article>
 <ol className="trayectoria-hitos">{formacion.hitos.map(h=><li key={h.titulo}><h3>{h.titulo}</h3><p>{h.descripcion}</p></li>)}</ol>
 </div></section>;
}
