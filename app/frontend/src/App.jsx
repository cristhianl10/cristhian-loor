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
          <a className="boton boton-secundario" href={persona.github} target="_blank" rel="noreferrer" aria-label={`${presentacion.acciones.github}, ${interfaz.abrirNuevaPestana}`}><Github aria-hidden="true" size={17} />{presentacion.acciones.github}</a>
          <a className="boton boton-secundario" href={persona.linkedin} target="_blank" rel="noreferrer" aria-label={`${presentacion.acciones.linkedin}, ${interfaz.abrirNuevaPestana}`}><Linkedin aria-hidden="true" size={17} />{presentacion.acciones.linkedin}</a>
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

function Sistema({ contenido }) {
  const { sistema, proyectos, tecnologias, reconocimiento, persona, presentacion } = contenido;
  const barras = proyectos.map((proyecto, indice) => ({
    nombre: tecnologias.porProyecto[indice]?.nombre ?? proyecto.nombre,
    valor: proyecto.destacados.length,
    indice: proyecto.indice,
  }));
  const maximo = Math.max(...barras.map((barra) => barra.valor));

  return (
    <section className="seccion" aria-labelledby="titulo-sistema">
      <SectionHeading id="titulo-sistema" etiqueta={sistema.etiqueta} titulo={sistema.titulo} />
      <div className="bento" data-reveal="cluster">
        <article className="tarjeta-bento bento-grande" data-foco>
          <h3>{contenido.seccionProyectos.titulo}</h3>
          <div className="barras" role="img" aria-label={`${sistema.barrasNota}: ${barras.map((b) => `${b.nombre} ${b.valor}`).join(', ')}`}>
            {barras.map((barra) => (
              <div className="barra" key={barra.nombre}>
                <i style={{ height: `${Math.max(24, Math.round((barra.valor / maximo) * 100))}%` }} aria-hidden="true" />
                <b aria-hidden="true">{barra.indice}</b>
                <span>{barra.nombre}</span>
              </div>
            ))}
          </div>
          <p>{sistema.barrasNota}</p>
        </article>

        <article className="tarjeta-bento bento-alta" data-foco>
          <span className="mono">{presentacion.panel.titulo}</span>
          <h3>{presentacion.panel.nucleo}</h3>
          <div className="muestras">
            {presentacion.focos.map((foco) => <div className="muestra" key={foco}><i aria-hidden="true" />{foco}</div>)}
          </div>
          <p>{sistema.nucleoNota}</p>
        </article>

        <article className="tarjeta-bento bento-mini" data-foco>
          <span className="mono">{sistema.arquitectura}</span>
          <strong>{presentacion.arquitectura}</strong>
          <ol className="bento-detalle">
            {presentacion.arquitecturaCapas.map((capa) => <li key={capa}>{capa}</li>)}
          </ol>
        </article>

        <article className="tarjeta-bento bento-mini" data-foco>
          <span className="mono">{sistema.patrones}</span>
          <strong>{presentacion.diseno}</strong>
          <ol className="bento-detalle">
            {presentacion.disenoDetalles.map((detalle) => <li key={detalle}>{detalle}</li>)}
          </ol>
        </article>

        <article className="tarjeta-bento bento-acento" data-foco aria-label={reconocimiento.titulo}>
          <div className="bento-acento-emblema" aria-hidden="true"><Trophy size={28} strokeWidth={1.7} /></div>
          <div>
            <span className="mono">{reconocimiento.evento}</span>
            <h3>{reconocimiento.titulo} — {reconocimiento.proyecto}</h3>
            <p>{reconocimiento.descripcion}</p>
          </div>
          <span className="bento-acento-numero" aria-hidden="true">2.º</span>
        </article>

        <article className="tarjeta-bento bento-mini" data-foco>
          <span className="mono">{sistema.pruebas}</span>
          <strong>{presentacion.pruebas}</strong>
        </article>
      </div>
    </section>
  );
}

function Proyectos({ contenido }) {
  const { seccionProyectos, proyectos, interfaz } = contenido;
  return (
    <section className="seccion proyectos" id="proyectos" aria-labelledby="titulo-proyectos">
      <SectionHeading id="titulo-proyectos" etiqueta={seccionProyectos.etiqueta} titulo={seccionProyectos.titulo} descripcion={seccionProyectos.descripcion} />
      <ProjectCarousel proyectos={proyectos} interfaz={interfaz} />
    </section>
  );
}

