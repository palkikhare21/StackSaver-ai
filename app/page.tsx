import Link from "next/link";

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-20 text-slate-950">
      <section className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-medium text-slate-600">
          ← Back to home
        </Link>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Step 1 of 3</p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight">
            Tell us what AI tools you pay for
          </h1>

          <p className="mt-4 leading-7 text-slate-600">
            Tomorrow we’ll build the actual form here. For Day 1, this confirms
            routing and page structure are working.
          </p>
        </div>
      </section>
    </main>
  );
}
