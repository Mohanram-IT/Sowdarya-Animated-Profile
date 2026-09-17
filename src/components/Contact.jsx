import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-orange-500">great</span> together.</h2>
            <p className="text-xl text-slate-600 mb-10 text-balance">
              Currently seeking entry-level roles as a Data Analyst, Business Analyst, or Marketing Operations Associate. I'm open to opportunities where I can contribute to growth and operational excellence.
            </p>

            <div className="space-y-6 mb-12">
              <a href="mailto:sowndaryasowmi345@gmail.com" className="flex items-center gap-6 text-slate-700 hover:text-fuchsia-600 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-fuchsia-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-fuchsia-500 transition-all duration-300">
                  <Mail size={24} className="text-fuchsia-500 group-hover:text-white transition-colors" />
                </div>
                <span className="font-bold text-lg">sowndaryasowmi345@gmail.com</span>
              </a>
              <div className="flex items-center gap-6 text-slate-700 group">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-300">
                  <Phone size={24} className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <span className="font-bold text-lg">+91 8778427512</span>
              </div>
              <div className="flex items-center gap-6 text-slate-700 group">
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500 transition-all duration-300">
                  <MapPin size={24} className="text-cyan-500 group-hover:text-white transition-colors" />
                </div>
                <span className="font-bold text-lg">Tirunelveli, Tamil Nadu</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://linkedin.com/in/sowndarya-e" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center hover:bg-blue-600 transition-colors hover:-translate-y-2 transform duration-300 shadow-xl">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Sowndarya0345" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center hover:bg-slate-700 transition-colors hover:-translate-y-2 transform duration-300 shadow-xl">
                <Github size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-slate-300/50 border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/10 rounded-tr-full"></div>
            
            <h3 className="text-3xl font-black text-slate-800 mb-8 relative z-10">Send a Message</h3>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                <input type="text" placeholder="Jane Doe" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-fuchsia-500/20 focus:border-fuchsia-500 transition-all font-medium" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                <input type="email" placeholder="jane@company.com" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-fuchsia-500/20 focus:border-fuchsia-500 transition-all font-medium" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea rows="4" placeholder="How can I help you?" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-fuchsia-500/20 focus:border-fuchsia-500 transition-all resize-none font-medium"></textarea>
              </div>
              <button className="w-full py-5 bg-gradient-to-r from-fuchsia-500 to-orange-500 text-white font-bold text-lg rounded-2xl hover:shadow-lg hover:shadow-fuchsia-500/30 hover:-translate-y-1 transition-all duration-300">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
