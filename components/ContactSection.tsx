import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Have a high AI bill?
          </h2>

          <p className="mt-5 max-w-xl leading-8 text-slate-600">
            Run the audit first. If your savings opportunity is significant,
            the app will surface Credex as a way to capture more of that
            savings.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <p className="text-lg font-bold">Best next step</p>

          <p className="mt-4 leading-8 text-slate-600">
            Complete your free audit and save the report. Your lead details
            will be stored only after you receive value from the tool.
          </p>

          <Link
            href="/audit"
            className="mt-6 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Start audit
          </Link>
        </div>
      </div>
    </section>
  );
}