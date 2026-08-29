import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [['About', '#about'], ['Stack', '#stack'], ['Projects', '#projects'], ['Contact', '#contact']];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Cristhian Loor, home">CL<span aria-hidden="true">.</span></a>
        <button className="nav-toggle" type="button" aria-expanded={open} aria-controls="primary-menu" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen((current) => !current)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`nav-links${open ? ' is-open' : ''}`} id="primary-menu">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </div>
      </nav>
    </header>
  );
};
