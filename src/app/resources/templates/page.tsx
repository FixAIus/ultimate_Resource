export const metadata = {
  title: "Premium Templates | Instagram Appointment Mastery",
  description: "Download high-converting bio, carousel, and DM templates for B2B coaches.",
};

export default function TemplatesPage() {
  return (
    <main className="max-w-content mx-auto container-px py-14">
      <h1 className="text-3xl font-bold">Premium Templates</h1>
      <p className="text-white/70 mt-2">High-impact resources to accelerate implementation.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold">Bio Templates</h3>
          <p className="text-white/70 mt-1">Position for authority and clarity.</p>
        </div>
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold">Carousel Templates</h3>
          <p className="text-white/70 mt-1">Turn scrollers into booked calls.</p>
        </div>
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold">DM Sequences</h3>
          <p className="text-white/70 mt-1">Personal at scale for high-ticket.</p>
        </div>
      </div>
    </main>
  );
}


