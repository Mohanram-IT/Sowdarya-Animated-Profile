const Footer = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-white/10 text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <h2 className="text-2xl font-black text-white mb-6">
          Sowndarya<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">.</span>
        </h2>
        
        <p className="text-slate-400 text-sm mb-8 max-w-md">
          Bridging the gap between scientific rigor and business strategy. Let's create impact together.
        </p>

        {/* Real Visitor Badge via external API */}
        <div className="mb-8 hover:scale-105 transition-transform duration-300">
           <img 
             src="https://api.visitorbadge.io/api/visitors?path=sowndarya-portfolio-live&countColor=%23d946ef&label=Profile%20Views" 
             alt="Real Visitor Count" 
             className="shadow-lg shadow-fuchsia-500/10 rounded"
           />
        </div>

        <div className="w-full h-px bg-white/10 mb-8 max-w-sm mx-auto"></div>

        <p className="text-slate-500 text-xs font-medium uppercase tracking-widest">
          © {new Date().getFullYear()} Sowndarya E. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
