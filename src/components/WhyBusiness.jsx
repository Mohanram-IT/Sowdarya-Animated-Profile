import { motion } from 'framer-motion';
import { Target, TrendingUp, Users } from 'lucide-react';

const WhyBusiness = () => {
  const reasons = [
    {
      icon: <TrendingUp size={32} />,
      title: "Data-Driven Decisions",
      description: "My scientific background taught me how to handle complex data, ensuring precision and reliability in reporting—skills highly transferable to data analytics and business strategy.",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: <Users size={32} />,
      title: "Stakeholder Management",
      description: "Coordinating 300+ students and faculty as General Secretary proved my ability to manage cross-functional teams, resolve conflicts, and drive consensus.",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: <Target size={32} />,
      title: "Process Optimization",
      description: "Standardizing multi-step lab workflows is fundamentally the same as business process mapping. I bring a systematic approach to improving operational efficiency.",
      color: "from-indigo-400 to-violet-500"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0f1c] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-600 via-transparent to-transparent pointer-events-none mix-blend-screen"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 mb-6 drop-shadow-sm tracking-tight">Why Business Development?</h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light text-balance">
            A unique pivot from Biotechnology to Business Operations, powered by an analytical mindset.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring", bounce: 0.4 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:bg-white/10 transition-all duration-500 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} text-white flex items-center justify-center mb-8 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
                {reason.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4">{reason.title}</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBusiness;
