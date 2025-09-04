import OpenAI from "openai";
import { systemPrompt } from "./prompts/systemInstructions";
import dotenv from "dotenv";

dotenv.config();

const openAIClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type GenerateTextOptions = {
  model?: string;
  prompt: string;
  instructions?: string;
  maxTokens?: number;
  previousResponseId?: string;
};

export type GenerateTextResult = {
  id: string;
  text: string;
};

export const llmClient = {
  async generateText({
    model = process.env.MODEL,
    prompt,
    instructions = systemPrompt,
    maxTokens = 12000,
    previousResponseId,
  }: GenerateTextOptions): Promise<GenerateTextResult> {
    const response = await openAIClient.responses.create({
      model,
      input: prompt,
      instructions,
      max_output_tokens: maxTokens,
      reasoning: { effort: "medium" },
      previous_response_id: previousResponseId,
    });
    return {
      id: response.id,
      text: response.output_text,
    };
  },
};
