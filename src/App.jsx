import './App.css';

import { Button } from '@/components/ui/button';
import Navbar from './components/NaveBar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skill';
import Projects from './components/Projects/Project';
import Contact from './components/Contact/Contact';
function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
