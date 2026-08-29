import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, Pause, Play, X } from 'lucide-react';

const links = [['Perfil', '#perfil'], ['Stack', '#stack'], ['Proyectos', '#proyectos'], ['Contacto', '#contacto']];

export const Navbar = ({ motionEnabled, onToggleMotion }) => {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.25 });
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Cristhian Loor, inicio">CL<span>.dev</span></a>
        <button className="nav-toggle" type="button" aria-expanded={open} aria-controls="nav-menu" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-menu ${open ? 'open' : ''}`} id="nav-menu">
          {links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
          <button className="motion-toggle" type="button" onClick={onToggleMotion} aria-pressed={!motionEnabled} aria-label={motionEnabled ? 'Pausar animaciones' : 'Activar animaciones'}>
            {motionEnabled ? <Pause size={14} /> : <Play size={14} />}
            <span>{motionEnabled ? 'Pausar movimiento' : 'Activar movimiento'}</span>
          </button>
        </div>
        <a className="nav-status" href="mailto:cristhian.loor25@outlook.com"><span /> Disponible para oportunidades</a>
      </nav>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
    </header>
  );
};
