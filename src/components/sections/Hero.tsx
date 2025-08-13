"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CheckCircle, CalendarCheck, BarChart3 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-24 pb-20 hero-gradient grain-overlay">
      <div className="max-w-content mx-auto container-px">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-12">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl leading-tight"
            >
              The Ultimate AI Appointment Setting Guide For B2B on Instagram
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-white/80 text-lg"
            >
              The definitive resource hub for high-ticket B2B coaches. Build a profile that converts,
              publish content that books calls, and scale conversations with premium systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
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


