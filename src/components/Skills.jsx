import { motion } from 'framer-motion';

const Skills = () => {
  const businessSkills = [
    "Data Analysis", "Revenue Operations (RevOps)", "Process Mapping", 
    "Stakeholder Management", "Workflow Design", "Inbound Marketing", 
    "Microsoft Excel (Pivot Tables)", "Project Coordination", "Dashboard Reporting"
  ];
  
  const techSkills = [
    "Bioinformatics (BLAST)", "Data Science Fundamentals", "Data Cleaning", 
    "Data Quality Assurance", "Molecular Diagnostics", "Protocol/SOPs", "PCR"
  ];

  return (
    <section id="skills" className="py-24 bg-[#0a0f1c] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6 tracking-tight drop-shadow-sm">Core Competencies.</h2>
          <p className="text-lg md:text-xl text-slate-400 font-light">The analytical and operational skills I bring to the table.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Business Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring" }}
            whileHover={{ y: -10 }}
            className="p-8 md:p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 group"
          >
            <h3 className="text-2xl md:text-3xl font-black text-white mb-10 flex items-center gap-5">
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center text-white text-2xl shadow-[0_0_20px_rgba(217,70,239,0.5)]"
              >
                💼
              </motion.div>
              Business & Operations
            </h3>
            <div className="flex flex-wrap gap-3">
              {businessSkills.map((skill, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 bg-slate-900/50 border border-white/10 text-slate-300 text-sm font-bold rounded-2xl shadow-lg hover:shadow-[0_0_15px_rgba(217,70,239,0.4)] hover:bg-gradient-to-r hover:from-fuchsia-500/20 hover:to-pink-500/20 hover:text-white hover:border-fuchsia-400/50 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tech Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            whileHover={{ y: -10 }}
            className="p-8 md:p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 group"
          >
            <h3 className="text-2xl md:text-3xl font-black text-white mb-10 flex items-center gap-5">
              <motion.div 
                animate={{ rotate: [0, -10, 10, 0] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl shadow-[0_0_20px_rgba(6,182,212,0.5)]"
              >
                🔬
              </motion.div>
              Technical & Analytical
            </h3>
            <div className="flex flex-wrap gap-3">
              {techSkills.map((skill, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 bg-slate-900/50 border border-white/10 text-slate-300 text-sm font-bold rounded-2xl shadow-lg hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:text-white hover:border-cyan-400/50 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
