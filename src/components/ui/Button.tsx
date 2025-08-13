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
  const base = "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] px-6 py-3 text-sm font-semibold transition-colors focus-ring";
  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    // Orange gradient like screenshot (white text)
    primary: "text-white shadow-md bg-gradient-to-r from-[#FFB26B] to-[#F97316] hover:from-[#FFC082] hover:to-[#FB923C]",
    // Purple outline like screenshot's color system
    outline: "bg-transparent border border-[#8B5CF6] text-[#C4B5FD] hover:bg-[#8B5CF6]/10",
    // Solid purple button
    secondary: "bg-[#7C3AED] text-white hover:bg-[#8B5CF6]",
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


