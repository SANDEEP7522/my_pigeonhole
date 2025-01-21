import './App.css';

import { Button } from '@/components/ui/button';
import Navbar from './components/NaveBar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skill';
import Projects from './components/Projects/Project';
function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
