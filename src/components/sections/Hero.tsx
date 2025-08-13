"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CheckCircle, CalendarCheck, BarChart3 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative hero-gradient grain-overlay min-h-[92vh] flex items-center pt-32 pb-24">
      <div className="max-w-content mx-auto container-px w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-12 max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl leading-tight"
            >
              The Ultimate AI Appointment Setting Guide For B2B on Instagram
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-white/80 text-xl"
            >
              The definitive resource hub for high-ticket B2B coaches. Build a profile that converts,
              publish content that books calls, and scale conversations with premium systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button href="#book-audit" variant="primary">Full AI Appointment Setting System DFY</Button>
              <Button href="#tabs" variant="outline">Build Your Own In 5 Minutes</Button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}


