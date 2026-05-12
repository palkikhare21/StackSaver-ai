"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type Props = {
  monthlySavings: number;
};

export default function LeadCaptureForm({ monthlySavings }: Props) {
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (website) return;

    setLoading(true);

    const { error } = await supabase.from("leads").insert([
      {
        email,
        company_name: companyName || null,
        role: role || null,
        team_size: teamSize ? Number(teamSize) : null,
        monthly_savings: monthlySavings,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert("Something went wrong while saving your audit.");
      return;
    }

    setSuccess(true);
  };

  if (success) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
        <h3 className="text-2xl font-bold text-slate-950">
          Audit captured successfully
        </h3>
        <p className="mt-4 leading-8 text-slate-700">
          Your audit report was saved. We’ll use this email to send your report
          and follow up if your savings opportunity is significant.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <p className="text-sm font-medium text-slate-500">
        Capture your audit report
      </p>

      <h3 className="mt-3 text-3xl font-bold text-slate-950">
        Save your AI savings analysis
      </h3>

      <input
        type="text"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-700">
            Work email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-900"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700">
            Company name
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-900"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700">Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-900"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700">
            Team size
          </label>
          <input
            type="number"
            min="1"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-900"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-8 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save my audit"}
      </button>
    </form>
  );
}