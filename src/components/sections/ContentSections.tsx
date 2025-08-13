import { PropsWithChildren } from "react";
import { Button } from "@/components/ui/Button";

function SectionFrame({ id, title, children }: PropsWithChildren<{ id: string; title: string }>) {
  return (
    <section id={id} className="scroll-mt-24 py-14">
      <div className="max-w-content mx-auto container-px">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl">{title}</h2>
          <div className="h-px w-24 premium-gradient mt-2" />
        </div>
        <div className="grid md:grid-cols-2 gap-6">{children}</div>
      </div>
    </section>
  );
}

export function Sections() {
  return (
    <div>
      <SectionFrame id="overview" title="The Complete Instagram-to-Appointment System">
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">5 Pillars Framework</h3>
          <ul className="text-white/80 list-disc pl-5 space-y-1">
            <li>Profile that converts</li>
            <li>Content that books calls</li>
            <li>Personalized DM systems</li>
            <li>Story-driven nurturing</li>
            <li>Data-led optimization</li>
          </ul>
        </div>
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Case Study Highlights</h3>
          <p className="text-white/80">Three coaches added 30-60 qualified calls/month in 60 days.</p>
          <Button href="#book-audit" className="mt-4">View Case Studies</Button>
        </div>
      </SectionFrame>

      <SectionFrame id="profile-optimization" title="Profile Optimization">
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">High-Converting Bio Templates</h3>
          <p className="text-white/80">Plug-and-play bios tailored for B2B coaching niches.</p>
          <Button href="/resources/templates" variant="tertiary" className="mt-4">Download Templates</Button>
        </div>
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Proof & Aesthetics</h3>
          <p className="text-white/80">Strategically place social proof and create a premium aesthetic.</p>
        </div>
      </SectionFrame>

      <SectionFrame id="content-strategy" title="Content Strategy">
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Content Pillars</h3>
          <p className="text-white/80">Authority, Demand Gen, Proof, Offer, Community.</p>
        </div>
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Carousel & Video Frameworks</h3>
          <p className="text-white/80">Premium layouts and scripts that convert attention into calls.</p>
        </div>
      </SectionFrame>

      <SectionFrame id="dm-automation" title="DM Automation">
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Personal at Scale</h3>
          <p className="text-white/80">Hybrid workflows that keep conversations human while scaling.</p>
        </div>
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Sequences & Qualifying</h3>
          <p className="text-white/80">Pre-built sequences and scripts for high-ticket qualification.</p>
        </div>
      </SectionFrame>

      <SectionFrame id="story-selling" title="Story Selling">
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Story Frameworks</h3>
          <p className="text-white/80">Daily, Proof, Objection, Offer, CTA.</p>
        </div>
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Highlights That Sell</h3>
          <p className="text-white/80">Turn highlights into an evergreen sales page.</p>
        </div>
      </SectionFrame>

      <SectionFrame id="live-strategies" title="Live Strategies">
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">High-Converting Live Formats</h3>
          <p className="text-white/80">Training, Q&A, Audit, Panel—optimized for booking calls.</p>
        </div>
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Promotion & Repurposing</h3>
          <p className="text-white/80">Plan, promote, and repurpose for maximum reach.</p>
        </div>
      </SectionFrame>

      <SectionFrame id="analytics" title="Analytics">
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Metrics that Matter</h3>
          <p className="text-white/80">Profile click-through, DM reply rate, call booking rate, ROI.</p>
        </div>
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Reporting Toolkit</h3>
          <p className="text-white/80">Monthly dashboards and templates for clarity and growth.</p>
        </div>
      </SectionFrame>

      <SectionFrame id="implementation" title="30-Day Implementation">
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Weekly Roadmap</h3>
          <p className="text-white/80">Step-by-step tasks, checklists, and milestones.</p>
          <Button href="/resources/checklists" className="mt-4">Get Checklists</Button>
        </div>
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Avoid Pitfalls</h3>
          <p className="text-white/80">Common mistakes and how to stay consistent.</p>
        </div>
      </SectionFrame>
    </div>
  );
}


