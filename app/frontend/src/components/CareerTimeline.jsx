import { GraduationCap, Trophy, MapPin, BookOpen } from 'lucide-react';
import SectionHeading from './SectionHeading';

const iconosHitos = [Trophy, MapPin, BookOpen];

function CareerTimeline({ contenido }) {
  const { trayectoria } = contenido;

  return (
    <section className="seccion trayectoria" id="trayectoria" aria-labelledby="titulo-trayectoria">
      <SectionHeading id="titulo-trayectoria" etiqueta={trayectoria.etiqueta} titulo={trayectoria.titulo} />
      <div className="trayectoria-reticula" data-reveal="cluster">
        <article className="trayectoria-formacion tarjeta-trayectoria" data-foco>
          <div className="trayectoria-icono" aria-hidden="true"><GraduationCap size={22} /></div>
          <div className="trayectoria-formacion-contenido">
            <h3>{trayectoria.formacion.programa}</h3>
            <p className="trayectoria-institucion">{trayectoria.formacion.institucion}</p>
            <div className="trayectoria-meta">
              <time className="trayectoria-periodo">{trayectoria.formacion.periodo}</time>
              <span>{trayectoria.formacion.estado}</span>
            </div>
          </div>
        </article>

        <div className="trayectoria-hitos">
          {trayectoria.hitos.map((hito, indice) => {
            const Icono = iconosHitos[indice % iconosHitos.length];
            return (
              <article className="tarjeta-trayectoria" key={hito.titulo} data-foco>
                <div className="trayectoria-hito-icono" aria-hidden="true"><Icono size={18} /></div>
                <div>
                  <h4>{hito.titulo}</h4>
                  <p>{hito.descripcion}</p>
                  <time className="trayectoria-fecha">{hito.fecha}</time>
                </div>
              </article>
            );
          })}
        </div>

        <div className="trayectoria-idiomas">
          <h3>{trayectoria.idiomas.titulo}</h3>
          <ul>
            {trayectoria.idiomas.lista.map((idioma) => <li key={idioma}>{idioma}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CareerTimeline;
