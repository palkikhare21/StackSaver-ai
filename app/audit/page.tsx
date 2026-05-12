import Link from "next/link";
import SpendForm from "@/components/SpendForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-950">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-950">
          ← Back to home
        </Link>

        <div className="mt-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Free AI Spend Audit
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Tell us what AI tools your team pays for
          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-slate-600">
            Add your team size, primary use case, and monthly AI tool spend.
            StackSaver AI will estimate unused seats, duplicate tools, billing
            mismatches, and possible monthly savings.
          </p>
        </div>

        <SpendForm />
      </section>

      <Footer />
    </main>
  );
}