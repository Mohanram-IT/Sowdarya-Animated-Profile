import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Music, Github, Activity } from 'lucide-react';

const skillData = [
  { subject: 'Data Analysis', score: 95 },
  { subject: 'RevOps', score: 85 },
  { subject: 'Process Mapping', score: 90 },
  { subject: 'Bioinformatics', score: 80 },
  { subject: 'Molecular Diag.', score: 75 },
  { subject: 'Stakeholder Mgmt', score: 95 },
];

const spotifySongs = [
  { title: "Starboy", artist: "The Weeknd, Daft Punk", albumArt: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452" },
  { title: "Blinding Lights", artist: "The Weeknd", albumArt: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36" },
  { title: "Levitating", artist: "Dua Lipa", albumArt: "https://i.scdn.co/image/ab67616d0000b273bd26ede1ae69327010d49946" }
];

const Equalizer = () => (
  <div className="flex items-end gap-1 h-5">
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className="w-1 bg-emerald-400 rounded-t-sm"
        animate={{ height: ["4px", "20px", "4px"] }}
        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
      />
    ))}
  </div>
);

const Analytics = () => {
  const [songIndex, setSongIndex] = useState(0);

  useEffect(() => {
    // Simulate song change every 10 seconds for the mock widget
    const interval = setInterval(() => {
      setSongIndex((prev) => (prev + 1) % spotifySongs.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const currentSong = spotifySongs[songIndex];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:text-center">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-4 inline-block">
            Live Data & Analytics
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Proving data chops with real-time interactive widgets and dashboards.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Spotify Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="flex items-center gap-2 text-emerald-400 font-bold tracking-widest text-xs uppercase">
                <Music size={16} /> Currently Playing
              </div>
              <Equalizer />
            </div>

            <div className="flex items-center gap-6 relative z-10">
              <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg shadow-black/50 shrink-0">
                <motion.img 
                  key={currentSong.albumArt}
                  src={currentSong.albumArt} 
                  alt="Album Art" 
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="overflow-hidden">
                <motion.h4 
                  key={currentSong.title}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="text-white font-bold text-xl mb-1 truncate"
                >
                  {currentSong.title}
                </motion.h4>
                <motion.p 
                  key={currentSong.artist}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-slate-400 text-sm truncate"
                >
                  {currentSong.artist}
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* GitHub Contributions Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-center relative overflow-hidden"
          >
            <div className="flex items-center gap-2 text-fuchsia-400 font-bold tracking-widest text-xs uppercase mb-6">
              <Github size={16} /> GitHub Contributions (Sowndarya0345)
            </div>
            
            <div className="overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide">
              <div className="min-w-[700px] text-white">
                <GitHubCalendar 
                  username="Sowndarya0345" 
                  colorScheme="dark"
                  theme={{
                    dark: ['#1e293b', '#c084fc', '#a855f7', '#9333ea', '#7e22ce']
                  }}
                  fontSize={12}
                  blockSize={12}
                  blockMargin={4}
                  hideTotalCount={true}
                />
              </div>
            </div>
          </motion.div>

          {/* Interactive Radar Chart Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3 p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
          >
            <div className="flex items-center gap-2 text-cyan-400 font-bold tracking-widest text-xs uppercase mb-8">
              <Activity size={16} /> Skill Proficiency Radar
            </div>
            
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                    itemStyle={{ color: '#2dd4bf', fontWeight: 'bold' }}
                  />
                  <Radar 
                    name="Proficiency" 
                    dataKey="score" 
                    stroke="#06b6d4" 
                    strokeWidth={2}
                    fill="#06b6d4" 
                    fillOpacity={0.4} 
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Analytics;
