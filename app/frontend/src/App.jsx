import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import './App.css';
import { obtenerContenido } from './content';
import AuroraBlur from './components/AuroraBlur';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from './components/Icono';
import MotionController from './components/MotionController';
import Navbar from './components/Navbar';
import ProjectGrid from './components/ProjectGrid';
import SectionHeading from './components/SectionHeading';

const transicionBoton = { duration: 0.16, ease: [0.4, 0, 0.2, 1] };

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
  const { persona, presentacion, interfaz } = contenido;
  const [primero, ...resto] = persona.nombreProfesional.split(' ');
  const maquetaRef = useRef(null);
  const reducirMovimiento = useReducedMotion();
  const interaccion = reducirMovimiento ? {} : { whileHover: { y: -2 }, whileTap: { scale: 0.98 } };
  const interaccionIcono = reducirMovimiento ? {} : { whileHover: { scale: 1.05 }, whileTap: { scale: 0.96 } };

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
        <p className="hero-descripcion">{presentacion.descripcion}</p>
        <div className="hero-acciones" aria-label={interfaz.enlacesPrincipales}>
          <motion.a className="boton boton-principal" href="#proyectos" transition={transicionBoton} {...interaccion}>{presentacion.acciones.proyectos}<ArrowDown aria-hidden="true" size={17} /></motion.a>
          <motion.a className="boton boton-secundario" href={persona.cv} download="Cristhian-Loor-CV.pdf" transition={transicionBoton} {...interaccion}>{presentacion.acciones.cv}<ArrowDown aria-hidden="true" size={17} /></motion.a>
          <motion.a className="boton boton-secundario boton-icono" href={persona.github} target="_blank" rel="noreferrer" title={presentacion.acciones.github} aria-label={`${presentacion.acciones.github}, ${interfaz.abrirNuevaPestana}`} transition={transicionBoton} {...interaccionIcono}><Github aria-hidden="true" size={18} /></motion.a>
          <motion.a className="boton boton-secundario boton-icono" href={persona.linkedin} target="_blank" rel="noreferrer" title={presentacion.acciones.linkedin} aria-label={`${presentacion.acciones.linkedin}, ${interfaz.abrirNuevaPestana}`} transition={transicionBoton} {...interaccionIcono}><Linkedin aria-hidden="true" size={18} /></motion.a>
        </div>
      </div>

      <div className="hero-maqueta">
        <div className="maqueta" ref={maquetaRef} onPointerMove={seguirPuntero} aria-label={presentacion.panel.titulo}>
          <span className="maqueta-foco" aria-hidden="true" />
          <div className="maqueta-barra" aria-hidden="true"><i /><i /><i /><span className="mono">backend.core</span></div>
          <div className="maqueta-nucleo"><span className="mono">{presentacion.panel.nucleo}</span>{presentacion.panel.principales.map((item) => <strong key={item}>{item}</strong>)}</div>
          <div className="maqueta-flujo" aria-hidden="true">{presentacion.panel.flujo.map((item, indice) => <div key={item}><span>{item}</span>{indice < presentacion.panel.flujo.length - 1 && <i />}</div>)}</div>
          <div className="maqueta-pie"><span className="mono">{persona.ubicacion}</span></div>
        </div>
      </div>
    </section>
  );
}

