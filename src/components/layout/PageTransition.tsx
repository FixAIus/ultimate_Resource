"use client";

import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren } from "react";

export function PageTransition({ children }: PropsWithChildren<object>) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}


