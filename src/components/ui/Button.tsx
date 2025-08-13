"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
}>;

export function Button({ href, onClick, children, variant = "primary", className }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-[var(--radius-md)] px-5 py-3 text-sm font-semibold transition-colors focus-ring";
  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-[var(--color-accent)] text-black hover:bg-[#e2c766]",
    secondary: "bg-transparent border border-white/15 text-white hover:bg-white/[0.06]",
    tertiary: "bg-white/5 text-white hover:bg-white/10",
  };

  const element = (
    <motion.span
      whileTap={{ scale: 0.98 }}
      className={cn(base, variants[variant], "accent-ring", className)}
    >
      {children}
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