function Proyectos({ contenido }) {
  const { seccionProyectos, proyectos, landings, interfaz } = contenido;
  const { grupos, landingsVacio } = seccionProyectos;
  return (
    <section className="seccion proyectos" id="proyectos" aria-labelledby="titulo-proyectos">
      <SectionHeading id="titulo-proyectos" etiqueta={seccionProyectos.etiqueta} titulo={seccionProyectos.titulo} descripcion={seccionProyectos.descripcion} />
      <div className="grupo-proyectos" aria-labelledby="titulo-fullstack">
        <header className="grupo-proyectos-cabecera">
          <span className="mono">{grupos.fullstack.etiqueta}</span>
          <h3 id="titulo-fullstack">{grupos.fullstack.titulo}</h3>
          <p>{grupos.fullstack.descripcion}</p>
        </header>
        <ProjectGrid proyectos={proyectos} interfaz={interfaz} />
      </div>
      <div className="grupo-proyectos" aria-labelledby="titulo-frontend">
        <header className="grupo-proyectos-cabecera">
          <span className="mono">{grupos.frontend.etiqueta}</span>
          <h3 id="titulo-frontend">{grupos.frontend.titulo}</h3>
          <p>{grupos.frontend.descripcion}</p>
        </header>
        {landings.length ? (
          <ProjectGrid proyectos={landings} interfaz={interfaz} />
        ) : (
          <div className="proyectos-vacio" data-foco>
            <h4>{landingsVacio.titulo}</h4>
            <p>{landingsVacio.descripcion}</p>
          </div>
        )}
      </div>
    </section>
  );
}

function Experiencia({ contenido }) {
  const { experiencia, interfaz } = contenido;
  return (
    <section className="seccion experiencia" id="experiencia" aria-labelledby="titulo-experiencia">
      <SectionHeading id="titulo-experiencia" etiqueta={experiencia.etiqueta} titulo={experiencia.titulo} descripcion={experiencia.descripcion} />
      <div className="experiencia-lista">
        {experiencia.puestos.map((puesto) => (
          <article className="experiencia-puesto" data-foco key={`${puesto.empresa}-${puesto.rol}`}>
            <header className="experiencia-cabecera">
              <div>
                <h3>{puesto.rol}</h3>
                <p className="experiencia-empresa">{puesto.empresa}</p>
              </div>
              <p className="experiencia-periodo mono">{puesto.periodo}</p>
            </header>
            <p className="experiencia-resumen">{puesto.resumen}</p>
            <ul className="experiencia-puntos" aria-label={interfaz.responsabilidades}>
              {puesto.puntos.map((punto) => <li key={punto}><span>{punto}</span></li>)}
            </ul>
            <Etiquetas items={puesto.tecnologias} etiqueta={interfaz.tecnologias} />
          </article>
        ))}
      </div>
    </section>
  );
}

