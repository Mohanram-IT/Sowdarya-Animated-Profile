import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-slate-200 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        <a href="#" className={`text-2xl font-black tracking-tighter transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
          SE<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-sm font-bold transition-all ${scrolled ? 'text-slate-600 hover:text-fuchsia-600' : 'text-slate-300 hover:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-400'}`}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className={`px-6 py-2.5 text-sm font-bold rounded-full transition-all ${scrolled ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5' : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md'}`}>
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden p-1 rounded-lg ${scrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl py-8 border-t border-slate-100 flex flex-col items-center gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-800 hover:text-fuchsia-600 transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="px-8 py-3 mt-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white text-lg font-bold rounded-full shadow-md">
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
