"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { ArrowRight } from "lucide-react";

type ButtonProps = PropsWithChildren<{
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "secondary" | "tertiary";
  className?: string;
}>;

export function Button({ href, onClick, children, variant = "primary", className }: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] px-8 py-3.5 text-lg font-semibold transition-all focus-ring";
  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    // Orange gradient like screenshot (white text)
    primary: "text-white shadow-md bg-gradient-to-r from-[#FFB26B] to-[#F97316] hover:from-[#FFC082] hover:to-[#FB923C]",
    // Purple outline like screenshot's color system
    outline: "bg-[#0b0b23]/40 border border-[#5B21B6] text-[#E9D5FF] hover:bg-[#5B21B6]/15 purple-ring",
    // Solid purple button
    secondary: "bg-[#6D28D9] text-white hover:bg-[#7C3AED] purple-ring",
    tertiary: "bg-white/5 text-white hover:bg-white/10",
  };

  const element = (
    <motion.span
      whileTap={{ scale: 0.98 }}
      className={cn(base, variants[variant], "accent-ring", className)}
    >
      <span>{children}</span>
      <ArrowRight size={16} />
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {element}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cn(base, variants[variant], className)}>
      {children}
    </button>
  );
}


