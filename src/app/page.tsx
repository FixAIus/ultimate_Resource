import { Hero } from "@/components/sections/Hero";
import { TabsView } from "@/components/layout/TabsView";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function Home() {
  return (
    <div>
      <SiteHeader />
      <Hero />
      <TabsView />
      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-content mx-auto container-px py-8 text-white/60 text-sm">
          © {new Date().getFullYear()} Instagram Appointment Mastery. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
