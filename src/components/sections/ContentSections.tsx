import { PropsWithChildren } from "react";
import { Button } from "@/components/ui/Button";
import { MessageSquareMore, Target, Sparkles, PhoneCall, Funnel, User, Heart, MessageCircle, Phone, Smartphone, Users, Bot, XCircle, CheckCircle } from "lucide-react";
import { KPIStackedCards } from "@/components/ui/kpi-stacked-cards";

function SectionFrame({ id, title, children, noGrid = false, hideCta = false }: PropsWithChildren<{ id: string; title: string; noGrid?: boolean; hideCta?: boolean }>) {
  return (
    <>
      <section id={id} className="scroll-mt-24 py-14 bg-transparent">
        <div className="max-w-content mx-auto container-px">
                 <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl">{title}</h2>
          </div>
          <div className={noGrid ? "block" : "grid md:grid-cols-2 gap-6"}>{children}</div>
        </div>
      </section>
      {!hideCta && (
        <section className="py-16 bg-gradient-to-b from-black via-[#0B0811] to-[#160B2E]">
          <div className="max-w-content mx-auto container-px text-center">
            <h3 className="font-semibold tracking-tight text-white" style={{ fontSize: "calc(1.875rem + 12px)" }}>Ready To Get Your AI Appointment Setting System?</h3>
            <p className="text-white/80 mt-6" style={{ fontSize: "calc(1rem + 4px)" }}>Stop losing deals to inconsistent setter. Implement a system that scales.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="https://api.leadconnectorhq.com/widget/bookings/fixai-strategy-consultation" variant="orange">Get An AI Appointment Setting System</Button>
              <Button href="https://app.workwithfixai.com/" variant="outline">Build Your Own AI Setter</Button>
            </div>
            <div className="mt-8 text-xs text-white/50">© 2025 Fix AI LLC</div>
          </div>
        </section>
      )}
    </>
  );
}

type SectionsProps = { activeId?: string };

