"use client";

import { motion } from "framer-motion";
import { CALENDAR_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative hero-gradient grain-overlay min-h-[85vh] sm:min-h-[92vh] flex items-center pt-20 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-0">
      <div className="max-w-content mx-auto container-px w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center" style={{ marginTop: '-10px' }}>
          <div className="lg:col-span-12 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white/10 backdrop-blur border border-white/20 text-base text-white/90 mb-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_0_5px_rgba(0,0,0,0.9)]" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06), 0 0 5px rgba(0,0,0,0.9)" }}>
              <motion.span 
                className="text-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  filter: [
                    "drop-shadow(0 0 2px rgba(255,255,255,0.3))",
                    "drop-shadow(0 0 4px rgba(255,255,255,0.5))",
                    "drop-shadow(0 0 2px rgba(255,255,255,0.3))"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🚀
              </motion.span>
              <span>Scale Your Sales 10x</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight"
            >
              The Ultimate AI Appointment Setting Guide For B2B on Instagram
            </motion.h1>
            {/* Subheadline removed per request */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
            >
              <Button href={CALENDAR_URL} variant="orange" className="text-sm sm:text-base md:text-lg">Full AI Appointment Setting System DFY</Button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}


