export default function TestimonialSection() {
  return (
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
            — Mocked early startup beta user
          </p>
        </div>
      </div>
    </section>
  );
}