export function Sections({ activeId }: SectionsProps) {
  const show = (id: string) => (!activeId ? true : activeId === id);
  return (
    <div className="sections-gradient">
      {show("overview") && (
      <SectionFrame id="overview" title="" noGrid>
        {/* Headline & Subheadline */}
        <div className="mb-6 w-full flex justify-center items-center md:col-span-2 flex-col text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-tight" style={{ color: "#863AAF", opacity: 0.8, textShadow: "0 0 5px rgba(139, 0, 0, 0.9)", fontSize: "calc(1.875rem + 22px)" }}>
            Your Complete Blueprint for AI<br />Appointment Setting Systems on Instagram
          </h2>
          <p className="text-white mt-2" style={{ fontSize: "calc(1rem + 5px)" }}>Everything a maximum revenue generating AI appointment setting system needs</p>
        </div>

        {/* Stats blocks full-width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {[
            { key: "response", label: "Response Time", value: "3" },
            { key: "conversion", label: "Call Conversion Rate Increase", value: "4x" },
            { key: "runtime", label: "Run Time", value: "24/7" },
            { key: "cost", label: "Sale Cycle Cost Reduction", value: "73%" },
          ].map((s, i) => (
            <div
              key={i}
              className="panel-surface hover-glow rounded-[var(--radius-md)] p-8 text-center grid grid-rows-[1fr_auto] transition-all duration-300"
              style={{ height: 220 }}
            >
              <div className="flex items-center justify-center">
                {s.key === "response" ? (
                  <div className="font-extrabold tracking-tight leading-none inline-flex items-baseline gap-2" style={{ color: "#863AAF", textShadow: "0 0 2.5px rgba(212,175,55,0.9)" }}>
                    <span className="leading-none" style={{ fontSize: "72px" }}>3</span>
                    <span className="leading-none" style={{ fontSize: "36px", textTransform: "lowercase" }}>min</span>
                  </div>
                ) : (
                  <div className="font-extrabold tracking-tight leading-none" style={{ color: "#863AAF", textShadow: "0 0 2.5px rgba(212,175,55,0.9)", fontSize: "80px" }}>
                    {s.value}
                  </div>
                )}
              </div>
              <div
                className="self-stretch w-full"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  minHeight: 56,
                  paddingTop: 12,
                }}
              >
                <p
                  className="text-white/80 text-base text-center leading-tight"
                  style={{ transform: s.key === "conversion" ? "translateY(10px)" : undefined }}
                >
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pillars - below blocks, side-by-side only */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-left" style={{ color: "#01bb7d", fontSize: "calc(1.5rem + 10px)" }}>The 2 Pillars</h3>
          <div className="grid md:grid-cols-2 gap-6 mt-4 w-full">
            <div className="panel-surface list-section-hover rounded-[var(--radius-md)] p-6">
              <h4 className="text-xl font-semibold" style={{ color: "white", fontSize: "calc(1.25rem + 8px)" }}>Setting Process</h4>
              <ul className="arrow-list mt-3 space-y-1 text-white/85" style={{ fontSize: "calc(1rem + 3px)" }}>
                <li>Follows a proven appointment setting process</li>
                <li>Scales your setting team without raising payroll</li>
                <li>Increases the number of sales calls</li>
                <li>Brings you predictable results</li>
              </ul>
            </div>
            <div className="panel-surface list-section-hover rounded-[var(--radius-md)] p-6">
              <h4 className="text-xl font-semibold" style={{ fontSize: "calc(1.25rem + 4px)" }}>KPI's</h4>
              <ul className="arrow-list mt-3 space-y-1 text-white/85" style={{ fontSize: "calc(1rem + 3px)" }}>
                <li>Advanced conversation insights </li>
                <li>Understand your ideal client profile like never before</li>
                <li>Guarantee more sales conversions</li>
                <li>Know what the biggest ROI opportunities are</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why this guide exists – full width */}
        <div className="panel-surface hover-top-glow rounded-[var(--radius-md)] p-6 mt-8 w-full">
          <h4 className="text-xl font-bold mb-2" style={{ color: "#01bb7d", fontSize: "calc(1.25rem + 10px)" }}>Why This Guide Exists</h4>
          <p className="text-white" style={{ fontSize: "calc(1rem + 2px)" }}>Most B2B companies are bleeding money in their sales appointment setting process, trying to scale with broken systems.  They miss leads, drop follow-ups, and waste hours onboarding virtual assistants when AI can do better.</p>
          <p className="text-white mt-3" style={{ fontSize: "calc(1rem + 2px)" }}>This guide contains the exact blueprints we've used to build AI appointment setting systems for online coaches, consultants, and agency owners. This is a battle-tested system that generates real revenue.</p>
        </div>

        {/* Call-to-Action Section (removed in favor of shared CTA in SectionFrame) */}
      </SectionFrame>
      )}
      {show("setting-process") && (
      <SectionFrame id="setting-process" title="">
        <div className="w-full flex justify-center items-center md:col-span-2">
          <h2 className="text-5xl md:text-6xl font-semibold text-center whitespace-nowrap tracking-tight" style={{ color: "#863AAF", opacity: 0.8, textShadow: "0 0 5px rgba(139, 0, 0, 0.9)" }}>
            24/7 Lead Engagement. Max results.
          </h2>
        </div>
        {/* 4-step vertical process – takes full width in its own block */}
        <div className="w-full md:col-span-2 mt-7">
          <h3 className="text-3xl font-semibold mb-6" style={{ color: "#01bb7d" }}>4-Step Appointment Setting Process</h3>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-emerald-500" aria-hidden />
            <div className="space-y-8">
              {[
                {
                  title: "Lead Engagement",
                  desc:
                    "Every comment, inbound DM, and story reply enters your pipeline and is engaged in minutes.",
                },
                {
                  title: "Setting Focus",
                  desc:
                    "The focus of the conversation is put on the prospect, making them reveal their bottlenecks.",
                },
                {
                  title: "Position Alignment",
                  desc:
                    "Through perspective‑changing questions, prospects are self‑inspired to fix how they attack bottleneck problems.",
                },
                {
                  title: "Call‑Pitch",
                  desc:
                    "Prime‑time moments of prospect interest are captured with a QUALIFIED booked call.",
                },
              ].map((step, idx) => (
                <div key={idx} className="group relative pl-16 transition-transform">
                  <div className="absolute left-0 top-0 h-10 w-10 rounded-full border flex items-center justify-center text-white font-bold transition-all group-hover:drop-shadow-[0_0_20px_rgba(110,49,148,0.6)] group-hover:scale-110" style={{ backgroundColor: "#6e3194", borderColor: "#6e3194" }}>
                    {idx + 1}
                  </div>
                  <h4 className="font-semibold text-white text-2xl transition-all group-hover:text-white group-hover:drop-shadow-[0_0_24px_rgba(110,49,148,0.6)] group-hover:scale-[1.02] transform-origin-center">
                    {step.title}
                  </h4>
                  <p className="text-white/80 text-lg mt-1 max-w-4xl transition-all group-hover:drop-shadow-[0_0_18px_rgba(110,49,148,0.45)] group-hover:scale-[1.02] transform-origin-center">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Setter vs Human Setter (single combined card) */}
        <div className="w-full md:col-span-2 mt-10">
        <h3 className="text-3xl font-semibold mb-4" style={{ color: "#01bb7d" }}>Everything A Team Of Human Setters Can Do, At Scale</h3>
        </div>
        <div className="panel-surface rounded-[var(--radius-md)] p-6 md:p-8 md:col-span-2">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Human Setter - filled with text from reference */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full p-3 bg-gradient-to-br from-rose-500 to-red-600">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-semibold" style={{ color: "#ff4d4f" }}>Human Setter Team</h3>
              </div>
              <ul className="mt-2 grid grid-cols-1 gap-3 text-white/85 text-lg">
                {[
                  "Limited availability",
                  "Inconsistent response times",
                  "Inconsistent follow-ups",
                  "One conversation at a time",
                  "Constant rehiring, onboarding, and training",
                  "Hard to scale",
                  "Human error prone",
                  "Each setter speaks differently",
                ].map((text, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-rose-500" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Setter - updated with actual content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full p-3 bg-gradient-to-br from-emerald-500 to-teal-600">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-semibold" style={{ color: "#01bb7d" }}>AI Setter</h3>
              </div>
              <ul className="mt-2 grid grid-cols-1 gap-3 text-white/85 text-lg">
                {[
                  "Personalized responses + follow-ups",
                  "Consistent 2 minute responses",
                  "Thousands of simultaneous conversations",
                  "Best offer identification (those with multiple services)",
                  "Upsell & downsell capabilities",
                  "Ignores unserious leads",
                  "No false information given out",
                  "Personalities that appeal to each prospect demographic",
                ].map((text, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Show Up / Retention System - 2x2 blocks with gradient icons */}
        <div className="w-full md:col-span-2 mt-10">
          <h3 className="text-3xl font-semibold mb-4" style={{ color: "#01bb7d" }}>Show Up / Retention System</h3>
          <p className="text-white text-lg mb-6 font-medium text-left">Lock in commitment and maximize show-up rates</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 content-start">
            {[
              {
                title: "Value-driven reminders",
                subtitle: "Give case studies & resources to increase buy-in before the call.",
                icon: <Heart className="w-6 h-6 text-white" />, 
                gradient: "bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600",
              },
              {
                title: "24/7 Availability",
                subtitle: "AI setters answer any questions prospects may have before the call.",
                icon: <MessageCircle className="w-6 h-6 text-white" />, 
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
              },
              {
                title: "Intent-Based Pitches",
                subtitle: "Pitch calls in a way that ensures emotional commitment to the call.",
                icon: <Phone className="w-6 h-6 text-white" />, 
                gradient: "bg-gradient-to-br from-fuchsia-500 to-purple-700",
              },
              {
                title: "Multi-channel nudges",
                subtitle: "Automated DM, Email, SMS reminders ensure no one forgets.",
                icon: <Smartphone className="w-6 h-6 text-white" />, 
                gradient: "bg-gradient-to-br from-green-500 to-teal-600",
              },
            ].map((b, idx) => (
              <div
                key={idx}
                className="panel-surface hover-glow rounded-[var(--radius-md)] p-6 md:p-8 text-center grid grid-rows-[1fr_auto] transition-all duration-300 mx-auto self-start"
                style={{ height: 220, width: "100%" }}
              >
                <div className="flex items-center justify-center">
                  <div className={`rounded-full p-3 ${b.gradient} shadow-lg`}>
                    {b.icon}
                  </div>
                </div>
                <div className="self-stretch w-full">
                  <h4 className="text-xl font-semibold mb-2" style={{ color: "white" }}>{b.title}</h4>
                  <p className="text-white/80 text-sm">{b.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Owner Benefits & Trust & Compliancy - card formatting */}
        <div className="grid md:grid-cols-2 gap-6 md:col-span-2 mt-10">
          <div className="panel-surface list-section-hover rounded-[var(--radius-md)] p-6 md:p-8">
            <h3 className="text-3xl font-semibold" style={{ color: "#01bb7d" }}>Business Owner Benefits</h3>
            <p className="text-white text-lg mb-4 font-medium">Consistent pipeline. Predictable Results. Zero headache.</p>
            <ul className="arrow-list mt-4 grid grid-cols-1 gap-2 text-white/85 text-lg">
              <li>Cut appointment setting payroll by over 70%</li>
              <li>Fully systemized appointment setting process</li>
              <li>More sales calls</li>
              <li>No more hiring/onboarding training for setters</li>
              <li>No missed leads</li>
              <li>Better understanding of your ideal client profile</li>
              <li>Increased show-up rates</li>
            </ul>
          </div>
          <div className="panel-surface list-section-hover rounded-[var(--radius-md)] p-6 md:p-8">
            <h3 className="text-3xl font-semibold" style={{ color: "#01bb7d" }}>Trust & Compliancy</h3>
            <p className="text-white text-lg mb-4 font-medium">Meta has strict rules, we adhere to them strategically.</p>
            <ul className="arrow-list mt-4 grid grid-cols-1 gap-2 text-white/85 text-lg">
              <li>Adhere to Meta's 24 hour automated message rule</li>
              <li>No spam detected with randomly alternating outreach messages</li>
              <li>Brand tone and voice protected in every interaction</li>
            </ul>
          </div>
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



      {show("kpis") && (
      <SectionFrame id="kpis" title="" noGrid>
        {/* Main Headline & Subheadline */}
        <div className="mb-14 w-full flex justify-center items-center md:col-span-2 flex-col text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-center whitespace-nowrap tracking-tight" style={{ color: "#863AAF", opacity: 0.8, textShadow: "0 0 5px rgba(139, 0, 0, 0.9)", fontSize: "calc(2.25rem + 40px)" }}>
            Smart KPI Infrastructure
          </h2>
          <p className="text-white mt-2" style={{ fontSize: "calc(1rem + 9px)" }}>Maximum number of high-quality conversations with high-quality leads</p>
        </div>

        {/* Section 1: KPIs That Convert, Retain, and Master Your Market */}
        <div className="w-full md:col-span-2">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-semibold text-left mb-2" style={{ color: "#01bb7d" }}>Track KPIs That Convert, Retain, and Master Your Market</h3>
          </div>
          
          {/* Three cards in card style format */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Improved Sales & Conversions */}
            <div className="panel-surface list-section-hover rounded-[var(--radius-md)] p-6 md:p-8">
              <h4 className="text-2xl font-semibold mb-4 text-center flex items-center justify-center" style={{ minHeight: "3rem", color: "white" }}>Improved Sales & Conversions</h4>
              <ul className="arrow-list space-y-2 text-white/85">
                <li>Booked call amount</li>
                <li>Call Pitch Analysis</li>
                <li>Common sales converting pain points</li>
                <li>Max results setting process analysis</li>
              </ul>
            </div>

            {/* Card 2: Improved Lead Engagement and Retention */}
            <div className="panel-surface list-section-hover rounded-[var(--radius-md)] p-6 md:p-8">
              <h4 className="text-2xl font-semibold mb-4 text-center flex items-center justify-center" style={{ minHeight: "3rem", color: "white" }}>Improved Engagement & Retention</h4>
              <ul className="arrow-list space-y-2 text-white/85">
                <li>Analysis for best outreach message</li>
                <li>Drop-off point analysis</li>
                <li>Finished conversation rates</li>
                <li>Links sent + Warm Lead count</li>
              </ul>
            </div>

            {/* Card 3: Deeper ICP Understanding */}
            <div className="panel-surface list-section-hover rounded-[var(--radius-md)] p-6 md:p-8">
              <h4 className="text-2xl font-semibold mb-4 text-center flex items-center justify-center" style={{ minHeight: "3rem", color: "white" }}>Deeper ICP Understanding</h4>
              <ul className="arrow-list space-y-2 text-white/85">
                <li>Demographic analysis</li>
                <li>Common talking point/ interest analysis</li>
                <li>Content Conversion Insight</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Why These Are Important to Analyze - Stacked Cards */}
        <div className="w-full md:col-span-2 mt-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-left mb-6" style={{ color: "#01bb7d" }}>Big-League Insights</h3>
          
          {/* KPI Stacked Cards Component */}
          <KPIStackedCards
            cards={[
              {
                title: "Message & Pitch Effectiveness",
                icon: <MessageSquareMore className="w-full h-full" />,
                iconBgColor: "bg-purple-600",
                iconColor: "text-white",
                bulletPoints: {
                  whatToAnalyze: [
                    "Outreach messages and scripted follow-ups",
                    "Phrases/frameworks used for pitching the call",
                    "Response rates to different tones/styles & outreach messages",
                  ],
                  whyImportant: [
                    "First impressions decide if the convo dies or progresses",
                    "Ineffective pitches waste leads even if qualified",
                    "Shows which style resonates best with your ideal client profile",
                  ],
                  whatItReveals: [
                    "The most effective way to start conversations",
                    "The language that consistently drive booked calls",
                    "The messaging style that reasonates most with your ideal client profile",
                  ],
                }
              },
              {
                title: "Funnel Performance Signals",
                icon: <Funnel className="w-full h-full" />,
                iconBgColor: "bg-blue-600",
                iconColor: "text-white",
                bulletPoints: {
                  whatToAnalyze: [
                    "Drop off points (where they stop replying)",
                    "Link click rates and follow-up messages response rates",
                    "Completion rates of the conversation",
                  ],
                  whyImportant: [
                    "Shows where leads lose interest",
                    "Pinpoints weak spots of the conversation funnel",
                    "Prevents wasted leads by addressing these weak points",
                  ],
                  whatItReveals: [
                    "Where to tweak frameworks of the conversation",
                    "How effective each stage of the conversation is",
                    "The highest ROI fixes of the conversation",
                  ],
                }
              },
              {
                title: "Ideal Client Profile Clarity",
                icon: <Sparkles className="w-full h-full" />,
                iconColor: "text-white",
                iconBgColor: "bg-green-600",
                bulletPoints: {
                  whatToAnalyze: [
                    "Demographics of leads who book vs those who don’t",
                    "Response times by categories of leads (ex: fast vs slow responders)",
                    "Lead quality across niches/type of offer",
                  ],
                  whyImportant: [
                    "Sharpens your ICP",
                    "Ensures time is spent on high-converting segments",
                  ],
                  whatItReveals: [
                    "Who your true ICP is (not just who u think it is)",
                    "Which demographics convert at the highest rate",
                    "Where to focus content, outreach, and ad spend",
                    "Most profitable niche you can tailor to",
                  ],
                }
              },
              {
                title: "Objection & Pain Points",
                icon: <PhoneCall className="w-full h-full" />,
                iconBgColor: "bg-red-600",
                iconColor: "text-white",
                bulletPoints: {
                  whatToAnalyze: [
                    "Recurring objections",
                    "Prospect’s self-described bottlenecks",
                    "Dream outcomes prospects mention most often",
                  ],
                  whyImportant: [
                    "Objections are buying signals in disguise",
                    "Deeper understanding of your ICP",
                    "Helps you pre-handle concerns in advance",
                  ],
                  whatItReveals: [
                    "The top objections that block conversions",
                    "Pain points + dream outcomes you should address in marketing/sales",
                    "What messaging to use that improves conversions",
                  ],
                }
              },
              {
                title: "Talking Points & Interests",
                icon: <User className="w-full h-full" />,
                iconBgColor: "bg-orange-600",
                iconColor: "text-white",
                bulletPoints: {
                  whatToAnalyze: [
                    "Topics that spark the best converting conversations",
                    "Interests prospects bring up unprompted",
                    "Language style they naturally use",
                  ],
                  whyImportant: [
                    "Shows you what content to double down on",
                    "Builds rapport by speaking their language",
                  ],
                  whatItReveals: [
                    "Content themes that consistently resonate",
                    "Automatic levers to increase lead engagement",
                    "How to humanize convos for trust and connections",
                  ],
                }
              }
            ]}
          />
        </div>

        {/* Section 3: Your Competitive Edge */}
        <div className="w-full md:col-span-2 mt-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-left mb-6" style={{ color: "#01bb7d" }}>Your Competitive Edge</h3>
          
          {/* 4-step vertical process – same style as setting process */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-emerald-500" aria-hidden />
            <div className="space-y-8">
              {[
                {
                  title: "Better Content",
                  desc: "You'll produce content that best reasonates with your highest converting demographic. No more guessing.",
                },
                {
                  title: "Sharpened Offers & Messaging",
                  desc: "Your offers will be better built to attract customers and better solve their problems. Fulfillment rates and customer satisfaction through the roof.",
                },
                {
                  title: "More Sales",
                  desc: "With the full system in place, your call bookings, show-up rates, and close rates, will be predictable and consistent. All because you understand your ICP on unprecedented levels.",
                },
                {
                  title: "Efficiency & Scale",
                  desc: "By operating like a full blown team without hiring one, you'll know you're focusing only on what converts.",
                },
              ].map((step, idx) => (
                <div key={idx} className="group relative pl-16 transition-transform">
                  <div className="absolute left-0 top-0 h-10 w-10 rounded-full border flex items-center justify-center text-white font-bold transition-all group-hover:drop-shadow-[0_0_20px_rgba(110,49,148,0.6)] group-hover:scale-110" style={{ backgroundColor: "#6e3194", borderColor: "#6e3194" }}>
                    {idx + 1}
                  </div>
                  <h4 className="font-semibold text-white text-2xl transition-all group-hover:text-white group-hover:drop-shadow-[0_0_24px_rgba(110,49,148,0.6)] group-hover:scale-[1.02] transform-origin-center">
                    {step.title}
                  </h4>
                  <p className="text-white/80 text-lg mt-1 max-w-4xl transition-all group-hover:drop-shadow-[0_0_18px_rgba(110,49,148,0.45)] group-hover:scale-[1.02] transform-origin-center">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call-to-Action Section (removed in favor of shared CTA in SectionFrame) */}
      </SectionFrame>
      )}

      {show("implementation") && (
        <SectionFrame id="implementation" title="" noGrid>
          {/* Headline & Subheadline */}
          <div className="mb-12 w-full flex justify-center items-center md:col-span-2 flex-col text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-center whitespace-nowrap tracking-tight" style={{ color: "#863AAF", opacity: 0.8, textShadow: "0 0 5px rgba(139, 0, 0, 0.9)", fontSize: "calc(2.25rem + 30px)" }}>
            Your Implementation Roadmap
          </h2>
          <p className="text-white mt-2" style={{ fontSize: "calc(1rem + 5px)" }}>From zero to a fully automated appointment setting infrastructure. Here's how we do it.</p>
        </div>

        {/* Sub-Section 1: Milestone Steps */}
        <div className="w-full md:col-span-2">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-emerald-500" aria-hidden />
            <div className="space-y-8">
              {[
                {
                  headline: "Week 0: Onboarding Audit",
                  subheadline: "Audit their offers, map out customer journey, define ideal customer profile, lay out common lead pain point, establish KPIs, & success metrics."
                },
                {
                  headline: "Week 1-2: AI Agent Build",
                  subheadline: "Map out architecture AI agent build, flow of conversations, implement objection handling, integrate to KPI dashboard, set up notification & agentic follow-up system."
                },
                {
                  headline: "Week 3: Testing & Deployment",
                  subheadline: "Thorough conversational & situational testing, follow-up quality testing, KPI dashboard connection testing, prompt injection prevention testing, & Production-ready deployment."
                },
                {
                  headline: "Weeks 4-8: Optimization & Training",
                  subheadline: "Continuous analysis of performance, response refinement, setting process refinement, & KPI improvement analysis."
                }
              ].map((step, idx) => (
                <div key={idx} className="group relative pl-16 transition-transform">
                  <div className="absolute left-0 top-0 h-10 w-10 rounded-full border flex items-center justify-center text-white font-bold transition-all group-hover:drop-shadow-[0_0_20px_rgba(110,49,148,0.6)] group-hover:scale-110" style={{ backgroundColor: "#6e3194", borderColor: "#6e3194" }}>
                    {idx + 1}
                  </div>
                  <h4 className="font-semibold text-white text-2xl transition-all group-hover:text-white group-hover:drop-shadow-[0_0_24px_rgba(110,49,148,0.6)] group-hover:scale-[1.02] transform-origin-center">
                    {step.headline}
                  </h4>
                  <p className="text-white/80 text-lg mt-1 max-w-4xl transition-all group-hover:drop-shadow-[0_0_18px_rgba(110,49,148,0.45)] group-hover:scale-[1.02] transform-origin-center">
                    {step.subheadline}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sub-Section 2: Timeline Summary Blocks */}
        <div className="w-full md:col-span-2 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { timeline: "Day 1", description: " Platform Access" },
              { timeline: "Week 2", description: "KPI Dashboard Fully-Integrated" },
              { timeline: "Week 3", description: "AI Agent Deployed" },
              { timeline: "Week 7-8", description: "System Fully Operational" }
            ].map((block, idx) => (
                                                           <div key={idx} className="panel-surface hover-glow rounded-[var(--radius-md)] p-8 text-center border" style={{ borderColor: "rgba(110,49,148,0.4)" }}>
                 <div className="font-extrabold tracking-tight leading-none text-center" style={{ color: "#863aaf", textShadow: "0 0 2.5px rgba(134,58,175,0.9)", fontSize: "43px" }}>
                   {block.timeline}
                 </div>
                 <div
                   className="self-stretch w-full"
                   style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     minHeight: 85,
                     paddingTop: 32,
                   }}
                 >
                                        <p className="text-white text-base text-center leading-tight">
                       {block.description}
                     </p>
                 </div>
               </div>
            ))}
          </div>
        </div>

        {/* Sub-Section 3: Expected Results */}
        <div className="w-full md:col-span-2 mt-12">
          <div className="flex items-center mb-6">
            <span className="text-2xl mr-3">🏆</span>
            <h3 className="text-4xl font-semibold" style={{ color: "#01bb7d" }}>Expected Results After Implementation</h3>
            <span className="text-2xl ml-3">🏆</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Response times", description: "Drop from hours/days to minutes", icon: "💬" },
              { title: "Pipeline velocity", description: "Calls book 45% faster on average", icon: "⚡" },
              { title: "Appointment setting costs", description: "Drop over 50% on average", icon: "💰" },
              { title: "Revenue per lead", description: "2-3x increase", icon: "📈" }
            ].map((result, idx) => (
              <div key={idx} className="panel-surface list-section-hover rounded-[var(--radius-md)] p-6 text-center">
                <h4 className="font-semibold text-2xl mb-2 text-white">
                  {result.icon} {result.title} {result.icon}
                </h4>
                <p className="text-white/90 text-sm">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionFrame>
      )}
      
    </div>
  );
}


