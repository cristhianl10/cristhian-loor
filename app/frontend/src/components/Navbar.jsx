import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [['Perfil', '#perfil'], ['Stack', '#stack'], ['Proyectos', '#proyectos'], ['Contacto', '#contacto']];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Cristhian Loor, inicio">CL<span>.dev</span></a>
        <button className="nav-toggle" type="button" aria-expanded={open} aria-controls="nav-menu" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-menu ${open ? 'open' : ''}`} id="nav-menu">
          {links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
        </div>
        <a className="nav-status" href="mailto:cristhian.loor25@outlook.com"><span /> Disponible para oportunidades</a>
      </nav>
    </header>
  );
};
