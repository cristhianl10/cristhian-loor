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
import Navbar from './components/Navbar';
import ProjectCase from './components/ProjectCase';
import SectionHeading from './components/SectionHeading';

const contenido = obtenerContenido('es');

const iconosCategoria = {
  backend: Server,
  frontend: Layers3,
  datos: Database,
  arquitectura: Layers3,
  herramientas: Wrench,
};

function Etiquetas({ items, variante = '' }) {
  return (
    <ul className={`etiquetas ${variante}`} aria-label={contenido.interfaz.tecnologias}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function Hero() {
  const { persona, presentacion } = contenido;
  return (
    <section className="hero" id="inicio" aria-labelledby="titulo-principal">
      <div className="hero-contenido">
        <p className="hero-identidad">
          <span>{persona.nombreProfesional}</span><span aria-hidden="true">/</span><span>{persona.ubicacion}</span>
        </p>
        <h1 id="titulo-principal">{presentacion.titulo}</h1>
        <p className="hero-rol">{persona.rol}</p>
        <p className="hero-descripcion">{presentacion.descripcion}</p>
        <p className="hero-enfoque">{presentacion.enfoque}</p>
        <div className="hero-acciones" aria-label={contenido.interfaz.enlacesPrincipales}>
          <a className="boton boton-principal" href="#proyectos">{presentacion.acciones.proyectos}<ArrowDown aria-hidden="true" size={17} /></a>
          <a className="boton boton-secundario" href={persona.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" size={17} />{presentacion.acciones.github}</a>
          <a className="boton boton-secundario" href={persona.linkedin} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" size={17} />{presentacion.acciones.linkedin}</a>
        </div>
      </div>
      <div className="hero-panel" aria-label={presentacion.panel.titulo}>
        <div className="hero-panel-cabecera"><span>{presentacion.panel.titulo}</span><span className="estado"><i /> {presentacion.panel.estado}</span></div>
        <div className="hero-panel-nucleo"><span>{presentacion.panel.nucleo}</span>{presentacion.panel.principales.map((item) => <strong key={item}>{item}</strong>)}</div>
        <div className="hero-panel-flujo" aria-hidden="true"><span>{presentacion.panel.flujo[0]}</span><i /><span>{presentacion.panel.flujo[1]}</span><i /><span>{presentacion.panel.flujo[2]}</span></div>
        <div className="hero-panel-pie">{presentacion.focos.map((foco) => <span key={foco}>{foco}</span>)}</div>
      </div>
    </section>
  );
}

function Proyectos() {
  const { seccionProyectos } = contenido;
  return (
    <section className="seccion proyectos" id="proyectos" aria-labelledby="titulo-proyectos">
      <SectionHeading id="titulo-proyectos" titulo={seccionProyectos.titulo} descripcion={seccionProyectos.descripcion} />
      <div className="lista-proyectos">{contenido.proyectos.map((proyecto) => <ProjectCase key={proyecto.id} proyecto={proyecto} interfaz={contenido.interfaz} />)}</div>
    </section>
  );
}

function Tecnologias() {
  const { tecnologias } = contenido;
  return (
    <section className="seccion tecnologias" id="tecnologias" aria-labelledby="titulo-tecnologias">
      <SectionHeading id="titulo-tecnologias" titulo={tecnologias.titulo} descripcion={tecnologias.introduccion} />
      <div className="matriz-tecnologias">
        {tecnologias.categorias.map((categoria) => {
          const Icono = iconosCategoria[categoria.id];
          return <article className="categoria-tecnica" key={categoria.nombre}><div className="categoria-titulo"><Icono aria-hidden="true" size={19} /><h3>{categoria.nombre}</h3></div><Etiquetas items={categoria.items} /></article>;
        })}
      </div>
      <div className="proyectos-stack">
        <h3>{tecnologias.relacionTitulo}</h3>
        <div>{tecnologias.porProyecto.map((proyecto) => <article key={proyecto.nombre}><h4>{proyecto.nombre}</h4><Etiquetas items={proyecto.items} variante="etiquetas-compactas" /></article>)}</div>
      </div>
    </section>
  );
}

function Reconocimiento() {
  const { reconocimiento } = contenido;
  return (
    <section className="seccion reconocimiento" aria-labelledby="titulo-reconocimiento">
      <div className="reconocimiento-emblema" aria-hidden="true"><Trophy size={34} strokeWidth={1.6} /><span>2.º</span></div>
      <div className="reconocimiento-contenido"><h2 id="titulo-reconocimiento">{reconocimiento.titulo}</h2><p className="reconocimiento-evento">{reconocimiento.evento}</p><div className="reconocimiento-detalle"><span>{contenido.interfaz.proyectoPresentado}</span><strong>{reconocimiento.proyecto}</strong><p>{reconocimiento.descripcion}</p></div></div>
    </section>
  );
}

function SobreMi() {
  const { sobreMi } = contenido;
  return (
    <section className="seccion sobre-mi" id="sobre-mi" aria-labelledby="titulo-sobre-mi">
      <SectionHeading id="titulo-sobre-mi" titulo={sobreMi.titulo} />
      <div className="sobre-mi-texto">{sobreMi.parrafos.map((parrafo) => <p key={parrafo}>{parrafo}</p>)}</div>
      <div className="sobre-mi-principios" aria-label={contenido.interfaz.aspectosInteres}>
        {sobreMi.aspectos.map((item) => <span key={item}><Check aria-hidden="true" size={16} />{item}</span>)}
      </div>
    </section>
  );
}

function Formacion() {
  const { formacion, persona } = contenido;
  return (
    <section className="seccion formacion" id="formacion" aria-labelledby="titulo-formacion">
      <div className="formacion-icono" aria-hidden="true"><GraduationCap size={30} /></div>
      <div className="formacion-principal"><h2 id="titulo-formacion">{formacion.titulo}</h2><h3>{formacion.programa}</h3><p>{formacion.institucion}</p><time>{formacion.periodo}</time><span>{formacion.estado}</span></div>
      <div className="idiomas"><h3>{formacion.idiomasTitulo}</h3>{persona.idiomas.map((idioma) => <p key={idioma}>{idioma}</p>)}</div>
    </section>
  );
}

function Contacto() {
  const { contacto, persona } = contenido;
  return (
    <section className="seccion contacto" id="contacto" aria-labelledby="titulo-contacto">
      <div className="contacto-intro"><h2 id="titulo-contacto">{contacto.titulo}</h2><p>{contacto.descripcion}</p></div>
      <div className="contacto-enlaces">
        <a className="contacto-correo" href={`mailto:${persona.correo}`}><span><Mail aria-hidden="true" size={17} />{contacto.correoEtiqueta}</span><strong>{persona.correo}</strong><ArrowUpRight aria-hidden="true" size={20} /></a>
        <a href={persona.linkedin} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" size={18} />LinkedIn<ArrowUpRight aria-hidden="true" size={17} /></a>
        <a href={persona.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" size={18} />GitHub<ArrowUpRight aria-hidden="true" size={17} /></a>
        <p><MapPin aria-hidden="true" size={18} /><span><small>{contacto.ubicacionEtiqueta}</small>{persona.ubicacion}</span></p>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="sitio">
      <a className="saltar-contenido" href="#contenido-principal">{contenido.interfaz.saltarContenido}</a>
      <div className="ambiente" aria-hidden="true"><span className="orbe orbe-uno" /><span className="orbe orbe-dos" /><span className="orbe orbe-tres" /><span className="panel-fondo panel-fondo-uno" /><span className="panel-fondo panel-fondo-dos" /></div>
      <Navbar persona={contenido.persona} enlaces={contenido.navegacion} interfaz={contenido.interfaz} />
      <main id="contenido-principal"><Hero /><Proyectos /><Tecnologias /><Reconocimiento /><SobreMi /><Formacion /><Contacto /></main>
      <footer className="pie-pagina"><span>{contenido.persona.nombreProfesional}</span><span>{contenido.pie.descripcion}</span><a href="#inicio">{contenido.pie.volver}<ArrowUpRight aria-hidden="true" size={16} /></a></footer>
    </div>
  );
}

export default App;
