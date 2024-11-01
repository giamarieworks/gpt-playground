import { OpenAIModel } from "./OpenAI.types";

export const OpenAIChatModels: Record<string, OpenAIModel> = {
  "gpt-4o": {
    id: "gpt-4o",
    name: "GPT-4o",
    maxLimit: 128000,
  },
  "gpt-4o-mini": {
    id: "gpt-4o-mini",
    name: "GPT-4o mini",
    maxLimit: 128000,
  }
};
