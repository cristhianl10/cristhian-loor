import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar({ persona, enlaces, interfaz }) {
  const [abierto, setAbierto] = useState(false);
  const botonMenu = useRef(null);
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
  return (
    <header className="cabecera">
      <nav className="navegacion" aria-label={interfaz.navegacionPrincipal}>
        <a className="marca" href="#inicio" aria-label={interfaz.irInicio}><span>CL</span><span className="marca-texto">{persona.nombreProfesional}</span></a>
        <button ref={botonMenu} className="menu-boton" type="button" aria-expanded={abierto} aria-controls="menu-principal" aria-label={abierto ? interfaz.cerrarMenu : interfaz.abrirMenu} onClick={() => setAbierto((valor) => !valor)}>{abierto ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
        <div className={`menu ${abierto ? 'menu-abierto' : ''}`} id="menu-principal">
          {enlaces.map((enlace) => <a key={enlace.destino} href={enlace.destino} onClick={() => setAbierto(false)}>{enlace.etiqueta}</a>)}
          <a className="menu-contacto" href="#contacto" onClick={() => setAbierto(false)}>{interfaz.menuContacto}</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