function Perfil({ contenido }) {
  const { perfil, sobreMi, ux, formacion, persona, interfaz } = contenido;
  return (
    <section className="seccion perfil" id="perfil" aria-labelledby="titulo-perfil">
      <SectionHeading id="titulo-perfil" etiqueta={perfil.etiqueta} titulo={perfil.titulo} descripcion={perfil.descripcion} />
      <div className="perfil-reticula">
        <div className="perfil-bloque perfil-sobre" data-reveal="flow">
          <h3>{sobreMi.titulo}</h3>
          {sobreMi.parrafos.map((parrafo) => <p key={parrafo}>{parrafo}</p>)}
          <div className="sobre-mi-principios" aria-label={interfaz.aspectosInteres}>{sobreMi.aspectos.map((item) => <span key={item}><Check aria-hidden="true" size={16} />{item}</span>)}</div>
        </div>

        <div className="perfil-bloque perfil-ux">
          <h3>{ux.titulo}</h3>
          <p className="perfil-intro">{ux.descripcion}</p>
          <div className="perfil-ux-lista">
            {ux.casos.map((caso) => (
              <details className="ux-caso" key={caso.nombre}>
                <summary>
                  <span className="ux-caso-cabecera"><span className="mono ux-tipo">{caso.tipo}</span><strong>{caso.nombre}</strong></span>
                  <ChevronDown aria-hidden="true" size={18} />
                </summary>
                <div className="ux-caso-cuerpo">
                  <ul className="ux-puntos">
                    {caso.puntos.map((punto) => <li key={punto}><Check aria-hidden="true" size={16} /><span>{punto}</span></li>)}
                  </ul>
                  <Etiquetas items={caso.tecnologias} etiqueta={interfaz.tecnologias} />
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="perfil-bloque perfil-formacion">
          <h3>{formacion.titulo}</h3>
          <div className="formacion">
            <p className="mono formacion-etiqueta">{formacion.periodo}</p>
            <h4>{formacion.programa}</h4>
            <p className="formacion-institucion">{formacion.institucion}</p>
            <p className="formacion-estado">{formacion.estado}</p>
            <div className="idiomas"><h5>{formacion.idiomasTitulo}</h5>{persona.idiomas.map((idioma) => <p key={idioma}>{idioma}</p>)}</div>
          </div>
          <details className="formacion-hitos">
            <summary>{formacion.hitosTitulo}<ChevronDown aria-hidden="true" size={18} /></summary>
            <ol>{formacion.hitos.map((hito) => <li key={hito.titulo}><strong>{hito.titulo}</strong><span>{hito.descripcion}</span></li>)}</ol>
          </details>
        </div>
      </div>
    </section>
  );
}

function Contacto({ contenido }) {
  const { contacto, persona, interfaz } = contenido;
  const [copiado, setCopiado] = useState(false);
  const reducirMovimiento = useReducedMotion();
  const copiarCorreo = async () => {
    try {
      await navigator.clipboard.writeText(persona.correo);
      setCopiado(true);
      window.setTimeout(() => setCopiado(false), 2200);
    } catch {
      window.location.href = `mailto:${persona.correo}`;
    }
  };

  return (
    <section className="seccion contacto" id="contacto" aria-labelledby="titulo-contacto">
      <div className="contacto-intro" data-reveal="slice"><span className="mono">{contacto.etiqueta}</span><h2 id="titulo-contacto">{contacto.titulo}</h2><p>{contacto.descripcion}</p></div>
      <div className="contacto-enlaces" data-reveal="flow">
        <div className="contacto-correo-fila">
          <a className="contacto-correo" data-foco href={`mailto:${persona.correo}`}><Mail aria-hidden="true" size={18} />{persona.correo}<ArrowUpRight aria-hidden="true" size={17} /></a>
          <motion.button
            className="contacto-copiar"
            type="button"
            onClick={copiarCorreo}
            aria-label={copiado ? interfaz.correoCopiado : interfaz.copiarCorreo}
            whileTap={reducirMovimiento ? undefined : { scale: 0.97 }}
            whileHover={reducirMovimiento ? undefined : { y: -1 }}
            transition={transicionBoton}
          >
            {copiado ? <Check aria-hidden="true" size={18} /> : <Copy aria-hidden="true" size={18} />}
            <span>{copiado ? interfaz.correoCopiado : interfaz.copiarCorreo}</span>
          </motion.button>
          <span className="solo-lector" role="status" aria-live="polite">{copiado ? interfaz.correoCopiado : ''}</span>
        </div>
        <a data-foco href={persona.linkedin} target="_blank" rel="noreferrer" aria-label={`LinkedIn, ${interfaz.abrirNuevaPestana}`}><Linkedin aria-hidden="true" size={18} />LinkedIn<ArrowUpRight aria-hidden="true" size={17} /></a>
        <a data-foco href={persona.github} target="_blank" rel="noreferrer" aria-label={`GitHub, ${interfaz.abrirNuevaPestana}`}><Github aria-hidden="true" size={18} />GitHub<ArrowUpRight aria-hidden="true" size={17} /></a>
        <p data-foco><MapPin aria-hidden="true" size={18} /><span><small>{contacto.ubicacionEtiqueta}</small>{persona.ubicacion}</span></p>
      </div>
    </section>
  );
}

function Pie({ contenido }) {
  const { pie, persona, navegacion, interfaz } = contenido;
  return (
    <footer className="pie-pagina">
      <p className="pie-marca" aria-hidden="true">{pie.marca}</p>
      <div className="pie-contenido">
        <div className="pie-inferior">
          <nav aria-label={interfaz.navegacionPie}>
            {navegacion.map((enlace) => <a key={enlace.destino} href={enlace.destino}>{enlace.etiqueta}</a>)}
            <a href="#contacto">{interfaz.menuContacto}</a>
          </nav>
          <div className="pie-social">
            <a href={persona.github} target="_blank" rel="noreferrer" aria-label={`GitHub, ${interfaz.abrirNuevaPestana}`}><Github aria-hidden="true" size={17} /></a>
            <a href={persona.linkedin} target="_blank" rel="noreferrer" aria-label={`LinkedIn, ${interfaz.abrirNuevaPestana}`}><Linkedin aria-hidden="true" size={17} /></a>
            <a href={`mailto:${persona.correo}`} aria-label={persona.correo}><Mail aria-hidden="true" size={17} /></a>
          </div>
          <p>{pie.derechos}</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [idioma, setIdioma] = useState(() => {
    const ruta = window.location.pathname.split('/').filter(Boolean)[0];
    return ['es', 'en'].includes(ruta) ? ruta : obtenerPreferencia('portfolio-idioma', 'es', ['es', 'en']);
  });
  const [tema, setTema] = useState(() => obtenerPreferencia('portfolio-tema', window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark', ['light', 'dark']));
  const contenido = obtenerContenido(idioma);

  useEffect(() => {
    const { metadata } = contenido;
    document.documentElement.lang = contenido.locale;
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', metadata.url);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', metadata.image);
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', idioma === 'es' ? 'es_ES' : 'en_US');
    document.querySelector('meta[property="og:locale:alternate"]')?.setAttribute('content', idioma === 'es' ? 'en_US' : 'es_ES');
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', metadata.url);
    document.querySelector('link[hreflang="es"]')?.setAttribute('href', 'https://cristhian-loor.vercel.app/es');
    document.querySelector('link[hreflang="en"]')?.setAttribute('href', 'https://cristhian-loor.vercel.app/en');
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', metadata.image);
    window.history.replaceState({}, '', `/${idioma}`);
    try { localStorage.setItem('portfolio-idioma', idioma); } catch { /* La preferencia sigue funcionando durante la sesión. */ }
  }, [contenido, idioma]);

  useEffect(() => {
    document.documentElement.dataset.theme = tema;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', tema === 'light' ? '#f4f7fb' : '#000000');
    try { localStorage.setItem('portfolio-tema', tema); } catch { /* La preferencia sigue funcionando durante la sesión. */ }
  }, [tema]);

  useEffect(() => {
    const iluminar = (evento) => {
      if (evento.pointerType === 'touch') return;
      const nodo = evento.target.closest?.('[data-foco]');
      if (!nodo) return;
      const rect = nodo.getBoundingClientRect();
      nodo.style.setProperty('--f-x', `${((evento.clientX - rect.left) / rect.width) * 100}%`);
      nodo.style.setProperty('--f-y', `${((evento.clientY - rect.top) / rect.height) * 100}%`);
    };
    window.addEventListener('pointermove', iluminar, { passive: true });
    return () => window.removeEventListener('pointermove', iluminar);
  }, []);

  return (
    <div className="sitio">
      <a className="saltar-contenido" href="#contenido-principal">{contenido.interfaz.saltarContenido}</a>
      <AuroraBlur />
      <Navbar
        enlaces={contenido.navegacion}
        interfaz={contenido.interfaz}
        idioma={idioma}
        tema={tema}
        cambiarIdioma={() => setIdioma((valor) => (valor === 'es' ? 'en' : 'es'))}
        cambiarTema={() => setTema((valor) => (valor === 'dark' ? 'light' : 'dark'))}
      />
      <div className="capsula">
        <main id="contenido-principal" tabIndex={-1}>
          <MotionController etiqueta={contenido.interfaz.progresoLectura} />
          <Hero contenido={contenido} />
          <Proyectos contenido={contenido} />
          <Experiencia contenido={contenido} />
          <Perfil contenido={contenido} />
          <Contacto contenido={contenido} />
        </main>
      </div>
      <Pie contenido={contenido} />
    </div>
  );
}

export default App;
