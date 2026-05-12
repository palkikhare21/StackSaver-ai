## Day 1 — 2026-05-8

**Hours worked:** 2

**What I did:** Set up the Next.js project with TypeScript, Tailwind CSS, ESLint, App Router, and the initial landing page for StackSaver AI. I also created a placeholder audit route to confirm the product flow from landing page to audit page.

**What I learned:** I clarified the expected user journey for the assignment: a cold visitor should understand the value quickly, start an audit without login, and later receive a shareable result.

**Blockers / what I'm stuck on:** No major blocker today. The next challenge is designing the spend input form in a way that supports multiple tools without making the UI confusing.

**Plan for tomorrow:** Build the AI spend input form with tool selection, plan selection, monthly spend, seats, team size, primary use case, validation, and localStorage persistence.

## Day 2 — 2026-05-9

**Hours worked:** 3

**What I did:** Built the first version of the AI spend input form. Users can enter team size, primary use case, tool name, plan, monthly spend, and number of seats. I also added support for adding/removing multiple AI tools and persisted the form state in localStorage so progress is not lost on refresh.

**What I learned:** For a product like this, the form needs to feel simple even though the underlying data can become complex. I kept the first version structured around repeatable tool cards instead of forcing everything into one long table.

**Blockers / what I'm stuck on:** The current plan list is generic across all tools. Tomorrow I need to make the audit engine understand tool-specific pricing and recommendations.

**Plan for tomorrow:** Build the audit engine with hardcoded pricing rules, calculate per-tool and total savings, and add automated tests for the audit logic.

## Day 3 — 2026-05-10

**Hours worked:** 3

**What I did:** Built the first version of the audit engine with hardcoded pricing-based rules. The engine now calculates current spend, recommended spend, monthly savings, annual savings, and savings level. I also added automated tests for five important audit scenarios.

**What I learned:** The audit logic should be deterministic and explainable instead of AI-generated. For financial recommendations, users need clear reasoning and predictable calculations.

**Blockers / what I'm stuck on:** The audit engine currently uses simplified pricing assumptions. I need to verify all vendor prices from official sources and document them in PRICING_DATA.md before final submission.

**Plan for tomorrow:** Connect the audit engine to the form submission and build a proper results page showing total savings, per-tool recommendations, and the Credex CTA for high-savings users.