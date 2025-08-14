import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SECTIONS } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="border-b border-white/10">
      <div className="max-w-content mx-auto container-px py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-white/10" aria-hidden />
          <Link href="/" className="font-semibold">Fix AI</Link>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          {SECTIONS.map(({ id, label }) => (
            <a key={id} href="#tabs" className="text-white/70 hover:text-white text-sm rounded-full px-3 py-1.5">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden sm:flex items-center gap-3">
          <Button href="/resources/templates" variant="tertiary">Templates</Button>
        </div>
      </div>
    </header>
  );
}


