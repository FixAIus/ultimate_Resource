export const metadata = {
  title: "Implementation Checklists | Instagram Appointment Mastery",
  description: "Step-by-step checklists for the 30-day implementation plan.",
};

export default function ChecklistsPage() {
  return (
    <main className="max-w-content mx-auto container-px py-14">
      <h1 className="text-3xl font-bold">Implementation Checklists</h1>
      <p className="text-white/70 mt-2">Stay consistent with a clear weekly plan.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold">Week 1: Profile + Foundations</h3>
        </div>
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold">Week 2: Content Engine</h3>
        </div>
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold">Week 3: DM Systems</h3>
        </div>
        <div className="card-surface rounded-[var(--radius-md)] p-6">
          <h3 className="font-semibold">Week 4: Optimization + Scale</h3>
        </div>
      </div>
    </main>
  );
}


