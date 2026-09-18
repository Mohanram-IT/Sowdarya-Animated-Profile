import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-20 bg-slate-950 border-t border-white/10 text-center relative overflow-hidden">
      {/* Top glowing line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-50"></div>
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Animated Brand Logo */}
        <motion.h2 
          initial={{ opacity: 0.8 }}
          whileHover={{ scale: 1.05, opacity: 1 }}
          className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight cursor-pointer"
        >
          Sowndarya<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">.</span>
        </motion.h2>
        
        <p className="text-slate-400 text-sm md:text-base mb-12 max-w-md leading-relaxed">
          Bridging the gap between scientific rigor and business strategy. Let's create impact together.
        </p>

        {/* Animated "Available for Hire" Badge (replaces the broken image) */}
        <div className="relative flex items-center justify-center w-36 h-36 mb-12 group cursor-pointer">
          {/* Spinning SVG Text */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full fill-slate-400 group-hover:fill-fuchsia-400 transition-colors duration-500">
              <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
              <text fontSize="10.5" fontWeight="bold" letterSpacing="1.5">
                <textPath href="#circlePath" startOffset="0%">
                  • OPEN TO WORK • AVAILABLE FOR HIRE 
                </textPath>
              </text>
            </svg>
          </motion.div>
          
          {/* Inner Pulsing Status Dot */}
          <div className="absolute w-12 h-12 bg-slate-900 rounded-full border border-slate-700/50 shadow-[0_0_20px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center z-10">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
            </span>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8 max-w-lg mx-auto"></div>

        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} Sowndarya E. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
