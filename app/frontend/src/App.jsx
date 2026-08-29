import './App.css';
import { portfolioData } from './data/mock';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { Principles } from './components/Principles';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Navbar />
      <main id="main">
        <Hero data={portfolioData.profile} contact={portfolioData.contact} />
        <About data={portfolioData.about} />
        <Expertise data={portfolioData.expertise} />
        <Projects data={portfolioData.projects} />
        <Principles data={portfolioData.capabilities} />
      </main>
      <Contact data={portfolioData.contact} cvUrl={portfolioData.profile.cvUrl} />
    </>
  );
}

export default App;

