import { Check } from 'lucide-react';
import SectionHeading from './SectionHeading';

function About({ contenido }) {
  const { sobreMi, interfaz } = contenido;
  return (
    <section className="seccion perfil" id="sobre-mi" aria-labelledby="titulo-sobre-mi">
      <SectionHeading id="titulo-sobre-mi" etiqueta={sobreMi.etiqueta} titulo={sobreMi.titulo} />
      <div className="sobre-mi-texto" data-reveal="flow">
        {sobreMi.parrafos.map((parrafo) => <p key={parrafo}>{parrafo}</p>)}
        <div className="sobre-mi-principios" aria-label={interfaz.aspectosInteres}>{sobreMi.aspectos.map((item) => <span key={item}><Check aria-hidden="true" size={16} />{item}</span>)}</div>
      </div>
    </section>
  );
}

export default About;
