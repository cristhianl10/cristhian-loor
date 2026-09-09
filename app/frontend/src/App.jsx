import { useEffect, useState } from 'react';
import './App.css';
import { obtenerContenido } from './content';
import AuroraBlur from './components/AuroraBlur';
import MotionController from './components/MotionController';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Methodology from './components/Methodology';
import CareerTimeline from './components/CareerTimeline';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const obtenerPreferencia = (clave, alternativa, valoresPermitidos) => {
  try {
    const valor = localStorage.getItem(clave);
    return valoresPermitidos.includes(valor) ? valor : alternativa;
  } catch {
    return alternativa;
  }
};

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
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `${metadata.url}${idioma}`);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', metadata.image);
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', idioma === 'es' ? 'es_ES' : 'en_US');
    document.querySelector('meta[property="og:locale:alternate"]')?.setAttribute('content', idioma === 'es' ? 'en_US' : 'es_ES');
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${metadata.url}${idioma}`);
    document.querySelector('link[rel="alternate"][hreflang="es"]')?.setAttribute('href', `${metadata.url}es`);
    document.querySelector('link[rel="alternate"][hreflang="en"]')?.setAttribute('href', `${metadata.url}en`);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', metadata.image);
    window.history.replaceState({}, '', `/${idioma}`);

    const jsonLdPersona = document.getElementById('json-ld-persona');
    if (jsonLdPersona) {
      const datos = JSON.parse(jsonLdPersona.textContent);
      datos.url = `${metadata.url}${idioma}`;
      jsonLdPersona.textContent = JSON.stringify(datos);
    }

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
          <Projects contenido={contenido} />
          <TechStack contenido={contenido} />
          <Methodology contenido={contenido} />
          <CareerTimeline contenido={contenido} />
          <About contenido={contenido} />
          <Contact contenido={contenido} />
        </main>
      </div>
      <Footer contenido={contenido} />
    </div>
  );
}

export default App;