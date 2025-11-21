'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-accent-primary/5 blur-[100px] rounded-full -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 max-w-4xl mx-auto"
      >
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 backdrop-blur-sm mb-4">
          Raport de Cercetare • Noiembrie 2025
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Confruntarea Stațiilor de Lucru AI de <span className="text-gradient-primary">5.000 €</span>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Optimizare pentru LLM-uri Locale pe Piața din România.
          O analiză aprofundată a celor mai bune echipamente hardware pentru cercetătorii AI cu buget limitat.
        </p>

        <div className="pt-8 flex justify-center gap-4">
          <button 
            onClick={() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-full bg-accent-primary text-black font-bold hover:bg-green-400 transition-colors"
          >
            Vezi Comparația
          </button>
          <button 
            onClick={() => document.getElementById('analysis')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
          >
            Citește Analiza
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
