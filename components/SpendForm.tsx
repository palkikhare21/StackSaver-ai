"use client";

import { useEffect, useState } from "react";
import { runAudit, AuditResult } from "@/lib/audit-engine";
import AuditResults from "./AuditResults";

type ToolEntry = {
  id: string;
  tool: string;
  plan: string;
  monthlySpend: string;
  seats: string;
};

const tools = [
  "Cursor",
  "GitHub Copilot",
  "Claude",
  "ChatGPT",
  "OpenAI API",
  "Anthropic API",
  "Gemini",
  "Windsurf",
];

const plans = ["Free", "Hobby", "Pro", "Business", "Team", "Enterprise", "API direct"];

const emptyTool = (): ToolEntry => ({
  id: crypto.randomUUID(),
  tool: "ChatGPT",
  plan: "Plus",
  monthlySpend: "",
  seats: "1",
});

export default function SpendForm() {
  const getInitialFormState = () => {
  if (typeof window === "undefined") {
    return {
      teamSize: "",
      useCase: "coding",
      entries: [emptyTool()],
    };
  }

  const saved = localStorage.getItem("stacksaver-form");

  if (!saved) {
    return {
      teamSize: "",
      useCase: "coding",
      entries: [emptyTool()],
    };
  }

  try {
    const parsed = JSON.parse(saved);

    return {
      teamSize: parsed.teamSize || "",
      useCase: parsed.useCase || "coding",
      entries: parsed.entries?.length ? parsed.entries : [emptyTool()],
    };
  } catch {
    return {
      teamSize: "",
      useCase: "coding",
      entries: [emptyTool()],
    };
  }
};

const initialFormState = getInitialFormState();

const [teamSize, setTeamSize] = useState(initialFormState.teamSize);
const [useCase, setUseCase] = useState(initialFormState.useCase);
const [entries, setEntries] = useState<ToolEntry[]>(initialFormState.entries);
const [result, setResult] = useState<AuditResult | null>(null);

  useEffect(() => {
    localStorage.setItem(
      "stacksaver-form",
      JSON.stringify({ teamSize, useCase, entries })
    );
  }, [teamSize, useCase, entries]);

  const updateEntry = (id: string, field: keyof ToolEntry, value: string) => {
    setEntries((current) =>
      current.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  const addTool = () => {
    setEntries((current) => [...current, emptyTool()]);
  };

  const removeTool = (id: string) => {
    setEntries((current) =>
      current.length === 1 ? current : current.filter((entry) => entry.id !== id)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const payload = {
    teamSize,
    useCase: useCase as
      | "coding"
      | "writing"
      | "data"
      | "research"
      | "mixed",
    entries,
  };

  const auditResult = runAudit(payload);

  setResult(auditResult);

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

  return (

    <>
    <form onSubmit={handleSubmit} className="mt-10 space-y-8">
      <div className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-700">
            Team size
          </label>
          <input
            type="number"
            min="1"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            placeholder="e.g. 8"
            required
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-900"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700">
            Primary use case
          </label>
          <select
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-900"
          >
            <option value="coding">Coding</option>
            <option value="writing">Writing</option>
            <option value="data">Data</option>
            <option value="research">Research</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>
      </div>

      <div className="space-y-5">
        {entries.map((entry, index) => (
          <div
            key={entry.id}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Tool #{index + 1}
                </p>
                <h2 className="mt-1 text-2xl font-bold">AI tool spend</h2>
              </div>

              <button
                type="button"
                onClick={() => removeTool(entry.id)}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100"
              >
                Remove
              </button>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-4">
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Tool
                </label>
                <select
                  value={entry.tool}
                  onChange={(e) => updateEntry(entry.id, "tool", e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-900"
                >
                  {tools.map((tool) => (
                    <option key={tool} value={tool}>
                      {tool}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Plan
                </label>
                <select
                  value={entry.plan}
                  onChange={(e) => updateEntry(entry.id, "plan", e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-900"
                >
                  {plans.map((plan) => (
                    <option key={plan} value={plan}>
                      {plan}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Monthly spend $
                </label>
                <input
                  type="number"
                  min="0"
                  value={entry.monthlySpend}
                  onChange={(e) =>
                    updateEntry(entry.id, "monthlySpend", e.target.value)
                  }
                  placeholder="e.g. 120"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-900"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Seats
                </label>
                <input
                  type="number"
                  min="1"
                  value={entry.seats}
                  onChange={(e) => updateEntry(entry.id, "seats", e.target.value)}
                  placeholder="e.g. 3"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-900"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          type="button"
          onClick={addTool}
          className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
        >
          + Add another tool
        </button>

        <button
          type="submit"
          className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Continue to audit
        </button>
      </div>
    </form>
      {result && <AuditResults result={result} />}
  </>
  );
}