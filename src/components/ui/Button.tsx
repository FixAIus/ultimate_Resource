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
    primary: "bg-emerald-500 text-black hover:bg-emerald-400",
    outline: "bg-transparent border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10",
    secondary: "bg-transparent border border-white/15 text-white hover:bg-white/[0.06]",
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


