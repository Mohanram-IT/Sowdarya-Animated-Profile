import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 mb-4 inline-block drop-shadow-sm">Education.</h2>
          <p className="text-xl text-slate-600 font-medium">My academic foundation.</p>
        </motion.div>

        <div className="relative border-l-2 border-slate-200 pl-8 ml-4 md:ml-0 space-y-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative group"
          >
            <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 border-[4px] border-slate-50 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
            <div className="bg-white p-8 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-black text-slate-800 mb-2">B.Tech in Biotechnology (Fisheries Biotechnology)</h3>
              <h4 className="text-lg font-bold text-violet-600 mb-6">Institute of Fisheries Biotechnology, TNJFU</h4>
              <div className="flex flex-wrap gap-4 items-center text-sm mb-6">
                <span className="px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 font-bold uppercase tracking-widest text-xs">Graduating 2026</span>
                <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-bold uppercase tracking-widest text-xs">CGPA 8.04/10.0</span>
              </div>
              <p className="text-slate-600 text-base leading-relaxed font-medium">
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
            <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-[4px] border-slate-50 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
            <div className="bg-white p-8 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-black text-slate-800 mb-2">Higher Secondary Certificate (HSC)</h3>
              <h4 className="text-lg font-bold text-blue-600 mb-6">Govt. Hr. Sec. School, Pothukudi</h4>
              <div className="flex flex-wrap gap-4 items-center text-sm">
                <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 font-bold uppercase tracking-widest text-xs">Completed</span>
                <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-bold uppercase tracking-widest text-xs">83.0%</span>
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
            <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-slate-400 border-[4px] border-slate-50 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
            <div className="bg-white p-8 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-black text-slate-800 mb-2">Secondary School Leaving Certificate (SSLC)</h3>
              <h4 className="text-lg font-bold text-slate-500 mb-6">Govt. Hr. Sec. School, Pothukudi</h4>
              <div className="flex flex-wrap gap-4 items-center text-sm">
                <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 font-bold uppercase tracking-widest text-xs">Completed</span>
                <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-bold uppercase tracking-widest text-xs">84.0%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
