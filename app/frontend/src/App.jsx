import './App.css';
import { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { portfolioData } from './data/mock';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { Principles } from './components/Principles';
import { Contact } from './components/Contact';

function App() {
  const [motionEnabled, setMotionEnabled] = useState(true);

  return (
    <MotionConfig reducedMotion={motionEnabled ? "never" : "always"}>
      <div className={motionEnabled ? 'motion-on' : 'motion-off'}>
      <a className="skip-link" href="#contenido">Ir al contenido principal</a>
      <Navbar motionEnabled={motionEnabled} onToggleMotion={() => setMotionEnabled((enabled) => !enabled)} />
      <main id="contenido">
        <Hero data={portfolioData.profile} contact={portfolioData.contact} />
        <About data={portfolioData.about} />
        <Expertise data={portfolioData.stack} />
        <Projects data={portfolioData.projects} />
        <Principles data={portfolioData.education} />
      </main>
      <Contact data={portfolioData.contact} cvUrl={portfolioData.profile.cvUrl} />
      </div>
    </MotionConfig>
  );
}

export default App;
