import { Hero } from "@/components/sections/Hero";
import { StickyTabs } from "@/components/layout/StickyTabs";
import { Sections } from "@/components/sections/ContentSections";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BookAudit } from "@/components/sections/BookAudit";

export default function Home() {
  return (
    <div>
      <SiteHeader />
      <Hero />
      <StickyTabs />
      <Sections />
      <BookAudit />
      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-content mx-auto container-px py-8 text-white/60 text-sm">
          © {new Date().getFullYear()} Instagram Appointment Mastery. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
