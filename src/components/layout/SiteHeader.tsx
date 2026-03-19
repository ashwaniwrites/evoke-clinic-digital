import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { EvokeButton } from '@/components/ui/EvokeButton';
import { navItems } from '@/lib/data/seed';
import { cn } from '@/lib/utils';

/** Site header with smart auto-hide scroll transition and animated layout markers */
export const SiteHeader: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update background state
      setIsScrolled(currentScrollY > 50);

      // Smart hide on scroll down
      if (currentScrollY > 150 && currentScrollY > lastScrollY) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger immediately on mount to establish baseline
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 20 } }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? "-100%" : 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-colors duration-500',
          isScrolled 
            ? 'bg-white/85 backdrop-blur-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border-b border-evoke-border/50' 
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto flex items-center justify-between h-[72px] md:h-[84px] px-4 lg:px-8">
          <Link to="/" className="flex items-center gap-2 shrink-0 group">
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
              className={cn(
                'font-display text-2xl md:text-[28px] font-bold tracking-tight transition-all duration-300 group-hover:scale-105 origin-left',
                isScrolled ? 'text-evoke-navy' : 'text-white'
              )}>
              Evoke
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={cn(
                'hidden sm:inline text-xs font-bold uppercase tracking-[0.2em] transition-colors',
                isScrolled ? 'text-evoke-gold' : 'text-white/80'
              )}>
              Hair & Skin
            </motion.span>
          </Link>

          <motion.nav 
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center gap-2 px-2" 
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <motion.div 
                  key={item.href} 
                  variants={navItemVariants} 
                  className="relative flex items-center justify-center group"
                >
                  <Link
                    to={item.href}
                    className={cn(
                      'text-sm font-bold tracking-wide px-4 py-2 uppercase relative z-10 block',
                      isScrolled ? 'text-evoke-navy/90' : 'text-white/90',
                      isActive ? (isScrolled ? 'text-white' : 'text-evoke-navy') : ''
                    )}
                  >
                    <div className="relative overflow-hidden h-4 flex items-center justify-center">
                      <span className="block transition-transform duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] group-hover:-translate-y-full">
                        {item.label}
                      </span>
                      <span className={cn(
                        'absolute block transition-transform duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] translate-y-full group-hover:translate-y-0',
                        isActive ? 'text-white' : 'text-evoke-navy font-black'
                      )}>
                        {item.label}
                      </span>
                    </div>
                  </Link>

                  {/* Creative animated background hover pill */}
                  <div className="absolute inset-0 bg-evoke-gold/80 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out z-0" />
                  
                  {/* Active background pill */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-evoke-teal rounded-full w-full h-full z-0"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.nav>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
            className="hidden lg:flex items-center gap-4"
          >
            <EvokeButton variant="secondary" size="sm" className={cn(
              'shadow-sm hover:scale-105 transition-transform duration-300',
              !isScrolled && 'border-white/30 text-white hover:bg-white hover:text-evoke-navy backdrop-blur-md bg-white/10'
            )}>
              WhatsApp Us
            </EvokeButton>
            <Link to="/book">
              <EvokeButton variant="primary" size="sm" className="shadow-lg hover:shadow-evoke-teal/30 hover:scale-105 transition-all duration-300">
                Book Consultation
              </EvokeButton>
            </Link>
          </motion.div>

          {/* Mobile Buttons */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex lg:hidden items-center gap-2"
          >
            <a href="tel:+919821530022" className={cn('p-2 rounded-button transition-colors', isScrolled ? 'text-evoke-navy bg-evoke-bgLight/50' : 'text-white bg-white/10 backdrop-blur-md')} aria-label="Call us">
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn('p-2 rounded-button transition-colors', isScrolled ? 'text-evoke-navy bg-evoke-bgLight/50' : 'text-white bg-white/10 backdrop-blur-md')}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile nav drawer with Framer Motion slide-out */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-evoke-navy/50 backdrop-blur-md" 
              onClick={() => setMobileOpen(false)} 
            />
            <motion.nav 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[85%] sm:w-80 bg-white shadow-2xl flex flex-col p-6 pt-8" 
              aria-label="Mobile navigation"
            >
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-evoke-border/50">
                <span className="font-display text-2xl font-bold text-evoke-navy">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="p-2 bg-evoke-bgLight rounded-full text-evoke-textBody hover:text-evoke-navy transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {navItems.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  key={item.href}
                >
                  <Link
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-4 text-lg font-bold text-evoke-navy border-b border-evoke-border/30 hover:text-evoke-teal transition-colors flex items-center justify-between"
                  >
                    {item.label}
                    {location.pathname === item.href && <span className="w-2 h-2 rounded-full bg-evoke-gold" />}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <Link to="/book" onClick={() => setMobileOpen(false)}>
                  <EvokeButton variant="primary" size="full" className="shadow-lg py-4 text-base">Book Consultation</EvokeButton>
                </Link>
                <EvokeButton variant="secondary" size="full" className="py-4 text-base bg-evoke-bgLight border-none shadow-sm">WhatsApp Us</EvokeButton>
              </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
