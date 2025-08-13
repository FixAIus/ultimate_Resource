import { Button } from "@/components/ui/Button";

export function BookAudit() {
  return (
    <section id="book-audit" className="py-16">
      <div className="max-w-content mx-auto container-px">
        <div className="card-surface rounded-[var(--radius-lg)] p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Book Your Instagram Audit Call</h2>
            <p className="text-white/70 mt-2 max-w-2xl">Get a tailored breakdown of your profile, content, and DM systems. Leave with a clear 30-day plan to add qualified appointments.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button href="https://calendly.com/your-link" variant="primary">Book Now</Button>
            <Button href="/resources/templates" variant="secondary">Get Templates</Button>
          </div>
        </div>
      </div>
    </section>
  );
}


