import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0f1c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-sm">
              Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-orange-400">great</span> together.
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-slate-400 mb-10 text-balance font-light">
              Currently seeking entry-level roles as a Data Analyst, Business Analyst, or Marketing Operations Associate. I'm open to opportunities where I can contribute to growth and operational excellence.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-6 mb-12">
              <motion.a variants={itemVariants} href="mailto:sowndaryasowmi345@gmail.com" className="flex items-center gap-6 text-slate-300 hover:text-fuchsia-400 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-fuchsia-500/20 group-hover:border-fuchsia-400/50 transition-all duration-300 shadow-lg">
                  <Mail size={24} className="text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors" />
                </div>
                <span className="font-bold text-lg md:text-xl">sowndaryasowmi345@gmail.com</span>
              </motion.a>
              
              <motion.div variants={itemVariants} className="flex items-center gap-6 text-slate-300 group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500/20 group-hover:border-orange-400/50 transition-all duration-300 shadow-lg">
                  <Phone size={24} className="text-orange-400 group-hover:text-orange-300 transition-colors" />
                </div>
                <span className="font-bold text-lg md:text-xl">+91 8778427512</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-center gap-6 text-slate-300 group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-300 shadow-lg">
                  <MapPin size={24} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                </div>
                <span className="font-bold text-lg md:text-xl">Tirunelveli, Tamil Nadu</span>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <a href="https://linkedin.com/in/sowndarya-e" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-blue-400 transition-all hover:-translate-y-2 transform duration-300 shadow-xl">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Sowndarya0345" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center hover:bg-white/10 hover:border-white/20 hover:text-white transition-all hover:-translate-y-2 transform duration-300 shadow-xl">
                <Github size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="bg-white/5 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/20 rounded-bl-full blur-2xl group-hover:bg-fuchsia-400/30 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/20 rounded-tr-full blur-2xl group-hover:bg-orange-400/30 transition-colors duration-500"></div>
            
            <h3 className="text-3xl font-black text-white mb-8 relative z-10">Send a Message</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">Name</label>
                <input type="text" placeholder="Jane Doe" className="w-full px-5 py-4 rounded-2xl bg-slate-900/50 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-400 transition-all font-medium" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">Email</label>
                <input type="email" placeholder="jane@company.com" className="w-full px-5 py-4 rounded-2xl bg-slate-900/50 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-400 transition-all font-medium" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">Message</label>
                <textarea rows="4" placeholder="How can I help you?" className="w-full px-5 py-4 rounded-2xl bg-slate-900/50 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-400 transition-all resize-none font-medium"></textarea>
              </motion.div>
              
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="w-full py-5 bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white font-black text-lg rounded-2xl hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
