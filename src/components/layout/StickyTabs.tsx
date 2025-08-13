"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SECTIONS } from "@/lib/constants";

export function StickyTabs() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
      <nav className="max-w-content mx-auto container-px overflow-x-auto">
        <ul className="flex gap-2 py-3">
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  "relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/80 hover:text-white transition",
                  active === id && "text-black"
                )}
              >
                <span className="relative z-10">{label}</span>
                {active === id && (
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


