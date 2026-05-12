import Link from "next/link";

const features = [
  {
    title: "AI spend visibility",
    description:
      "See exactly where your AI tooling budget is going across subscriptions and APIs.",
  },
  {
    title: "Optimization recommendations",
    description:
      "Get actionable suggestions to reduce unnecessary spend while keeping team productivity high.",
  },
  {
    title: "Savings estimation",
    description:
      "Estimate monthly and annual savings opportunities instantly.",
  },
];

const steps = [
  {
    title: "Add your AI stack",
    description:
      "Enter your tools, plans, seats, and monthly spend.",
  },
  {
    title: "Run the audit",
    description:
      "Our audit engine analyzes pricing and usage patterns.",
  },
  {
    title: "Capture optimization insights",
    description:
      "Review savings opportunities and infrastructure recommendations.",
  },
];

const faqs = [
  {
    question: "Does this connect to my billing account?",
    answer:
      "No. The current version is a manual AI spend audit prototype.",
  },
  {
    question: "Who is this for?",
    answer:
      "Startups, engineering teams, AI-heavy product companies, and founders managing multiple AI subscriptions.",
  },
  {
    question: "How accurate are the savings estimates?",
    answer:
      "Savings are based on pricing heuristics and optimization rules. Enterprise pricing may vary.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#F8FAFC] text-slate-950">
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            StackSaver AI
          </p>

          <h1 className="mt-6 text-5xl font-black leading-[1] tracking-tight md:text-7xl">
            Stop overspending on AI tools and infrastructure.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600">
            StackSaver AI helps startups analyze AI subscriptions, APIs, and
            tooling costs to uncover savings opportunities and optimize spend.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/audit"
              className="rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Start free audit
            </Link>

            <button className="rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-950 hover:bg-slate-100">
              View demo
            </button>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 p-8"
            >
              <h2 className="text-2xl font-bold">
                {feature.title}
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
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
              className="rounded-3xl border border-slate-200 bg-white p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-lg font-bold text-white">
                {index + 1}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="rounded-[2rem] bg-slate-950 p-10 text-white md:p-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Customer insight
            </p>

            <blockquote className="mt-8 text-3xl font-bold leading-relaxed md:text-5xl">
              “We discovered nearly 35% unnecessary AI spend across duplicated
              tools and unused seats.”
            </blockquote>

            <p className="mt-8 text-lg text-slate-300">
              — Early startup beta user
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Common questions
          </h2>
        </div>

        <div className="mt-14 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-slate-200 bg-white p-8"
            >
              <h3 className="text-2xl font-bold">
                {faq.question}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight">
              Ready to optimize your AI stack?
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Run your free AI spend audit and identify savings opportunities in
              minutes.
            </p>
          </div>

          <Link
            href="/audit"
            className="rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Start audit
          </Link>
        </div>
      </section>
    </main>
  );
}
