const faqs = [
  {
    question: "Does this connect to my billing account?",
    answer:
      "No. This version is a manual audit tool. You enter your AI tools and monthly spend, and the app estimates savings opportunities.",
  },
  {
    question: "Who is this for?",
    answer:
      "Startup founders, engineering managers, and lean teams using multiple AI tools like ChatGPT, Claude, Cursor, Copilot, Gemini, and APIs.",
  },
  {
    question: "How accurate are the savings estimates?",
    answer:
      "The estimates are based on pricing rules and usage-fit heuristics. Enterprise contracts and custom pricing may vary.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="mx-auto max-w-5xl px-6 py-24">
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
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold">{faq.question}</h3>
            <p className="mt-4 leading-8 text-slate-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}