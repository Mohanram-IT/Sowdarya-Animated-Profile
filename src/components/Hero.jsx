import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Magnetic = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({x:0,y:0});
  
  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const {height, width, left, top} = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width/2);
    const middleY = clientY - (top + height/2);
    setPosition({x: middleX * 0.2, y: middleY * 0.2});
  }
  const reset = () => setPosition({x:0, y:0})
  
  return (
    <motion.div 
      ref={ref} 
      onMouseMove={handleMouse} 
      onMouseLeave={reset} 
      animate={{x: position.x, y: position.y}} 
      transition={{type: "spring", stiffness: 150, damping: 15, mass: 0.1}}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}

const Hero = () => {
  const titleWords = "Hi, I'm Sowndarya.".split(" ");

  return (
    <section id="hero" className="min-h-[100dvh] pt-24 pb-12 flex flex-col justify-center bg-slate-900 relative overflow-hidden w-full">
      {/* Super Colorful Background Gradients */}
      <div className="absolute top-0 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-600/40 via-violet-600/20 to-transparent blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 -right-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-400/30 via-emerald-400/20 to-transparent blur-3xl opacity-70"></div>
      
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-xs md:text-sm font-semibold mb-6 shadow-xl"
          >
            Biotech Graduate pivoting to Business Development
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6 flex flex-wrap gap-x-4">
            {titleWords.map((word, i) => (
              <span key={i} className="inline-block pb-2">
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: [0.33, 1, 0.68, 1] }}
                  className={`inline-block ${word.includes("Sowndarya") ? "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 pb-2" : "pb-2"}`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg leading-relaxed text-balance"
          >
            I leverage rigorous scientific discipline and a passion for data to drive business growth, operational excellence, and strategic partnerships.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <Magnetic>
              <a href="#contact" className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-fuchsia-500/40 transition-all">
                Contact Me <ArrowRight size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#" className="flex items-center gap-2 px-8 py-4 bg-white/10 text-white backdrop-blur-md font-medium rounded-full border border-white/20 hover:bg-white/20 transition-colors shadow-sm">
                <Download size={18} /> Download Resume
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.4, type: "spring", bounce: 0.4 }}
          className="relative mx-auto lg:ml-auto w-full max-w-[300px] md:max-w-md aspect-square mt-10 lg:mt-0 group"
        >
          {/* Animated Avatar Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-500 rounded-full transform group-hover:scale-105 group-hover:rotate-12 transition-all duration-700 opacity-60 blur-2xl"></div>
          
          {/* SE Typography Avatar */}
          <div className="relative z-10 w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 border-[8px] border-white/10 rounded-full flex flex-col items-center justify-center shadow-2xl backdrop-blur-sm overflow-hidden">
             {/* Inner vibrant accent */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-500/20 to-transparent"></div>
             
             <span className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 tracking-tighter shadow-2xl">
               SE
             </span>
             <span className="mt-4 px-4 py-1 rounded-full bg-white/10 border border-white/10 text-white/70 text-sm font-semibold tracking-widest uppercase">
               Portfolio
             </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
