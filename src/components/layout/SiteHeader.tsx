import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function SiteHeader() {
  return (
    <header className="border-b border-white/10">
      <div className="max-w-content mx-auto container-px py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold">IG Appointment Mastery</Link>
        <div className="hidden sm:flex items-center gap-3">
          <Button href="#book-audit" variant="secondary">Book Audit</Button>
          <Button href="/resources/templates" variant="tertiary">Templates</Button>
        </div>
      </div>
    </header>
  );
}


