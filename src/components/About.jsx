import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: "Years of Academic Rigor", value: "3+", color: "from-rose-500 to-orange-400" },
    { label: "Students Managed as Gen. Secretary", value: "300+", color: "from-violet-500 to-fuchsia-500" },
    { label: "Professional Certifications", value: "5+", color: "from-cyan-500 to-teal-400" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden w-full">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500 mb-8 tracking-tight">Bridging Science & Business</h2>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed text-balance">
            With a B.Tech in Fisheries Biotechnology, I developed a strong foundation in analytical thinking, research methodology, and rigorous data quality checks. Now, I am channeling those problem-solving skills into Business Development and Revenue Operations. Whether it's mapping out a multi-step lab workflow or designing a customer journey, I rely on process-driven execution and clear stakeholder communication to get results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 text-center shadow-lg shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Colorful hover effect background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className={`text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-4`}>{stat.value}</div>
              <div className="text-sm font-bold text-slate-600 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
