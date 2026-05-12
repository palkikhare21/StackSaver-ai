import { AuditResult } from "@/lib/audit-engine";
import LeadCaptureForm from "./LeadCaptureForm";

type Props = {
  result: AuditResult;
};

export default function AuditResults({ result }: Props) {
  return (
    <section className="mt-12 space-y-8">
      <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-lg">
        <p className="text-sm font-medium text-slate-300">
          Estimated optimization
        </p>

        <h2 className="mt-4 text-5xl font-bold tracking-tight">
          ${result.totalMonthlySavings.toFixed(0)}
          <span className="ml-2 text-2xl text-slate-400">/ month</span>
        </h2>

        <p className="mt-4 text-lg text-slate-300">
          Estimated annual savings:
          <span className="ml-2 font-semibold text-white">
            ${result.totalAnnualSavings.toFixed(0)}
          </span>
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Personalized summary
        </p>

        <p className="mt-4 leading-8 text-slate-700">
          Your AI stack shows opportunities to reduce unnecessary spend while
          keeping similar functionality for your team. Several tools appear to
          be on plans that exceed the current team requirements, and some API
          costs may benefit from discounted credits or usage optimization.
        </p>
      </div>

      <div className="space-y-5">
        {result.recommendations.map((item) => (
          <div
            key={item.toolName + item.currentPlan}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {item.toolName}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {item.recommendedAction}
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  {item.reason}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-5 text-right">
                <p className="text-sm text-slate-500">Monthly savings</p>

                <p className="mt-2 text-3xl font-bold text-slate-950">
                  ${item.monthlySavings.toFixed(0)}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Current: ${item.currentSpend.toFixed(0)} → Recommended: $
                  {item.recommendedSpend.toFixed(0)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {result.savingsLevel === "high" ? (
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            High savings opportunity detected
          </p>

          <h3 className="mt-4 text-3xl font-bold text-slate-950">
            Your team may be overspending significantly on AI infrastructure.
          </h3>

          <p className="mt-4 max-w-2xl leading-8 text-slate-700">
            Credex helps startups reduce AI infrastructure costs through
            discounted credits and optimization guidance.
          </p>

          <button className="mt-6 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">
            Book Credex consultation
          </button>
        </div>
      ) : (
        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <h3 className="text-2xl font-bold text-slate-950">
            Your stack looks reasonably optimized.
          </h3>

          <p className="mt-4 max-w-2xl leading-8 text-slate-600">
            Current savings opportunities appear moderate. We’ll notify you when
            new optimization strategies or pricing changes become available.
          </p>
        </div>
      )}
    <LeadCaptureForm monthlySavings={result.totalMonthlySavings} />

    </section>
  );
}