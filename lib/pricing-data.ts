export type ToolName =
  | "Cursor"
  | "GitHub Copilot"
  | "Claude"
  | "ChatGPT"
  | "OpenAI API"
  | "Anthropic API"
  | "Gemini"
  | "Windsurf";

export type UseCase = "coding" | "writing" | "data" | "research" | "mixed";

export const pricingData: Record<string, Record<string, number>> = {
  Cursor: {
    Hobby: 0,
    Pro: 20,
    Business: 40,
    Enterprise: 60,
  },
  "GitHub Copilot": {
    Individual: 10,
    Business: 19,
    Enterprise: 39,
  },
  Claude: {
    Free: 0,
    Pro: 20,
    Max: 100,
    Team: 30,
    Enterprise: 60,
    "API direct": 0,
  },
  ChatGPT: {
    Free: 0,
    Plus: 20,
    Pro: 200,
    Team: 30,
    Enterprise: 60,
    "API direct": 0,
  },
  "OpenAI API": {
    "API direct": 0,
  },
  "Anthropic API": {
    "API direct": 0,
  },
  Gemini: {
    Pro: 20,
    Ultra: 250,
    API: 0,
  },
  Windsurf: {
    Free: 0,
    Pro: 15,
    Team: 30,
    Enterprise: 60,
  },
};