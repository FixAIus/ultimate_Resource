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
              The Ultimate AI Appointment <span className="text-multicolor">Setting Guide</span> For B2B on Instagram
            </motion.h1>
            {/* Subheadline removed per request */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button href="#book-audit" variant="primary">Full AI Appointment Setting System DFY</Button>
              <Button href="#tabs" variant="secondary">Build Your Own In 5 Minutes</Button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}


