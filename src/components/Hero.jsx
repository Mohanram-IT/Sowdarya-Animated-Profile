import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Github as GithubIcon, Twitter } from 'lucide-react';

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
      className="inline-block w-full md:w-auto"
    >
      {children}
    </motion.div>
  )
}

const Hero = () => {
  // Setup Scroll Effects
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);
  const yImage = useTransform(scrollY, [0, 500], [0, -50]);
  const scaleImage = useTransform(scrollY, [0, 500], [1, 1.05]);
  const borderRotate = useTransform(scrollY, [0, 1000], [0, 360]);

  return (
    <section id="hero" className="min-h-[100dvh] pt-28 md:pt-32 pb-24 flex flex-col justify-center bg-[#0a0f1c] relative overflow-hidden w-full perspective-1000">
      
      {/* 3D Floating Ambient Particles */}
      <motion.div 
        animate={{ y: [0, -40, 0], x: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-fuchsia-600/20 rounded-full blur-[60px] md:blur-[80px] pointer-events-none mix-blend-screen"
      />
      <motion.div 
        animate={{ y: [0, 50, 0], x: [0, -40, 0], scale: [1, 1.5, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-cyan-600/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none mix-blend-screen"
      />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        
        {/* Left Column: Text (Parallax Scroll) */}
        <motion.div style={{ y: yText, opacity: opacityText }} className="flex flex-col items-start pt-10">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 md:gap-4 mb-6 md:mb-8 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
          >
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
             </span>
             <p className="text-slate-300 font-medium tracking-widest uppercase text-[10px] md:text-xs">Hello! I'm Sowndarya</p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-[1.1] mb-6 text-white"
          >
            <span className="font-light text-slate-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mb-1 md:mb-2">Biotech & Business</span>
            <span className="font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500">Operations </span>
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]">Professional.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-slate-400 mb-8 md:mb-10 max-w-lg leading-relaxed font-light"
          >
            Leveraging rigorous scientific discipline and a passion for data to drive business growth and operational excellence.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-5 w-full sm:w-auto"
          >
            <Magnetic>
              <a href="#contact" className="group flex items-center justify-center gap-3 px-8 py-4 w-full bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white font-bold rounded-full shadow-[0_10px_30px_rgba(217,70,239,0.3)] hover:shadow-[0_10px_40px_rgba(217,70,239,0.6)] transition-all duration-300">
                Contact Me 
                <motion.span group-hover={{ x: 5 }} transition={{ type: "spring" }}>
                  <ArrowRight size={18} />
                </motion.span>
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#" className="flex items-center justify-center gap-3 px-8 py-4 w-full bg-slate-800/50 backdrop-blur-md text-white border border-slate-700 font-bold rounded-full hover:bg-slate-700/50 hover:border-slate-500 transition-all duration-300 shadow-xl">
                <Download size={18} className="text-cyan-400" /> Download CV
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Right Column: Image & Graphic (Parallax Scroll) */}
        <motion.div
          style={{ y: yImage, scale: scaleImage }}
          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.5, delay: 0.3, type: "spring", bounce: 0.3 }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] mt-12 md:mt-16 lg:mt-0 flex flex-col items-center perspective-1000"
        >
          {/* Scroll-reactive Animated Border Frame */}
          <div className="relative w-full aspect-[4/5] md:aspect-square p-1.5 md:p-3 transform-style-3d">
            {/* Spinning Gradient that reacts to scroll */}
            <motion.div 
              style={{ rotate: borderRotate }}
              className="absolute inset-0 rounded-[2rem] md:rounded-[2.5rem] bg-[conic-gradient(from_0deg,_var(--tw-gradient-stops))] from-fuchsia-500 via-cyan-400 to-fuchsia-500 opacity-80 blur-[8px]"
            ></motion.div>
            
            {/* Inner cut-out shape */}
            <div className="absolute inset-1.5 md:inset-3 rounded-[1.8rem] md:rounded-[2.3rem] bg-[#0a0f1c]"></div>
            
            {/* Profile Image with Parallax floating effect */}
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-2 md:border-4 border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
               <img 
                 src="/profile.jpg" 
                 alt="Sowndarya E" 
                 className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-1000"
               />
               
               {/* Inner glow overlay on image */}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>
          </div>

          {/* Glassmorphic Floating Social Pill - Magnetic */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: -20, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, type: "spring" }}
            className="absolute -bottom-4 md:-bottom-8 z-20"
          >
            <Magnetic>
              <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] rounded-full px-5 md:px-8 py-3 md:py-4 flex items-center gap-4 md:gap-6 cursor-pointer group">
                <span className="text-[10px] md:text-xs font-black tracking-widest text-fuchsia-400 uppercase">Connect</span>
                <div className="w-px h-4 md:h-5 bg-white/20"></div>
                <div className="flex gap-4 md:gap-5">
                  <a href="#" className="text-slate-300 hover:text-white hover:-translate-y-1 transition-transform"><Linkedin size={18} className="md:w-[22px] md:h-[22px]" /></a>
                  <a href="#" className="text-slate-300 hover:text-white hover:-translate-y-1 transition-transform"><GithubIcon size={18} className="md:w-[22px] md:h-[22px]" /></a>
                  <a href="#" className="text-slate-300 hover:text-white hover:-translate-y-1 transition-transform"><Twitter size={18} className="md:w-[22px] md:h-[22px]" /></a>
                </div>
              </div>
            </Magnetic>
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator (Now visible on mobile too) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-3"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 md:h-16 bg-gradient-to-b from-cyan-400 to-transparent"
        />
        <span className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-cyan-400 uppercase">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
