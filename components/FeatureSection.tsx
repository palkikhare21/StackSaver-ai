const features = [
  {
    title: "AI spend visibility",
    description:
      "See exactly where your AI tooling budget is going across subscriptions, team seats, and API usage.",
  },
  {
    title: "Optimization recommendations",
    description:
      "Get practical suggestions to downgrade, switch, or review billing where your team may be overspending.",
  },
  {
    title: "Savings estimation",
    description:
      "Estimate monthly and annual savings opportunities instantly before sharing the report with your team.",
  },
];

export default function FeatureSection() {
  return (
    <section id="features" className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold">{feature.title}</h2>
            <p className="mt-4 leading-8 text-slate-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}