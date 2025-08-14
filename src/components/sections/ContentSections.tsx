import { PropsWithChildren } from "react";
import { Button } from "@/components/ui/Button";
import { MessageSquareMore, Target, Sparkles, PhoneCall } from "lucide-react";

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

type SectionsProps = { activeId?: string };

export function Sections({ activeId }: SectionsProps) {
  const show = (id: string) => (!activeId ? true : activeId === id);
  return (
    <div>
      {show("setting-process") && (
      <SectionFrame id="setting-process" title="24/7 Lead Engagement. Max results.">
        {/* 4-step vertical process */}
        <div className="card-surface rounded-[var(--radius-md)] p-6 md:p-8">
          <h3 className="text-xl font-semibold">4-Step Appointment Setting Process</h3>
          <div className="mt-6 relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-white/15" aria-hidden />
            <ol className="space-y-8">
              <li className="relative pl-12">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#0b0b23]/50 border border-white/15 text-[#C4B5FD]">
                  <MessageSquareMore size={18} />
                </div>
                <h4 className="font-semibold">Lead Engagement</h4>
                <p className="text-white/80 text-sm mt-1">Every comment, inbound DM, and story reply enters your pipeline and is engaged in minutes.</p>
              </li>
              <li className="relative pl-12">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#0b0b23]/50 border border-white/15 text-[#34d399]">
                  <Target size={18} />
                </div>
                <h4 className="font-semibold">Setting Focus</h4>
                <p className="text-white/80 text-sm mt-1">The focus of the conversation is put on the prospect, making them reveal their bottlenecks.</p>
              </li>
              <li className="relative pl-12">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#0b0b23]/50 border border-white/15 text-[#F59E0B]">
                  <Sparkles size={18} />
                </div>
                <h4 className="font-semibold">Position Alignment</h4>
                <p className="text-white/80 text-sm mt-1">Through perspective‑changing questions, prospects are self‑inspired to fix how they attack bottleneck problems.</p>
              </li>
              <li className="relative pl-12">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#0b0b23]/50 border border-white/15 text-[#FB923C]">
                  <PhoneCall size={18} />
                </div>
                <h4 className="font-semibold">Call‑Pitch</h4>
                <p className="text-white/80 text-sm mt-1">Prime‑time moments of prospect interest are captured with a QUALIFIED booked call.</p>
              </li>
            </ol>
          </div>
        </div>

        {/* Intelligent Conversations box */}
        <div className="card-surface rounded-[var(--radius-md)] p-6 md:p-8">
          <h3 className="text-xl font-semibold">Intelligent Conversations</h3>
          <p className="text-white/70 text-sm mt-1">“A true workhorse employee running your DMs 24/7”</p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-white/85 text-sm list-disc pl-5">
            <li>Personalized responses</li>
            <li>Advanced objection handling</li>
            <li>Ignores unserious leads</li>
            <li>No false information</li>
            <li>Best offer identification</li>
            <li>Dynamic follow‑up messages</li>
          </ul>
        </div>

        {/* Conversational Routing box */}
        <div className="card-surface rounded-[var(--radius-md)] p-6 md:p-8">
          <h3 className="text-xl font-semibold">Conversational Routing</h3>
          <p className="text-white/70 text-sm mt-1">“Only the correct leads get pushed to a specific outcome:”</p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-white/85 text-sm list-disc pl-5">
            <li>Service provider offers</li>
            <li>Coaching offers</li>
            <li>Partnership offers</li>
            <li>Youtube resource links</li>
            <li>Community Links (Skool, Whop, Circle, etc)</li>
          </ul>
        </div>
      </SectionFrame>
      )}

      {show("backend-infrastructure") && (
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
      )}

      {show("latest-ai-capabilities") && (
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
      )}

      {show("kpis") && (
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
      )}

      {show("compliancy") && (
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
      )}

      {show("implementation") && (
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
      )}

      {show("investment") && (
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
      )}
    </div>
  );
}


