import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certs = [
    { title: "HubSpot Revenue Operations (RevOps)", issuer: "HubSpot Academy", year: "2026–2028" },
    { title: "Inbound Marketing Certification", issuer: "HubSpot Academy", year: "2026–2028" },
    { title: "Introduction to CCBA", issuer: "Simplilearn SkillUp", year: "2026" },
    { title: "Data Science in Biology", issuer: "BioTecNika", year: "Project Work" },
    { title: "Introduction to Genetics and Evolution", issuer: "Duke University, Coursera", year: "2025" },
    { title: "Nestlé 'Needs YOUth' Nesternship", issuer: "E-Learning", year: "2026" },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">Certifications</h2>
          <p className="text-lg text-slate-600">Continuous learning and professional development.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-teal-50 border border-slate-100 hover:border-teal-100 transition-colors group cursor-default"
            >
              <div className="p-3 bg-white rounded-xl shadow-sm group-hover:text-teal-600 text-slate-400 transition-colors">
                <Award size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 leading-tight mb-2 group-hover:text-teal-700 transition-colors">{cert.title}</h3>
                <p className="text-sm text-slate-500 mb-1">{cert.issuer}</p>
                <p className="text-xs font-medium text-slate-400">{cert.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
