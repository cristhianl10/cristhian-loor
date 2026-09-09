import { useRef } from 'react';
import { ArrowDown, Github, Linkedin, MapPin } from 'lucide-react';
function Hero({ contenido }) {
  const { persona, presentacion, interfaz } = contenido;
  const [primero, ...resto] = persona.nombreProfesional.split(' ');
  const maquetaRef = useRef(null);

  const seguirPuntero = (evento) => {
    const nodo = maquetaRef.current;
    if (!nodo) return;
    const rect = nodo.getBoundingClientRect();
    const x = ((evento.clientX - rect.left) / rect.width) * 100;
    const y = ((evento.clientY - rect.top) / rect.height) * 100;
    nodo.style.setProperty('--r-x', `${x}%`);
    nodo.style.setProperty('--r-y', `${y}%`);
  };

  return (
    <section className="hero" id="inicio" aria-labelledby="titulo-principal">
      <div className="hero-contenido">
        <p className="hero-etiqueta mono">{presentacion.etiqueta}</p>
        <p className="hero-ubicacion"><MapPin aria-hidden="true" size={15} />{persona.ubicacion}</p>
        <h1 id="titulo-principal">{primero} <span className="apellido">{resto.join(' ')}</span></h1>
        <p className="hero-rol">{persona.rol}</p>
        <p className="hero-tesis">{presentacion.titulo}</p>
        <p className="hero-descripcion">{presentacion.descripcion}</p>
        <div className="hero-acciones" aria-label={interfaz.enlacesPrincipales}>
          <a className="boton boton-principal" href="#proyectos">{presentacion.acciones.proyectos}<ArrowDown aria-hidden="true" size={17} /></a>
          <a className="boton boton-secundario" href={persona.cv} download="Cristhian-Loor-CV.pdf">{presentacion.acciones.cv}<ArrowDown aria-hidden="true" size={17} /></a>
          <a className="boton boton-secundario" href={persona.github} target="_blank" rel="noopener noreferrer" aria-label={`${presentacion.acciones.github}, ${interfaz.abrirNuevaPestana}`}><Github aria-hidden="true" size={17} />{presentacion.acciones.github}</a>
          <a className="boton boton-secundario" href={persona.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${presentacion.acciones.linkedin}, ${interfaz.abrirNuevaPestana}`}><Linkedin aria-hidden="true" size={17} />{presentacion.acciones.linkedin}</a>
        </div>
      </div>

      <div className="hero-maqueta">
        <div className="maqueta" ref={maquetaRef} onPointerMove={seguirPuntero} aria-label={presentacion.panel.titulo}>
          <span className="maqueta-foco" aria-hidden="true" />
          <div className="maqueta-barra" aria-hidden="true"><i /><i /><i /><span className="mono">{presentacion.panel.nombre}</span></div>
          <div className="maqueta-nucleo"><span className="mono">{presentacion.panel.nucleo}</span>{presentacion.panel.principales.map((item) => <strong key={item}>{item}</strong>)}</div>
          <div className="maqueta-flujo" aria-hidden="true">{presentacion.panel.flujo.map((item, indice) => <div key={item}><span>{item}</span>{indice < presentacion.panel.flujo.length - 1 && <i />}</div>)}</div>
          <div className="maqueta-pie"><span className="mono">{persona.ubicacion}</span></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
