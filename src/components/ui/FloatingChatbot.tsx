import React, { useState } from 'react';
import { MessageSquare, X, Phone, Calendar, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOptions = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Chat on WhatsApp",
      desc: "Instant replies",
      color: "bg-green-500",
      action: () => window.open('https://wa.me/919999999999', '_blank')
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call our Experts",
      desc: "Mon-Sat, 9AM-8PM",
      color: "bg-evoke-navy",
      action: () => window.open('tel:+919999999999', '_self')
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Book Consultation",
      desc: "Reserve your slot",
      color: "bg-evoke-teal",
      action: () => {
        setIsOpen(false);
        // We use window.location here to ensure it works cleanly like a classic redirect if needed without Router context issues, 
        // though it's inside router now. We can still use local navigation if desired via useNavigate.
        window.location.href = '/book'; 
      }
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Dropdown Menu Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, y: 10, filter: "blur(4px)", transition: { duration: 0.15 } }}
            className="mb-4 w-64 bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] overflow-hidden origin-bottom-right"
          >
            <div className="p-4 bg-evoke-navy text-white text-center">
              <h4 className="font-display font-medium">How can we help?</h4>
              <p className="text-xs text-white/60 mt-1">Choose an option below</p>
            </div>
            
            <div className="p-2 flex flex-col gap-1">
              {menuOptions.map((option, idx) => (
                <button
                  key={idx}
                  onClick={option.action}
                  className="w-full flex items-center gap-3 p-3 hover:bg-evoke-bgLight rounded-xl transition-colors text-left group"
                >
                  <div className={`w-10 h-10 ${option.color} text-white rounded-full flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
                    {option.icon}
                  </div>
                  <div>
                    <h5 className="font-medium text-sm text-evoke-navy">{option.title}</h5>
                    <p className="text-xs text-evoke-textMuted">{option.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        animate={{ y: [0, -20, 0] }}
        transition={{ 
          y: {
            repeat: Infinity, 
            duration: 2.5, 
            ease: "easeInOut" 
          }
        }}
        whileHover={{ scale: 1.05, cursor: 'pointer' }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-evoke-navy text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(26,58,92,0.5)] border border-white/10 relative group"
        aria-label="Toggle Contact Menu"
      >
        {/* Continuous Pulsing Ambient Glow */}
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute inset-0 bg-evoke-gold rounded-full blur-xl pointer-events-none" 
        />
        {isOpen ? (
          <X className="w-6 h-6 relative z-10" />
        ) : (
          <MessageSquare className="w-6 h-6 relative z-10" />
        )}
      </motion.button>
    </div>
  );
};
