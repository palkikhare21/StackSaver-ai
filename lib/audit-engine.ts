import { pricingData, UseCase } from "./pricing-data";

export type AuditInputEntry = {
  id: string;
  tool: string;
  plan: string;
  monthlySpend: string | number;
  seats: string | number;
};

export type AuditInput = {
  teamSize: string | number;
  useCase: UseCase;
  entries: AuditInputEntry[];
};

export type AuditRecommendation = {
  toolName: string;
  currentPlan: string;
  currentSpend: number;
  recommendedAction: string;
  recommendedSpend: number;
  monthlySavings: number;
  annualSavings: number;
  reason: string;
};

export type AuditResult = {
  recommendations: AuditRecommendation[];
  totalMonthlySpend: number;
  totalRecommendedSpend: number;
  totalMonthlySavings: number;
  totalAnnualSavings: number;
  savingsLevel: "low" | "medium" | "high";
};

const toNumber = (value: string | number): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const getPlanPrice = (tool: string, plan: string): number | null => {
  return pricingData[tool]?.[plan] ?? null;
};

export function runAudit(input: AuditInput): AuditResult {
  const teamSize = Math.max(1, toNumber(input.teamSize));

  const recommendations = input.entries.map((entry) => {
    const currentSpend = Math.max(0, toNumber(entry.monthlySpend));
    const seats = Math.max(1, toNumber(entry.seats));
    const officialSeatPrice = getPlanPrice(entry.tool, entry.plan);

    let recommendedAction = "Keep current setup";
    let recommendedSpend = currentSpend;
    let reason = "Your current spend looks reasonable for the selected tool and team size.";

    if (currentSpend === 0) {
      recommendedAction = "No paid optimization needed";
      recommendedSpend = 0;
      reason = "This tool is currently not adding paid monthly spend.";
    } else if (
      (entry.plan === "Team" || entry.plan === "Business" || entry.plan === "Enterprise") &&
      teamSize <= 2
    ) {
      recommendedAction = "Downgrade to an individual or pro plan";
      recommendedSpend = Math.min(currentSpend, seats * 20);
      reason =
        "Team or enterprise plans are usually unnecessary for very small teams unless admin controls are required.";
    } else if (officialSeatPrice && currentSpend > officialSeatPrice * seats * 1.25) {
      recommendedAction = "Review seat count and billing";
      recommendedSpend = officialSeatPrice * seats;
      reason =
        "Your reported spend is higher than the expected vendor price for the selected plan and seats.";
    } else if (
      input.useCase === "coding" &&
      (entry.tool === "Claude" || entry.tool === "ChatGPT") &&
      currentSpend > seats * 30
    ) {
      recommendedAction = "Consider coding-focused tools or credits";
      recommendedSpend = seats * 30;
      reason =
        "For coding-heavy teams, a focused coding assistant or discounted credits may provide similar value at lower cost.";
    } else if (
      (entry.tool === "OpenAI API" || entry.tool === "Anthropic API") &&
      currentSpend > teamSize * 100
    ) {
      recommendedAction = "Move high API usage to discounted credits";
      recommendedSpend = Math.round(currentSpend * 0.75);
      reason =
        "High API spend is a strong fit for credit-based savings because even a modest discount creates meaningful monthly savings.";
    }

    const monthlySavings = Math.max(0, currentSpend - recommendedSpend);

    return {
      toolName: entry.tool,
      currentPlan: entry.plan,
      currentSpend,
      recommendedAction,
      recommendedSpend,
      monthlySavings,
      annualSavings: monthlySavings * 12,
      reason,
    };
  });

  const totalMonthlySpend = recommendations.reduce(
    (sum, item) => sum + item.currentSpend,
    0
  );

  const totalRecommendedSpend = recommendations.reduce(
    (sum, item) => sum + item.recommendedSpend,
    0
  );

  const totalMonthlySavings = recommendations.reduce(
    (sum, item) => sum + item.monthlySavings,
    0
  );

  const totalAnnualSavings = totalMonthlySavings * 12;

  const savingsLevel =
    totalMonthlySavings > 500 ? "high" : totalMonthlySavings >= 100 ? "medium" : "low";

  return {
    recommendations,
    totalMonthlySpend,
    totalRecommendedSpend,
    totalMonthlySavings,
    totalAnnualSavings,
    savingsLevel,
  };
}