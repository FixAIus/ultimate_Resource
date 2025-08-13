export function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function formatNumber(num: number) {
  return new Intl.NumberFormat(undefined, { maximumFractionDigits: 1 }).format(
    num
  );
}

export function scrollToId(id: string) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";
}


