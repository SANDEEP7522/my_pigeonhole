import './App.css';

import { Button } from '@/components/ui/button';
import Navbar from './components/NaveBar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
