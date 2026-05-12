# Architecture

## System Diagram

```mermaid
flowchart TD
  A[Visitor lands on homepage] --> B[Starts free audit]
  B --> C[Spend input form]
  C --> D[LocalStorage persists form state]
  C --> E[Audit engine]
  E --> F[Audit results UI]
  F --> G[Lead capture form]
  G --> H[Supabase leads table]