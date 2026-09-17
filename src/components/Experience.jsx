import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';

const ProjectCard = ({ exp, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative block bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group cursor-pointer"
    >
      {/* Image Banner with Hover Overlay */}
      <div style={{ transform: "translateZ(40px)" }} className="relative h-48 md:h-56 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-tr ${exp.color} mix-blend-overlay z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-500`}></div>
        <img src={exp.image} alt={exp.title} className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700" />
        
        <div className="absolute top-4 right-4 z-20">
          <span className="text-xs font-bold text-white bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg border border-white/20">
            {exp.date}
          </span>
        </div>

        {/* View Details Overlay */}
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-slate-900/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <span className="flex items-center gap-2 bg-white text-slate-900 font-bold px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
             View Details <ArrowRight size={18} />
           </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ transform: "translateZ(30px)" }} className="p-8 relative bg-white">
        <div className="flex items-center gap-2 mb-4">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gradient-to-r ${exp.color} bg-opacity-10 text-transparent bg-clip-text font-bold text-xs uppercase tracking-wider border border-slate-100`}>
            <TrendingUp size={14} className="text-slate-700" /> Business Impact
          </span>
          <span className="text-xs font-bold text-slate-500">{exp.impact}</span>
        </div>
        
        <h3 className={`text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${exp.color} mb-2`}>{exp.title}</h3>
        <h4 className="text-lg font-bold text-slate-800 mb-6">{exp.company}</h4>
        
        <ul className="space-y-4">
          {exp.description.map((item, i) => (
            <li key={i} className="flex items-start text-slate-600 text-sm md:text-base font-medium">
              <span className={`w-2 h-2 mt-2 mr-3 rounded-full bg-gradient-to-r ${exp.color} shrink-0`}></span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.a>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Data Analytics Intern",
      company: "Vyrex Technologies",
      date: "Sept 2026 – Present",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      color: "from-cyan-500 to-blue-600",
      impact: "Data Quality & Reporting timelines",
      description: [
        "Selected for a remote internship applying data analysis and reporting skills to live business projects.",
        "Executing data organization, quality-check, and reporting tasks under direct mentorship.",
        "Managing deliverables against agreed project timelines."
      ]
    },
    {
      title: "Student Body General Secretary",
      company: "TNJFU – OMR Campus",
      date: "2024 – 2025",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      color: "from-fuchsia-500 to-pink-600",
      impact: "25% YoY Growth in Participation",
      description: [
        "Planned and executed logistics for campus-wide events, effectively managing budgets and schedules.",
        "Served as primary liaison between 300+ students, faculty committees, and administration.",
        "Managed multiple student committees, assigning tasks and coordinating cross-functional resources."
      ]
    },
    {
      title: "Biotechnology Intern",
      company: "LifeCell International Pvt. Ltd.",
      date: "May 2026 – July 2026",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      color: "from-emerald-500 to-teal-600",
      impact: "Strict Protocol Adherence",
      description: [
        "Applied PCR-based molecular diagnostics for Mycoplasma/Ureaplasma detection.",
        "Ensured strict protocol adherence, data quality checks, and clear results reporting.",
        "Gained hands-on experience in high-stakes environment requiring acute attention to detail."
      ]
    },
    {
      title: "Academic Project Associate",
      company: "Institute of Fisheries Biotechnology",
      date: "Academic Term",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
      color: "from-orange-500 to-rose-500",
      impact: "Standardized Process Workflows",
      description: [
        "Standardized multi-step workflows for consistent, QC-ready results — a direct parallel to business process mapping.",
        "Logged and analyzed experimental data, writing clear summaries for stakeholder review.",
        "Maintained equipment calibration and consumable stock levels, ensuring operational efficiency."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 relative overflow-hidden" style={{ perspective: "1000px" }}>
      {/* Decorative colorful background shapes */}
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-cyan-300/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:text-center">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 mb-4 inline-block">Experience & Projects</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">My journey from the lab to operations and leadership.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {experiences.map((exp, index) => (
            <ProjectCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
