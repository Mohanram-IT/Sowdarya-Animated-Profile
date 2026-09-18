import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-[#0a0f1c] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-4 inline-block drop-shadow-sm">Education.</h2>
          <p className="text-xl text-slate-400 font-light">My academic foundation.</p>
        </motion.div>

        <div className="relative border-l-2 border-white/10 pl-8 ml-4 md:ml-0 space-y-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative group"
          >
            <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 border-[4px] border-[#0a0f1c] shadow-[0_0_15px_rgba(217,70,239,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-black text-white mb-2">B.Tech in Biotechnology (Fisheries Biotechnology)</h3>
              <h4 className="text-lg font-bold text-violet-400 mb-6">Institute of Fisheries Biotechnology, TNJFU</h4>
              <div className="flex flex-wrap gap-4 items-center text-sm mb-6">
                <span className="px-4 py-1.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-400/20 font-bold uppercase tracking-widest text-xs">Graduating 2026</span>
                <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/20 font-bold uppercase tracking-widest text-xs">CGPA 8.04/10.0</span>
              </div>
              <p className="text-slate-400 text-base leading-relaxed font-light">
                Gained extensive knowledge in life sciences, molecular diagnostics, and bioinformatics. Managed large-scale university events as Student Body General Secretary, bridging the gap between rigorous scientific study and practical operations management.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="relative group"
          >
            <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-[4px] border-[#0a0f1c] shadow-[0_0_15px_rgba(56,189,248,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-black text-white mb-2">Higher Secondary Certificate (HSC)</h3>
              <h4 className="text-lg font-bold text-blue-400 mb-6">Govt. Hr. Sec. School, Pothukudi</h4>
              <div className="flex flex-wrap gap-4 items-center text-sm">
                <span className="px-4 py-1.5 rounded-full bg-slate-800 text-slate-300 border border-white/10 font-bold uppercase tracking-widest text-xs">Completed</span>
                <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/20 font-bold uppercase tracking-widest text-xs">83.0%</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
            className="relative group"
          >
            <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-gradient-to-br from-slate-400 to-slate-500 border-[4px] border-[#0a0f1c] shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-black text-white mb-2">Secondary School Leaving Certificate (SSLC)</h3>
              <h4 className="text-lg font-bold text-slate-400 mb-6">Govt. Hr. Sec. School, Pothukudi</h4>
              <div className="flex flex-wrap gap-4 items-center text-sm">
                <span className="px-4 py-1.5 rounded-full bg-slate-800 text-slate-300 border border-white/10 font-bold uppercase tracking-widest text-xs">Completed</span>
                <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/20 font-bold uppercase tracking-widest text-xs">84.0%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
