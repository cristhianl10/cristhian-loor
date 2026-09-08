import { useEffect, useRef, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';

function Navbar({ enlaces, interfaz, idioma, tema, cambiarIdioma, cambiarTema }) {
  const [abierto, setAbierto] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState('');
  const botonMenu = useRef(null);
  const navegacion = useRef(null);

  useEffect(() => {
    const cerrarConEscape = (evento) => {
      if (evento.key === 'Escape' && abierto) {
        setAbierto(false);
        botonMenu.current?.focus();
      }
    };
    window.addEventListener('keydown', cerrarConEscape);
    return () => window.removeEventListener('keydown', cerrarConEscape);
  }, [abierto]);

  useEffect(() => {
    const cerrarFuera = (evento) => {
      if (abierto && !navegacion.current?.contains(evento.target)) setAbierto(false);
    };
    window.addEventListener('pointerdown', cerrarFuera);
    return () => window.removeEventListener('pointerdown', cerrarFuera);
  }, [abierto]);

  useEffect(() => {
    const destinos = [...enlaces.map(({ destino }) => destino.slice(1)), 'contacto'];
    const secciones = destinos.map((id) => document.getElementById(id)).filter(Boolean);
    const observador = new IntersectionObserver(
      (entradas) => {
        const visible = entradas.find((entrada) => entrada.isIntersecting);
        if (visible) setSeccionActiva(`#${visible.target.id}`);
      },
      { rootMargin: '-28% 0px -62% 0px' },
    );
    secciones.forEach((seccion) => observador.observe(seccion));
    return () => observador.disconnect();
  }, [enlaces]);

  const etiquetaIdioma = idioma === 'es' ? interfaz.cambiarAIngles : interfaz.cambiarAEspanol;
  const etiquetaTema = tema === 'dark' ? interfaz.activarModoClaro : interfaz.activarModoOscuro;

  return (
    <header className="cabecera">
      <nav className="navegacion" ref={navegacion} aria-label={interfaz.navegacionPrincipal}>
        <a className="marca" href="#inicio" aria-label={interfaz.irInicio}><img className="marca-logo" src="/logo.png" alt="" width="48" height="40" /></a>
        <div className={`menu ${abierto ? 'menu-abierto' : ''}`} id="menu-principal">
          {enlaces.map((enlace) => (
            <a key={enlace.destino} href={enlace.destino} aria-current={seccionActiva === enlace.destino ? 'location' : undefined} onClick={() => setAbierto(false)}>{enlace.etiqueta}</a>
          ))}
          <a className="menu-contacto" href="#contacto" aria-current={seccionActiva === '#contacto' ? 'location' : undefined} onClick={() => setAbierto(false)}>{interfaz.menuContacto}</a>
        </div>
        <div className="nav-utilidades">
          <button className="nav-idioma" type="button" aria-label={etiquetaIdioma} title={etiquetaIdioma} onClick={cambiarIdioma}>{idioma.toUpperCase()}</button>
          <button className="nav-tema" type="button" aria-label={etiquetaTema} title={etiquetaTema} onClick={cambiarTema}>{tema === 'dark' ? <Sun aria-hidden="true" size={18} /> : <Moon aria-hidden="true" size={18} />}</button>
        </div>
        <button ref={botonMenu} className="menu-boton" type="button" aria-expanded={abierto} aria-controls="menu-principal" aria-label={abierto ? interfaz.cerrarMenu : interfaz.abrirMenu} onClick={() => setAbierto((valor) => !valor)}>{abierto ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      </nav>
    </header>
  );
}

export default Navbar;
