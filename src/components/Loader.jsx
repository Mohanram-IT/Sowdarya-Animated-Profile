import { motion } from 'framer-motion';

const Loader = ({ setIsLoading }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 3.2 }}
      onAnimationComplete={() => setIsLoading(false)}
    >
      {/* Subtle ambient glow matching the pink theme */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute w-[600px] h-[600px] bg-pink-500 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="flex items-center justify-center relative z-10 w-full px-6">
        {/* The Leading Line (Simulating the pen stroke starting) */}
        <motion.div
          className="h-[4px] bg-gradient-to-r from-transparent via-rose-500 to-pink-500 rounded-full mt-8 md:mt-10"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "60px", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        
        {/* The Cursive Signature Reveal */}
        <motion.div
          className="text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 whitespace-nowrap pl-1 py-6 leading-tight"
          style={{ fontFamily: "'Great Vibes', cursive", paddingRight: '20px' }}
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 2, ease: "linear", delay: 0.8 }}
        >
          Sowndarya
        </motion.div>
      </div>

    </motion.div>
  );
};

export default Loader;
