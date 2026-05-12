const steps = [
  {
    title: "Add your AI stack",
    description: "Enter tools, plans, seats, monthly spend, and primary use case.",
  },
  {
    title: "Run the audit",
    description: "The audit engine checks spend against pricing and usage-fit rules.",
  },
  {
    title: "Capture insights",
    description: "Save the report, review savings, and identify where Credex can help.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          How it works
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Simple workflow. Actionable savings.
        </h2>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-lg font-bold text-white">
              {index + 1}
            </div>

            <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>

            <p className="mt-4 leading-8 text-slate-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}