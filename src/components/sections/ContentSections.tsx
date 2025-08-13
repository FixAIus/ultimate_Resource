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
        <div className="mt-8 card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="text-xl font-semibold">Ready to get your AI appointment setting sytem?</h3>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Button href="#book-audit" variant="primary">Full AI Appointment Setting System DFY</Button>
            <Button href="#tabs" variant="outline">Implement on IG now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Sections() {
  return (
    <div>
      <SectionFrame id="setting-process" title="Setting Process">
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">End-to-End Flow</h3>
          <p className="text-white/80">Inbound and outbound workflows from profile visit to booked call.</p>
        </div>
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Scripts & Branching</h3>
          <p className="text-white/80">Decision trees for replies, objections, and qualification.</p>
        </div>
      </SectionFrame>

      <SectionFrame id="backend-infrastructure" title="Backend Infrastructure">
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">CRMs, Calendars, and Webhooks</h3>
          <p className="text-white/80">Integrate your booking stack, lead routing, and notifications.</p>
        </div>
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Data Layer</h3>
          <p className="text-white/80">Event tracking for DMs, profile clicks, and call bookings.</p>
        </div>
      </SectionFrame>

      <SectionFrame id="latest-ai-capabilities" title="Latest AI capabilities">
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Generation & Summarization</h3>
          <p className="text-white/80">Use AI to draft replies, summarize threads, and propose next actions.</p>
        </div>
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Prioritization</h3>
          <p className="text-white/80">Score leads to focus human attention where it matters.</p>
        </div>
      </SectionFrame>

      <SectionFrame id="kpis" title="KPIs">
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Core Metrics</h3>
          <p className="text-white/80">Profile CTR, DM Reply Rate, Qualified Rate, Booked Calls.</p>
        </div>
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Revenue Metrics</h3>
          <p className="text-white/80">Show rate, close rate, CAC, and ROI tracking.</p>
        </div>
      </SectionFrame>

      <SectionFrame id="compliancy" title="Compliancy">
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Data & Consent</h3>
          <p className="text-white/80">Respect privacy policies and platform guidelines.</p>
        </div>
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Escalation Rules</h3>
          <p className="text-white/80">Hand-off to humans and proper disclosures.</p>
        </div>
      </SectionFrame>

      <SectionFrame id="implementation" title="Implementation">
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Quick Start</h3>
          <p className="text-white/80">5-minute setup to get your system running.</p>
        </div>
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">30-Day Plan</h3>
          <p className="text-white/80">Roadmap to scale booked calls sustainably.</p>
        </div>
      </SectionFrame>

      <SectionFrame id="investment" title="Investment">
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">DFY vs DIY</h3>
          <p className="text-white/80">Compare outcomes and time-to-value for each path.</p>
        </div>
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold mb-2">Pricing Snapshot</h3>
          <p className="text-white/80">Transparent investment ranges and what’s included.</p>
        </div>
      </SectionFrame>
    </div>
  );
}


