"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CheckCircle, CalendarCheck, BarChart3 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-20 pb-16">
      <div className="pointer-events-none absolute inset-0 premium-gradient opacity-20" />
      <div className="max-w-content mx-auto container-px">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
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

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="card-surface rounded-[var(--radius-md)] p-4 flex items-center gap-3">
                <CheckCircle className="text-[var(--color-success)]" size={20} />
                <div>
                  <p className="text-white/70">Avg. DM-to-Call Rate</p>
                  <p className="text-white font-semibold">32%+</p>
                </div>
              </div>
              <div className="card-surface rounded-[var(--radius-md)] p-4 flex items-center gap-3">
                <CalendarCheck className="text-[var(--color-accent)]" size={20} />
                <div>
                  <p className="text-white/70">Appointment Growth</p>
                  <p className="text-white font-semibold">3.6x in 90 Days</p>
                </div>
              </div>
              <div className="card-surface rounded-[var(--radius-md)] p-4 flex items-center gap-3">
                <BarChart3 className="text-[var(--color-accent)]" size={20} />
                <div>
                  <p className="text-white/70">Coach Revenue Impact</p>
                  <p className="text-white font-semibold">$50k+ Added MRR</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-64 sm:h-80 lg:h-[420px] card-surface rounded-[var(--radius-lg)]">
              <div className="absolute inset-0 rounded-[var(--radius-lg)] premium-gradient opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white/70">Premium Coach Lifestyle Visual</p>
                  <p className="text-white/50 text-sm">(Replace with branded imagery)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