function Tecnologias({ contenido }) {
  const { tecnologias, proyectos, interfaz } = contenido;
  const [proyectoActivo, setProyectoActivo] = useState(0);
  const selectores = useRef([]);
  const proyecto = tecnologias.porProyecto[proyectoActivo];
  const caso = proyectos[proyectoActivo];

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
      <SectionHeading id="titulo-tecnologias" etiqueta={tecnologias.etiqueta} titulo={tecnologias.titulo} descripcion={tecnologias.introduccion} />
      <div className="constelacion-tecnica" data-reveal="cluster">
        {tecnologias.categorias.map((categoria) => {
          const Icono = iconosCategoria[categoria.id];
          return (
            <article className={`categoria-tecnica categoria-${categoria.id}`} key={categoria.id} data-foco>
              <div className="categoria-titulo"><Icono aria-hidden="true" size={19} /><h3>{categoria.nombre}</h3></div>
              <Etiquetas items={categoria.items} etiqueta={interfaz.tecnologias} />
            </article>
          );
        })}
      </div>

      <div className="stack-contexto" data-reveal="panel" data-foco>
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
          {caso?.visual && (
            <div className="stack-flujo" aria-hidden="true">
              {caso.visual.etapas.map((etapa, i) => (
                <span key={etapa}>{etapa}{i < caso.visual.etapas.length - 1 ? <i /> : null}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Metodologia({ contenido }) {
  const { metodologia, presentacion } = contenido;
  const visualRef = useRef(null);

  const inclinar = (evento) => {
    const nodo = visualRef.current;
    if (!nodo || window.matchMedia('(pointer: coarse)').matches) return;
    const rect = nodo.getBoundingClientRect();
    const px = ((evento.clientX - rect.left) / rect.width - 0.5) * 2;
    const py = ((evento.clientY - rect.top) / rect.height - 0.5) * 2;
    nodo.style.setProperty('--ix', `${px}`);
    nodo.style.setProperty('--iy', `${py}`);
  };

  const enRatonFuera = () => {
    const nodo = visualRef.current;
    if (!nodo) return;
    nodo.style.setProperty('--ix', '0');
    nodo.style.setProperty('--iy', '0');
  };

  return (
    <section className="metodologia" aria-labelledby="titulo-metodologia">
      <span className="mono">{metodologia.etiqueta}</span>
      <h2 id="titulo-metodologia">{metodologia.titulo}</h2>
      <div className="metodologia-reticula">
        <ol className="metodologia-pasos" data-reveal="flow">
          {metodologia.pasos.map((paso) => (
            <li key={paso.numero}>
              <span className="paso-numero" aria-hidden="true">{paso.numero}</span>
              <div><h3>{paso.titulo}</h3><p>{paso.texto}</p></div>
            </li>
          ))}
        </ol>
        <div className="metodologia-visual" ref={visualRef} onPointerMove={inclinar} onPointerLeave={enRatonFuera} data-reveal="panel">
          <div className="metodologia-visual-inner">
            <div className="pila-capas" aria-label={presentacion.panel.titulo}>
              {presentacion.capasVisual.map((capa, indice) => (
                <div className="pila-pila" key={capa}>
                  <span aria-hidden="true">0{indice + 1}</span>
                  <strong>{capa}</strong>
                  <i aria-hidden="true" />
                </div>
              ))}
            </div>
            <div className="metodologia-tarjeta" data-foco>
              <span className="mono">{presentacion.panel.titulo}</span>
              <strong>{presentacion.panel.nucleo}</strong>
              <p>{presentacion.enfoque}</p>
              <ul>{presentacion.focos.map((foco) => <li key={foco}>{foco}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Perfil({ contenido }) {
  const { sobreMi, formacion, persona, interfaz } = contenido;
  return (
    <section className="seccion perfil" id="sobre-mi" aria-labelledby="titulo-sobre-mi">
      <SectionHeading id="titulo-sobre-mi" etiqueta={sobreMi.etiqueta} titulo={sobreMi.titulo} />
      <div className="perfil-reticula">
        <div className="sobre-mi-texto" data-reveal="flow">
          {sobreMi.parrafos.map((parrafo) => <p key={parrafo}>{parrafo}</p>)}
          <div className="sobre-mi-principios" aria-label={interfaz.aspectosInteres}>{sobreMi.aspectos.map((item) => <span key={item}><Check aria-hidden="true" size={16} />{item}</span>)}</div>
        </div>

        <article className="formacion" id="formacion" aria-labelledby="titulo-formacion" data-reveal="panel" data-foco>
          <div className="formacion-cabecera"><div className="formacion-icono" aria-hidden="true"><GraduationCap size={24} /></div><h2 id="titulo-formacion">{formacion.titulo}</h2></div>
          <h3>{formacion.programa}</h3>
          <p className="formacion-institucion">{formacion.institucion}</p>
          <div className="formacion-meta"><time>{formacion.periodo}</time><span>{formacion.estado}</span></div>
          <div className="idiomas"><h3>{formacion.idiomasTitulo}</h3>{persona.idiomas.map((idioma) => <p key={idioma}>{idioma}</p>)}</div>
        </article>
      </div>
    </section>
  );
}

function Contacto({ contenido }) {
  const { contacto, persona, interfaz } = contenido;
  return (
    <section className="seccion contacto" id="contacto" aria-labelledby="titulo-contacto">
      <div className="contacto-intro" data-reveal="slice"><span className="mono">{contacto.etiqueta}</span><h2 id="titulo-contacto">{contacto.titulo}</h2><p>{contacto.descripcion}</p></div>
      <div className="contacto-enlaces" data-reveal="flow">
        <a className="contacto-correo" data-foco href={`mailto:${persona.correo}`}><Mail aria-hidden="true" size={18} />{persona.correo}<ArrowUpRight aria-hidden="true" size={17} /></a>
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
        <div className="pie-cta" data-reveal="slice">
          <span className="mono">{pie.cta}</span>
          <p className="pie-titulo">{contenido.contacto.titulo}</p>
          <a className="boton-lima" href={`mailto:${persona.correo}`}><span>{pie.cta}</span><ArrowUpRight aria-hidden="true" size={19} /></a>
        </div>
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
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${metadata.url}${idioma === 'es' ? 'es' : 'en'}`);
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
        <main id="contenido-principal">
          <MotionController etiqueta={contenido.interfaz.progresoLectura} />
          <Hero contenido={contenido} />
          <Sistema contenido={contenido} />
          <Proyectos contenido={contenido} />
          <Tecnologias contenido={contenido} />
          <Metodologia contenido={contenido} />
          <Perfil contenido={contenido} />
          <Contacto contenido={contenido} />
        </main>
      </div>
      <Pie contenido={contenido} />
    </div>
  );
}

export default App;
