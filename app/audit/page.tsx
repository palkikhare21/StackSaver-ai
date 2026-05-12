import Link from "next/link";
import SpendForm from "@/components/SpendForm";

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-20 text-slate-950">
      <section className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-medium text-slate-600">
          ← Back to home
        </Link>

        <div className="mt-10 max-w-3xl">
          <p className="text-sm font-medium text-slate-500">
            Free AI Spend Audit
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Tell us what AI tools your team pays for
          </h1>

          <p className="mt-5 leading-8 text-slate-600">
            Add your team size, primary use case, and monthly AI tool spend.
            StackSaver AI will estimate unused seats, duplicate tools, billing
            mismatches, and possible monthly savings.
          </p>
        </div>

        <SpendForm />
      </section>
    </main>
  );
}