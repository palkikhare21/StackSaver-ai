import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative mx-auto grid max-w-7xl items-center gap-14 overflow-hidden px-6 py-16 md:grid-cols-2 md:py-24">
    {/* // <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28"> */}
     <div className="pointer-events-none absolute right-10 top-10 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />
<div className="pointer-events-none absolute left-10 bottom-10 h-72 w-72 rounded-full bg-slate-300/30 blur-3xl" />
     
     
      <div>


        <p className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
          Free AI spend audit for startups
        </p>

        <h1 className="mt-7 text-5xl font-black leading-[1] tracking-tight md:text-7xl">
          Stop overspending on AI tools.
        </h1>
<p className="mt-7 max-w-2xl text-lg leading-9 text-slate-600">
  StackSaver AI helps founders and engineering teams audit AI subscriptions,
  API usage, and unused seats to uncover savings before the next billing cycle.
</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/audit"
            className="rounded-full bg-slate-950 px-8 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-slate-300 hover:bg-slate-800"
          >
            Start free audit
          </Link>

          <a
            href="#how-it-works"
            className="rounded-full border border-slate-300 bg-white px-8 py-4 text-center text-sm font-semibold text-slate-950 hover:bg-slate-100"
          >
            See how it works
          </a>
        </div>

        <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
          <div>
            <p className="text-3xl font-black">$500+</p>
            <p className="mt-1 text-sm text-slate-500">high-savings flag</p>
          </div>
          <div>
            <p className="text-3xl font-black">8</p>
            <p className="mt-1 text-sm text-slate-500">AI tools covered</p>
          </div>
          <div>
            <p className="text-3xl font-black">0</p>
            <p className="mt-1 text-sm text-slate-500">login required</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-slate-200 to-white blur-2xl" />

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200">
          <div className="rounded-3xl bg-slate-950 p-6 text-white">
            <p className="text-sm font-semibold text-slate-400">
              Estimated optimization
            </p>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <p className="text-6xl font-black">$742</p>
                <p className="mt-2 text-slate-400">monthly savings</p>
              </div>

              <div className="rounded-2xl bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                High opportunity
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            {[
              ["ChatGPT Team", "$180 → $80", "Review seats"],
              ["OpenAI API", "$1,200 → $900", "Use credits"],
              ["Cursor Business", "$240 → $120", "Downgrade plan"],
            ].map(([tool, spend, action]) => (
              <div
                key={tool}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <div>
                  <p className="font-bold">{tool}</p>
                  <p className="mt-1 text-sm text-slate-500">{action}</p>
                </div>

                <p className="font-bold text-slate-950">{spend}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}