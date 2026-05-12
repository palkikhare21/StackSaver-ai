# Reflection

## 1. The hardest bug I hit this week, and how I debugged it

The hardest bug I hit was related to deployment and environment differences between local development, GitHub Actions, and Vercel. Locally, the project was building successfully because `.env.local` had the Supabase environment variables. However, GitHub Actions failed during the build with an error saying that `supabaseUrl is required`. My first hypothesis was that the Supabase client code was incorrect, but the app worked locally, so the issue was probably not the client setup itself.

I then checked the CI logs and realized that GitHub Actions does not automatically receive `.env.local`. That made the build fail when the Supabase client was initialized. The fix was to add dummy public Supabase environment variables inside `.github/workflows/ci.yml` so CI could complete lint, test, and build checks without using real secrets.

A related deployment issue was that the live Vercel URL initially showed old placeholder content. I checked the local routes, confirmed that `/` and `/audit` were correct, then pushed the latest changes and verified the Vercel deployment. This taught me to treat local, CI, and production as separate environments and verify each one independently.

## 2. A decision I reversed mid-week, and what made me reverse it

One decision I reversed was keeping most of the landing page inside a single `app/page.tsx` file. At first, this felt faster because I could build the page quickly in one place. However, as the page grew with navbar, hero, feature cards, FAQ, contact section, and footer, the file became too large and harder to maintain.

I reversed that decision and split the landing page into separate components: `Navbar`, `HomeHero`, `FeatureSection`, `HowItWorksSection`, `TestimonialSection`, `FAQSection`, `ContactSection`, and `Footer`. This made the code easier to read, easier to edit, and more professional for review.

The reason I reversed the decision was not because the single-file version was broken, but because it did not reflect how I would structure a real product. For a startup-style assignment, code organization matters because reviewers need to understand the project quickly. The component-based structure also made it easier to reuse the navbar and footer on the audit page.

## 3. What I would build in week 2 if I had it

In week 2, I would focus on making the product more complete and closer to something Credex could launch publicly. The first feature I would build is a proper shareable audit URL. Each audit should be saved in an `audits` table with a public ID, and the public report page should remove private fields like email and company name while showing tools, recommendations, and savings.

The second feature I would build is PDF export. Many founders and engineering managers would want to share the audit with a cofounder, finance person, or engineering lead. A clean downloadable report would make the tool feel more valuable.

The third feature would be better pricing accuracy. Right now, the engine uses simplified pricing references and rule-based recommendations. I would improve this by adding tool-specific plan logic, API spend categories, and clearer assumptions for enterprise pricing.

I would also add analytics events such as `audit_started`, `audit_completed`, `lead_captured`, and `credex_cta_clicked`. This would help measure whether users understand the landing page, complete the audit, and convert into qualified leads.

## 4. How I used AI tools

I used AI tools as a development assistant, mainly for planning, debugging, and improving implementation speed. I used AI to break down the assignment into a 7-day plan, generate first drafts of components, review errors, and improve documentation structure. This helped me move faster, especially when deciding what to build first and how to organize required files.

I did not fully trust AI with the financial audit logic. For the audit engine, I kept the calculations deterministic and rule-based because savings recommendations need to be explainable. I also reviewed the generated code manually, ran tests, and fixed issues when the output did not match the intended behavior.

One specific time AI was wrong or incomplete was around the audit result rendering. The form had imported the `AuditResults` component and created the `result` state, but the result was not actually rendered below the form. Lint showed warnings that `AuditResults` and `result` were unused. I caught this by reading the warning and checking the JSX structure, then added `{result && <AuditResults result={result} />}` outside the form.

## 5. Self-rating

### Discipline: 8/10

I worked through the project in daily stages and kept improving the app instead of trying to finish everything in one rushed session. I also used commits and checks to keep the project stable.

### Code quality: 7/10

The code is readable, componentized, and tested in the audit engine. There is still room to improve backend separation, stronger validation, and shareable audit storage.

### Design sense: 8/10

The UI became much stronger after adding a SaaS-style navbar, hero preview card, consistent sections, contact area, and footer. The product now feels more polished and easier to understand.

### Problem-solving: 8/10

I debugged lint issues, routing issues, Supabase insert issues, CI environment problems, and deployment behavior step by step instead of guessing randomly.

### Entrepreneurial thinking: 7/10

I focused on the business purpose of the tool: showing value before email capture, identifying high-savings users, and connecting those users to Credex. I would improve this further with real usage analytics and stronger user interview insights.