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
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-500 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:text-center">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 mb-6">Why Business Development?</h2>
          <p className="text-lg md:text-xl text-fuchsia-100 max-w-2xl mx-auto text-balance">
            A unique pivot from Biotechnology to Business Operations, powered by an analytical mindset.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} text-white flex items-center justify-center mb-8 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
              <p className="text-slate-300 leading-relaxed text-base">
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
