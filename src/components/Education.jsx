import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 mb-4">Education</h2>
          <p className="text-xl text-slate-600">My academic foundation.</p>
        </div>

        <div className="relative border-l-4 border-violet-200 pl-8 ml-4 md:ml-0 space-y-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -left-[44px] top-1 w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 border-4 border-white shadow-lg"></div>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">B.Tech in Biotechnology (Fisheries Biotechnology)</h3>
              <h4 className="text-lg font-bold text-violet-600 mb-4">Institute of Fisheries Biotechnology, TNJFU</h4>
              <div className="flex flex-wrap gap-4 items-center text-sm mb-4">
                <span className="px-3 py-1 rounded-full bg-violet-100 text-violet-700 font-bold">Graduating 2026</span>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-bold">CGPA 8.04/10.0</span>
              </div>
              <p className="text-slate-600 text-base leading-relaxed">
                Gained extensive knowledge in life sciences, molecular diagnostics, and bioinformatics. Managed large-scale university events as Student Body General Secretary, bridging the gap between rigorous scientific study and practical operations management.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-[44px] top-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-4 border-white shadow-lg"></div>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-shadow">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Higher Secondary Certificate (HSC)</h3>
              <h4 className="text-base font-semibold text-slate-600 mb-4">Govt. Hr. Sec. School, Pothukudi</h4>
              <div className="flex flex-wrap gap-4 items-center text-sm">
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold">Completed</span>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-bold">83.0%</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -left-[44px] top-1 w-6 h-6 rounded-full bg-gradient-to-br from-slate-400 to-slate-500 border-4 border-white shadow-lg"></div>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-shadow">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Secondary School Leaving Certificate (SSLC)</h3>
              <h4 className="text-base font-semibold text-slate-600 mb-4">Govt. Hr. Sec. School, Pothukudi</h4>
              <div className="flex flex-wrap gap-4 items-center text-sm">
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold">Completed</span>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-bold">71.0%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
