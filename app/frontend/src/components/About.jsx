import SectionHeading from './SectionHeading';
export default function About({ contenido: { sobreMi } }) {
 return <section className="seccion perfil" id="sobre-mi" aria-labelledby="titulo-sobre-mi">
 <SectionHeading id="titulo-sobre-mi" etiqueta={sobreMi.etiqueta} titulo={sobreMi.titulo} />
 <div className="sobre-mi-texto" data-reveal="flow">{sobreMi.parrafos.map(p => <p key={p}>{p}</p>)}</div>
 </section>;
}
