import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import WhyBusiness from './components/WhyBusiness';
import Analytics from './components/Analytics';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isLoading]);

  return (
    <div className="min-h-screen relative overflow-x-hidden w-full selection:bg-fuchsia-500 selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" setIsLoading={setIsLoading} />}
      </AnimatePresence>

      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyBusiness />
        <Experience />
        <Skills />
        <Analytics />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
