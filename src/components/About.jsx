import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: "Years of Academic Rigor", value: "4+", color: "from-rose-500 to-orange-400" },
    { label: "Students Managed as Gen. Secretary", value: "300+", color: "from-violet-500 to-fuchsia-500" },
    { label: "Professional Certifications", value: "5+", color: "from-cyan-500 to-teal-400" },
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0f1c] relative overflow-hidden w-full">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-20 md:text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 mb-8 tracking-tight drop-shadow-sm">Bridging Science & Business.</h2>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
            With a B.Tech in Fisheries Biotechnology, I developed a strong foundation in analytical thinking, research methodology, and rigorous data quality checks. Now, I am channeling those problem-solving skills into <span className="text-white font-bold">Business Development</span> and <span className="text-white font-bold">Revenue Operations</span>. Whether it's mapping out a multi-step lab workflow or designing a customer journey, I rely on process-driven execution and clear stakeholder communication to get results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 text-center shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:bg-white/10 transition-all duration-300 relative overflow-hidden group cursor-pointer"
            >
              {/* Colorful hover effect background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className={`text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-4 drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>{stat.value}</div>
              <div className="text-xs font-black text-slate-300 uppercase tracking-[0.2em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
