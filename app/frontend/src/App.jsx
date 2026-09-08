import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Server,
  Trophy,
  Wrench,
} from 'lucide-react';
import './App.css';
import { obtenerContenido } from './content';
import AuroraBlur from './components/AuroraBlur';
import MotionController from './components/MotionController';
import Navbar from './components/Navbar';
import ProjectCarousel from './components/ProjectCarousel';
import SectionHeading from './components/SectionHeading';

const iconosCategoria = {
  backend: Server,
  frontend: Layers3,
  datos: Database,
  arquitectura: Layers3,
  herramientas: Wrench,
};

const obtenerPreferencia = (clave, alternativa, valoresPermitidos) => {
  try {
    const valor = localStorage.getItem(clave);
    return valoresPermitidos.includes(valor) ? valor : alternativa;
  } catch {
    return alternativa;
  }
};

function Etiquetas({ items, etiqueta, variante = '' }) {
  return <ul className={`etiquetas ${variante}`} aria-label={etiqueta}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function Hero({ contenido }) {
  const { persona, presentacion } = contenido;
  return (
    <section className="hero" id="inicio" aria-labelledby="titulo-principal">
      <p className="hero-ubicacion"><MapPin aria-hidden="true" size={15} />{persona.ubicacion}</p>
      <h1 id="titulo-principal">{persona.nombreProfesional}</h1>
      <p className="hero-rol">{persona.rol}</p>
      <p className="hero-tesis">{presentacion.titulo}</p>
      <p className="hero-descripcion">{presentacion.descripcion}</p>
      <div className="hero-acciones" aria-label={contenido.interfaz.enlacesPrincipales}>
        <a className="boton boton-principal" href="#proyectos">{presentacion.acciones.proyectos}<ArrowDown aria-hidden="true" size={17} /></a>
        <a className="boton boton-secundario" href={persona.github} target="_blank" rel="noreferrer" aria-label={`${presentacion.acciones.github}, ${contenido.interfaz.abrirNuevaPestana}`}><Github aria-hidden="true" size={17} />{presentacion.acciones.github}</a>
        <a className="boton boton-secundario" href={persona.linkedin} target="_blank" rel="noreferrer" aria-label={`${presentacion.acciones.linkedin}, ${contenido.interfaz.abrirNuevaPestana}`}><Linkedin aria-hidden="true" size={17} />{presentacion.acciones.linkedin}</a>
      </div>
      <div className="hero-enfoque" aria-label={presentacion.panel.titulo}>
        <div className="hero-enfoque-item"><span className="hero-enfoque-label">{presentacion.panel.nucleo}</span>{presentacion.panel.principales.map((item) => <strong key={item}>{item}</strong>)}</div>
        <div className="hero-enfoque-flujo" aria-hidden="true">{presentacion.panel.flujo.map((item, indice) => <div key={item}><span>{item}</span>{indice < presentacion.panel.flujo.length - 1 && <i />}</div>)}</div>
        <span className="hero-enfoque-estado"><i />{presentacion.panel.estado}</span>
      </div>
    </section>
  );
}

function Reconocimiento({ contenido }) {
  const { reconocimiento, interfaz } = contenido;
  return (
    <aside className="reconocimiento" aria-labelledby="titulo-reconocimiento" data-reveal="award">
      <div className="reconocimiento-emblema" aria-hidden="true"><Trophy size={25} strokeWidth={1.7} /><span>2.º</span></div>
      <div className="reconocimiento-contenido">
        <div><h2 id="titulo-reconocimiento">{reconocimiento.titulo}</h2><p className="reconocimiento-evento">{reconocimiento.evento}</p></div>
        <div className="reconocimiento-detalle"><span>{interfaz.proyectoPresentado}</span><strong>{reconocimiento.proyecto}</strong><p>{reconocimiento.descripcion}</p></div>
      </div>
    </aside>
  );
}

function Proyectos({ contenido }) {
  const { seccionProyectos, proyectos, interfaz } = contenido;
  return (
    <section className="seccion proyectos" id="proyectos" aria-labelledby="titulo-proyectos">
      <SectionHeading id="titulo-proyectos" titulo={seccionProyectos.titulo} descripcion={seccionProyectos.descripcion} />
      <ProjectCarousel proyectos={proyectos} interfaz={interfaz} />
      <Reconocimiento contenido={contenido} />
    </section>
  );
}

function Tecnologias({ contenido }) {
  const { tecnologias, interfaz } = contenido;
  const [proyectoActivo, setProyectoActivo] = useState(0);
  const selectores = useRef([]);
  const proyecto = tecnologias.porProyecto[proyectoActivo];

  const navegarConTeclado = (evento, indice) => {
    const teclas = { ArrowRight: indice + 1, ArrowLeft: indice - 1, Home: 0, End: tecnologias.porProyecto.length - 1 };
    if (!(evento.key in teclas)) return;
    evento.preventDefault();
    const siguiente = (teclas[evento.key] + tecnologias.porProyecto.length) % tecnologias.porProyecto.length;
    setProyectoActivo(siguiente);
    selectores.current[siguiente]?.focus();
  };

  return (
    <section className="seccion tecnologias" id="tecnologias" aria-labelledby="titulo-tecnologias">
      <SectionHeading id="titulo-tecnologias" titulo={tecnologias.titulo} descripcion={tecnologias.introduccion} />
      <div className="constelacion-tecnica" data-reveal="cluster">
        {tecnologias.categorias.map((categoria) => {
          const Icono = iconosCategoria[categoria.id];
          return (
            <article className={`categoria-tecnica categoria-${categoria.id}`} key={categoria.id}>
              <div className="categoria-titulo"><Icono aria-hidden="true" size={19} /><h3>{categoria.nombre}</h3></div>
              <Etiquetas items={categoria.items} etiqueta={interfaz.tecnologias} />
            </article>
          );
        })}
      </div>

      <div className="stack-contexto" data-reveal="panel">
        <div className="stack-contexto-cabecera">
          <h3>{tecnologias.relacionTitulo}</h3>
          <div role="tablist" aria-label={interfaz.tecnologiasPorProyecto}>
            {tecnologias.porProyecto.map((item, indice) => (
              <button
                ref={(elemento) => { selectores.current[indice] = elemento; }}
                type="button"
                role="tab"
                id={`stack-selector-${indice}`}
                aria-controls="stack-panel"
                aria-selected={indice === proyectoActivo}
                tabIndex={indice === proyectoActivo ? 0 : -1}
                key={item.nombre}
                onClick={() => setProyectoActivo(indice)}
                onKeyDown={(evento) => navegarConTeclado(evento, indice)}
              >{item.nombre}</button>
            ))}
          </div>
        </div>
        <div className="stack-contexto-activo" id="stack-panel" role="tabpanel" aria-labelledby={`stack-selector-${proyectoActivo}`} key={proyecto.nombre}>
          <span>{interfaz.proyecto}</span><strong>{proyecto.nombre}</strong><Etiquetas items={proyecto.items} etiqueta={interfaz.tecnologiasProyecto} variante="etiquetas-compactas" />
        </div>
      </div>
    </section>
  );
}

function Perfil({ contenido }) {
  const { sobreMi, formacion, persona, interfaz } = contenido;
  return (
    <section className="seccion perfil" id="sobre-mi" aria-labelledby="titulo-sobre-mi">
      <SectionHeading id="titulo-sobre-mi" titulo={sobreMi.titulo} />
      <div className="perfil-reticula">
        <div className="sobre-mi-texto" data-reveal="flow">
          {sobreMi.parrafos.map((parrafo) => <p key={parrafo}>{parrafo}</p>)}
          <div className="sobre-mi-principios" aria-label={interfaz.aspectosInteres}>{sobreMi.aspectos.map((item) => <span key={item}><Check aria-hidden="true" size={16} />{item}</span>)}</div>
        </div>

        <div className="perfil-lateral">
          <article className="formacion" id="formacion" aria-labelledby="titulo-formacion" data-reveal="panel">
            <div className="formacion-cabecera"><div className="formacion-icono" aria-hidden="true"><GraduationCap size={24} /></div><h2 id="titulo-formacion">{formacion.titulo}</h2></div>
            <h3>{formacion.programa}</h3>
            <p className="formacion-institucion">{formacion.institucion}</p>
            <div className="formacion-meta"><time>{formacion.periodo}</time><span>{formacion.estado}</span></div>
            <div className="idiomas"><h3>{formacion.idiomasTitulo}</h3>{persona.idiomas.map((idioma) => <p key={idioma}>{idioma}</p>)}</div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Contacto({ contenido }) {
  const { contacto, persona, interfaz } = contenido;
  return (
    <section className="seccion contacto" id="contacto" aria-labelledby="titulo-contacto">
      <div className="contacto-intro" data-reveal="slice"><h2 id="titulo-contacto">{contacto.titulo}</h2><p>{contacto.descripcion}</p></div>
      <div className="contacto-enlaces" data-reveal="flow">
        <a className="contacto-correo" href={`mailto:${persona.correo}`}><span><Mail aria-hidden="true" size={17} />{contacto.correoEtiqueta}</span><strong>{persona.correo}</strong><ArrowUpRight aria-hidden="true" size={20} /></a>
        <a href={persona.linkedin} target="_blank" rel="noreferrer" aria-label={`LinkedIn, ${interfaz.abrirNuevaPestana}`}><Linkedin aria-hidden="true" size={18} />LinkedIn<ArrowUpRight aria-hidden="true" size={17} /></a>
        <a href={persona.github} target="_blank" rel="noreferrer" aria-label={`GitHub, ${interfaz.abrirNuevaPestana}`}><Github aria-hidden="true" size={18} />GitHub<ArrowUpRight aria-hidden="true" size={17} /></a>
        <p><MapPin aria-hidden="true" size={18} /><span><small>{contacto.ubicacionEtiqueta}</small>{persona.ubicacion}</span></p>
      </div>
    </section>
  );
}

function App() {
  const [idioma, setIdioma] = useState(() => obtenerPreferencia('portfolio-idioma', 'es', ['es', 'en']));
  const [tema, setTema] = useState(() => obtenerPreferencia('portfolio-tema', window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark', ['light', 'dark']));
  const contenido = obtenerContenido(idioma);

  useEffect(() => {
    const { metadata } = contenido;
    document.documentElement.lang = contenido.locale;
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', metadata.description);
    try { localStorage.setItem('portfolio-idioma', idioma); } catch { /* La preferencia sigue funcionando durante la sesión. */ }
  }, [contenido, idioma]);

  useEffect(() => {
    document.documentElement.dataset.theme = tema;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', tema === 'light' ? '#f4f7fb' : '#060914');
    try { localStorage.setItem('portfolio-tema', tema); } catch { /* La preferencia sigue funcionando durante la sesión. */ }
  }, [tema]);

  return (
    <div className="sitio">
      <a className="saltar-contenido" href="#contenido-principal">{contenido.interfaz.saltarContenido}</a>
      <MotionController etiqueta={contenido.interfaz.progresoLectura} />
      <AuroraBlur />
      <Navbar
        persona={contenido.persona}
        enlaces={contenido.navegacion}
        interfaz={contenido.interfaz}
        idioma={idioma}
        tema={tema}
        cambiarIdioma={() => setIdioma((valor) => (valor === 'es' ? 'en' : 'es'))}
        cambiarTema={() => setTema((valor) => (valor === 'dark' ? 'light' : 'dark'))}
      />
      <main id="contenido-principal"><Hero contenido={contenido} /><Proyectos contenido={contenido} /><Tecnologias contenido={contenido} /><Perfil contenido={contenido} /><Contacto contenido={contenido} /></main>
      <footer className="pie-pagina"><span>{contenido.persona.nombreProfesional}</span><span>{contenido.pie.descripcion}</span><a href="#inicio">{contenido.pie.volver}<ArrowUpRight aria-hidden="true" size={16} /></a></footer>
    </div>
  );
}

export default App;
