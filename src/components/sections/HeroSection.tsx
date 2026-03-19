import React, { useState, useEffect } from 'react';
import { Microscope, ChevronDown, Sparkles } from 'lucide-react';
import { EvokeButton } from '@/components/ui/EvokeButton';
import { EvokeBadge } from '@/components/ui/EvokeBadge';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshDNA } from '@/components/3d/MeshDNA';

/** Advanced Cinematic Hero section with animated gradients, glassmorphism, and kinetic typography in brand colors */
export const HeroSection: React.FC = () => {
  const scrollY = useScrollPosition();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse parallax tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const headline = "Restore Your Hair.\nReclaim Your Confidence.";
  const words = headline.split(" ");

  // Framer Motion variants for staggered kinetic typography
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 3.5, // Waits for PageLoader to finish
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20, rotateX: -20 },
    show: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  } as any;

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 4.2 } }
  } as any;

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-evoke-navy">
      {/* 1. Cinematic 3D Biology Abstract Background */}
      <div className="absolute inset-0 overflow-hidden bg-[#07131b]">
        {/* Soft Fluid Bioluminescence with Cursor Parallax */}
        <motion.div 
          className="absolute -top-[20%] -right-[10%] w-[80vw] h-[80vw] rounded-full opacity-50 md:opacity-70 mix-blend-screen filter blur-[100px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 60%)' }}
          animate={{ 
            x: [0, 40, -30, 0], 
            y: [0, -50, 30, 0],
            translateX: mousePos.x * -2,
            translateY: mousePos.y * -2
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[30%] -left-[20%] w-[70vw] h-[70vw] rounded-full opacity-50 md:opacity-60 mix-blend-screen filter blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #0F6A6E 0%, transparent 60%)' }}
          animate={{ 
            x: [0, -50, 40, 0], 
            y: [0, 60, -40, 0],
            translateX: mousePos.x * 2,
            translateY: mousePos.y * 2
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />

        {/* Authentic 3D DNA Model via WebGL */}
        <div className="absolute inset-0 lg:left-1/4 flex items-center justify-center pointer-events-none mix-blend-screen overflow-visible">
          <Canvas camera={{ position: [0, 0, 10], fov: 45 }} className="w-full h-full pointer-events-none">
            {/* Cinematic Lighting for the DNA Model */}
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} color="#0F6A6E" />
            <directionalLight position={[-10, -5, 5]} intensity={1} color="#C9A84C" />
            <pointLight position={[0, -5, 0]} intensity={2} color="#ffffff" distance={20} />
            
            <Suspense fallback={null}>
              <MeshDNA />
            </Suspense>
          </Canvas>
        </div>

        {/* Deep dark grain texture overlay for cellular realism */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none z-0" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* 2. Kinetic Typography Copy Block */}
          <div className="lg:col-span-7 text-white">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 3.2, ease: "backOut" }}
            >
              <EvokeBadge variant="gold" className="mb-6 shadow-[0_0_20px_rgba(201,168,76,0.2)] border border-evoke-gold/30">
                <Sparkles className="w-3 h-3 inline-block mr-1" /> Delhi's #1 AI-Powered Clinic
              </EvokeBadge>
            </motion.div>

            {/* Word-by-word staggering headline */}
            <motion.h1 
              className="display-hero text-white mb-6 leading-tight whitespace-pre-line perspective-[1000px]"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {words.map((word, i) => (
                <motion.span 
                  key={i} 
                  className="inline-block mr-[0.25em]"
                  variants={wordVariants}
                >
                  {word.includes('\n') ? (
                    <>
                      {word.split('\n')[0]}
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-evoke-gold to-white">
                        {word.split('\n')[1]}
                      </span>
                    </>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div variants={fadeUpVariant} initial="hidden" animate="show">
              <p className="body-large text-white/80 mb-8 max-w-xl font-light">
                AIIMS-trained surgeons. Military-grade AI scalp diagnostics. Transparent pricing from ₹24,999. Results that last a lifetime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/book?source=scan" className="group">
                  <div className="relative inline-block w-full sm:w-auto">
                    {/* Glowing pulse behind button */}
                    <div className="absolute inset-0 bg-evoke-teal rounded-full blur-md opacity-30 group-hover:opacity-70 transition-opacity duration-300 animate-pulse" />
                    <EvokeButton variant="primary" size="lg" className="w-full relative shadow-xl" leftIcon={<Microscope className="h-5 w-5" />}>
                      Try Free AI Scalp Scan
                    </EvokeButton>
                  </div>
                </Link>
                <Link to="/book" className="group">
                  <EvokeButton variant="ghost" size="lg" className="w-full text-white hover:text-evoke-gold transition-colors border border-white/10 hover:border-evoke-gold/50 bg-white/5 backdrop-blur-sm">
                    Book Consultation — Fee Waived
                  </EvokeButton>
                </Link>
              </div>
              
              <p className="text-sm text-white/50 tracking-wide font-medium uppercase">
                <span className="text-evoke-gold tracking-widest mr-2">★★★★★</span>
                4.7/5 • 10,000+ Happy Patients
              </p>
            </motion.div>
          </div>

          {/* 3. Glassmorphism Scalp Scan Widget */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 4.4, ease: "easeOut" }}
            style={{ 
              transform: `perspective(1000px) rotateX(${mousePos.y * 0.5}deg) rotateY(${mousePos.x * -0.5}deg)` 
            }}
          >
            {/* Ambient glow behind card */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-evoke-teal/20 to-evoke-gold/20 rounded-2xl blur-xl opacity-50" />
            
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl p-7 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden group">
              {/* Shine effect that sweeps across */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite] skew-x-12" />
              
              <div className="relative z-10">
                <h4 className="font-display text-2xl font-bold text-white mb-2 tracking-tight">Free AI Scalp Analysis</h4>
                <p className="text-sm text-white/60 mb-6 leading-relaxed">
                  Upload a photo. Our proprietary AI determines your hair loss stage & ideal treatment in 60 seconds.
                </p>
                <div className="group/drop border border-dashed border-white/30 hover:border-evoke-gold/80 bg-white/5 rounded-xl py-8 text-center cursor-pointer transition-all duration-300">
                  <div className="text-white/70 group-hover/drop:text-white transition-colors">
                    <Microscope className="h-10 w-10 mx-auto mb-3 text-evoke-gold group-hover/drop:scale-110 transition-transform duration-300" />
                    <p className="text-sm font-medium tracking-wide">Drop your photo here</p>
                    <p className="text-xs mt-2 text-white/40">JPG, PNG or WebP • Max 5MB</p>
                  </div>
                </div>
                <Link to="/book?source=scan">
                  <EvokeButton variant="primary" size="full" className="mt-5 bg-gradient-to-r from-evoke-teal to-[#168a8f] text-white shadow-lg shadow-evoke-teal/20 border-none group-hover:shadow-evoke-teal/40 transition-all duration-300">
                    Analyse My Hair ▶
                  </EvokeButton>
                </Link>
                <p className="text-[11px] text-white/40 text-center mt-4 tracking-wider uppercase font-semibold">
                  🔒 Photo not stored. 100% Private.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 4. Elegant Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ opacity: scrollY > 100 ? 0 : 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-semibold">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};
