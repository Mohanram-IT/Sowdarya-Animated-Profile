import { motion } from 'framer-motion';

const Skills = () => {
  const businessSkills = [
    "Data Analysis", "Revenue Operations (RevOps)", "Process Mapping", 
    "Stakeholder Management", "Workflow Design", "Inbound Marketing", 
    "Microsoft Excel (Pivot Tables, VLOOKUP)", "Project Coordination", "Dashboard Reporting"
  ];
  
  const techSkills = [
    "Bioinformatics (BLAST)", "Data Science Fundamentals", "Data Cleaning", 
    "Data Quality Assurance", "Molecular Diagnostics", "Protocol/SOP Documentation", "PCR"
  ];

  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500 mb-6">Core Competencies</h2>
          <p className="text-xl text-slate-600">The analytical and operational skills I bring to the table.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-xl shadow-slate-200/50"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center text-white text-xl shadow-lg shadow-pink-500/30">💼</div>
              Business & Operations
            </h3>
            <div className="flex flex-wrap gap-3">
              {businessSkills.map((skill, index) => (
                <span key={index} className="px-5 py-2.5 bg-white border border-pink-100 text-slate-700 text-sm font-bold rounded-2xl shadow-sm hover:shadow-md hover:bg-pink-50 hover:text-pink-600 transition-all cursor-default hover:-translate-y-1">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-xl shadow-slate-200/50"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-xl shadow-lg shadow-blue-500/30">🔬</div>
              Technical & Analytical
            </h3>
            <div className="flex flex-wrap gap-3">
              {techSkills.map((skill, index) => (
                <span key={index} className="px-5 py-2.5 bg-white border border-blue-100 text-slate-700 text-sm font-bold rounded-2xl shadow-sm hover:shadow-md hover:bg-blue-50 hover:text-blue-600 transition-all cursor-default hover:-translate-y-1">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
