"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SECTIONS } from "@/lib/constants";

type Props = { activeId: string; onChange: (id: string) => void };

export function StickyTabs({ activeId, onChange }: Props) {
  useEffect(() => {
    // keep focus/scroll behavior smooth when switching tabs programmatically
    const el = document.getElementById("tabs");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeId]);

  return (
    <div id="tabs" className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
      <nav className="max-w-content mx-auto container-px overflow-x-auto">
        <ul className="flex gap-2 py-3">
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href="#tabs"
                onClick={(e) => {
                  e.preventDefault();
                  onChange(id);
                }}
                className={cn(
                  "relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/80 hover:text-white transition",
                  activeId === id && "text-black"
                )}
              >
                <span className="relative z-10">{label}</span>
                {activeId === id && (
                  <motion.span
                    layoutId="tab-highlight"
                    className="absolute inset-0 rounded-full premium-gradient"
                    style={{ boxShadow: "0 2px 12px rgba(212,175,55,0.35)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 40 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}


