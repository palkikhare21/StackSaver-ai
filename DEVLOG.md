# Devlog

## Day 1 — 2026-05-07

**Hours worked:** 2

**What I did:** Set up the Next.js project with TypeScript, Tailwind CSS, ESLint, App Router, and the initial landing page for StackSaver AI. I also created a placeholder audit route to confirm the product flow from landing page to audit page.

**What I learned:** I clarified the expected user journey for the assignment: a cold visitor should understand the value quickly, start an audit without login, and later receive a shareable result.

**Blockers / what I'm stuck on:** No major blocker today. The next challenge is designing the spend input form in a way that supports multiple tools without making the UI confusing.

**Plan for tomorrow:** Build the AI spend input form with tool selection, plan selection, monthly spend, seats, team size, primary use case, validation, and localStorage persistence.

---

## Day 2 — 2026-05-08

**Hours worked:** 3

**What I did:** Built the first version of the AI spend input form. Users can enter team size, primary use case, tool name, plan, monthly spend, and number of seats. I also added support for adding/removing multiple AI tools and persisted the form state in localStorage so progress is not lost on refresh.

**What I learned:** For a product like this, the form needs to feel simple even though the underlying data can become complex. I kept the first version structured around repeatable tool cards instead of forcing everything into one long table.

**Blockers / what I'm stuck on:** The current plan list is generic across all tools. I need to make the audit engine understand tool-specific pricing and recommendations.

**Plan for tomorrow:** Build the audit engine with hardcoded pricing rules, calculate per-tool and total savings, and add automated tests for the audit logic.

---

## Day 3 — 2026-05-09

**Hours worked:** 3

**What I did:** Built the first version of the audit engine with hardcoded pricing-based rules. The engine now calculates current spend, recommended spend, monthly savings, annual savings, and savings level. I also added automated tests for five important audit scenarios.

**What I learned:** The audit logic should be deterministic and explainable instead of AI-generated. For financial recommendations, users need clear reasoning and predictable calculations.

**Blockers / what I'm stuck on:** The audit engine currently uses simplified pricing assumptions. I need to verify all vendor prices from official sources and document them in PRICING_DATA.md before final submission.

**Plan for tomorrow:** Connect the audit engine to the form submission and build a proper results page showing total savings, per-tool recommendations, and the Credex CTA for high-savings users.

---

## Day 4 — 2026-05-10

**Hours worked:** 3

**What I did:** Connected the spend input form to the audit engine and built the audit results UI. The page now shows estimated monthly savings, annual savings, per-tool recommendations, and a high-savings Credex CTA when savings exceed the threshold.

**What I learned:** Showing the savings clearly is as important as calculating them. The results page needs to feel screenshot-worthy because the assignment expects the report to be shareable and valuable.

**Blockers / what I'm stuck on:** The first version of the results rendering had state created but not displayed. I caught this through lint warnings about unused variables and fixed the JSX structure.

**Plan for tomorrow:** Add lead capture and connect the report-saving flow to Supabase.

---

## Day 5 — 2026-05-11

**Hours worked:** 4

**What I did:** Created a Supabase project and added a `leads` table for email capture. I added the lead capture form with email, company name, role, team size, and monthly savings fields. I also added a honeypot field for basic abuse protection.

**What I learned:** Frontend and database integration requires both code setup and database policy setup. Because RLS was enabled, I needed an insert policy to allow public lead submissions.

**Blockers / what I'm stuck on:** The live form initially failed to save because Supabase RLS blocked inserts. After adding the insert policy and checking environment variables, the lead capture flow worked.

**Plan for tomorrow:** Polish the landing page and audit page so the product feels more like a real SaaS launch page.

---

## Day 6 — 2026-05-12

**Hours worked:** 4

**What I did:** Improved the landing page with a professional navbar, stronger hero section, right-side audit preview card, feature section, how-it-works section, testimonial block, FAQ, contact section, and footer. I also refactored the landing page into reusable components.

**What I learned:** Component structure matters for reviewability. Splitting the page into Navbar, HomeHero, FeatureSection, FAQSection, ContactSection, and Footer made the code cleaner and easier to maintain.

**Blockers / what I'm stuck on:** The deployed homepage initially appeared to show old placeholder content. I checked routes, deployment state, and Vercel behavior until the correct landing page appeared on the live URL.

**Plan for tomorrow:** Complete all required markdown documentation, final CI checks, and submission polish.

---

## Day 7 — 2026-05-13

**Hours worked:** 4

**What I did:** Added the required documentation files including README, ARCHITECTURE, TESTS, PRICING_DATA, PROMPTS, GTM, ECONOMICS, USER_INTERVIEWS, LANDING_COPY, METRICS, and REFLECTION. I also added GitHub Actions CI to run lint, tests, and build.

**What I learned:** This assignment evaluates more than code. The documentation, pricing reasoning, GTM thinking, economics, reflection, and devlog all matter because they show how the product was built and why decisions were made.

**Blockers / what I'm stuck on:** GitHub Actions initially failed because CI did not have Supabase environment variables. I fixed this by adding dummy public environment variables for the CI build.

**Plan for tomorrow:** Final submission: verify live URL, GitHub repo, CI status, deployed app, and required files before submitting the Google Form.