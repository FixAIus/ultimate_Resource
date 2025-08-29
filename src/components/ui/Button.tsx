"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { ArrowRight } from "lucide-react";

type ButtonProps = PropsWithChildren<{
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "secondary" | "tertiary" | "orange";
  className?: string;
}>;

export function Button({ href, onClick, children, variant = "primary", className }: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] px-8 py-3.5 text-lg font-semibold transition-all focus-ring";
  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    // Purple button with custom color
    primary: "text-white shadow-md bg-[#441670] hover:scale-105 transition-transform",
    // Orange gradient for setting process section - made 10% darker for better contrast
    orange: "text-white shadow-md bg-gradient-to-r from-[#E69B5A] to-[#E05A0D] hover:scale-105 transition-transform",
    // Purple outline like screenshot's color system
    outline: "bg-[#211237] border border-[#8A2BE2] text-white hover:bg-[#211237] hover:scale-105 transition-transform purple-ring",
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
    const isExternal = href.startsWith('http');
    return (
      <Link 
        href={href} 
        className="inline-block"
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
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


