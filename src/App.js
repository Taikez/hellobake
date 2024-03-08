import React, {useEffect} from 'react'
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
